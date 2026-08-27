/* src/app/sites/xkit/page.js | xkit.in landing | Sree | 2026-08-27 */

import { getBrand } from "@/lib/FxBrands";
import { FxBrandHero } from "@/components/FxUI/Brand";
/* - - - - - - - - - - - - - - - - */

export default function XkitHome() {
  return <FxBrandHero brand={getBrand("xkit")} />;
}
/* - - - - - - - - - - - - - - - - */
