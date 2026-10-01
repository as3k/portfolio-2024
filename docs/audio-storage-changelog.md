# Audio storage changelog

## 2026-09-30 — Blob-ready storage seam

- Added a provider boundary in `scripts/audio-provider.mjs`.
- Local generation remains available for development.
- Vercel Blob is the first remote provider; MP3 URLs are stored in committed manifests.
- MP3 chunks are ignored by Git after migration; manifests remain tracked.
- The player remains provider-agnostic and consumes public manifest URLs.
- R2 is intentionally not implemented yet. A future R2 adapter belongs behind the same provider boundary and requires manifest regeneration plus a new deployment.
- Audio telemetry uses Rybbit only. Events are coarse and exclude transcript text and personal identifiers.
- Old remote objects must not be deleted automatically during regeneration because cached pages may still reference them.
