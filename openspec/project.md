# Project Context

## Purpose

Personal portfolio site for a product designer. Showcases case studies, blog posts, and professional background. The site prioritizes clear communication, fast performance, and straightforward presentation of design work.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI**: React 19
- **Styling**: Tailwind CSS 3.4 with @tailwindcss/typography and @tailwindcss/forms
- **Content**: MDX via next-mdx-remote, gray-matter for frontmatter parsing
- **Animation**: Framer Motion
- **Icons**: Heroicons
- **Linting**: Biome (linter only, formatter disabled)
- **PDF Generation**: @react-pdf/renderer (for resume)
- **Email**: Mailgun.js
- **Analytics**: Umami (privacy-focused)

## Project Conventions

### Code Style

- **Language**: JavaScript/JSX (no TypeScript in source, but types available for tooling)
- **Component naming**: PascalCase for components and files
- **Indentation**: 2 spaces
- **Linting**: Biome with recommended rules, run `yarn lint` before PRs
- **Import order**: External packages first, then app modules/components, then styles
- **Tailwind**: Utility classes preferred; extend patterns in `globals.css` or Tailwind theme when needed

### Architecture Patterns

- **Routing**: Next.js App Router (`src/app/`)
- **Content**: MDX files in `src/content/work/` and `src/content/blog/`
- **Data fetching**: Static generation with `generateStaticParams` for content pages
- **Components**: Shared UI in `src/components/`, custom MDX mappings in `MDXComponents.js`
- **API routes**: Minimal, only `api/contact/route.js` for the contact form

### Testing Strategy

No automated testing currently configured. Rely on:
- Biome linting (`yarn lint`)
- Build verification (`yarn build`)
- Manual browser testing

### Git Workflow

- **Main branch**: `main`
- **Commits**: Clear, descriptive messages
- **PRs**: Run `yarn lint` and `yarn build` before submitting

## Domain Context

This is a design portfolio. Key concepts:

- **Case studies** (`/projects`): Detailed writeups of design work with metrics, images, and process descriptions
- **Blog posts** (`/blog`): Articles on design thinking and practice
- **Draft system**: Content can be marked as draft (excluded from production builds)
- **Metrics**: Case studies include quantitative results (conversion rates, time savings, etc.)

Content should follow the voice/tone guidelines: clear, plainspoken, confident without being loud. Avoid buzzwords and flowery language.

## Important Constraints

- **No over-engineering**: Keep solutions simple and focused. Don't add unnecessary abstractions.
- **Performance**: Static generation preferred. Minimal client-side JavaScript.
- **Accessibility**: Follow WCAG guidelines for all UI components.
- **Voice consistency**: All copy must match the established voice (see CLAUDE.md Voice & Tone section).

## External Dependencies

| Service | Purpose | Config |
|---------|---------|--------|
| Mailgun | Contact form email delivery | `MAILGUN_DOMAIN`, `MAILGUN_API_KEY` |
| Umami | Privacy-focused analytics | `NEXT_PUBLIC_UMAMI_SCRIPT_URL`, `NEXT_PUBLIC_UMAMI_WEBSITE_ID` |
| Vercel | Hosting and OG image generation (@vercel/og) | Automatic via deployment |
