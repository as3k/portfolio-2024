# Change: Add a Field Notes section to the homepage

## Why

The portfolio should surface the thinking behind the work, not only the finished case studies. A compact homepage section can direct visitors to recent writing and establish the site's design-and-engineering perspective.

## What Changes

- Add a homepage section titled "Field Notes" after the shipped case studies.
- Feature one manually selected blog post with its title, one-line summary, date, and link.
- Show the three newest non-pinned blog posts with their titles, dates, and links.
- Prevent the pinned post from appearing twice and gracefully handle fewer than three recent posts.

## Impact

- Affected specs: homepage content
- Affected code: `src/app/page.js`, blog content helpers, and a new homepage Field Notes component if useful
