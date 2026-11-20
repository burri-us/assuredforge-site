import { LegalPage, Bullets } from "../../components/Blocks";

// DRAFT — COUNSEL REVIEW. Short; applies to the product and the site.
export default function AcceptableUse() {
  return (
    <LegalPage
      title="Acceptable use policy"
      description="What you may not do with the AssuredForge product and website."
      intro="This short policy applies to the product and to the website."
      sections={[
        { h: "You may not", body: <Bullets items={["Break the law or infringe the rights of others.", "Attack, overload or probe the product or website, or bypass a control (see responsible disclosure for how to report issues).", "Share your licence or credentials with anyone who is not the named licensee.", "Use the product to build or release software to cause harm.", "Use AI features to bypass an approval or gate (see the AI use policy).", "Redistribute the kit or reverse engineer it, except as the law allows."]} /> },
        { h: "Enforcement", body: <p>We may suspend access that breaks this policy. [Counsel to set notice and cure terms.]</p> },
      ]}
    />
  );
}
