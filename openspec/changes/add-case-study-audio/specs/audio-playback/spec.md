## ADDED Requirements

### Requirement: Case studies may provide static audio playback

The system SHALL render the shared audio player on a public case-study detail page when a valid pre-generated manifest exists for that case study.

#### Scenario: Case study has generated audio

- **WHEN** a visitor opens a public case study with a valid audio manifest
- **THEN** the page renders the audio player with the manifest's duration and static chunk URLs

#### Scenario: Case study has no generated audio

- **WHEN** a visitor opens a public case study without a valid audio manifest
- **THEN** the case study renders normally without an audio player or runtime Kokoro request

### Requirement: Case-study audio follows the existing generation rules

The generator SHALL create case-study audio from readable MDX paragraphs, splitting only oversized paragraphs at sentence boundaries, and SHALL regenerate assets when the source content hash changes.

#### Scenario: Case-study source changes

- **WHEN** readable case-study content changes after audio was generated
- **THEN** the next explicit audio build creates replacement chunks and a new manifest for that case study
