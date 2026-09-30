## Context

The site already has a pre-generated blog audio pipeline. Case studies are build-time MDX files under `src/content/work/` and render through `src/app/projects/[slug]/page.js`. Audio must remain static so page requests never depend on Nexus or Kokoro availability.

## Goals / Non-Goals

- Goals: reuse the player, preserve paragraph-aware chunking, generate only selected/public case studies, and measure meaningful listening behavior in Rybbit.
- Non-Goals: runtime text-to-speech, a download control, a second player design, or tracking every `timeupdate` event.

## Decisions

- Decision: use one manifest shape and one player for blogs and case studies, with `contentType` and `contentSlug` supplied for analytics.
- Decision: store case-study assets under `public/audio/work/<slug>/` and keep blog URLs unchanged for compatibility.
- Decision: route shared events through a Rybbit-only helper that calls the documented `window.rybbit.event()` API when available. Emit `audio_started`, `audio_completed`, and `audio_speed_changed` events with `content_type`, `content_slug`, and playback speed where relevant.
- Decision: keep one Rybbit script instance in the root layout, using the self-hosted script URL and its required `data-site-id` attribute.
- Decision: render a player only when a valid static manifest exists, so missing audio never blocks a page.
- Decision: generate the initial audio set for the long-form public case studies selected during implementation review, rather than every work file indiscriminately.

## Risks / Trade-offs

- Generated MP3s increase repository size; the existing mono 24 kHz/48 kbps format keeps files small and static delivery predictable.
- Reusing the player requires careful separation between source-media time and speed-adjusted display time; the existing seek behavior must remain accurate.
- Analytics scripts may be unavailable or blocked; tracking helpers must remain no-ops in that case.

## Migration Plan

1. Generalize generator and lookup while preserving all existing blog paths.
2. Add case-study rendering and analytics.
3. Generate and review selected case-study audio locally.
4. Commit manifests and MP3s with the code so Vercel serves them as static assets.
