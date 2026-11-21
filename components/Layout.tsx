import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import type { ReactNode } from "react";
import { LogoMark } from "./Logo";
import site from "../site.json";

const NAV = [
  { href: "/platform/", label: "Product", also: ["/product"] },
  { href: "/solutions/individuals/", label: "Solutions", also: ["/solutions"] },
  { href: "/industries/", label: "Industries" },
  { href: "/deployment/", label: "Editions" },
  { href: "/design-partners/", label: "Design partners" },
  { href: "/demo/", label: "Demo" },
  { href: "/resources/", label: "Resources", also: ["/faq"] },
  { href: "/trust/", label: "Trust", also: ["/security", "/privacy"] },
  { href: "/about/", label: "About", also: ["/contact"] },
];

// Mega-footer: Product, Solutions, Resources, Trust, Company, Legal (website review Sec. 2 item 8).
const FOOTER: { title: string; links: [string, string][] }[] = [
  { title: "Product", links: [["Overview", "/platform/"], ["AI-assisted delivery", "/product/ai-assisted-delivery/"], ["Governance and approvals", "/product/governance/"], ["Traceability", "/product/traceability/"], ["Audit and evidence", "/product/audit/"], ["Integrations", "/product/integrations/"], ["Works with", "/works-with/"]] },
  { title: "Solutions", links: [["Individuals and small teams", "/solutions/individuals/"], ["Industries", "/industries/"], ["Editions and deployment", "/deployment/"]] },
  { title: "Resources", links: [["Resources hub", "/resources/"], ["Demo", "/demo/"], ["FAQ", "/faq/"], ["Design partners", "/design-partners/"]] },
  { title: "Trust", links: [["Trust Center", "/trust/"], ["Security", "/security/"], ["Website privacy", "/privacy/"], ["Product privacy notice", "/trust/product-privacy/"], ["AI use policy", "/trust/ai-use-policy/"], ["Subprocessors and model providers", "/trust/subprocessors/"], ["Responsible disclosure", "/trust/disclosure/"], ["Accessibility", "/trust/accessibility/"]] },
  { title: "Company", links: [["About", "/about/"], ["Contact", "/contact/"]] },
  { title: "Legal", links: [["Website terms", "/terms/"], ["Evaluation licence", "/legal/evaluation-licence/"], ["Acceptable use", "/legal/acceptable-use/"], ["Design partner agreement", "/legal/design-partner-agreement/"], ["Third-party notices", "/third-party-notices/"]] },
];

const headerButton =
  "btn btn-secondary";

// Direction A mark with the text wordmark; the link's accessible name is "AssuredForge".
function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2 font-display font-bold text-ink no-underline ${className}`}>
      <LogoMark className="h-[1.4em] w-[1.4em] shrink-0" />
      <span>AssuredForge</span>
    </Link>
  );
}

const SITE = site.origin;

// Tierra bar (design system TierraBar): `bar` background and `bar-ink` text in both themes (the bar does not follow the theme),
// the reversed Tierra wordmark drawn inline (same drawing as tierra-wordmark-reversed.svg v2; colours from tokens, gold = the
// gold token's dark value in both themes), linking to the parent company.
function TierraBar() {
  return (
    <div className="tierra-bar">
      <div className="mx-auto flex h-12 max-w-6xl items-center px-4 sm:px-8">
        <a href="https://tierra-llc.com/" aria-label="Tierra LLC" className="tierra-bar-link">
          <svg viewBox="0 0 150 36" width={150} height={36} aria-hidden={true} focusable={false} className="tierra-wordmark">
            <g fill="none" strokeWidth={4} strokeLinecap="round">
              <path className="tw-ink" d="M5 7h20M15 7v20" />
              <path className="tw-gold" d="M8 31h14" />
            </g>
            <text x={34} y={25} fontSize={20} fontWeight={700} letterSpacing={0.2} className="tw-text">
              Tierra <tspan fontWeight={400}>LLC</tspan>
            </text>
          </svg>
        </a>
      </div>
    </div>
  );
}

// noindex: a page that must never be indexed, whatever the publication switch says (the 404 page). It also has no canonical URL.
// forward: a moved page; it forwards to this site path with a meta refresh and is noindex with no canonical URL (owner
// decision 2026-11-21, /manufacturing/ to /industries/). scripts/seo.mjs leaves it out of the sitemap.
export function Layout({
  title,
  description,
  noindex = false,
  forward,
  children,
}: {
  title: string;
  description: string;
  noindex?: boolean;
  forward?: string;
  children: ReactNode;
}) {
  const { pathname, basePath } = useRouter();
  if (forward) noindex = true;
  // trailingSlash export: every page is served at its path with a trailing slash.
  const canonical = `${SITE}${pathname === "/" ? "/" : `${pathname}/`}`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {noindex ? <meta name="robots" content="noindex" /> : <link rel="canonical" href={canonical} />}
        {forward && <meta httpEquiv="refresh" content={`0; url=${basePath}${forward}`} />}
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
      <TierraBar />
      <header className="border-b border-rule">
        <div className="relative mx-auto max-w-6xl px-4 py-3 sm:px-8 lg:pb-0 lg:flex lg:flex-wrap lg:items-center lg:justify-between lg:gap-x-8 lg:gap-y-1">
          <div className="flex min-h-11 flex-wrap items-center justify-between gap-x-4 gap-y-2 lg:shrink-0">
            <Wordmark className="text-heading-2" />
            {/* WR-05: on narrow screens the call to action and the Menu share one row; the menu is a details disclosure (no script).
                OI-621 (WCAG 2.4.11): the open list sits in the page flow below that row, across the content width, and pushes the
                page down instead of covering it. The button floats left so the Menu summary sits beside it; the list clears both. */}
            <div className="flow-root basis-full lg:hidden">
              <Link href="/design-partners/" className={`${headerButton} float-left mr-2 inline-flex`}>
                Become a design partner
              </Link>
              <details>
                <summary className="inline-flex min-h-11 cursor-pointer items-center rounded-md border border-accent px-4 text-body font-semibold text-ink">
                  Menu
                </summary>
                <nav aria-label="Main (menu)" className="menu-panel">
                  <ul className="grid grid-cols-2 gap-x-4 text-body-sm sm:grid-cols-3">
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
            </div>
          </div>
          <Link href="/design-partners/" className={`${headerButton} hidden lg:inline-flex lg:shrink-0`}>
            Become a design partner
          </Link>
          {/* Two rows from lg up (owner decision 2026-11-21 added Industries; nine items no longer fit beside the wordmark and the
              call to action): wordmark and call to action, then the menu across the full width. The call to action comes
              before the menu in the page order so keyboard focus follows the visual order. */}
          <nav aria-label="Main" className="hidden lg:block lg:basis-full">
            <ul className="lg:flex lg:flex-wrap lg:justify-start lg:gap-x-6 text-body-sm">
              {NAV.map((n) => {
                const root = n.href.replace(/\/$/, "");
                const current = pathname === root || (n.also ?? []).some((p) => pathname === p || pathname.startsWith(`${p}/`));
                return (
                  <li key={n.href}>
                    <Link
                      href={n.href}
                      aria-current={current ? "page" : undefined}
                      className={`flex min-h-11 items-center border-b-2 no-underline ${
                        current ? "border-gold font-medium text-ink" : "border-transparent text-muted hover:text-ink"
                      }`}
                    >
                      {n.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>
      <main id="main" className="mx-auto max-w-6xl px-4 py-12 sm:px-8">
        {children}
      </main>
      <footer className="border-t border-rule bg-surface-alt">
        <nav aria-label="Footer" className="mx-auto grid max-w-6xl gap-8 px-4 pt-8 text-body-sm sm:px-8 sm:grid-cols-3 lg:grid-cols-6">
          {FOOTER.map((col) => (
            <div key={col.title}>
              <h2 className="text-label uppercase tracking-wide text-ink">{col.title}</h2>
              <ul className="mt-2 space-y-1">
                {col.links.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="text-muted no-underline hover:underline">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
        <div className="mx-auto mt-8 grid max-w-6xl gap-6 border-t border-rule px-4 py-8 text-body-sm sm:px-8 text-muted md:grid-cols-2">
          <div>
            <Wordmark className="text-heading-3" />
            <p className="mt-1">© 2026 Tierra LLC · Michigan, USA</p>
            <p className="mt-1"><a href="https://tierra-llc.com/">A product of Tierra LLC</a></p>
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
      <h2>{title}</h2>
      <div className="mt-3 space-y-3 leading-relaxed text-muted">{children}</div>
    </section>
  );
}

export function Title({ children, lead }: { children: ReactNode; lead?: ReactNode }) {
  return (
    <>
      <h1>{children}</h1>
      {lead && <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">{lead}</p>}
    </>
  );
}
