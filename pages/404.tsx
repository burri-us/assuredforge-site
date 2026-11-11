import Link from "next/link";
import { Layout, Section, Title } from "../components/Layout";

export default function NotFound() {
  return (
    <Layout title="Page not found | AssuredForge" description="The page you are looking for doesn't exist." noindex>
      <Title lead={<>The page you are looking for doesn&apos;t exist. <Link href="/">Go to the home page</Link>.</>}>
        Page not found
      </Title>
      <Section title="Where to go next">
        <ul className="list-disc space-y-2 pl-6">
          <li><Link href="/platform/">Platform</Link>: how AssuredForge governs delivery</li>
          <li><Link href="/design-partners/">Founding Design Partner Program</Link></li>
          <li>Questions: <a href="mailto:info@assuredforge.com">info@assuredforge.com</a></li>
        </ul>
      </Section>
    </Layout>
  );
}
