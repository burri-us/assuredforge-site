import Link from "next/link";
import { Layout, Title } from "../components/Layout";

// Owner decision 2026-11-21: the Manufacturing page is removed; /manufacturing/ forwards to its section on /industries/.
// GitHub Pages cannot send a redirect, so this page forwards with a meta refresh (allowed by the CSP; no script), is noindex,
// has no canonical URL and is left out of sitemap.xml (scripts/seo.mjs, scripts/check.mjs).
export default function Manufacturing() {
  return (
    <Layout title="Moved to Industries | AssuredForge" description="This page has moved to Industries." forward="/industries/#manufacturing">
      <Title lead={<>This page has moved to <Link href="/industries/#manufacturing">Industries</Link>.</>}>Moved to Industries</Title>
    </Layout>
  );
}

// No client script: the page has no interactive features (page weight, A11Y-PERF-FINDINGS F-3).
export const config = { unstable_runtimeJS: false };
