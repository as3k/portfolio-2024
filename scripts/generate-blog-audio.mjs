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
const contentDirectory = path.join(projectRoot, 'src/content/blog');
const outputDirectory = path.join(projectRoot, 'public/audio/blog');
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

async function generatePost(fileName) {
  const slug = fileName.replace(/\.mdx$/, '');
  const source = await fs.readFile(path.join(contentDirectory, fileName), 'utf8');
  const { data, content } = matter(source);

  if (data.draft) return { slug, skipped: true };

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
      return { slug, skipped: true, chunks: chunks.length, bytes: existing.totalBytes };
    }
  } catch {
    // No usable manifest yet. Generate the post below.
  }

  const temporaryDirectory = await fs.mkdtemp(path.join(os.tmpdir(), `blog-audio-${slug}-`));
  const manifestChunks = [];
  let totalBytes = 0;

  try {
    for (let index = 0; index < chunks.length; index += 1) {
      const audio = await requestAudio(chunks[index]);
      const fileNameForChunk = `${String(index).padStart(3, '0')}.mp3`;
      const outputPath = path.join(temporaryDirectory, fileNameForChunk);
      await runFfmpeg(audio, outputPath);
      const stats = await fs.stat(outputPath);
      totalBytes += stats.size;
      manifestChunks.push({
        index,
        url: `/audio/blog/${slug}/${fileNameForChunk}`,
        text: chunks[index],
        bytes: stats.size,
      });
      console.log(`${slug}: generated ${index + 1}/${chunks.length}`);
    }

    const manifest = {
      slug,
      contentHash,
      model,
      voice,
      bitrate,
      sampleRate: 24000,
      channels: 1,
      totalBytes,
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

const requestedSlug = process.argv[2];
const files = (await fs.readdir(contentDirectory))
  .filter((fileName) => fileName.endsWith('.mdx'))
  .filter((fileName) => !requestedSlug || fileName === `${requestedSlug}.mdx`);

if (requestedSlug && files.length === 0) {
  throw new Error(`No blog post found for slug: ${requestedSlug}`);
}

for (const file of files) {
  const result = await generatePost(file);
  if (result.skipped) console.log(`${result.slug}: already up to date`);
  else console.log(`${result.slug}: ${result.chunks} chunks, ${(result.bytes / 1024 / 1024).toFixed(2)} MB`);
}
