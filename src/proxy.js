/* src/proxy.js | Host → brand routing: rewrites / to /sites/<brand>/ per domain | Sree | 2026-08-27 */
import { NextResponse } from "next/server";
import { getBrandByHost, toBrandPath } from "@/lib/FxBrands";
import { SITES_PREFIX } from "@/lib/FxConstants";

/* - - - - - - - - - - - - - - - - */

export function proxy(request) {
  const brand = getBrandByHost(request.headers.get("host"));
  const { pathname } = request.nextUrl;

  /* Direct hits on /sites/… are never public — the internal rewrite below bypasses the proxy, so this only catches real requests. */
  if (pathname.startsWith(`${SITES_PREFIX}/`)) return new NextResponse(null, { status: 404 });

  const url = request.nextUrl.clone();
  url.pathname = toBrandPath(brand, pathname);
  const response = NextResponse.rewrite(url);
  response.headers.set("x-fx-brand", brand.id);
  return response;
}

/* Skip Next internals, public assets, API routes and any path with a file extension. */
export const config = {
  matcher: ["/((?!_next|brands|api|.*\\..*).*)"],
};

/* - - - - - - - - - - - - - - - - */
