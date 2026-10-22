# Deploy — Cloudflare Workers (preview)

Live preview: https://southern-idaho-muzzleloaders.alpine-premier-relay.workers.dev
Worker name: `southern-idaho-muzzleloaders`. No custom domain is attached.

The default `npm run build` still targets Vercel (Nitro). The Cloudflare build only runs when `DEPLOY_TARGET=cloudflare` (set by the `cf:*` scripts), which adds `@cloudflare/vite-plugin` and skips Nitro. Config lives in `wrangler.jsonc`.

`@cloudflare/vite-plugin` is a regular dependency so `vite.config.ts` can import it when a host installs with `--omit=dev`. Wrangler itself stays a dev dependency. Do not rename the worker.

## Redeploy

Wrangler needs Node 22 or newer. Do not deploy from a machine that has no Cloudflare token.

```bash
npm install
export CLOUDFLARE_API_TOKEN=...   # token with Workers Scripts: Edit
npm run cf:deploy                  # = cf:build + wrangler deploy --config dist/server/wrangler.json
```

On a Node 20 machine: `npm run cf:build && npx -y -p node@22 node node_modules/wrangler/bin/wrangler.js deploy --config dist/server/wrangler.json`

Local check of the Worker build: `npm run cf:preview` (http://127.0.0.1:8787).

## Attach a custom domain later

The club's domain must be a zone on the same Cloudflare account (or moved there).

1. Dashboard: Workers & Pages → southern-idaho-muzzleloaders → Settings → Domains & Routes → Add → Custom domain → enter e.g. `www.example.org`.
2. Or in `wrangler.jsonc` add:
   ```jsonc
   "routes": [{ "pattern": "www.example.org", "custom_domain": true }]
   ```
   then `npm run cf:deploy`.
3. Optional: set `"workers_dev": false` once the real domain is live.

## Known gap

`/__grok/manifest.webmanifest` (PWA install, from `server/middleware`) is a Nitro feature and returns 404 on the Worker build. Pages and images are unaffected.
