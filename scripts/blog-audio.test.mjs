import assert from 'node:assert/strict';
import test from 'node:test';
import { createAudioChunks, extractReadableParagraphs } from './blog-audio.js';

test('extracts readable prose and removes MDX-only content', () => {
  const source = '# Heading\n\nA [linked paragraph](https://example.com).\n\n```js\nconst hidden = true;\n```';
  const paragraphs = extractReadableParagraphs(source);
  assert.deepEqual(paragraphs, ['Heading', 'A linked paragraph.']);
});

test('keeps normal paragraphs intact', () => {
  assert.deepEqual(createAudioChunks('First paragraph.\n\nSecond paragraph.'), [
    'First paragraph.',
    'Second paragraph.',
  ]);
});

test('splits oversized paragraphs only after complete sentences', () => {
  const chunks = createAudioChunks('One sentence. Two sentence. Three sentence.', 28);
  assert.deepEqual(chunks, ['One sentence. Two sentence.', 'Three sentence.']);
  assert.ok(chunks.every((chunk) => /[.!?]$/.test(chunk)));
});
