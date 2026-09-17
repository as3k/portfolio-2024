# Design: WebP migration approach

## Context

`public/` holds 51 referenced static rasters (~33.55 MB) across `images/projects/`, a root profile photo, and 4 excluded toolkit icons. Largest single asset: `pxc-architecture-boundary.png` at 10.2 MB. Next.js uses `next/image`, which serves WebP natively. The portfolio rebuild change is Complete, so this is a new capability-scoped effort.

## Goals / Non-Goals

- Goals: convert the 47 referenced rasters to WebP, swap references, verify dimension parity + rendering, remove only replaced originals, record byte savings.
- Non-Goals: touch GIFs/SVGs/icons, animate anything, change positioning or case-study copy, or fix pre-existing missing Supabase/Family Feud references.

## Decisions

- **Decision: side-by-side generation, references swapped only after verification, originals deleted last.**
  - Why: makes the migration fully reversible until the final delete; `next/image` only serves a file if the path resolves, so a broken swap fails loudly at build.
- **Decision: `cwebp` as the primary converter** (`/opt/homebrew/bin/cwebp` 1.6.0), with `sharp` (v0.34.5) as an available scripted fallback for batch runs; ImageMagick and `sips` also present if needed.
  - Alternatives considered: ImageMagick (`magick`/`convert`) and `sips`. cwebp chosen as the canonical libwebp encoder matching the user's documented `cwebp -q quality input -o output.webp`.
- **Decision: quality default `-q 80`; hand-drawn/flowchart PNGs at higher quality or lossless.**
  - Why: photos compress well at 80; sketches with fine linework/transparency degrade visibly, so they get `-q 85-90` or `-lossless` to preserve readability.
- **Decision: exclude the four toolkit icons.**
  - Why: they are logo/bitmap-icon sources better kept as-is (and candidates for true SVG later); converting them reduces them less and loses transparency semantics.

## Risks / Trade-offs

- Transparency in flowchart sketches (PNG alpha) → verify `-lossless`/high `-q` output preserves alpha; cwebp supports alpha.
- Dimension mismatch could break `next/image` width/height props → enforce step 3.1 parity check before any reference swap.
- A reference miss on delete → step 4.2 static check blocks deletion until zero refs point to originals, and deletion is the last step.
- Large 10.2 MB sketch dominates load → highest-priority conversion; verify perceived quality after WebP.

## Migration Plan

1. Generate side-by-side `.webp` (no originals modified) — reversible.
2. Verify dimension parity + visual spot-checks.
3. Swap `src/` references; assert zero stale refs.
4. `yarn lint` + `yarn build` + browser render check.
5. Delete only replaced originals; keep excluded icons.
6. Record byte savings in PORTFOLIO-REBUILD changelog.

Rollback: any failure before step 5 leaves originals and original references intact; restore by reverting the reference swap and deleting WebP twins.

## Open Questions

- Confirm with the user the final quality setting for the hand-drawn/flowchart sketches (lossless vs high-lossy) once realistic savings are known.
- Whether to pre-register WebP outputs for any `next/image` `sizes`/priority config differences (expected none; formats config only).
