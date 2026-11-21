import Link from "next/link";
import { LegalPage } from "../../components/Blocks";
import { AI } from "../../components/AiWording";

// DRAFT — COUNSEL REVIEW. Product privacy notice, desktop edition. CLAIM-UNVERIFIED throughout: facts to be confirmed against the
// shipped kit after W8 (CL-53 Being validated until W8). Bracketed items need the owner or counsel.
export default function ProductPrivacy() {
  return (
    <LegalPage
      title="Product privacy notice (desktop edition)"
      description="Where the data of the AssuredForge desktop edition lives, what leaves your machine, and what we receive."
      intro="This notice covers the AssuredForge desktop edition provided for the design-partner evaluation."
      sections={[
        { h: "Your data stays on your machine", body: <p>The desktop edition stores your Tenant&apos;s records on your own PC, under your control. Tierra LLC does not operate a server that receives them. AssuredForge connects only to the services you set up: {AI.available ? "the model provider of the key you entered and, if you add them, " : "if you add them, "}your own git remote, connectors and sign-in provider. Tierra receives your installation id when you ask for a licence, and prompts or project content only in a support bundle you choose to send.{/* CL-53 (DEC-446), same wording as Editions */}</p> },
        ...(AI.available ? [{ h: "What goes to a model provider", body: <p>If you turn on model execution and enter your own model key, the prompts and project content needed for a run are sent to the provider that key belongs to, under your own agreement and terms with that provider. We do not receive them unless you send us a support bundle that includes them. See <Link href="/trust/subprocessors/">subprocessors and model providers</Link>.</p> }] : []),
        // Licence check: answered from the code, read only (af-int-w1: packages/kernel/afkernel/licence.py, packages/api/afapi/licensing.py).
        // The licence is a signed file verified locally against the trust list installed with the kit ("no network"); states are
        // computed from the time on the PC (never earlier than the last trusted time); grace_days defaults to 30; "No state ever
        // withholds read or export".
        { h: "Licence check", body: <p>The licence check is offline. Your licence is a signed file that the product verifies on your own PC against a list of trusted keys installed with the kit. It needs no network connection and sends nothing to Tierra. To get a licence you send Tierra your installation id. When the licence term ends there is a grace period (30 days by default); after that the product is read-only, and reading and exporting your records always stay available.</p> },
        // Support bundle: no command exists yet; the manual steps are in docs/PARTNER-QUICK-START.md (af-dp-partner-docs), Sec. 9, items 2 and 3.
        { h: "Support bundles", body: <>
          <p>A support bundle is a short set of details you choose to send us when you ask for help. Today you collect it by hand. It contains:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>the text printed by the launcher&apos;s <code>status</code> and <code>doctor</code> commands;</li>
            <li>the product version shown in the Portal footer;</li>
            <li>your Tenant name, the Release id or run number, and the request id shown with an error;</li>
            <li>the time, with your time zone, and what you did before the problem.</li>
          </ul>
          <p>Never send a password, a two-step or recovery code, a setup code, your backup passphrase, your settings file or anything in the secrets folder. We use a bundle only to resolve your issue.</p>
        </> },
        // Retention: DEC-436 W11 (3).
        { h: "Retention and deletion", body: <ul className="list-disc space-y-1 pl-6"><li>Product data stays on your PC under your control, until you delete it. We hold no copy.</li><li>Support bundles are deleted 90 days after the issue they were sent for is closed.</li><li>Email sent to our addresses is kept for 24 months; see the <Link href="/privacy/">website privacy notice</Link>.</li></ul> },
        { h: "Contacts", body: <p>Privacy questions: <a href="mailto:info@assuredforge.com">info@assuredforge.com</a>. Support: <a href="mailto:support@assuredforge.com">support@assuredforge.com</a>. Security: <a href="mailto:security@assuredforge.com">security@assuredforge.com</a>.</p> },
      ]}
    />
  );
}
