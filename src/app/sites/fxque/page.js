/* src/app/sites/fxque/page.js | fxque.com landing | Sree | 2026-08-27 */
import { getBrand } from "@/lib/FxBrands";
import { FxBrandHero } from "@/components/FxUI/Brand";

/* - - - - - - - - - - - - - - - - */

export default function FxqueHome() {
  return <FxBrandHero brand={getBrand("fxque")} />;
}

/* - - - - - - - - - - - - - - - - */
