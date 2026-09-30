## Context

The portfolio's blog posts are local MDX files statically rendered by Next.js. Kokoro runs privately on Nexus and must not be called directly by site visitors.

## Goals / Non-Goals

- Goals: natural-sounding paragraph-oriented chunks, static serving, simple playback, deterministic regeneration.
- Non-goals: runtime TTS generation, MediaSource streaming, word-level highlighting, or a persistent global player.

## Decisions

- Decision: generate audio as a build-adjacent script that calls Kokoro through its OpenAI-compatible speech endpoint.
- Decision: use paragraphs as the primary chunk boundary because sentence-only chunks lose useful voice context.
- Decision: split oversized paragraphs at sentence endings, selecting the largest group of complete sentences that fits the configured Kokoro input limit.
- Decision: emit a per-post manifest under `public/audio/blog/<slug>/manifest.json`; the browser queues its URLs with one HTML audio element.
- Decision: convert Kokoro output to mono MP3 at 48 kbps and 24 kHz by default. The generator will report total output size so 64 kbps can be selected if a listening check finds the lower bitrate inadequate.
- Decision: the player will not preload audio on page load; it will fetch the active chunk on play and preload only the following chunk.
- Decision: identify stale assets from a content hash in the manifest and replace the post's generated directory during regeneration.

## Risks / Trade-offs

- Generated audio files add build artifacts and storage cost; static delivery keeps runtime behavior reliable and easy to remove.
- Audio generation requires the build environment to reach Nexus; the script should fail clearly rather than silently publishing incomplete audio.
- MDX prose extraction will intentionally omit code, images, links' URLs, and non-reading UI components.

## Migration Plan

1. Generate audio for one published post and validate playback.
2. Generate the remaining published posts.
3. Regenerate a post when its MDX prose changes and deploy the updated static directory.
