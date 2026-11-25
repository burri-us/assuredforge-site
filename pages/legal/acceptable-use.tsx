import { LegalPage, Bullets } from "../../components/Blocks";

// Interim version of 21 November 2026 (DEC-462): standard interim wording, pending formal legal review; every filled clause is in COUNSEL-LIST.md.
// Short; applies to the product and the site.
export default function AcceptableUse() {
  return (
    <LegalPage
      title="Acceptable use policy"
      description="What you may not do with the AssuredForge product and website."
      intro="This short policy applies to the product and to the website."
      sections={[
        { h: "You may not", body: <Bullets items={["Break the law or infringe the rights of others.", "Attack, overload or probe the product or website, or bypass a control (see responsible disclosure for how to report issues).", "Share your licence or credentials with anyone who is not the named licensee.", "Use the product to build or release software to cause harm.", "Use AI features to bypass an approval the governance requires (see the AI use policy).", "Redistribute the kit or reverse engineer it, except as the law allows."]} /> },
        { h: "Enforcement", body: <p>If use breaks this policy, we may suspend or end the access we provide: support, and new or renewed licences. Unless the breach is serious, we first tell you by email what is wrong and give you a reasonable time to fix it. We may act at once for unlawful use, a security threat or harm to others. In the desktop edition your records stay on your own PC, under your control.</p> },
      ]}
    />
  );
}

// No client script: the page has no interactive features (page weight, A11Y-PERF-FINDINGS F-3).
export const config = { unstable_runtimeJS: false };
