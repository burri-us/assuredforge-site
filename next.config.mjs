// A static export (no server). The Pages Router, because its export loads scripts only from files, so the page's content
// security policy can forbid inline scripts. BASE_PATH is set for a preview under <owner>.github.io/assuredforge-site and
// left empty for the custom domain.
/** @type {import('next').NextConfig} */
export default {
  output: "export",
  // scripts/check-switch.mjs builds into its own folders (NEXT_DIST_DIR) so it never touches out/, which a preview may be serving.
  distDir: process.env.NEXT_DIST_DIR ?? ".next",
  basePath: process.env.BASE_PATH ?? "",
  trailingSlash: true,
  reactStrictMode: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  // SB2 (components/Claim.tsx): the held-content review preview, fixed at build time for the server and browser bundles alike.
  env: { AF_CLAIMS_PREVIEW: process.env.AF_CLAIMS_PREVIEW ?? "" },
};
