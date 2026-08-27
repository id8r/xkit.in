/* src/app/layout.js | Root shell — html/body only; brands own metadata, fonts and tokens | Sree | 2026-08-27 */

import "./globals.css";
/* - - - - - - - - - - - - - - - - */

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
/* - - - - - - - - - - - - - - - - */
