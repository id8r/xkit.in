# FxSites Architecture

One Next.js repo → one Vercel project → many domains. Each domain is a **brand**.

## Request flow

1. `src/proxy.js` reads the `Host` header → `getBrandByHost()` → rewrites `/path` to `/sites/<brand>/path`. The browser URL never changes.
2. `src/app/sites/<brand>/layout.js` owns that brand's `metadata` (title, description, OG, canonical), its display font (`next/font`), and sets `data-brand="<id>"` on a wrapper `<div>`.
3. `src/app/globals.css` scopes the token values (`--fx-bg`, `--fx-fg`, `--fx-muted`, `--fx-primary`, `--font-brand`) under `[data-brand="<id>"]`. Tailwind utilities (`bg-bg`, `text-fg`, `text-muted`, `font-display`) read those tokens, so every `FxUI` component is brand-blind.
4. `src/app/sites/<brand>/icon.svg` is the brand favicon (Next file-based metadata, scoped per segment).

Unknown hosts (localhost, `*.vercel.app` previews) fall back to `DEFAULT_BRAND_ID`. In dev, `http://<id>.localhost:3000` previews any brand.

## Where the Fx / brand split lives

| Layer | Path | Knows about brands? |
| :--- | :--- | :--- |
| Generic design system | `src/components/FxUI/**`, `src/lib/FxTheme.js`, `src/lib/FxUtils.js` | No — consumes a `brand` object / tokens only |
| Brand mechanism | `src/lib/FxBrands.js`, `src/proxy.js` | Mechanism only — no brand-specific values |
| Brand data | `src/lib/FxConstants.js` (`BRANDS`), `src/app/globals.css` (`[data-brand]` scopes) | Yes — the single source of brand values |
| Brand composition | `src/app/sites/<id>/**`, `public/brands/<id>/**`, `src/fonts/` | Yes — one folder per domain |

There is no separate product prefix in this repo; the "product layer" is the per-brand folder under `sites/`.

## Adding a domain

1. Add an entry to `BRANDS` in `src/lib/FxConstants.js` (id, hosts, title, tagline, `logo: { type: "text" | "svg", … }`, mark).
2. Add `[data-brand="<id>"] { … }` token values in `src/app/globals.css`.
3. Create `src/app/sites/<id>/` with `layout.js`, `page.js`, `icon.svg` (copy an existing brand's).
4. Drop logo files in `public/brands/<id>/`; fonts in `src/fonts/` if self-hosted.
5. Vercel → Project → Domains → add the apex + `www` (redirect `www` → apex there, not in code).

## Current brands

| id | domain | logo | font |
| :--- | :--- | :--- | :--- |
| `xkit` | xkit.in | text `xkit` | Philosopher 400 (self-hosted, `src/fonts/`, OFL) |
| `fxque` | fxque.com | text `FxQue` (placeholder) | Inter (placeholder) |
