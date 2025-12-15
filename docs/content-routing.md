# MDX Content and Routing Plan

Guidance for structuring MDX content for work (case studies) and blog (articles), plus how routing should resolve those files.

## Content layout
- `src/content/work/*.mdx` for case studies; one file per project with frontmatter (title, summary, date, tags, cover).
- `src/content/blog/*.mdx` for articles; same frontmatter shape.
- Optional shared snippets in `src/content/partials` (callouts, reusable MDX blocks).
- Slugs use the filename without `.mdx`, lowercase-kebab (example: `redesign-metrics.mdx`).

## MDX rendering setup
- Add an MDX loader in `next.config.mjs` (e.g., `@next/mdx`) or use a content helper with `next-mdx-remote`; either way, keep MDX parsing centralized.
- Provide an `MDXComponents` mapping in `src/components/MDXComponents.js` for links, images, code blocks, and callouts.
- Keep shared styles in Tailwind or `globals.css`; avoid inline one-offs.

## Routing (App Router)
- `/work` → `src/app/work/page.js` lists all case studies by reading `src/content/work`.
- `/work/[slug]` → `src/app/work/[slug]/page.js` loads the matching MDX file and renders it with `useMDXComponent` (or equivalent) and `MDXComponents`.
- `/blog` → `src/app/blog/page.js` lists all articles from `src/content/blog`.
- `/blog/[slug]` → `src/app/blog/[slug]/page.js` renders a single article.
- Use `generateStaticParams` in each `[slug]/page.js` to prebuild all MDX entries for static output.

## Data helpers
- `src/lib/content.js` should expose `getWorkSlugs()`, `getWorkBySlug(slug)`, `getAllWork()`, `getBlogSlugs()`, `getBlogBySlug(slug)`, and `getAllPosts()`.
- Helpers parse frontmatter (e.g., `gray-matter`) and return `{ slug, meta, content }`; index helpers sort by date for listing pages.

## Routing flow
- A request to `/work/example-case` calls `getWorkBySlug("example-case")`, returns MDX source plus metadata, and renders through the work `[slug]` page.
- A request to `/blog/example-article` follows the same pattern using the blog helpers.
- Index pages map over `getAllWork()` or `getAllPosts()` to render cards that link to their respective `[slug]` routes.

## Next steps
1) Scaffold the `src/content/work` and `src/content/blog` folders with sample `.mdx` files.
2) Wire MDX support in `next.config.mjs` and add `src/components/MDXComponents.js`.
3) Implement the content helpers in `src/lib/content.js` and the index/detail pages under `src/app/work` and `src/app/blog`.
