import Link from "next/link";
import { LegalPage } from "../components/Blocks";

// Interim version of 21 November 2026 (DEC-462): standard interim wording, pending formal legal review; every filled clause is in COUNSEL-LIST.md.
// Updates the live website terms (WS-04): liability, governing law, change notice, acceptable use.
export default function Terms() {
  return (
    <LegalPage
      title="Website terms"
      description="Terms of use for the AssuredForge website."
      intro="These terms cover use of assuredforge.com. Use of the product is governed by separate agreements."
      sections={[
        { h: "This website", body: <p>This website is provided by Tierra LLC for information about AssuredForge. Content is provided &quot;as is&quot; without warranties and may change without notice.</p> },
        { h: "No offer or commitment", body: <p>Nothing on this website is an offer, a commitment to features or dates, or a contract. Features are labelled &quot;available today&quot; or &quot;planned&quot;; planned items may change or not happen.</p> },
        { h: "Content", body: <p>The AssuredForge name and the content of this website belong to Tierra LLC. You may link to the website but may not reproduce its content beyond fair use without permission.</p> },
        { h: "Acceptable use of the site", body: <p>Do not attempt to disrupt or probe the site, or use it unlawfully. See the <Link href="/legal/acceptable-use/">acceptable use policy</Link>. To report a vulnerability, see <Link href="/trust/disclosure/">responsible disclosure</Link>.</p> },
        { h: "Limit of liability", body: <p>To the extent the law allows, Tierra LLC is not liable for indirect, incidental, special, consequential or punitive damages, or for loss of profits, data or goodwill, arising from use of, or inability to use, this website. Tierra LLC&apos;s total liability for any claim relating to this website is limited to the greater of the amounts you paid us to use it (none: the website is free) and USD 100. Nothing in these terms limits liability that the law does not allow to be limited.</p> },
        { h: "Governing law and courts", body: <p>These terms are governed by the laws of the State of Michigan, USA, without regard to its conflict-of-law rules. Disputes are decided by the state or federal courts located in Michigan, and each party accepts their jurisdiction. Where the law of the place you live gives you, as a consumer, protections or a right to sue in your local courts that cannot be waived, this clause does not remove them.</p> },
        { h: "Changes", body: <p>We may change these terms. The new version is posted here with its effective date; continued use after that date means you accept it.</p> },
      ]}
    />
  );
}
