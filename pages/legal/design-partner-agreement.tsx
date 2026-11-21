import Link from "next/link";
import { LegalPage, Bullets } from "../../components/Blocks";

// Interim version of 21 November 2026 (DEC-462): standard interim wording, pending formal legal review; every filled clause is in COUNSEL-LIST.md.
// Summary only; full text is by agreement. Content: CL-23, CL-24, CL-25, CL-26, CL-22 and CL-22D (register 0.3; counsel review, licence T-508); both audiences named, DEC-439 O-1.
export default function DesignPartnerAgreement() {
  return (
    <LegalPage
      title="Design partner agreement (summary)"
      description="A summary of what the Founding Design Partner Program agreement covers. The full text is by agreement."
      intro="This is a summary only. The full text is provided to selected organizations and signed before onboarding."
      sections={[
        { h: "The program", body: <p>A small founding cohort, six months, no software license fee during the program. The track for individuals and small teams runs on the desktop edition; regulated organizations join a waitlist for the planned hosted edition.</p> },
        { h: "What partners give", body: <Bullets items={["Product feedback.", "Working sessions.", "Requirements validation.", "Pilot participation."]} /> },
        { h: "What partners get", body: <Bullets items={["Early access.", "Priority support from one operator, with no round-the-clock commitment.", "Direct roadmap influence.", "Regular working sessions."]} /> },
        { h: "Data and exit", body: <p>The program starts with synthetic or test data; production data needs separate written authorization. Hosted edition (planned): on exit, your data is exported to you, then deleted. For the desktop edition see the next section. The signed agreement sets out the details.</p> },
        { h: "Desktop edition exit", body: <p>Desktop edition: when the evaluation term ends, your records stay on your PC and you can export them for 30 days. After that, and after a grace period (30 days by default), AssuredForge still opens your records read-only and export stays available; starting new work is refused until a successor licence is installed. <code>launcher uninstall --delete-data</code> removes every AssuredForge record, file and key on your PC after you type a confirmation. {/* CL-22D */}</p> },
        { h: "Confidentiality", body: <p>Each party keeps the other&apos;s non-public information confidential, as set out in the evaluation licence. A mutual NDA is available where required.</p> },
        { h: "Ending participation", body: <p>Either party may end participation at any time by written notice; email is enough. On exit, the steps above for your edition apply.</p> },
        { h: "Warranty, liability and law", body: <p>The <Link href="/legal/evaluation-licence/">evaluation licence</Link> sets out the warranty disclaimer, the limit of liability, and Michigan law and courts. They apply to the program.</p> },
        { h: "After the program", body: <p>Pricing after the program is not set.</p> },
      ]}
    />
  );
}
