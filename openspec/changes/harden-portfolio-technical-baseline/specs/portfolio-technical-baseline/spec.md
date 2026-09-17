## ADDED Requirements

### Requirement: Conservative contact-form abuse protection

The system SHALL validate contact submissions server-side, silently discard honeypot submissions, and apply a conservative dependency-free per-client time-window limit before email delivery. Legitimate, well-formed submissions below the limit SHALL retain the existing delivery behavior.

#### Scenario: Valid contact submission

- **WHEN** a visitor submits a valid contact form below the configured limit with an empty honeypot
- **THEN** the system accepts it for normal email delivery

#### Scenario: Automated contact submission

- **WHEN** a request includes a populated honeypot or exceeds the per-client limit
- **THEN** the system does not send email and returns a non-sensitive success or rate-limit response as appropriate

### Requirement: Canonical resume endpoint only

The system SHALL provide the canonical resume PDF through `GET /api/resume` and SHALL NOT accept public POST data to render arbitrary resume documents.

#### Scenario: Download canonical resume

- **WHEN** a visitor requests `GET /api/resume`
- **THEN** the system returns the canonical downloadable resume PDF

#### Scenario: Reject arbitrary resume rendering

- **WHEN** a client sends `POST /api/resume` with custom resume data
- **THEN** the system rejects the method and does not render or return a custom document

### Requirement: Accurate media layout reservation

The system SHALL use intrinsic dimensions when they are known and SHALL NOT reserve a guessed fallback aspect ratio when dimensions are unknown.

#### Scenario: Known-dimension media

- **WHEN** a case-study asset has verified width and height metadata
- **THEN** its rendering reserves space matching that intrinsic aspect ratio

#### Scenario: Unknown-dimension media

- **WHEN** a media asset lacks verified dimensions
- **THEN** the system renders without an inaccurate synthetic layout reservation

### Requirement: Conditional PXC demo optimization

The system SHALL replace the PXC demo GIF only if the replacement is browser-compatible and verified to reduce transferred bytes without materially reducing legibility.

#### Scenario: Verified conversion

- **WHEN** a converted PXC demo plays in supported target browsers and is materially smaller than the GIF
- **THEN** the system serves the converted demo asset

#### Scenario: Unverified or incompatible conversion

- **WHEN** conversion cannot meet compatibility, legibility, or size criteria
- **THEN** the system retains the existing GIF

### Requirement: Intentional analytics and console behavior

The system SHALL remove stale Rybbbit analytics calls and SHALL retain the intentional browser-console terminal easter egg.

#### Scenario: Load portfolio shell

- **WHEN** a visitor loads the portfolio shell
- **THEN** no Rybbbit analytics call is made and the terminal-style console message remains available
