import Link from "next/link";
import { Layout, Title } from "../components/Layout";
import { Status } from "../components/Blocks";
import { AI } from "../components/AiWording";
import { WORKS_WITH, WORKS_WITH_PAGE, pending } from "../components/Registered";

// Owner decision 2026-11-21: what AssuredForge works with, each item with a Supported / Being validated / Planned badge
// (always text, never colour alone). Linked from Platform and the FAQ. Text only from components/Registered.ts.
export default function WorksWith() {
  return (
    <Layout title="Works with | AssuredForge" description={WORKS_WITH_PAGE.description ?? pending("works-with page description")}>
      <Title lead={WORKS_WITH_PAGE.lead ?? pending("works-with page lead")}>Works with</Title>
      <p className="mt-4 max-w-3xl text-body-sm text-muted">{WORKS_WITH_PAGE.badges ?? pending("meaning of the three badges")}</p>
      {WORKS_WITH.filter((g) => !g.aiOnly || AI.available).map((g) => (
        <section key={g.id} id={g.id} aria-labelledby={`${g.id}-h`} className="mt-10 scroll-mt-6">
          <h2 id={`${g.id}-h`}>{g.title}</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-muted">{g.intro ?? pending(`${g.id} introduction`)}</p>
          {g.items && g.items.length > 0 ? (
            <ul className="mt-4 divide-y divide-rule border-y border-rule">
              {g.items.map((it) => (
                <li key={it.name} className="flex flex-col gap-2 py-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                  <div>
                    <p className="font-semibold text-ink">{it.name}</p>
                    {it.note && <p className="mt-1 text-body-sm text-muted">{it.note}</p>}
                  </div>
                  <p className="sm:shrink-0"><Status kind={it.status} /></p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-body-sm text-muted">{pending(`${g.id} items with their badges`)}</p>
          )}
          <p className="mt-3 text-body-sm text-muted">{g.asOf ?? pending(`${g.id} status date and kit release`)}</p>
          {g.limits && g.limits.length > 0 && <ul className="mt-3 list-disc space-y-1 pl-6 text-body-sm text-muted">{g.limits.map((l) => <li key={l}>{l}</li>)}</ul>}
        </section>
      ))}
      <p className="mt-10"><Link href="/platform/">Platform</Link>, <Link href="/product/integrations/">Integrations</Link>, <Link href="/faq/">FAQ</Link></p>
    </Layout>
  );
}

// No client script: the page has no interactive features (page weight, A11Y-PERF-FINDINGS F-3).
export const config = { unstable_runtimeJS: false };
