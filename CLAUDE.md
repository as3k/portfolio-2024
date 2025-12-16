# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `yarn dev` – start dev server at http://localhost:3000
- `yarn build` – create production build
- `yarn start` – serve built app locally
- `yarn lint` – run Biome checks (required before PRs)

## Architecture

This is a personal portfolio site built with Next.js 16, React 19, and Tailwind CSS.

### Directory Structure

- `src/app/` – Next.js App Router pages and layouts
  - `layout.js` – root layout with Poppins font, Header/Footer, and Umami analytics
  - `page.js` – landing page
  - `api/contact/route.js` – contact form API endpoint using Mailgun
  - `privacy-policy/page.js` – static page
- `src/components/` – shared UI components (Header, Footer, forms)
- `public/images/` – static image assets
- `docs/` – planning documents and task tracker (`next16-upgrade-plan.json`)

### Content System (MDX)

Case studies and blog posts use MDX files with frontmatter:

- `src/content/work/*.mdx` – case study files (one per project)
- `src/content/blog/*.mdx` – blog article files
- `src/lib/content.js` – data helpers (`getAllWork()`, `getWorkBySlug()`, `getAllPosts()`, `getBlogBySlug()`)
- `src/components/MDXComponents.js` – custom MDX component mappings

**Routes:**
- `/projects` → lists all case studies (Project Showcase)
- `/projects/[slug]` → single case study (uses `generateStaticParams`)
- `/blog` → lists all articles
- `/blog/[slug]` → single article

**Case Study Frontmatter Schema:**
```yaml
title: string
slug: string (lowercase-kebab from filename)
client: string
year: number
featured: boolean
order: number (for sorting)
excerpt: string
category: string
tags: string[]
heroImage: string (path)
images: string[]
beforeImage: string (optional, for redesigns)
metrics:
  - label: string
    value: string | number
    unit: string (optional)
    type: count | percentage | multiplier | speed | rating | qualitative | testimonial
colors:
  primary: string
  accent: string
technologies: string[]
roles: string[]
location: string (optional)
status: string (optional, e.g. "Not Launched")
seo:
  metaTitle: string
  metaDescription: string
  keywords: string[]
```

### Key Technologies

- **Styling**: Tailwind CSS with custom design tokens in `tailwind.config.js` (brand colors `zg-teal`, `zg-coral`, `zg-dark-*`; typography scale for body/heading/display/utility/microcopy)
- **Linting**: Biome (formatter disabled, linter enabled with recommended rules)
- **Analytics**: Umami (loaded via `NEXT_PUBLIC_UMAMI_SCRIPT_URL`, `NEXT_PUBLIC_UMAMI_WEBSITE_ID`, optional `NEXT_PUBLIC_UMAMI_HOST_URL`)
- **Email**: Mailgun via `MAILGUN_DOMAIN` and `MAILGUN_API_KEY` env vars

### Conventions

- JavaScript/JSX (no TypeScript)
- PascalCase for components and files
- 2-space indentation
- Tailwind utility classes for styling; extend patterns in `globals.css` or Tailwind theme
- Import order: external packages, then app modules/components, then styles

### Environment Variables

Required in `.env.local`:
- `MAILGUN_DOMAIN`, `MAILGUN_API_KEY` – for contact form
- `NEXT_PUBLIC_UMAMI_SCRIPT_URL`, `NEXT_PUBLIC_UMAMI_WEBSITE_ID` – for analytics (optional `NEXT_PUBLIC_UMAMI_HOST_URL`)

---

## Voice & Tone

**Summary:** Clear. Human. Grounded. Confident without flexing.

Write like you're explaining your work to a smart person who values clarity and doesn't need to be impressed.

### Core Traits

1. **Plainspoken, not performative**
   - Use normal language
   - Avoid buzzwords
   - Prefer short sentences
   - Let ideas land without dressing them up

2. **Confident, but never loud**
   - State facts and move on
   - No posturing, no hype
   - Confidence comes from specific experience and clear thinking

3. **Practical and outcome-aware**
   - Tie design decisions to what actually happened
   - Don't oversell results—explain impact
   - Talk about: what wasn't working, why it mattered, what changed, what improved

4. **Empathetic without being emotional**
   - Acknowledge confusion, frustration, cognitive overload
   - Don't romanticize it
   - Empathy shows up as thoughtful choices, not flowery language

### Writing Style

- Short to medium sentences
- One idea per sentence
- Occasional intentional fragments
- Very little filler
- Dry, subtle humor (sparingly)

### Words That Sound Like Zach

**Use:**
- Clear, simple, intentional, practical, straightforward
- Reduce friction, make it easier, remove confusion
- Support decision-making, hold up under real use

**Avoid:**
- "Passionate about…"
- "My journey as a designer…"
- "Crafting delightful experiences…"
- Buzzwords, grand metaphors, trend-heavy language

### Examples

**Bad (not Zach):**
> "I'm passionate about crafting delightful user experiences that transform brands."

**Good (very Zach):**
> "I focus on making things easier to understand and easier to use."

**Bad:**
> "This redesign transformed the brand."

**Good:**
> "After the redesign, users were completing the booking flow without getting stuck."

### The Reader Should Think

After reading any content:
1. "Can this person think clearly?"
2. "Can they explain their decisions?"
3. "Can I trust them with something important?"
