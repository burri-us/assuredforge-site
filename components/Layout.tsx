import Head from "next/head";
import Link from "next/link";
import type { ReactNode } from "react";

const NAV = [
  { href: "/platform/", label: "Platform" },
  { href: "/manufacturing/", label: "Manufacturing" },
  { href: "/deployment/", label: "Deployment" },
  { href: "/design-partners/", label: "Design partners" },
  { href: "/security/", label: "Security" },
  { href: "/about/", label: "About" },
];

export function Layout({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-surface focus:p-2">
        Skip to content
      </a>
      <header className="border-b border-rule">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-4">
          <Link href="/" className="text-xl font-semibold tracking-tight text-ink no-underline">
            AssuredForge
          </Link>
          <nav aria-label="Main">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-ink-muted hover:text-ink">{n.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <main id="main" className="mx-auto max-w-5xl px-4 py-12">
        {children}
      </main>
      <footer className="border-t border-rule bg-surface-alt">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-between gap-4 px-4 py-6 text-sm text-ink-muted">
          <p>© 2026 Tierra LLC</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li><Link href="/privacy/">Privacy</Link></li>
            <li><Link href="/terms/">Terms</Link></li>
            <li><Link href="/security/">Security</Link></li>
            <li><a href="mailto:info@assuredforge.com">info@assuredforge.com</a></li>
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
