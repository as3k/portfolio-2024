## ADDED Requirements

### Requirement: Homepage Field Notes section

The homepage SHALL include a section titled "Field Notes" after the shipped case studies. The section SHALL contain one manually selected featured post and a list of up to three recent published posts excluding the featured post. When a post has a cover image, the section SHALL display that image with the post entry.

#### Scenario: Featured post is displayed

- **WHEN** the homepage renders with a configured pinned post
- **THEN** the Field Notes section displays that post's cover image when available, title, one-line summary, date, and a link to its full post

#### Scenario: Post covers are displayed

- **WHEN** a featured or recent post has a configured cover image
- **THEN** the corresponding Field Notes entry displays the cover image responsively

#### Scenario: Recent posts exclude the featured post

- **WHEN** the configured pinned post is among the newest published posts
- **THEN** the recent-post list omits it and displays the next three newest published posts

#### Scenario: Fewer than three recent posts exist

- **WHEN** fewer than three published posts remain after excluding the featured post
- **THEN** the recent-post list displays every remaining post without adding placeholders

#### Scenario: No post appears twice

- **WHEN** the Field Notes section renders
- **THEN** a post appears at most once across the featured and recent-post treatments
