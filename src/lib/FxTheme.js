/* src/lib/FxTheme.js | Visual + layout class recipes (FX_*) and shell geometry | Sree | 2026-08-27 */

/* - - - - - - - - - - - - - - - - */

/* Brand wordmark — values ported 1:1 from the original xkit.in page (Philosopher 400, 5rem / 3rem mobile, -0.03em). */
export const FX_WORDMARK = {
  text: "font-display font-normal leading-none tracking-[-0.03em] text-fg text-5xl sm:text-[5rem]",
  svg: "h-16 w-auto sm:h-20",
};

export const FX_TYPOGRAPHY = {
  tagline: "text-base text-muted",
  meta: "text-[13px] text-muted",
};

export const FX_LAYOUT = {
  /* Full-viewport centered stage — the brand landing shell. */
  stage: "flex min-h-dvh flex-col items-center justify-center bg-bg p-8 text-fg",
  stack: "flex flex-col items-center text-center",
};

export const FX_SPACING = {
  wordmarkToTagline: "mb-5",
};

/* - - - - - - - - - - - - - - - - */
