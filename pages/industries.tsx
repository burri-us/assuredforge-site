import Link from "next/link";
import { Layout, Title } from "../components/Layout";
import { Bullets, Status } from "../components/Blocks";
import { INDUSTRIES, INDUSTRIES_PAGE, pending } from "../components/Registered";

// Owner decision 2026-11-21: Industries overview replaces the Manufacturing page (/manufacturing/ forwards here).
// Every text comes from components/Registered.ts (approved register entries only); no compliance claims.
export default function Industries() {
  return (
    <Layout title="Industries | AssuredForge" description={INDUSTRIES_PAGE.description ?? pending("industries page description")}>
      <Title lead={INDUSTRIES_PAGE.lead ?? pending("industries page lead")}>Industries</Title>
      <p className="mt-4 max-w-3xl text-muted">{INDUSTRIES_PAGE.shared ?? pending("shared line for organizations")}</p>
      <nav aria-label="Industries on this page" className="mt-8">
        <ul className="flex flex-wrap gap-x-5 gap-y-1 text-body-sm">
          {INDUSTRIES.map((i) => (
            <li key={i.id}>
              <a href={`#${i.id}`} className="inline-flex min-h-11 items-center">{i.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-6 grid gap-6 stack:grid-cols-2">
        {INDUSTRIES.map((i) => (
          <section key={i.id} id={i.id} aria-labelledby={`${i.id}-h`} className="card scroll-mt-6 border-t-[3px] border-t-gold">
            <h2 id={`${i.id}-h`}>{i.name}</h2>
            {i.status && <p className="mt-2"><Status kind={i.status} /></p>}
            <p className="mt-3 leading-relaxed text-muted">{i.summary ?? pending(`${i.id} summary`)}</p>
            {i.points && i.points.length > 0 && <div className="mt-3 text-muted"><Bullets items={i.points} /></div>}
            {INDUSTRIES_PAGE.shared && <p className="mt-3 text-body-sm text-muted">{INDUSTRIES_PAGE.shared}</p>}
          </section>
        ))}
      </div>
      <p className="mt-10">See also: <Link href="/works-with/">Works with</Link> and <Link href="/design-partners/">Design partners</Link>.</p>
    </Layout>
  );
}

// No client script: the page has no interactive features (page weight, A11Y-PERF-FINDINGS F-3).
export const config = { unstable_runtimeJS: false };
