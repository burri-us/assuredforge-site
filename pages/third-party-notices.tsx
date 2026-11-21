import { Layout, Section, Title } from "../components/Layout";
import notices from "../components/notices.generated.json";

// Licence texts are read from the pinned font packages at build time (scripts/tokens.mjs), never typed here.
export default function ThirdPartyNotices() {
  return (
    <Layout title="Third-party notices | AssuredForge" description="Licences of the open-source fonts this website ships.">
      <Title lead="This website ships three open-source typefaces from its own server. Each is used under the SIL Open Font License 1.1.">
        Third-party notices
      </Title>
      {notices.map((n) => (
        <Section key={n.family} title={n.family}>
          <p>Package {n.package} {n.version}. Licence: {n.license}.</p>
          <pre className="whitespace-pre-wrap wrap-anywhere rounded-md border border-rule bg-surface-alt p-4 text-code text-ink">{n.text}</pre>
        </Section>
      ))}
    </Layout>
  );
}

// No client script: the page has no interactive features (page weight, A11Y-PERF-FINDINGS F-3).
export const config = { unstable_runtimeJS: false };
