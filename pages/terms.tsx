import Link from "next/link";
import { LegalPage } from "../components/Blocks";

// DRAFT — COUNSEL REVIEW. Updates the live website terms (WS-04): liability, governing law, change notice, acceptable use.
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
        { h: "Limit of liability", body: <p>To the extent the law allows, Tierra LLC is not liable for loss arising from use of, or inability to use, this website. [Counsel to set the exact limit and the carve-outs the law requires.]</p> },
        { h: "Governing law", body: <p>These terms are governed by the laws of the State of Michigan, USA. [Counsel to confirm venue and any consumer-law exceptions.]</p> },
        { h: "Changes", body: <p>We may change these terms. The new version is posted here with its effective date; continued use after that date means you accept it.</p> },
      ]}
    />
  );
}
