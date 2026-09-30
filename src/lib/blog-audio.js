import fs from 'node:fs';
import path from 'node:path';

const audioRoot = path.join(process.cwd(), 'public/audio/blog');

export function getBlogAudioManifest(slug) {
  const filePath = path.join(audioRoot, slug, 'manifest.json');

  if (!fs.existsSync(filePath)) return null;

  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return null;
  }
}
