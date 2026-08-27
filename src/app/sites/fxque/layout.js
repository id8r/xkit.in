/* src/app/sites/fxque/layout.js | fxque.com — metadata, Inter font, brand token scope | Sree | 2026-08-27 */
import { Inter } from "next/font/google";
import { getBrand, getBrandUrl } from "@/lib/FxBrands";

/* - - - - - - - - - - - - - - - - */

const BRAND = getBrand("fxque");

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata = {
  metadataBase: new URL(getBrandUrl(BRAND)),
  title: { default: BRAND.title, template: `%s · ${BRAND.title}` },
  description: BRAND.description,
  openGraph: { title: BRAND.title, description: BRAND.description, url: "/", siteName: BRAND.name },
  alternates: { canonical: "/" },
};

export default function FxqueLayout({ children }) {
  return (
    <div data-brand={BRAND.id} className={inter.variable}>
      {children}
    </div>
  );
}

/* - - - - - - - - - - - - - - - - */
