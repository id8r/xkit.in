# FxSites

One Next.js repo → one Vercel project → many domains (`xkit.in`, `fxque.com`, …). Each domain is a brand with its own metadata, favicon, font and content; the shared `FxUI` layer is brand-blind.

- Architecture & how to add a domain: `src/FxDocs/FxSitesArchitecture.md`
- Coding standards: https://github.com/fxzen/FxDocs

## Dev

```bash
npm install
npm run dev
# http://localhost:3000        → default brand (xkit)
# http://fxque.localhost:3000  → fxque
```
