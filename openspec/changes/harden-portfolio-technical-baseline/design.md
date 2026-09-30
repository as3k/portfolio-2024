## Context

This Next.js App Router portfolio uses Mailgun for contact delivery, React PDF for the canonical resume, MDX for case-study media, and Rybbit analytics. The changes cross security, rendering, performance, and discoverability but must stay dependency-free and preserve visible portfolio behavior.

## Goals / Non-Goals

- Goals: reject obvious automated contact abuse conservatively; narrow the resume API to the published document; reserve layout only from accurate intrinsic dimensions; reduce PXC demo transfer only with browser-safe verification; publish eligible supplementary routes in sitemap; remove obsolete analytics code.
- Non-Goals: CAPTCHA, external rate-limit storage, arbitrary resume generation, content rewrites, or removal of the console easter egg.

## Decisions

- **Contact protection:** use a small in-memory, per-client time-window limit plus a honeypot and server-side validation. It remains best-effort across serverless instances and fails open rather than blocking legitimate senders on uncertain state.
- **Resume boundary:** expose only `GET /api/resume`; remove the public POST handler and its custom-data rendering path.
- **Media sizing:** pass known width and height to media; where they are unknown, use natural layout rather than inventing an aspect-ratio reservation.
- **PXC demo:** commit a converted asset and update its reference only after MIME, browser playback, and meaningful byte-size reduction are verified; otherwise retain the GIF.
- **Sitemap:** enumerate public supplementary project routes explicitly or from the same public content source, excluding drafts/private routes.
- **Analytics:** retain the Rybbit-only integration; remove obsolete analytics references while preserving `LayoutWrapper` console output as intentional product behavior.

## Risks / Trade-offs

- In-memory limiting is not globally durable → it is deliberately conservative and supplements validation/honeypot protection.
- Media conversion can harm legibility or compatibility → retain the source GIF unless verification passes.
- Removing POST is an API break → the custom endpoint is public and no supported UI uses it; GET remains stable.

## Migration / Rollback

Deploy as one backward-compatible UI release except for unsupported custom resume POST requests, which return method-not-allowed. Revert individual code changes if verification finds a regression.

## Open Questions

- None; PXC conversion is explicitly conditional on verification.
