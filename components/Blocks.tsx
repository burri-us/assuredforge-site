import Link from "next/link";
import type { ReactNode } from "react";
import { Layout, Section, Title } from "./Layout";

export const button =
  "inline-flex min-h-11 items-center justify-center rounded-md px-5 py-3 font-semibold no-underline transition-colors";
export const primary = `${button} bg-accent text-accent-ink hover:bg-ink`;
export const secondary = `${button} border-2 border-accent text-accent hover:bg-surface-alt`;

// Availability label: always text, never colour alone ("available today" or "planned", owner constraint).
export function Status({ kind }: { kind: "today" | "planned" | "partners" }) {
  const label = kind === "today" ? "Available today" : kind === "partners" ? "Available to design partners" : "Planned";
  return (
    <span className="inline-block rounded border border-rule px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-ink">
      {label}
    </span>
  );
}

// A slot for a real screenshot, captured from a demo Tenant with invented data after the W8 rehearsal.
export function ShotSlot({ title, note }: { title: string; note?: string }) {
  return (
    <div
      role="img"
      aria-label={`Screenshot placeholder: ${title}. To be captured after the W8 rehearsal.`}
      className="flex aspect-[16/10] w-full flex-col items-center justify-center rounded-md border-2 border-dashed border-rule bg-surface-alt p-4 text-center"
    >
      <span className="font-semibold text-ink">Screenshot placeholder</span>
      <span className="mt-1 text-sm text-ink-muted">{title}</span>
      <span className="mt-1 text-xs text-ink-muted">{note ?? "Demo Tenant, invented data. Captured after W8."}</span>
    </div>
  );
}

export function DraftBanner() {
  return (
    <div role="note" className="mb-8 rounded-md border-2 border-gold bg-surface-alt p-4">
      <p className="font-bold uppercase tracking-wide text-ink">DRAFT — COUNSEL REVIEW</p>
      <p className="mt-1 text-sm text-ink-muted">
        This text is a draft for review by counsel. It is not in force, is not legal advice and may change.
      </p>
    </div>
  );
}

export function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc space-y-2 pl-6">
      {items.map((t, i) => (
        <li key={i}>{t}</li>
      ))}
    </ul>
  );
}

// A legal or policy page: draft banner, title, effective-date placeholder, sections.
export function LegalPage({
  title,
  description,
  intro,
  sections,
}: {
  title: string;
  description: string;
  intro: string;
  sections: { h: string; body: ReactNode }[];
}) {
  return (
    <Layout title={`${title} | AssuredForge`} description={description}>
      <DraftBanner />
      <Title lead={intro}>{title}</Title>
      <p className="mt-4 text-sm text-ink-muted">Effective date: to be set when counsel approves. Draft of 2026-11-20.</p>
      {sections.map((s) => (
        <Section key={s.h} title={s.h}>
          {s.body}
        </Section>
      ))}
      <p className="mt-10 text-sm text-ink-muted">
        Questions: <a href="mailto:info@assuredforge.com">info@assuredforge.com</a> · <Link href="/trust/">Trust Center</Link>
      </p>
    </Layout>
  );
}
