## ADDED Requirements

### Requirement: Sitemap coverage for public supplementary projects

The system SHALL include every now-public supplementary project route in the generated sitemap and SHALL exclude draft or non-public project routes.

#### Scenario: Crawl public supplementary project routes

- **WHEN** a crawler requests the generated sitemap after a supplementary project is public
- **THEN** the sitemap includes that project's canonical route

#### Scenario: Exclude non-public project routes

- **WHEN** a project remains draft or non-public
- **THEN** its route is absent from the sitemap
