# Change: Add audio playback to case studies

## Why

Long-form case studies are useful to read but are also good candidates for listening. The existing blog audio pipeline already provides pre-generated, static Kokoro audio; extending that capability lets visitors listen to selected case studies without adding runtime speech generation or server work.

## What Changes

- Generalize the existing static audio generator and manifest lookup to support both blog posts and public case studies.
- Reuse the existing compact audio player on case study detail pages when a generated manifest exists.
- Generate audio from case-study MDX using the existing paragraph-first chunking rules.
- Repair the existing Rybbit integration to use its documented `window.rybbit.event()` API and load the tracking script once.
- Track meaningful case-study audio usage in Rybbit, including starts, completions, and speed changes.
- Keep audio generation as an explicit local command; Vercel continues to build only the site and serve committed static assets.

## Impact

- Affected specs: audio playback, content analytics
- Affected code: audio generator, manifest lookup, audio player, project detail route, analytics helpers, generated files under `public/audio/work/`
- No runtime dependency on Kokoro or Nexus is introduced.
