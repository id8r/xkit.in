/* src/components/FxUI/Brand/FxBrandLogo.js | Renders a brand's logo — text wordmark or SVG image | Sree | 2026-08-27 */

import Image from "next/image";
import { cn } from "@/lib/FxUtils";
import { FX_WORDMARK } from "@/lib/FxTheme";
/* - - - - - - - - - - - - - - - - */

export function FxBrandLogo({ brand, as: Tag = "h1", className }) {
  const { logo, name } = brand;
  if (logo.type === "svg")
    return (
      <Tag className={cn("m-0", className)}>
        <Image src={logo.src} alt={name} width={logo.width} height={logo.height} className={FX_WORDMARK.svg} priority />
      </Tag>
    );
  return <Tag className={cn(FX_WORDMARK.text, "m-0", className)}>{logo.text}</Tag>;
}
/* - - - - - - - - - - - - - - - - */
