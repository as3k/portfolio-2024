import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import {
  createAudioChunks,
  getContentHash,
} from './blog-audio.js';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const requestedType = process.argv[2];
const contentType = requestedType === 'work' || requestedType === 'blog' ? requestedType : 'blog';
const requestedSlug = requestedType === 'work' || requestedType === 'blog' ? process.argv[3] : requestedType;
const contentDirectory = path.join(projectRoot, 'src/content', contentType);
const outputDirectory = path.join(projectRoot, 'public/audio', contentType);
const kokoroUrl = process.env.KOKORO_URL || 'http://100.118.202.118:8880/v1/audio/speech';
const model = process.env.KOKORO_MODEL || 'kokoro-82m';
const voice = process.env.KOKORO_VOICE || 'af_heart';
const bitrate = process.env.KOKORO_BITRATE || '48k';
const maxChars = Number(process.env.KOKORO_MAX_CHARS || 1200);

async function runFfmpeg(input, output) {
  await new Promise((resolve, reject) => {
    const process = spawn('ffmpeg', [
      '-hide_banner', '-loglevel', 'error', '-y',
      '-i', 'pipe:0',
      '-ac', '1',
      '-ar', '24000',
      '-codec:a', 'libmp3lame',
      '-b:a', bitrate,
      output,
    ]);

    let error = '';
    process.stderr.on('data', (chunk) => { error += chunk.toString(); });
    process.on('error', reject);
    process.on('close', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`ffmpeg failed: ${error.trim() || `exit code ${code}`}`));
    });
    process.stdin.end(input);
  });
}

async function requestAudio(text) {
  const response = await fetch(kokoroUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ model, voice, input: text, response_format: 'wav' }),
  });

  if (!response.ok) {
    throw new Error(`Kokoro returned ${response.status}: ${await response.text()}`);
  }

  return Buffer.from(await response.arrayBuffer());
}

async function getAudioDuration(filePath) {
  return new Promise((resolve, reject) => {
    const process = spawn('ffprobe', [
      '-v', 'error',
      '-show_entries', 'format=duration',
      '-of', 'default=noprint_wrappers=1:nokey=1',
      filePath,
    ]);
    let output = '';
    let error = '';
    process.stdout.on('data', (chunk) => { output += chunk.toString(); });
    process.stderr.on('data', (chunk) => { error += chunk.toString(); });
    process.on('error', reject);
    process.on('close', (code) => {
      if (code !== 0) reject(new Error(`ffprobe failed: ${error.trim() || `exit code ${code}`}`));
      else resolve(Number(output.trim()));
    });
  });
}

async function addDurationMetadata(manifest, postDirectory) {
  const chunks = await Promise.all(manifest.chunks.map(async (chunk) => ({
    ...chunk,
    duration: await getAudioDuration(path.join(postDirectory, path.basename(chunk.url))),
  })));
  const totalDuration = chunks.reduce((total, chunk) => total + chunk.duration, 0);
  const updatedManifest = { ...manifest, totalDuration, chunks };
  await fs.writeFile(path.join(postDirectory, 'manifest.json'), `${JSON.stringify(updatedManifest, null, 2)}\n`);
  return updatedManifest;
}

async function generateContent(fileName) {
  const slug = fileName.replace(/\.mdx$/, '');
  const source = await fs.readFile(path.join(contentDirectory, fileName), 'utf8');
  const { data, content } = matter(source);

  if (data.draft || data.status === 'archived') return { slug, skipped: true };

  const chunks = createAudioChunks(content, maxChars);
  const contentHash = getContentHash(chunks);
  const postDirectory = path.join(outputDirectory, slug);
  const manifestPath = path.join(postDirectory, 'manifest.json');

  try {
    const existing = JSON.parse(await fs.readFile(manifestPath, 'utf8'));
    const filesExist = await Promise.all(existing.chunks.map(async (chunk) => {
      try { await fs.access(path.join(projectRoot, 'public', chunk.url)); return true; } catch { return false; }
    }));
    if (existing.contentHash === contentHash && filesExist.every(Boolean)) {
      if (!existing.totalDuration || existing.chunks.some((chunk) => !chunk.duration)) {
        const updated = await addDurationMetadata(existing, postDirectory);
        return { slug, skipped: true, chunks: chunks.length, bytes: updated.totalBytes };
      }
      return { slug, skipped: true, chunks: chunks.length, bytes: existing.totalBytes };
    }
  } catch {
    // No usable manifest yet. Generate the post below.
  }

  const temporaryDirectory = await fs.mkdtemp(path.join(os.tmpdir(), `${contentType}-audio-${slug}-`));
  const manifestChunks = [];
  let totalBytes = 0;

  try {
    for (let index = 0; index < chunks.length; index += 1) {
      const audio = await requestAudio(chunks[index]);
      const fileNameForChunk = `${String(index).padStart(3, '0')}.mp3`;
      const outputPath = path.join(temporaryDirectory, fileNameForChunk);
      await runFfmpeg(audio, outputPath);
      const stats = await fs.stat(outputPath);
      const duration = await getAudioDuration(outputPath);
      totalBytes += stats.size;
      manifestChunks.push({
        index,
        url: `/audio/${contentType}/${slug}/${fileNameForChunk}`,
        text: chunks[index],
        bytes: stats.size,
        duration,
      });
      console.log(`${slug}: generated ${index + 1}/${chunks.length}`);
    }

    const manifest = {
      slug,
      contentType,
      contentHash,
      model,
      voice,
      bitrate,
      sampleRate: 24000,
      channels: 1,
      totalBytes,
      totalDuration: manifestChunks.reduce((total, chunk) => total + chunk.duration, 0),
      chunks: manifestChunks,
    };
    await fs.writeFile(path.join(temporaryDirectory, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);

    await fs.mkdir(outputDirectory, { recursive: true });
    await fs.rm(postDirectory, { recursive: true, force: true });
    await fs.rename(temporaryDirectory, postDirectory);
    return { slug, chunks: chunks.length, bytes: totalBytes };
  } catch (error) {
    await fs.rm(temporaryDirectory, { recursive: true, force: true });
    throw error;
  }
}

const files = (await fs.readdir(contentDirectory))
  .filter((fileName) => fileName.endsWith('.mdx'))
  .filter((fileName) => !requestedSlug || fileName === `${requestedSlug}.mdx`);

if (requestedSlug && files.length === 0) {
  throw new Error(`No ${contentType} content found for slug: ${requestedSlug}`);
}

for (const file of files) {
  const result = await generateContent(file);
  if (result.skipped) console.log(`${result.slug}: already up to date`);
  else console.log(`${result.slug}: ${result.chunks} chunks, ${(result.bytes / 1024 / 1024).toFixed(2)} MB`);
}
