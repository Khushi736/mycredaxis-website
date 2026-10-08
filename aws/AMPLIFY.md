# Deploy mycredaxis.com with AWS Amplify Hosting

This project uses **Amplify** (not manual S3 sync). Build config: `amplify.yml` at repo root.

## Connect GitHub

1. AWS Console → **Amplify** → **Create new app** → **Host web app**.
2. Connect **GitHub** → repo `mycredaxis-website`, branch **`main`**.
3. Amplify detects **`amplify.yml`** — confirm build settings and save.
4. Wait for the first build to finish.

## Custom domain

1. Amplify app → **Domain management** → add **mycredaxis.com** and **www**.
2. Update DNS at your registrar with the CNAME/ANAME records Amplify shows.
3. Wait for SSL **Available**.

## Path URLs (no `#`)

The build runs `audit-routes` and `verify-spa-build` so production uses React Router paths (`/faq`, `/privacy-policy`, etc.).

`public/_redirects` (`/* → /index.html 200`) is included in `dist/` for direct links.

## After code push

Amplify auto-builds on push to `main`. If the live site looks stale, open the app → **Redeploy this version** or trigger **Run build**.
