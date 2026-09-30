## ADDED Requirements

### Requirement: Audio usage is tracked in Rybbit

The system SHALL send meaningful audio interaction events to Rybbit when available, including the content type and content slug.

#### Scenario: Visitor starts audio

- **WHEN** a visitor successfully starts a case-study audio player
- **THEN** the system records an `audio_started` event with `content_type: "case_study"` and the case-study slug

#### Scenario: Visitor completes audio

- **WHEN** a visitor reaches the end of all audio chunks
- **THEN** the system records an `audio_completed` event with the content type and slug

#### Scenario: Visitor changes speed

- **WHEN** a visitor selects a different playback speed
- **THEN** the system records an `audio_speed_changed` event with the content type, slug, and selected speed
