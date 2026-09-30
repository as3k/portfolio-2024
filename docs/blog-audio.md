# Static Audio

Blog and case-study audio are pre-generated static content. The public site never calls Kokoro or Nexus at runtime.

## Workflow

When editing one blog post:

```bash
yarn audio:generate <post-slug>
yarn build
```

The generator contacts Kokoro from a machine with Tailscale access, then writes the resulting MP3 chunks and manifest to `public/audio/blog/<post-slug>/`. Commit those generated files so Vercel receives them.

For case studies, generate all public work content or one case study:

```bash
yarn audio:generate work
yarn audio:generate work <case-study-slug>
```

Case-study output is written to `public/audio/work/<case-study-slug>/`.

Do not add audio generation to `yarn build`. Vercel only builds the Next.js site and serves the already-generated static files.

Run the generator without a slug only when intentionally regenerating every published blog post:

```bash
yarn audio:generate
```

## Generation behavior

The generator reads `src/content/blog/<post-slug>.mdx` and extracts readable prose. It creates chunks by paragraph first. If a paragraph is too long, it groups complete sentences until the next sentence would exceed the limit. It does not split normal paragraphs by character count.

Each chunk is encoded as mono, 24 kHz MP3 at 48 kbps. The output includes a content hash, so unchanged posts are skipped. When source prose changes, the post's generated directory and manifest are replaced.

## Runtime behavior

`BlogAudioPlayer` receives a static manifest from the shared audio lookup. It creates one browser audio element, loads audio only when the reader presses Listen, plays chunks in order, and preloads only the next chunk during playback. It is used for both blog posts and case studies.

The player is added to published blog and case-study pages only when a valid manifest exists. Missing audio must never prevent the page from rendering.

Rybbit records `audio_started`, `audio_completed`, and `audio_speed_changed` with the content type and slug. Analytics failures must never prevent playback.

## Key files

- [`scripts/generate-blog-audio.mjs`](../scripts/generate-blog-audio.mjs): Kokoro requests, MP3 conversion, manifest writing, and hash-based regeneration.
- [`scripts/blog-audio.js`](../scripts/blog-audio.js): MDX prose extraction and paragraph/sentence chunking.
- [`src/components/BlogAudioPlayer.js`](../src/components/BlogAudioPlayer.js): client-side playback queue.
- [`src/lib/blog-audio.js`](../src/lib/blog-audio.js): shared server-side manifest lookup.
- [`src/app/blog/[slug]/page.js`](../src/app/blog/%5Bslug%5D/page.js): page integration.
- [`src/app/projects/[slug]/page.js`](../src/app/projects/%5Bslug%5D/page.js): case-study integration.
- [`src/lib/rybbit.js`](../src/lib/rybbit.js): Rybbit-only analytics helpers.
