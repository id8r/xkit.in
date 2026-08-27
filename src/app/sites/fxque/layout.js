/* src/app/sites/fxque/layout.js | fxque.com — metadata, Urbanist font, brand token scope | Sree | 2026-08-27 */
import { Urbanist } from "next/font/google";
import { getBrand, getBrandUrl } from "@/lib/FxBrands";

/* - - - - - - - - - - - - - - - - */

const BRAND = getBrand("fxque");

/* Wordmark font — Urbanist 500 (runner-up: Outfit 500). */
const urbanist = Urbanist({ subsets: ["latin"], weight: "500", display: "swap", variable: "--font-urbanist" });

export const metadata = {
  metadataBase: new URL(getBrandUrl(BRAND)),
  title: { default: BRAND.title, template: `%s · ${BRAND.title}` },
  description: BRAND.description,
  openGraph: { title: BRAND.title, description: BRAND.description, url: "/", siteName: BRAND.name },
  alternates: { canonical: "/" },
};

export default function FxqueLayout({ children }) {
  return (
    <div data-brand={BRAND.id} className={urbanist.variable}>
      {children}
    </div>
  );
}

/* - - - - - - - - - - - - - - - - */
