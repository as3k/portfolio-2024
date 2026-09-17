## ADDED Requirements

### Requirement: No horizontal overflow at desktop, tablet, and mobile

The system SHALL render Home, Projects, Member Splash, PXC CLI, and Enterprise Benefits without horizontal overflow at 1440, 768, and 390 viewport widths.

#### Scenario: Render Home at tablet width

- **WHEN** the Home page is rendered at 768px
- **THEN** `document.documentElement.scrollWidth` is not greater than `clientWidth`, and no element extends beyond the right viewport edge

#### Scenario: Render a flagship case study at mobile width

- **WHEN** Member Splash, PXC CLI, or Enterprise Benefits is rendered at 390px
- **THEN** the page has no horizontal scroll and no element overflows the viewport right edge

### Requirement: Legible, contained case-study artifacts

The system SHALL scale each case-study image (WebP/SVG) within its container at 1440, 768, and 390 without overflow, distortion, or regeneration of the asset.

#### Scenario: Artifact scales to mobile container

- **WHEN** a flagship case-study image is rendered at 390px
- **THEN** its rendered width is within the viewport and the container, preserving the asset's aspect ratio

#### Scenario: Desktop artifact is unchanged

- **WHEN** a case-study image renders at 1440px
- **THEN** it keeps its existing desktop behavior unless a verified regression is confirmed

### Requirement: Accessible and intact navigation

The system SHALL keep the header and footer navigation accessible and reachable across all three viewports, with a usable mobile menu and visible focus signals.

#### Scenario: Mobile menu is reachable

- **WHEN** a page is rendered at 390px
- **THEN** a mobile navigation toggle is present and its links are reachable

#### Scenario: Focus is visible on keyboard interaction

- **WHEN** a user tabs through interactive elements across viewports
- **THEN** a visible focus signal is shown on each interactive element

### Requirement: Readable footer at tablet width

The system SHALL render the shared footer so its identity block, navigation, social links, and secondary metadata are readable and contained at 768px.

#### Scenario: Tablet footer is contained

- **WHEN** the footer renders at 768px
- **THEN** its content stays within the viewport width and wraps without overflow

#### Scenario: Mobile and desktop footer remain unchanged

- **WHEN** the footer renders at 390px or 1440px
- **THEN** it preserves existing layout and behavior unless a verified regression requires repair

### Requirement: Desktop (1440) is a baseline

The system SHALL treat desktop rendering at 1440px as an unchanged baseline and SHALL modify it only when the audit confirms a real regression.

#### Scenario: No desktop change without evidence

- **WHEN** the responsive audit finds no regression at 1440px
- **THEN** no desktop layout, spacing, or content change is made
