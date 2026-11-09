import { Head, Html, Main, NextScript } from "next/document";

// Same-origin only: no third-party scripts, styles, fonts, images or frames; no forms. GitHub Pages can't send response
// headers, so the policy is a meta element (frame-ancestors can't be set this way).
const CSP = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'none'",
  "upgrade-insecure-requests",
].join("; ");

// Search engines stay out until publication is approved: SITE_INDEX=1 at build time lifts it.
const INDEX = process.env.SITE_INDEX === "1";

// Icons are plain files, so next/link's base path handling doesn't apply.
const BASE = process.env.BASE_PATH ?? "";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta httpEquiv="Content-Security-Policy" content={CSP} />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="theme-color" content="#0F2744" />
        <link rel="icon" href={`${BASE}/favicon.ico`} sizes="32x32" />
        <link rel="icon" href={`${BASE}/icon.svg`} type="image/svg+xml" />
        <link rel="apple-touch-icon" href={`${BASE}/apple-touch-icon.png`} />
        {!INDEX && <meta name="robots" content="noindex, nofollow" />}
      </Head>
      <body className="font-sans antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
