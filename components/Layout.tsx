import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import type { ReactNode } from "react";
import { LogoMark } from "./Logo";

const NAV = [
  { href: "/platform/", label: "Platform" },
  { href: "/manufacturing/", label: "Manufacturing" },
  { href: "/deployment/", label: "Deployment" },
  { href: "/design-partners/", label: "Design partners" },
  { href: "/security/", label: "Security" },
  { href: "/about/", label: "About" },
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

const SITE = "https://assuredforge.com";

export function Layout({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  const { pathname } = useRouter();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        <div className="mx-auto max-w-5xl px-4 py-3 lg:flex lg:items-center lg:gap-8">
          <div className="flex min-h-11 items-center justify-between gap-4 lg:shrink-0">
            <Wordmark className="text-xl" />
            <Link href="/design-partners/" className={`${headerButton} hidden sm:inline-flex lg:hidden`}>
              Become a design partner
            </Link>
          </div>
          <nav aria-label="Main" className="mt-1 lg:mt-0 lg:flex-1">
            <ul className="grid grid-cols-2 gap-x-4 text-[15px] sm:grid-cols-3 lg:flex lg:flex-wrap lg:justify-end lg:gap-x-5">
              {NAV.map((n) => {
                const current = pathname === n.href.replace(/\/$/, "");
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
      <main id="main" className="mx-auto max-w-5xl px-4 py-12">
        {children}
      </main>
      <footer className="border-t border-rule bg-surface-alt">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 py-8 text-sm text-ink-muted md:grid-cols-2">
          <div>
            <Wordmark className="text-base" />
            <p className="mt-1">© 2026 Tierra LLC · Michigan, USA</p>
          </div>
          <div className="space-y-2 md:text-right">
            <ul className="flex flex-wrap gap-x-5 gap-y-1 md:justify-end">
              <li>Contact: <a href="mailto:info@assuredforge.com">info@assuredforge.com</a></li>
              <li>Support: <a href="mailto:support@assuredforge.com">support@assuredforge.com</a></li>
              <li>Security: <a href="mailto:security@assuredforge.com">security@assuredforge.com</a></li>
            </ul>
            <ul className="flex flex-wrap gap-x-5 gap-y-1 md:justify-end">
              <li><Link href="/privacy/" className="no-underline hover:underline">Privacy</Link></li>
              <li><Link href="/terms/" className="no-underline hover:underline">Terms</Link></li>
              <li><Link href="/security/" className="no-underline hover:underline">Security</Link></li>
            </ul>
          </div>
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
