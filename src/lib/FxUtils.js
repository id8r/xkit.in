/* src/lib/FxUtils.js | Generic helpers — cn() class merging | Sree | 2026-08-27 */

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
/* - - - - - - - - - - - - - - - - */

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
/* - - - - - - - - - - - - - - - - */
