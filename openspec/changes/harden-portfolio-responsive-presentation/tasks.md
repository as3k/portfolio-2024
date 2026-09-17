## 1. Global footer (tablet-width repair — first)

- [x] 1.1 Re-verify the footer at 768 and confirm whether the existing tablet layout holds (identity block, footer nav, social, and the wrapped secondary metadata) without overflow or cramped wrap.
- [x] 1.2 Only if a concrete 768 regression is confirmed, apply a narrow repair (spacing/wrap/grid-coordination) to `src/components/Footer.js`. Do not restructure labels, links, or the visual hierarchy.
- [x] 1.3 Confirm footer renders within viewport at 390 and 1440 with no regression.

## 2. Responsive audit and narrow repair (Home, Projects, Member Splash, PXC CLI, Enterprise Benefits)

- [x] 2.1 At 1440/768/390, verify **no horizontal overflow** (`scrollWidth <= clientWidth`) on each of the five surfaces; fix only elements that exceed the viewport.
- [x] 2.2 Verify case-study artifact images scale to their container at all widths with no overflow and no distortion (contents preserved).
- [x] 2.3 Verify navigation is accessible: mobile menu toggle present and reachable, nav link set intact, no broken anchor targets, focus signals visible on keyboard interaction.
- [x] 2.4 Audit text/image collisions and narrow clipping where overflow reveals it; repair only confirmed cases.
- [x] 2.5 Treat desktop (1440) as baseline: change nothing unless a verified regression is found there.

## 3. Verification

- [x] 3.1 Manual visual check of the five pages at 1440/768/390 (footer, grids, card layouts, artifact scaling, nav).
- [x] 3.2 `yarn lint` (Biome) passes.
- [x] 3.3 `yarn build` passes (all routes generate).
- [x] 3.4 `git diff --check` is clean.
- [x] 3.5 Confirm no content rewrite, no new artifacts, and no nav-IA/global-redesign changes were introduced.
