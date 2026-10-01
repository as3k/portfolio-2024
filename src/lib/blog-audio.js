import fs from 'node:fs';
import path from 'node:path';

export function getAudioManifest(slug, contentType = 'blog') {
  const audioRoot = path.join(process.cwd(), 'public/audio', contentType);
  const filePath = path.join(audioRoot, slug, 'manifest.json');

  if (!fs.existsSync(filePath)) return null;

  try {
    const manifest = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    return {
      ...manifest,
      chunks: manifest.chunks.map(({ text, ...chunk }) => chunk),
    };
  } catch {
    return null;
  }
}

export function getBlogAudioManifest(slug) {
  return getAudioManifest(slug, 'blog');
}
