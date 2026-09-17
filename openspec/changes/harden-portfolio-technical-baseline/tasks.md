## 1. Endpoint hardening

- [ ] 1.1 Add dependency-free contact validation, honeypot handling, and conservative per-client throttling with clear client-safe errors.
- [ ] 1.2 Remove arbitrary-data resume POST rendering and preserve `GET /api/resume` output.

## 2. Delivery and discoverability

- [ ] 2.1 Supply actual known media dimensions and remove inaccurate fallback reservations.
- [ ] 2.2 Evaluate and use a lower-cost PXC demo format only after browser compatibility and size reduction are verified.
- [ ] 2.3 Include every eligible now-public supplementary project route in the sitemap.
- [ ] 2.4 Remove stale Rybbbit analytics usage without changing the browser-console terminal easter egg.

## 3. Verification

- [ ] 3.1 Exercise valid, invalid, honeypot, and throttled contact submissions.
- [ ] 3.2 Verify resume GET succeeds and resume POST is rejected.
- [ ] 3.3 Verify media layout, conditional PXC playback, sitemap entries, analytics cleanup, and retained console message.
- [ ] 3.4 Run `yarn lint`, `yarn build`, and `git diff --check`.
