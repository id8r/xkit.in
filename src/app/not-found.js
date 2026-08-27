/* src/app/not-found.js | Fallback 404 for paths no brand owns | Sree | 2026-08-27 */
import { FX_LAYOUT, FX_TYPOGRAPHY } from "@/lib/FxTheme";

/* - - - - - - - - - - - - - - - - */

export default function NotFound() {
  return (
    <main className={FX_LAYOUT.stage}>
      <p className={FX_TYPOGRAPHY.tagline}>404 — nothing here</p>
    </main>
  );
}

/* - - - - - - - - - - - - - - - - */
