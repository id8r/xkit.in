/* src/components/FxUI/Brand/FxBrandHero.js | Centered landing stage — logo + tagline | Sree | 2026-08-27 */
import { cn } from "@/lib/FxUtils";
import { FX_LAYOUT, FX_SPACING, FX_TYPOGRAPHY } from "@/lib/FxTheme";
import { FxBrandLogo } from "./FxBrandLogo";

/* - - - - - - - - - - - - - - - - */

export function FxBrandHero({ brand, children }) {
  return (
    <main className={FX_LAYOUT.stage}>
      <div className={FX_LAYOUT.stack}>
        <FxBrandLogo brand={brand} className={FX_SPACING.wordmarkToTagline} />
        {brand.tagline && <p className={cn(FX_TYPOGRAPHY.tagline, "m-0")}>{brand.tagline}</p>}
        {children}
      </div>
    </main>
  );
}

/* - - - - - - - - - - - - - - - - */
