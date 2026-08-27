/* src/lib/FxBrands.js | Brand resolution helpers — host → brand, id → brand | Sree | 2026-08-27 */
import { BRANDS, DEFAULT_BRAND_ID, SITES_PREFIX } from "@/lib/FxConstants";

/* - - - - - - - - - - - - - - - - */

export const BRAND_LIST = Object.values(BRANDS);

export function getBrand(id) {
  return BRANDS[id] ?? BRANDS[DEFAULT_BRAND_ID];
}

/* "www.xkit.in:3000" → "www.xkit.in" */
function normalizeHost(host) {
  return (host ?? "").toLowerCase().split(":")[0];
}

/* Exact host match first, then "<id>.localhost" for local dev, then the default brand. */
export function getBrandByHost(rawHost) {
  const host = normalizeHost(rawHost);
  const exact = BRAND_LIST.find((b) => b.hosts.includes(host));
  if (exact) return exact;
  const local = BRAND_LIST.find((b) => host === `${b.id}.localhost`);
  return local ?? BRANDS[DEFAULT_BRAND_ID];
}

/* "/about" + brand → "/sites/xkit/about" */
export function toBrandPath(brand, pathname) {
  return `${SITES_PREFIX}/${brand.id}${pathname === "/" ? "" : pathname}`;
}

export function getBrandUrl(brand) {
  return `https://${brand.domain}`;
}

/* - - - - - - - - - - - - - - - - */
