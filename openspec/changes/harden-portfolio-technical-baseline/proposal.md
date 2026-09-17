# Change: Harden the portfolio technical baseline

## Why

The completed portfolio presentation needs a small production-readiness pass: protect the contact endpoint, eliminate an unnecessary public resume-rendering surface, make media and analytics behavior intentional, and expose public case-study routes to crawlers.

## What Changes

- Add conservative, dependency-free contact-form abuse protection.
- **BREAKING:** remove public POST rendering of arbitrary resume data; retain the normal resume PDF GET endpoint.
- Preserve true media dimensions and avoid inaccurate reserved space when dimensions are unknown.
- Replace the PXC demo GIF only when a browser-compatible, verified lower-cost format is available.
- Add now-public supplementary project routes to the sitemap.
- Remove the stale Rybbbit analytics call while retaining the intentional browser-console terminal easter egg.

## Impact

- Affected specs: `portfolio-technical-baseline`, `portfolio-discoverability`.
- Affected code: contact and resume routes, MDX media rendering/content, sitemap, and analytics integration.
- Dependencies: none added.
