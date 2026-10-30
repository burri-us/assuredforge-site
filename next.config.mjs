// A static export (no server). The Pages Router, because its export loads scripts only from files, so the page's content
// security policy can forbid inline scripts. BASE_PATH is set for a preview under <owner>.github.io/assuredforge-site and
// left empty for the custom domain.
/** @type {import('next').NextConfig} */
export default {
  output: "export",
  basePath: process.env.BASE_PATH ?? "",
  trailingSlash: true,
  reactStrictMode: true,
  images: { unoptimized: true },
  poweredByHeader: false,
};
