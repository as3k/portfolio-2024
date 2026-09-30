## ADDED Requirements

### Requirement: Static blog audio generation

The system SHALL generate static audio chunks and a manifest for each published blog post by sending paragraph-oriented prose to Kokoro before deployment.

#### Scenario: Paragraphs become audio chunks

- **WHEN** the generator processes a published blog post
- **THEN** it emits one audio chunk per normal paragraph, preserving paragraph order in the manifest

#### Scenario: Oversized paragraphs are split naturally

- **WHEN** a paragraph exceeds the configured Kokoro input limit
- **THEN** the generator splits it only between complete sentences and emits those sentence groups in order

### Requirement: Changed content replaces generated audio

The system SHALL detect changed source prose and replace the corresponding post's static audio assets and manifest during regeneration.

#### Scenario: Blog post content changes

- **WHEN** the source MDX prose hash differs from the generated manifest hash
- **THEN** the generator replaces that post's audio output with newly generated chunks

### Requirement: Static audio playback

The system SHALL provide an accessible blog player that plays a post's generated static chunks sequentially without making runtime requests to Kokoro.

#### Scenario: Reader starts playback

- **WHEN** a reader activates the listen control for a post with generated audio
- **THEN** the browser plays the static chunks in manifest order and advances to the next chunk when the current chunk ends

#### Scenario: Audio is unavailable

- **WHEN** a post has no valid generated manifest
- **THEN** the listen control is omitted or presents a clear unavailable state without breaking the article
