import { LegalPage } from "../../components/Blocks";

// DRAFT — COUNSEL REVIEW. Terms from CL-23 (six months, no software license fee) and CL-26 (mutual NDA); the rest is outline for counsel.
export default function EvaluationLicence() {
  return (
    <LegalPage
      title="Evaluation licence (EULA)"
      description="Draft evaluation licence for the AssuredForge desktop kit given to design partners."
      intro="This draft covers the evaluation licence for the desktop kit. The signed agreement and the licence file for the named partner govern."
      sections={[
        { h: "Scope", body: <p>A non-exclusive, non-transferable licence to install and use the kit for evaluation, by the named licensee only, on the licensee&apos;s own machines.</p> },
        { h: "Term and fee", body: <p>Six months from the licence start. No software license fee during the program.</p> },
        { h: "Restrictions", body: <p>No redistribution, sublicensing or reverse engineering except where law allows. Evaluation use only; production use needs a separate written authorization.</p> },
        { h: "Confidentiality", body: <p>A mutual non-disclosure agreement is available where required. [Counsel to align this clause.]</p> },
        { h: "Feedback", body: <p>Feedback you give may be used by Tierra LLC to improve the product without obligation. [Counsel to set the rights wording.]</p> },
        { h: "Warranty disclaimer", body: <p>The kit is provided &quot;as is&quot; for evaluation, without warranties. [Counsel to finalize.]</p> },
        { h: "Limit of liability", body: <p>[Counsel to set the limit and carve-outs.]</p> },
        { h: "Termination and data deletion", body: <p>Either party may end the evaluation. On exit your data is exported to you, then deleted. [Counsel to align with the design partner agreement.]</p> },
        { h: "Governing law", body: <p>The laws of the State of Michigan, USA. [Counsel to confirm venue.]</p> },
      ]}
    />
  );
}
