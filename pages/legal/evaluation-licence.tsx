import { LegalPage } from "../../components/Blocks";

// Interim version of 21 November 2026 (DEC-462): standard interim wording, pending formal legal review; every filled clause is in COUNSEL-LIST.md.
// Terms from CL-23 (six months, no software license fee), CL-26 (mutual NDA) and CL-22D (desktop exit); no other product statement.
export default function EvaluationLicence() {
  return (
    <LegalPage
      title="Evaluation licence (EULA)"
      description="Evaluation licence for the AssuredForge desktop kit given to design partners."
      intro="This licence covers the desktop kit given to design partners for evaluation. The signed agreement and the licence file for the named partner govern."
      sections={[
        { h: "Scope", body: <p>A non-exclusive, non-transferable licence to install and use the kit for evaluation, by the named licensee only, on the licensee&apos;s own machines.</p> },
        { h: "Term and fee", body: <p>Six months from the licence start. No software license fee during the program.</p> },
        { h: "Restrictions", body: <p>No redistribution, sublicensing or reverse engineering except where law allows. Evaluation use only; production use needs a separate written authorization.</p> },
        { h: "Confidentiality", body: <p>Each party keeps confidential the non-public information it receives from the other in the evaluation, uses it only for the evaluation, and shares it only with people who need it for that purpose and are bound to keep it confidential. This does not apply to information that is public, that the recipient already had or develops independently, or that it receives lawfully from someone else, or to disclosure the law requires. A separate mutual non-disclosure agreement is available where required; if one is signed, it governs confidentiality.</p> },
        { h: "Feedback", body: <p>Giving feedback is your choice. If you give Tierra LLC feedback, suggestions or ideas about AssuredForge, you grant Tierra LLC a free, worldwide, perpetual and irrevocable licence to use them to improve and develop the product, without obligation or payment to you. This gives Tierra LLC no right to your records or to your confidential information.</p> },
        { h: "Warranty disclaimer", body: <p>The kit is provided &quot;as is&quot; and &quot;as available&quot; for evaluation, without warranties of any kind, express or implied, including any warranty of merchantability, fitness for a particular purpose, title or non-infringement, to the extent the law allows. Tierra LLC does not promise that the kit will be free of errors or work without interruption.</p> },
        { h: "Limit of liability", body: <p>To the extent the law allows, Tierra LLC is not liable for indirect, incidental, special, consequential or punitive damages, or for loss of profits, revenue, data or goodwill, arising from the evaluation or the kit. Tierra LLC&apos;s total liability for all claims arising from the evaluation or the kit is limited to the greater of the amounts you paid Tierra LLC for the kit (none during the program) and USD 100. Nothing in this licence limits liability that the law does not allow to be limited.</p> },
        { h: "Termination and data deletion", body: <p>Either party may end the evaluation at any time by written notice; email is enough. The licence also ends when its term ends. On exit, the desktop edition leaves your records on your own PC; the export and deletion steps are in the design partner agreement summary. The confidentiality, feedback, warranty, liability and governing-law clauses continue after the evaluation ends.</p> },
        { h: "Governing law and courts", body: <p>This licence is governed by the laws of the State of Michigan, USA, without regard to its conflict-of-law rules. Disputes are decided by the state or federal courts located in Michigan, and each party accepts their jurisdiction. Where the law of the place you live gives you, as a consumer, protections or a right to sue in your local courts that cannot be waived, this clause does not remove them.</p> },
      ]}
    />
  );
}
