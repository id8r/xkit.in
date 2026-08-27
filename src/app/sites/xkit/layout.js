/* src/app/sites/xkit/layout.js | xkit.in — metadata, Philosopher font, brand token scope | Sree | 2026-08-27 */

import localFont from "next/font/local";
import { getBrand, getBrandUrl } from "@/lib/FxBrands";
/* - - - - - - - - - - - - - - - - */

const BRAND = getBrand("xkit");

/* The logo IS the font — self-hosted so xkit never depends on Google Fonts staying up. */
const philosopher = localFont({
  src: "../../../fonts/philosopher_v21_latin.woff2",
  weight: "400",
  display: "swap",
  variable: "--font-philosopher",
});

export const metadata = {
  metadataBase: new URL(getBrandUrl(BRAND)),
  title: { default: BRAND.title, template: `%s · ${BRAND.title}` },
  description: BRAND.description,
  openGraph: { title: BRAND.title, description: BRAND.description, url: "/", siteName: BRAND.name },
  alternates: { canonical: "/" },
};

export default function XkitLayout({ children }) {
  return (
    <div data-brand={BRAND.id} className={philosopher.variable}>
      {children}
    </div>
  );
}
/* - - - - - - - - - - - - - - - - */
