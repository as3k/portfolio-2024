# Change: Add pre-generated audio playback for blog posts

## Why

Readers should be able to listen to blog posts using the existing Kokoro TTS service while keeping the public site fast and the private Nexus host unexposed.

## What Changes

- Add a generation script that converts published blog post prose into static Kokoro audio chunks.
- Split content at paragraph boundaries by default.
- Split an oversized paragraph only at sentence boundaries, preserving as much sentence context as possible per chunk.
- Add a static manifest describing each post's audio chunks.
- Add an accessible blog audio player that queues the static files in order.
- Regenerate a post's audio assets whenever its source content changes.
- Encode generated speech as mono MP3 at a speech-appropriate bitrate, starting at 48 kbps, to keep files small without sacrificing intelligibility.
- Load audio only after the reader activates the player, then preload only the next chunk during playback.

## Impact

- Affected capability: blog reading experience
- Affected code: `scripts/`, `src/components/`, `src/lib/`, `src/app/blog/[slug]/`, and static audio output under `public/`
- No runtime request to Kokoro from the public site
- No new runtime dependency or public API endpoint
