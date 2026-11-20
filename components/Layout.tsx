import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import type { ReactNode } from "react";
import { LogoMark } from "./Logo";
import site from "../site.json";

const NAV = [
  { href: "/platform/", label: "Product", also: ["/product"] },
  { href: "/manufacturing/", label: "Solutions", also: ["/solutions"] },
  { href: "/deployment/", label: "Editions" },
  { href: "/design-partners/", label: "Design partners" },
  { href: "/demo/", label: "Demo" },
  { href: "/resources/", label: "Resources", also: ["/faq"] },
  { href: "/trust/", label: "Trust", also: ["/security", "/privacy"] },
  { href: "/about/", label: "About", also: ["/contact"] },
];

// Mega-footer: Product, Solutions, Resources, Trust, Company, Legal (website review Sec. 2 item 8).
const FOOTER: { title: string; links: [string, string][] }[] = [
  { title: "Product", links: [["Overview", "/platform/"], ["AI-assisted delivery", "/product/ai-assisted-delivery/"], ["Governance and approvals", "/product/governance/"], ["Traceability", "/product/traceability/"], ["Audit and evidence", "/product/audit/"], ["Integrations", "/product/integrations/"]] },
  { title: "Solutions", links: [["Manufacturing", "/manufacturing/"], ["Regulated and quality-driven teams", "/solutions/regulated/"], ["Editions and deployment", "/deployment/"]] },
  { title: "Resources", links: [["Resources hub", "/resources/"], ["Demo", "/demo/"], ["FAQ", "/faq/"], ["Design partners", "/design-partners/"]] },
  { title: "Trust", links: [["Trust Center", "/trust/"], ["Security", "/security/"], ["Website privacy", "/privacy/"], ["Product privacy notice", "/trust/product-privacy/"], ["AI use policy", "/trust/ai-use-policy/"], ["Subprocessors and model providers", "/trust/subprocessors/"], ["Responsible disclosure", "/trust/disclosure/"], ["Accessibility", "/trust/accessibility/"]] },
  { title: "Company", links: [["About", "/about/"], ["Contact", "/contact/"]] },
  { title: "Legal", links: [["Website terms", "/terms/"], ["Evaluation licence", "/legal/evaluation-licence/"], ["Acceptable use", "/legal/acceptable-use/"], ["Design partner agreement", "/legal/design-partner-agreement/"]] },
];

const headerButton =
  "min-h-11 items-center rounded-md border-2 border-accent px-4 text-sm font-semibold text-accent no-underline hover:bg-surface-alt";

// Direction A mark with the text wordmark; the link's accessible name is "AssuredForge".
function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2 tracking-tight text-ink no-underline ${className}`}>
      <LogoMark className="h-[1.4em] w-[1.4em] shrink-0" />
      <span>
        Assured<span className="font-bold">Forge</span>
      </span>
    </Link>
  );
}

const SITE = site.origin;

// noindex: a page that must never be indexed, whatever the publication switch says (the 404 page). It also has no canonical URL.
export function Layout({
  title,
  description,
  noindex = false,
  children,
}: {
  title: string;
  description: string;
  noindex?: boolean;
  children: ReactNode;
}) {
  const { pathname } = useRouter();
  // trailingSlash export: every page is served at its path with a trailing slash.
  const canonical = `${SITE}${pathname === "/" ? "/" : `${pathname}/`}`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {noindex ? <meta name="robots" content="noindex" /> : <link rel="canonical" href={canonical} />}
        {!noindex && <meta property="og:url" content={canonical} />}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="AssuredForge" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${SITE}/og.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="AssuredForge: Build anywhere. Deploy anywhere. Govern everywhere." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-surface focus:p-2">
        Skip to content
      </a>
      <header className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-4 py-3 lg:flex lg:items-center lg:gap-8">
          <div className="flex min-h-11 flex-wrap items-center justify-between gap-x-4 gap-y-2 lg:shrink-0">
            <Wordmark className="text-xl" />
            <div className="flex items-center gap-2 lg:hidden">
              {/* WR-05: the call to action stays visible on narrow screens; the menu is a details disclosure (no script). */}
              <Link href="/design-partners/" className={`${headerButton} inline-flex`}>
                Become a design partner
              </Link>
            </div>
          </div>
          <details className="mt-2 lg:hidden">
            <summary className="flex min-h-11 cursor-pointer items-center rounded-md border border-rule px-4 text-sm font-semibold text-ink">
              Menu
            </summary>
            <nav aria-label="Main (menu)" className="mt-1">
              <ul className="grid grid-cols-2 gap-x-4 text-[14px] sm:grid-cols-3">
                {NAV.map((n) => (
                  <li key={n.href}>
                    <Link href={n.href} className="flex min-h-11 items-center text-ink no-underline hover:underline">
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </details>
          <nav aria-label="Main" className="hidden lg:mt-0 lg:block lg:flex-1">
            <ul className="lg:flex lg:flex-wrap lg:justify-end lg:gap-x-4 text-[14px]">
              {NAV.map((n) => {
                const root = n.href.replace(/\/$/, "");
                const current = pathname === root || (n.also ?? []).some((p) => pathname === p || pathname.startsWith(`${p}/`));
                return (
                  <li key={n.href}>
                    <Link
                      href={n.href}
                      aria-current={current ? "page" : undefined}
                      className={`flex min-h-11 items-center border-b-2 no-underline ${
                        current ? "border-gold font-medium text-ink" : "border-transparent text-ink-muted hover:text-ink"
                      }`}
                    >
                      {n.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <Link href="/design-partners/" className={`${headerButton} hidden lg:inline-flex lg:shrink-0`}>
            Become a design partner
          </Link>
        </div>
      </header>
      <main id="main" className="mx-auto max-w-6xl px-4 py-12">
        {children}
      </main>
      <footer className="border-t border-rule bg-surface-alt">
        <nav aria-label="Footer" className="mx-auto grid max-w-6xl gap-8 px-4 pt-8 text-sm sm:grid-cols-3 lg:grid-cols-6">
          {FOOTER.map((col) => (
            <div key={col.title}>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-ink">{col.title}</h2>
              <ul className="mt-2 space-y-1">
                {col.links.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="text-ink-muted no-underline hover:underline">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
        <div className="mx-auto mt-8 grid max-w-6xl gap-6 border-t border-rule px-4 py-8 text-sm text-ink-muted md:grid-cols-2">
          <div>
            <Wordmark className="text-base" />
            <p className="mt-1">© 2026 Tierra LLC · Michigan, USA</p>
          </div>
          <ul className="flex flex-wrap gap-x-5 gap-y-1 md:justify-end">
            <li>Contact: <a href="mailto:info@assuredforge.com">info@assuredforge.com</a></li>
            <li>Support: <a href="mailto:support@assuredforge.com">support@assuredforge.com</a></li>
            <li>Security reports: <a href="mailto:security@assuredforge.com">security@assuredforge.com</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-3 space-y-3 leading-relaxed text-ink-muted">{children}</div>
    </section>
  );
}

export function Title({ children, lead }: { children: ReactNode; lead?: ReactNode }) {
  return (
    <>
      <h1 className="text-4xl font-bold tracking-tight">{children}</h1>
      {lead && <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-muted">{lead}</p>}
    </>
  );
}
