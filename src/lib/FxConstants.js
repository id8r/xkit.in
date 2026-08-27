/* src/lib/FxConstants.js | App/product constants — brand registry, defaults | Sree | 2026-08-27 */

/* - - - - - - - - - - - - - - - - */

export const APP_NAME = "FxSites";

/* Route-segment folder that holds one sub-tree per brand (see FxSitesArchitecture.md). */
export const SITES_PREFIX = "/sites";

/* Brand served when the Host header matches nothing (localhost, Vercel preview URLs, unknown domains). */
export const DEFAULT_BRAND_ID = "xkit";

/*
 * BRANDS — one entry per domain. Adding a domain = add an entry here + a folder under src/app/sites/<id>/.
 *   id        → folder name under src/app/sites and the [data-brand] token scope in globals.css
 *   hosts     → exact hostnames (no port) that resolve to this brand; "<id>.localhost" is matched automatically
 *   logo      → { type: "text", text } renders the wordmark in the brand display font
 *               { type: "svg", src, width, height } renders an image from /public/brands/<id>/
 *   mark      → small square icon (favicon-style) used wherever a compact symbol is needed
 */
export const BRANDS = {
  xkit: {
    id: "xkit",
    name: "xKit",
    domain: "xkit.in",
    hosts: ["xkit.in", "www.xkit.in"],
    title: "xkit",
    description: "xkit — a quiet container",
    tagline: "a quiet container",
    logo: { type: "text", text: "xkit" },
    mark: "/brands/xkit/mark.svg",
  },
  fxque: {
    id: "fxque",
    name: "FxQue",
    domain: "fxque.com",
    hosts: ["fxque.com", "www.fxque.com"],
    title: "FxQue",
    description: "FxQue — coming soon",
    tagline: "coming soon",
    logo: { type: "text", text: "FxQue" },
    mark: "/brands/fxque/mark.svg",
  },
};

/* - - - - - - - - - - - - - - - - */
