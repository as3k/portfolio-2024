import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import { uploadAudioChunks } from './audio-provider.mjs';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const workMode = process.argv.includes('--work');
const contentType = workMode ? 'work' : 'blog';
const contentDirectory = path.join(projectRoot, 'src/content', contentType);
const outputDirectory = path.join(projectRoot, 'public/audio', contentType);

function shouldSkip(data) {
  return data.draft || data.workInProgress || ['in-progress', 'archived'].includes(data.status);
}

const files = (await fs.readdir(contentDirectory))
  .filter((fileName) => fileName.endsWith('.mdx'))
  .filter((fileName) => !process.argv.slice(2).some((arg) => !arg.startsWith('--'))
    || process.argv.slice(2).includes(fileName.replace(/\.mdx$/, '')));

for (const fileName of files) {
  const slug = fileName.replace(/\.mdx$/, '');
  const { data } = matter(await fs.readFile(path.join(contentDirectory, fileName), 'utf8'));
  if (shouldSkip(data)) {
    console.log(`${slug}: skipped`);
    continue;
  }

  const postDirectory = path.join(outputDirectory, slug);
  const manifestPath = path.join(postDirectory, 'manifest.json');
  try {
    await fs.access(manifestPath);
  } catch {
    console.log(`${slug}: no local audio, skipped`);
    continue;
  }
  const manifest = JSON.parse(await fs.readFile(manifestPath, 'utf8'));
  if (manifest.provider === 'blob') {
    console.log(`${slug}: already on Blob`);
    continue;
  }
  const filesToUpload = await Promise.all(manifest.chunks.map(async (chunk) => ({
    name: path.basename(chunk.url),
    data: await fs.readFile(path.join(projectRoot, 'public', chunk.url)),
  })));
  const uploaded = await uploadAudioChunks({ contentType, slug, files: filesToUpload });
  const chunks = manifest.chunks.map((chunk, index) => {
    const { text, ...withoutText } = chunk;
    return { ...withoutText, url: uploaded[index].url };
  });

  await fs.writeFile(manifestPath, `${JSON.stringify({ ...manifest, provider: 'blob', chunks }, null, 2)}\n`);
  console.log(`${slug}: uploaded ${chunks.length} chunks`);
}
