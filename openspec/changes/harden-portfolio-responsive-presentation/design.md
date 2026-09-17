# Design: responsive portfolio presentation pass

## Context

The portfolio is Next.js 16 App Router + Tailwind 3. Shared chrome lives in `src/components/Footer.js` (mobile stack → `md:grid-cols-2` tablet → `lg:flex` desktop) and `Header.js`. Flagship content renders from `src/content/work/*.mdx` via `src/app/projects/[slug]/page.js`; the grid/card layout lives in `src/app/projects/page.js`; the landing in `src/app/page.js`. A previous responsive/build audit verified **no horizontal overflow** at 1440/768/390 on Home, Projects, Member Splash, PXC CLI, and Enterprise Benefits, and confirmed artifact images scale to container with footer containment.

## Goals / Non-Goals

- Goals: one narrow, evidence-based responsive pass — repair the tablet footer first, then any verified overflow / image-legibility / navigation / text-collision defect on the five surfaces at 1440/768/390; keep desktop as baseline.
- Non-Goals: content rewrite, new artifacts, nav-IA rework, global redesign, or any desktop change absent a verified regression.

## Decisions

- **Decision: evidence-first, repair-only.** Use headless measurement (`scrollWidth` vs `clientWidth`, element right-edge vs viewport, image rendered width vs container) plus manual 1440/768/390 visual checks to drive every edit. No speculative refactor.
- **Decision: footer first, globally.** The footer renders on every page, so any tablet-width defect is the highest-leverage fix; it is addressed before per-page audit.
- **Decision: tailwind breakpoints as the contract.** Repairs coordinate the existing `md`/`lg` classes in `Footer.js`; no new breakpoint or global utility override unless required.
- **Decision: preserve WebP/SVG case-study assets.** Artifact legibility is addressed through container/`next/image` sizing attributes, not by regenerating or authoring new images.

## Risks / Trade-offs

- Over-broad tablet grid changes risk a desktop regression → desktop stays baseline; only confirmed defects change, and each edit is verified at all three widths.
- Focus/`next/image` sizing edits are small and localized → no risk to content or the recently delivered artifacts.
- No automated layout regression suite exists → manual 1440/768/390 visual checks plus lint/build are the acceptance evidence.

## Migration / rollback

None required — this is a presentation-only, non-breaking pass. Any repair is reverted if it fails the 3-width verification, keeping the untouched surfaces and content intact.

## Open Questions

- Exact 768 footer behavior will be confirmed in step 1.1 before deciding whether any repair (beyond the existing rebuilt layout) is needed.
