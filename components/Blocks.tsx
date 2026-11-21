import Link from "next/link";
import type { ReactNode } from "react";
import { Layout, Section, Title } from "./Layout";

export const button = "btn";
export const primary = "btn btn-primary";
export const secondary = "btn btn-secondary";

// Availability label: always text, never colour alone ("available today" or "planned", owner constraint).
export function Status({ kind }: { kind: "today" | "planned" | "partners" }) {
  const label = kind === "today" ? "Available today" : kind === "partners" ? "Available to design partners" : "Planned";
  return (
    <span className="inline-block rounded-sm border border-rule px-2 py-0.5 text-label uppercase tracking-wide text-ink">
      {label}
    </span>
  );
}

// Browser-style frame around a screenshot or a video: three dots and a bar, self-made, no image. Decorative (aria-hidden bar).
export function BrowserFrame({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <figure className="m-0 overflow-hidden rounded-md border border-rule bg-surface">
      <div aria-hidden="true" className="flex items-center gap-1.5 border-b border-rule bg-surface-alt px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-rule" />
        <span className="h-2.5 w-2.5 rounded-full bg-rule" />
        <span className="h-2.5 w-2.5 rounded-full bg-gold" />
      </div>
      {children}
      {label && <figcaption className="sr-only">{label}</figcaption>}
    </figure>
  );
}

// A slot for a real screenshot, captured from a demo Tenant with invented data after the W8 rehearsal.
export function ShotSlot({ title, note }: { title: string; note?: string }) {
  return (
    <BrowserFrame>
      <div
        role="img"
        aria-label={`Screenshot placeholder: ${title}. To be captured after the W8 rehearsal.`}
        className="flex aspect-[16/10] w-full flex-col items-center justify-center bg-surface-alt p-4 text-center"
      >
        <span className="font-semibold text-ink">Screenshot placeholder</span>
        <span className="mt-1 text-sm text-muted">{title}</span>
        <span className="mt-1 text-xs text-muted">{note ?? "Demo Tenant, invented data. Captured after W8."}</span>
      </div>
    </BrowserFrame>
  );
}

// Video-ready slots (owner media plan, W11b). `media` is null until the files exist: the slot then renders a placeholder (which the
// publish check refuses, WR-02). Give it { base: "/media/<name>", poster } to render the native element: MP4 and WebM sources, a VTT
// captions track, a poster, no autoplay, the browser's own controls (play, pause, captions). A loop slot is muted and plays inline;
// because nothing autoplays, prefers-reduced-motion is respected and the poster is what shows until a person presses play.
// Files are self-hosted under /public/media: no third-party player.
export type Media = { base: string; poster: string } | null;
export function VideoSlot({ title, kind, media = null }: { title: string; kind: "walkthrough" | "loop"; media?: Media }) {
  if (!media) {
    return (
      <BrowserFrame>
        <div
          role="img"
          aria-label={`Video placeholder: ${title}. A self-hosted clip, to be recorded after the W8 rehearsal.`}
          className={`flex w-full flex-col items-center justify-center bg-surface-alt p-4 text-center ${kind === "walkthrough" ? "aspect-video" : "aspect-[16/10]"}`}
        >
          <span className="font-semibold text-ink">Video placeholder</span>
          <span className="mt-1 text-sm text-muted">{title}</span>
          <span className="mt-1 text-xs text-muted">
            {kind === "walkthrough" ? "Self-hosted, about 3 minutes, with captions. Recorded after W8." : "Short silent loop with a pause control. Recorded after W8."}
          </span>
        </div>
      </BrowserFrame>
    );
  }
  return (
    <BrowserFrame label={title}>
      <video
        className="aspect-video w-full bg-surface-alt"
        controls
        preload="none"
        playsInline
        muted={kind === "loop"}
        loop={kind === "loop"}
        poster={media.poster}
        aria-label={title}
      >
        <source src={`${media.base}.webm`} type="video/webm" />
        <source src={`${media.base}.mp4`} type="video/mp4" />
        <track kind="captions" src={`${media.base}.vtt`} srcLang="en" label="English" default />
        Your browser cannot play this video.
      </video>
    </BrowserFrame>
  );
}

// Legal pages: the interim label (DEC-462). scripts/check.mjs recognises this exact text.
export function InterimBanner() {
  return (
    <div role="note" className="mb-8 rounded-md border-2 border-gold bg-surface-alt p-4">
      <p className="font-bold text-ink">Interim version of 21 November 2026, for the design-partner program.</p>
      <p className="mt-1 text-sm text-muted">
        Pending formal legal review. If this page and your signed design-partner agreement differ, the agreement governs.
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
      <InterimBanner />
      <Title lead={intro}>{title}</Title>
      <p className="mt-4 text-sm text-muted">Effective 21 November 2026 (interim version).</p>
      {sections.map((s) => (
        <Section key={s.h} title={s.h}>
          {s.body}
        </Section>
      ))}
      <p className="mt-10 text-sm text-muted">
        Questions: <a href="mailto:info@assuredforge.com">info@assuredforge.com</a> · <Link href="/trust/">Trust Center</Link>
      </p>
    </Layout>
  );
}
