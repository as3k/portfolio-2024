## 1. Audio generation

- [x] 1.1 Add paragraph-first MDX prose extraction and sentence-boundary chunking helpers.
- [x] 1.2 Add the Kokoro generation script and per-post manifest output.
- [x] 1.3 Add a content hash so changed posts produce replaced audio assets.
- [x] 1.4 Convert output to compact mono MP3 and report total duration and size.

## 2. Blog experience

- [x] 2.1 Add static audio manifest lookup.
- [x] 2.2 Add an accessible client-side queue player.
- [x] 2.3 Add the player to published blog post pages only when audio exists.
- [x] 2.4 Keep audio out of the initial page load and preload only the next chunk.

## 3. Verification

- [x] 3.1 Test chunking behavior for paragraphs and oversized paragraphs.
- [x] 3.2 Generate and inspect one post's audio assets.
- [x] 3.3 Run lint and production build.
