import { del, head, put } from '@vercel/blob';

/**
 * Storage seam for generated audio. The manifest and player only depend on
 * public URLs, so an R2 adapter can replace Blob without changing playback.
 */
export function getAudioProvider(env = process.env) {
  const provider = env.AUDIO_PROVIDER || 'local';
  if (provider === 'local' || provider === 'blob') return provider;
  if (provider === 'r2') {
    throw new Error('The R2 audio provider is not implemented yet. Use AUDIO_PROVIDER=blob.');
  }
  throw new Error(`Unknown audio provider: ${provider}`);
}

function requireBlobToken(env = process.env) {
  if (!env.BLOB_READ_WRITE_TOKEN) {
    throw new Error('BLOB_READ_WRITE_TOKEN is required when AUDIO_PROVIDER=blob.');
  }
}

export async function uploadAudioChunks({ contentType, slug, files, env = process.env }) {
  requireBlobToken(env);
  const uploaded = [];

  try {
    for (const file of files) {
      const blob = await put(
        `audio/${contentType}/${slug}/${file.name}`,
        file.data,
        {
          access: 'public',
          addRandomSuffix: false,
          allowOverwrite: true,
          contentType: 'audio/mpeg',
        },
      );
      uploaded.push({ ...file, url: blob.url });
    }
    return uploaded;
  } catch (error) {
    await Promise.allSettled(uploaded.map((file) => del(file.url, { token: env.BLOB_READ_WRITE_TOKEN })));
    throw error;
  }
}

export async function verifyAudioUrls(urls, env = process.env) {
  requireBlobToken(env);
  const results = await Promise.all(urls.map(async (url) => {
    try {
      await head(url, { token: env.BLOB_READ_WRITE_TOKEN });
      return true;
    } catch {
      return false;
    }
  }));
  return results.every(Boolean);
}
