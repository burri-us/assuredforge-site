import { LegalPage } from "../../components/Blocks";

// Interim version of 21 November 2026 (DEC-462): standard interim wording, pending formal legal review; every filled clause is in COUNSEL-LIST.md.
// Target only; no conformance claim until an audit exists.
export default function Accessibility() {
  return (
    <LegalPage
      title="Accessibility statement"
      description="Our accessibility target for assuredforge.com and how to report a problem."
      intro="We aim for this website to meet WCAG 2.2 level AA."
      sections={[
        { h: "What we do", body: <p>We check contrast, keyboard use and focus order, heading structure, link names and image alternatives, and we respect the reduced-motion setting. This is a target, not a certification: we have not had an external accessibility audit.</p> },
        { h: "Report a problem", body: <p>If you cannot use part of the site, write to <a href="mailto:info@assuredforge.com">info@assuredforge.com</a> with the page and what went wrong. We reply personally.</p> },
      ]}
    />
  );
}
