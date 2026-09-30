import crypto from 'node:crypto';

const DEFAULT_MAX_CHARS = 1200;

function normalizeWhitespace(value) {
  return value.replace(/\s+/g, ' ').trim();
}

export function extractReadableParagraphs(mdx) {
  return mdx
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/^import\s.+$/gm, '')
    .replace(/^export\s.+$/gm, '')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/<[^>]*>/g, '')
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph
      .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
      .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
      .replace(/^#{1,6}\s+/gm, '')
      .replace(/^\s*[-*+]\s+/gm, '')
      .replace(/^\s*\d+\.\s+/gm, '')
      .replace(/^\s*>\s?/gm, '')
      .replace(/[`*_~]/g, '')
      .split('\n')
      .map(normalizeWhitespace)
      .filter(Boolean)
      .join(' '))
    .filter(Boolean);
}

function splitSentences(paragraph) {
  return paragraph.match(/[^.!?]+[.!?]+(?:["')\]]+)?(?=\s+|$)|.+$/g)?.map(normalizeWhitespace) || [paragraph];
}

export function splitParagraph(paragraph, maxChars = DEFAULT_MAX_CHARS) {
  if (paragraph.length <= maxChars) return [paragraph];

  const sentences = splitSentences(paragraph);
  const chunks = [];
  let current = '';

  for (const sentence of sentences) {
    const candidate = current ? `${current} ${sentence}` : sentence;

    if (current && candidate.length > maxChars) {
      chunks.push(current);
      current = sentence;
    } else {
      current = candidate;
    }
  }

  if (current) chunks.push(current);
  return chunks;
}

export function createAudioChunks(mdx, maxChars = DEFAULT_MAX_CHARS) {
  return extractReadableParagraphs(mdx).flatMap((paragraph) => splitParagraph(paragraph, maxChars));
}

export function getContentHash(chunks) {
  return crypto.createHash('sha256').update(JSON.stringify(chunks)).digest('hex').slice(0, 16);
}

