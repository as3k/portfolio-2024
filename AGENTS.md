<!-- OPENSPEC:START -->
# OpenSpec Instructions

These instructions are for AI assistants working in this project.

Always open `@/openspec/AGENTS.md` when the request:
- Mentions planning or proposals (words like proposal, spec, change, plan)
- Introduces new capabilities, breaking changes, architecture shifts, or big performance/security work
- Sounds ambiguous and you need the authoritative spec before coding

Use `@/openspec/AGENTS.md` to learn:
- How to create and apply change proposals
- Spec format and conventions
- Project structure and guidelines

Keep this managed block so 'openspec update' can refresh the instructions.

<!-- OPENSPEC:END -->

# Repository Guidelines

## Project Structure & Module Organization
- Next.js app router lives in `src/app`; `layout.js` defines global shell and `page.js` renders the landing content. Styles live in `src/app/globals.css` with Tailwind utilities.
- Shared UI pieces belong in `src/components` (e.g., `Header.js`, `Footer.js`); keep new reusable pieces there in PascalCase files.
- Static assets are served from `public` (images under `public/images`).
- Configuration sits at the repo root: `next.config.mjs` (core Next config), `tailwind.config.js`, `postcss.config.mjs`, and `jsconfig.json` for path hints.

## Build, Test, and Development Commands
- `yarn dev` – run the dev server at `http://localhost:3000`.
- `yarn build` – create the production build; run before deployments.
- `yarn start` – serve the built app locally for smoke-testing.
- `yarn lint` – run Biome checks; required before opening a PR.

## Coding Style & Naming Conventions
- JavaScript/JSX on React 19 + Next 16; prefer 2-space indentation and consistent semicolons.
- Components and files use PascalCase; hooks or helpers may use camelCase.
- Favor Tailwind utility classes for styling; extend shared patterns in `globals.css` or Tailwind theme instead of ad-hoc inline styles.
- Import order: external packages, then app modules/components, then styles or assets.

## Testing Guidelines
- No automated tests yet; run `yarn lint` and manually verify key flows locally.
- If adding tests, prefer React Testing Library with Jest; co-locate in `__tests__` folders or `*.test.js` files under `src`, mirroring the component structure.
- When introducing new components, include basic render and interaction coverage and keep snapshots minimal.

## Commit & Pull Request Guidelines
- Use short, imperative commit subjects (e.g., "add umami analytics"), ideally under 72 characters.
- For PRs, include: concise summary of changes, linked issues or task IDs, screenshots for UI updates (desktop + mobile), and notes on any migrations or env vars.
- Run `yarn lint` (and any added tests) before pushing. Mention any skipped checks and why.

## Security & Configuration Tips
- Keep secrets in `.env.local`; never commit API keys or Mailgun tokens. Add new env keys to PR descriptions and docs when needed.
- Validate any third-party scripts against CSP needs; Umami is loaded via env-driven script in `src/app/layout.js`.

## Agent Task Tracking
- Update `next16-upgrade-plan.json` as work progresses; move items between `backlog`, `todo`, `in_progress`, and `done` and keep `status` fields consistent.
- Claim a task by moving it into `in_progress` with your handle in `owner`; only one item should be in progress per agent to avoid overlap.
- If you pause mid-task, add a short handoff note in `details` (what’s done, what’s next, any blockers) and return the task to `todo` so others can pick it up.
- Keep summaries concise; note scope changes or blockers in `details` so another agent can resume.
