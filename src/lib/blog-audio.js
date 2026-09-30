import fs from 'node:fs';
import path from 'node:path';

const audioRoot = path.join(process.cwd(), 'public/audio');

export function getAudioManifest(contentType, slug) {
  const filePath = path.join(audioRoot, contentType, slug, 'manifest.json');

  if (!fs.existsSync(filePath)) return null;

  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return null;
  }
}

export function getBlogAudioManifest(slug) {
  return getAudioManifest('blog', slug);
}

export function getWorkAudioManifest(slug) {
  return getAudioManifest('work', slug);
}
