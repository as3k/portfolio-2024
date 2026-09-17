# Change: Convert referenced portfolio raster images to WebP

## Why

The portfolio ships large static rasters that hurt load performance. An audit of `public/` found **51 referenced PNG/JPG/JPEG files totaling 33,550,768 bytes (~32 MiB)**, including a single 10.2 MB PXC architecture sketch and several multi-hundred-KB JPEGs. WebP typically reduces these substantially at matching visual quality, and Next.js `next/image` supports WebP natively.

This change is explicitly scoped to **referenced** portfolio assets the site actually uses, keeping the migration safe and reversible. It pairs with the repo's performance-improvement interest without touching positioning, content claims, or non-raster formats.

## What Changes

Generate side-by-side WebP versions of referenced static raster portfolio assets, swap the source references to them, and remove the now-unused originals only after every reference is verified gone.

- **Conversion candidates:** referenced PNG/JPG/JPEG static portfolio assets under `public/images/projects/` plus the root profile photo — **47 assets** (the four toolkit icons are excluded and remain in their current formats).
- **Asset generation:** emit `<same-base>.webp` next to each original using `cwebp` (libwebp 1.6.0 available). No original is overwritten until its WebP twin and all reference swaps are verified.
- **Reference updates:** point the relevant `src/` references (work MDX and the two cover-using pages) to the `.webp` paths.
- **Verification before deletion:** confirm dimension parity, browser rendering of swapped views, and that **zero** remaining source references point at a to-be-deleted original. Only then remove originals.
- **Byte-savings record:** capture before/after totals in the PORTFOLIO-REBUILD changelog.

## Out of Scope

- **GIFs** (pxc-demo.gif) — keep animated. **SVGs** — keep vector. **The four toolkit icons** (`images/icons/`: `react.png`, `Obsidian_logo.svg.png`, `Figma Logo.png`, `Tailwind CSS Logo.png`) — keep source formats.
- **Fixing pre-existing missing references:** `supabase-rebuild` `/hero.jpg` and `family-feud` `*.jpg` are draft-content broken references and are explicitly **excluded** from this change.
- No positioning, case-study copy, content claims, or non-raster asset changes.

## Impact

- **Affected specs:** new capability `portfolio-image-delivery`.
- **Affected code/assets:** `public/images/projects/**` rasters (PNG/JPG/JPEG) and `public/zg-coffee-ride-profile-photo.jpg`; reference sites in `src/content/work/*.mdx` and `src/app/projects/{ren,launchbook}.js` + `page.js` + `about/page.js`.
- **Breaking changes:** none intended. Existing URLs change extension only where a reference swap occurs; rollback is available until originals are deleted.
