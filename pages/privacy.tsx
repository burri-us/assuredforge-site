import Link from "next/link";
import { LegalPage } from "../components/Blocks";

// Interim version of 21 November 2026 (DEC-462): standard interim wording, pending formal legal review; every filled clause is in COUNSEL-LIST.md.
// Updates the live website notice (WS-04).
export default function Privacy() {
  return (
    <LegalPage
      title="Privacy notice (website)"
      description="How the AssuredForge website handles personal data: no forms, no analytics, no cookies."
      intro="This notice covers the website assuredforge.com. The product has its own notice: see the product privacy notice."
      sections={[
        { h: "Who we are", body: <p>Tierra LLC (&quot;we&quot;), Michigan, USA. Contact: <a href="mailto:info@assuredforge.com">info@assuredforge.com</a>.</p> },
        { h: "What we collect on this website", body: <p>Nothing directly. The website has no forms, no accounts, no analytics and no cookies.</p> },
        { h: "Hosting", body: <p>The website is hosted by GitHub, Inc. (GitHub Pages). GitHub processes technical data such as your IP address and browser information to deliver the pages and keep the service secure, under the GitHub Privacy Statement. We do not receive or use this data.</p> },
        { h: "Email", body: <p>If you email us, we use your message and address to reply. Email for info@, support@ and security@assuredforge.com is provided by IONOS SE. We keep correspondence for 24 months and then delete it, unless a law requires us to keep it.</p> },
        { h: "Cookies", body: <p>This website sets no cookies and uses no local storage, tracking pixels or third-party scripts. No consent banner is shown because nothing requires consent. If that changes, this notice will change first.</p> },
        { h: "Your rights and complaints", body: <p>Depending on where you live, you may have rights to access, correct, delete or object to our use of personal data we hold about you. Write to <a href="mailto:info@assuredforge.com">info@assuredforge.com</a>. We answer within one month, may first need to confirm who you are, and do not charge for a reasonable request. You may also complain to your local data protection authority.</p> },
        { h: "Changes", body: <p>We post changes on this page with a new effective date and, for a material change, tell design partners by email. We update this notice before adding any form or analytics.</p> },
        { h: "Related", body: <p><Link href="/trust/product-privacy/">Product privacy notice</Link> · <Link href="/trust/subprocessors/">Subprocessors and model providers</Link></p> },
      ]}
    />
  );
}
