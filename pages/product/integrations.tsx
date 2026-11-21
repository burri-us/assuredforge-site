import { Layout, Section, Title } from "../../components/Layout";
import { Status } from "../../components/Blocks";

const ROWS: { name: string; kind: "today" | "planned"; note: string }[] = [
  // CL-17: connectors built; no self-service set-up. Status shown per connector as the review asks.
  { name: "Jira", kind: "today", note: "Exists; set up together, by agreement, during the program." },
  { name: "Confluence", kind: "today", note: "Exists; set up together, by agreement, during the program." },
  { name: "Bitbucket", kind: "today", note: "Exists; set up together, by agreement, during the program." },
  { name: "Azure DevOps", kind: "today", note: "Exists; set up together, by agreement, during the program." },
  { name: "GitHub", kind: "planned", note: "Planned." },
  { name: "GitLab", kind: "planned", note: "Planned." },
  { name: "PTC Windchill", kind: "planned", note: "Planned with design partners." },
];

export default function Integrations() {
  return (
    <Layout title="Integrations | AssuredForge" description="Which connectors exist today and which are planned. AssuredForge is fully usable without any of them.">
      <Title lead="AssuredForge is fully usable without third-party connectors (integrations to outside systems such as Jira or Azure DevOps); they extend it and are never required.">Integrations</Title>
      <Section title="Connectors and their status">
        {/* CL-16, CL-17 */}
        <ul className="divide-y divide-rule border-y border-rule">
          {ROWS.map((r) => (
            <li key={r.name} className="flex flex-wrap items-center gap-x-4 gap-y-1 py-3">
              <span className="w-40 font-semibold text-ink">{r.name}</span>
              <Status kind={r.kind} />
              <span>{r.note}</span>
            </li>
          ))}
        </ul>
        {/* CL-18 */}
        <p>Optional connectors for Jira, Confluence, Bitbucket and Azure DevOps exist. Connecting a partner&apos;s systems is set up together, by agreement, during the program; there is no self-service connector set-up. A connector write into an external tool needs a signed human decision.</p>{/* CL-17, CL-18 verbatim */}
      </Section>
    </Layout>
  );
}
