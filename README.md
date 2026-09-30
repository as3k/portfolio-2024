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
- Rybbit analytics loads once through the first-party `/analytics/script.js` proxy. Set `NEXT_PUBLIC_RYBBIT_HOST` to override the `https://stats.zkg.io` backend, and `NEXT_PUBLIC_RYBBIT_SITE_ID` to override the site ID. `NEXT_PUBLIC_RYBBIT_SCRIPT_URL` remains available for an intentional direct-script override.

## Deployment
Build with `yarn build` and deploy the `.next` output with your preferred host (Vercel recommended). Set Rybbit env vars in the host dashboard when overriding the defaults.
