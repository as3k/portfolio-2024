# Zachary Guerrero Portfolio (Next.js 16)

Personal portfolio built with Next.js 16, React 19, and Tailwind CSS.

## Prerequisites
- Node.js 18.18+ (v25.x installed in dev environment)
- Yarn

## Setup
```bash
yarn install
```

## Commands
- `yarn dev` – start the dev server at http://localhost:3000
- `yarn build` – create a production build
- `yarn start` – serve the built app locally
- `yarn lint` – run Biome checks

## Project Notes
- App Router lives under `src/app`; global styles in `src/app/globals.css`.
- Static assets are in `public` (portfolio photo at `public/images/`).
- Umami analytics loads via `NEXT_PUBLIC_UMAMI_SCRIPT_URL`, `NEXT_PUBLIC_UMAMI_WEBSITE_ID`, and optional `NEXT_PUBLIC_UMAMI_HOST_URL` env vars in `src/app/layout.js`.

## Deployment
Build with `yarn build` and deploy the `.next` output with your preferred host (Vercel recommended). Set Umami env vars in the host dashboard to enable analytics tracking.
