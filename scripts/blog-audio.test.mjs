import assert from 'node:assert/strict';
import test from 'node:test';
import { createAudioChunks, extractReadableParagraphs } from './blog-audio.js';
import { getAudioProvider } from './audio-provider.mjs';

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

test('turns markdown lists into natural spoken sentences', () => {
  const source = 'The workflow has three parts:\n\n- Research\n- Design\n- Testing';
  assert.deepEqual(extractReadableParagraphs(source), [
    'The workflow has three parts:',
    'Research. Design. Testing.',
  ]);
});

test('preserves numbered list items as separate spoken sentences', () => {
  const source = 'The safeguards are:\n\n1. Verify the target.\n2. Type the identifier.\n3. Cancel if anything looks wrong.';
  assert.deepEqual(extractReadableParagraphs(source), [
    'The safeguards are:',
    'Verify the target. Type the identifier. Cancel if anything looks wrong.',
  ]);
});

test('splits oversized paragraphs only after complete sentences', () => {
  const chunks = createAudioChunks('One sentence. Two sentence. Three sentence.', 28);
  assert.deepEqual(chunks, ['One sentence. Two sentence.', 'Three sentence.']);
  assert.ok(chunks.every((chunk) => /[.!?]$/.test(chunk)));
});

test('uses local audio storage by default and supports the Blob provider', () => {
  assert.equal(getAudioProvider({}), 'local');
  assert.equal(getAudioProvider({ AUDIO_PROVIDER: 'blob' }), 'blob');
});

test('rejects an unsupported audio provider before generation', () => {
  assert.throws(
    () => getAudioProvider({ AUDIO_PROVIDER: 'r2' }),
    /not implemented yet/,
  );
});
