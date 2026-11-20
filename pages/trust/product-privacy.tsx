import Link from "next/link";
import { LegalPage } from "../../components/Blocks";

// DRAFT — COUNSEL REVIEW. Product privacy notice, desktop edition. CLAIM-UNVERIFIED throughout: facts to be confirmed against the
// shipped kit after W8 (no claims-register 0.1 entry covers them). Bracketed items need the owner or counsel.
export default function ProductPrivacy() {
  return (
    <LegalPage
      title="Product privacy notice (desktop edition)"
      description="Where the data of the AssuredForge desktop edition lives, what goes to a model provider you configure, and what we receive."
      intro="This notice covers the AssuredForge desktop edition provided for the design-partner evaluation."
      sections={[
        { h: "Your data stays on your machine", body: <p>The desktop edition stores your Tenant&apos;s records on your own PC. Tierra LLC does not operate a server that receives them.</p> },
        { h: "What goes to a model provider", body: <p>If you turn on model execution and configure a model source, the prompts and project content needed for a run are sent to the provider you chose, under your own agreement and terms with that provider. We do not receive them. See <Link href="/trust/subprocessors/">subprocessors and model providers</Link>.</p> },
        { h: "Licence check", body: <p>[Owner to confirm: whether the licence is checked online or offline, and what is sent if online.]</p> },
        { h: "Support bundles", body: <p>A support bundle is created and sent only when you choose to send one. [Owner to list what it contains once the support-bundle command is final.] We use it only to resolve your issue.</p> },
        { h: "Retention and deletion", body: <p>Your records stay until you delete them. On exit from the program, we export your data to you and it is then deleted; the contract wording is in the design partner agreement. [Retention of support bundles and email: to be set.]</p> },
        { h: "Contacts", body: <p>Privacy questions: <a href="mailto:info@assuredforge.com">info@assuredforge.com</a>. Support: <a href="mailto:support@assuredforge.com">support@assuredforge.com</a>. Security: <a href="mailto:security@assuredforge.com">security@assuredforge.com</a>.</p> },
      ]}
    />
  );
}
