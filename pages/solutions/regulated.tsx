import Link from "next/link";
import { Layout, Title } from "../../components/Layout";

// Owner decision DEC-472 (2), P-15 option A: the Regulated and quality-driven teams page is folded into Industries.
// Forwarding page like /manufacturing/: meta refresh, noindex, no canonical URL, not in sitemap.xml. CL-30 moved to Platform.
export default function Regulated() {
  return (
    <Layout title="Moved to Industries | AssuredForge" description="This page has moved to Industries." forward="/industries/">
      <Title lead={<>This page has moved to <Link href="/industries/">Industries</Link>.</>}>Moved to Industries</Title>
    </Layout>
  );
}
