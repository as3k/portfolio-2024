## 1. Preparation

- [x] 1.1 Snapshot byte baseline per asset and total. Source-derive a space-safe manifest of referenced static PNG/JPG/JPEG portfolio rasters.
- [x] 1.2 Record the current source-reference map per asset (work MDX, projects/ren, projects/launchbook, about/profile photo, JSON-LD).

## 2. Generate WebP

- [x] 2.1 Convert each of the 49 referenced PNG/JPG/JPEG assets to a side-by-side `<same-base>.webp` using `cwebp` (photos `-q 80`; alpha/line-art PNGs `-lossless`; large architecture sketch `-q 85`). GIF/SVG and the four toolkit icons were not converted.
- [x] 2.2 Confirm every generated `.webp` exists beside its original; all originals remained in place during this phase (fully reversible).

## 3. Verify twins

- [x] 3.1 Confirm dimension parity: every original and WebP twin share identical width/height (so `next/image` props stay valid).
- [x] 3.2 Visual/alpha check: alpha channels in source PNGs were fully opaque (min=max=mean=1.0), so lossless WebP encode preserved exact RGB content with no visual loss.

## 4. Swap references

- [x] 4.1 Updated the `src/` reference sites to point at the `.webp` paths (15 source files: 10 work MDX, 4 pages, JSON-LD).
- [x] 4.2 Static check: re-ran the reference map; asserted **zero** remaining `src` refs to a manifest original, and zero unreferenced originals outside the excluded icons.

## 5. Verify rendering

- [x] 5.1 Ran `yarn lint` (Biome), `yarn build`, and `git diff --check` before deletion; all passed.
- [x] 5.2 Verified representative pages on localhost:3300 (home, Member Splash, PXC, Enterprise Benefits) and that all WebP assets serve HTTP 200.

## 6. Remove originals and record

- [x] 6.1 Removed the 49 manifest originals explicitly after the step 4.2 static check passed and each twin existed; kept the four excluded icons and the pre-existing `rondhas-aftercare-links.webp`.
- [x] 6.2 Recorded before/after byte totals and net savings in the PORTFOLIO-REBUILD changelog; corrected the earlier candidate/rasters count from a space-safe audit.
- [x] 6.3 Final `yarn build` and `git diff --check` confirmation after cleanup; deleted original now 404s while the WebP twin serves 200.
