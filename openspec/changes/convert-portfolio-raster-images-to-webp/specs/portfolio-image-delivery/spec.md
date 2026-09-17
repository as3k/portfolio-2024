## ADDED Requirements

### Requirement: WebP conversion of referenced portfolio rasters

The system SHALL convert the referenced static raster portfolio assets (PNG/JPG/JPEG) to WebP and SHALL serve WebP versions of those assets instead of the originals.

#### Scenario: Convert a referenced raster asset

- **WHEN** a referenced PNG, JPG, or JPEG under `public/images/projects/` or the root profile photo is processed
- **THEN** a `.webp` file is generated beside the original at matching dimensions, and site references point at the WebP path

#### Scenario: Exclude non-candidate assets

- **WHEN** processing public assets
- **THEN** GIFs, SVGs, and the four toolkit icons under `public/images/icons/` remain in their existing formats and are not converted

### Requirement: Verified reference swap before originals are removed

The system SHALL keep each original asset in place until its WebP twin and all references to it are verified, and SHALL delete a replaced original only after verification.

#### Scenario: Swap references after generating WebP twins

- **WHEN** a WebP twin has been generated for an asset and its references have been updated
- **THEN** the original asset may be deleted only after a static check confirms zero remaining source references target it and its WebP twin has matching dimensions

#### Scenario: Preserve originals during conversion

- **WHEN** WebP generation runs
- **THEN** no original PNG/JPG/JPEG is overwritten, so the migration remains reversible until the verified deletion step

### Requirement: Dimension parity and rendering validation

The system SHALL validate that each converted WebP matches the original's dimensions and renders correctly through `next/image` before being relied on.

#### Scenario: Dimension mismatch is caught

- **WHEN** a generated WebP's width or height differs from its source original
- **THEN** the migration pauses so the mismatch is resolved before that asset's reference is swapped

#### Scenario: Swapped views render correctly

- **WHEN** flagship case studies and cover/profile assets are checked in a browser after reference swaps
- **THEN** the WebP images render without broken images and old paths no longer resolve to removed originals

### Requirement: Byte-savings record

The system SHALL record the before and after total bytes and the net savings of the raster-to-WebP conversion in the project change log.

#### Scenario: Migration completes

- **WHEN** conversion and cleanup are finished
- **THEN** the PORTFOLIO-REBUILD changelog includes the per-migration byte totals and net savings

### Requirement: Excluded draft-reference defects

The system SHALL NOT alter or fix the pre-existing missing image references in the draft `supabase-rebuild` and `family-feud` content.

#### Scenario: Draft content with missing image paths

- **WHEN** processing the draft Supabase rebuild or Family Feud work
- **THEN** the missing `/hero.jpg` and `/images/projects/family-feud/*.jpg` references remain out of scope and are not repaired or converted in this change
