# Change: Harden responsive portfolio presentation

## Why

The portfolio was rebuilt around the Design Engineer positioning and the static raster to WebP migration completed, but the responsive presentation has not had a dedicated pass. The known tablet-width footer layout (`md:grid-cols-2` with a full-width brand block and wrapped secondary metadata) was last rebuilt on 2026-09-14 but has not been re-verified across all breakpoints, and Home, Projects, Member Splash, PXC CLI, and Enterprise Benefits have not had a combined responsive overflow, image-legibility, and navigation audit at desktop/tablet/mobile. This change performs one narrow, evidence-based responsive presentation pass so the recruiting surfaces hold up on any device without disturbing the established visual language or the recently delivered case-study artifacts.

## What Changes

- **First:** verify and narrowly repair the global footer at tablet width so the identity block, footer navigation, and secondary metadata read cleanly and wrap without overflow. No redesign; only correct concrete regression where the tablet layout does not hold.
- **Then:** audit and narrowly repair responsive layout, overflow, image legibility, and navigation on **Home**, **Projects**, **Member Splash**, **PXC CLI**, and **Enterprise Benefits** at **desktop (1440), tablet (768), and mobile (390)**.
- Across the pass: preserve established content and the existing visual language; touch only what a verified regression requires.

## Acceptance

- Wait for `design.md` and `tasks.md` for the full checklist; in short: no horizontal overflow at 1440/768/390 on the five pages; accessible nav and focus signals; footer readable and contained at tablet width; case-study artifacts scale to container; `yarn lint`, `yarn build`, and `git diff --check` pass; manual visual check at 1440/768/390.

## Non-Goals (explicitly out of scope)

- **No content rewrite** — no copy, claim, or positioning text changes.
- **No new artifacts** — no new sketches, diagrams, or images; existing case-study WebP/SVG assets stay as-is.
- **No navigation IA rework** — header/footer link sets, labels, and structure unchanged.
- **No global redesign** — no theme, spacing-system, or visual-language overhaul.
- **No desktop change unless a verified regression** — desktop (1440) is treated as the baseline; it is not modified unless an audit confirms a real defect.

## Impact

- **Affected specs:** new capability `portfolio-responsive-presentation`.
- **Affected code:** `src/components/Footer.js` (tablet-width repair only, if a regression is confirmed), and narrowly scoped layout/overflow/image/navigation edits on `src/app/page.js`, `src/app/projects/page.js`, `src/app/projects/[slug]/page.js`, and the four case-study surfaces (`src/app/projects/{member-splash→content MDX}`, etc.) only where a verified regression exists.
- **Affected content:** none (content is preserved verbatim).
- **Breaking changes:** none intended.
