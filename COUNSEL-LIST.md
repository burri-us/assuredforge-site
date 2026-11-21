# Lane LEG handoff (site-legal-review, from w11-site-redesign b3bdb8d). Not pushed, not deployed.
Not served: root file, not under public/ or pages/.

## Done (factual fixes only)
- product-privacy: added CL-53 "connects only to services you set up" sentence (same wording as Editions/FAQ).
- ai-use-policy: AI-on intro now says AI is being validated (AI claims are Being validated, not proven).
- design-partner-agreement: cohort wording now matches CL-23/O-3 (individuals and small teams on desktop; organizations on a waitlist, hosted planned); exit "exported then deleted" labelled hosted (planned), desktop per CL-22D.
- evaluation-licence: termination clause no longer says data is exported then deleted (desktop records stay on the PC, CL-22D/CL-53).
- manufacturing, solutions/regulated: added "waitlist, not a current offer" line; manufacturing heading "What it gives you today" -> "What the platform does today".
- privacy, terms, subprocessors, acceptable-use: no factual mismatch found (GitHub Pages, IONOS, no cookies/scripts verified in code).
- Build: npm ci + npm run build pass (31 pages, site check passed).

## Marker convention
All eight legal pages use LegalPage, which shows the banner "DRAFT — COUNSEL REVIEW" (components/Blocks.tsx). scripts/check.mjs exempts DRAFT and [Counsel...] items only on pages with that exact banner text; so the legal pages do NOT block publish. Not renamed ("Draft for counsel review" would break the check regex). SITE_PUBLISH=1 would still fail on 15 markers on 7 non-legal pages (placeholders/W8 on home and product pages, "[RAM: CONFIRM AT W8]" and "[counsel review: age line]" on solutions/individuals): outside this lane.

## Next step
Counsel review of the list below; then remove banner and set effective date.

## For counsel (page: exact text)
- privacy: "[Counsel to confirm the rights text for the jurisdictions we serve.]"; email retention "24 months"; "tell design partners by email" for changes; no children/age statement (CL-52 age line is under counsel review).
- privacy/product-privacy: CL-53 says desktop connects to services the user sets up; privacy notice and subprocessors not yet aligned (DEC-447 S-98, counsel pack). Support-bundle 90-day deletion vs "deletes" not in notice.
- terms: "[Counsel to set the exact limit and the carve-outs the law requires.]"; "[Counsel to confirm venue and any consumer-law exceptions.]"; "continued use after that date means you accept it".
- subprocessors: "[Counsel to set the notice period.]"; AI.modelPath names Anthropic on this trust page (CL-48 limits naming to technical pages, quick start, FAQ; comment says kept as-is) - owner/counsel to confirm if AI switch goes on; whether user-chosen providers/git remotes/connectors are subprocessors.
- ai-use-policy: "Tierra does not train models on your data. [Counsel and owner to confirm...]" (no register claim); "You can set a run budget and a monthly limit..." (CL-49, Being validated).
- acceptable-use: "[Counsel to set notice and cure terms.]"; "We may suspend access that breaks this policy."
- evaluation-licence: confidentiality, feedback rights, "as is" warranty, "[Counsel to set the limit and carve-outs.]", Michigan law/venue, and my new termination text.
- design-partner-agreement: "[Owner decision: pricing intent is not stated here.]" (DEC-438 pricing wording exists: free during programme, founding pricing, 30 days' notice); "production data needs separate written authorization"; desktop-exit CL-22D text needs counsel (T-508).
- All eight: "Effective date: to be set when counsel approves. Draft of 2026-11-20." (LegalPage).

## Interim wording filled (owner decision DEC-462, 21 November 2026), for the formal legal review
The legal pages now carry standard interim wording instead of counsel markers, for a free, non-commercial evaluation programme with known design partners. Each page shows this label instead of the "DRAFT — COUNSEL REVIEW" banner:
> Interim version of 21 November 2026, for the design-partner programme. Pending formal legal review. If this page and your signed design-partner agreement differ, the agreement governs.

On all nine LegalPage pages, the date line "Effective date: to be set when counsel approves. Draft of 2026-11-20." now reads "Effective 21 November 2026 (interim version)." The nine pages are /terms/, /privacy/, /legal/evaluation-licence/, /legal/acceptable-use/, /legal/design-partner-agreement/, /trust/ai-use-policy/, /trust/subprocessors/, /trust/product-privacy/ and /trust/accessibility/.

Every clause filled or changed, with its page and exact wording:

- **/legal/evaluation-licence/, Scope** (assessor change, 21 November 2026; was: "... by the named licensee only, on the licensee's own machines.")
  > A non-exclusive, non-transferable licence to install and use the kit for evaluation, by the named licensee only, on the licensee's own PC, one installation per licence (a replacement PC is covered through backup and restore).
- **/legal/evaluation-licence/, Confidentiality** (was: "A mutual non-disclosure agreement is available where required. [Counsel to align this clause.]")
  > Each party keeps confidential the non-public information it receives from the other in the evaluation, uses it only for the evaluation, and shares it only with people who need it for that purpose and are bound to keep it confidential. This does not apply to information that is public, that the recipient already had or develops independently, or that it receives lawfully from someone else, or to disclosure the law requires. A separate mutual non-disclosure agreement is available where required; if one is signed, it governs confidentiality.
- **/legal/evaluation-licence/, Feedback** (was: "Feedback you give may be used by Tierra LLC to improve the product without obligation. [Counsel to set the rights wording.]")
  > Giving feedback is your choice. If you give Tierra LLC feedback, suggestions or ideas about AssuredForge, you grant Tierra LLC a free, worldwide, perpetual and irrevocable licence to use them to improve and develop the product, without obligation or payment to you. This gives Tierra LLC no right to your records or to your confidential information.
- **/legal/evaluation-licence/, Warranty disclaimer** (was: "The kit is provided "as is" for evaluation, without warranties. [Counsel to finalize.]")
  > The kit is provided "as is" and "as available" for evaluation, without warranties of any kind, express or implied, including any warranty of merchantability, fitness for a particular purpose, title or non-infringement, to the extent the law allows. Tierra LLC does not promise that the kit will be free of errors or work without interruption.
- **/legal/evaluation-licence/, Limit of liability** (was: "[Counsel to set the limit and carve-outs.]")
  > To the extent the law allows, Tierra LLC is not liable for indirect, incidental, special, consequential or punitive damages, or for loss of profits, revenue, data or goodwill, arising from the evaluation or the kit. Tierra LLC's total liability for all claims arising from the evaluation or the kit is limited to the greater of the amounts you paid Tierra LLC for the kit (none during the program) and USD 100. Nothing in this licence limits liability that the law does not allow to be limited.
- **/legal/evaluation-licence/, Termination and data deletion** (was: "Either party may end the evaluation. On exit, ... [Counsel to align with the design partner agreement.]")
  > Either party may end the evaluation at any time by written notice; email is enough. The licence also ends when its term ends. On exit, the desktop edition leaves your records on your own PC; the export and deletion steps are in the design partner agreement summary. The confidentiality, feedback, warranty, liability and governing-law clauses continue after the evaluation ends.
- **/legal/evaluation-licence/, Governing law and courts** (heading was "Governing law"; text was "The laws of the State of Michigan, USA. [Counsel to confirm venue.]")
  > This licence is governed by the laws of the State of Michigan, USA, without regard to its conflict-of-law rules. Disputes are decided by the state or federal courts located in Michigan, and each party accepts their jurisdiction. Where the law of the place you live gives you, as a consumer, protections or a right to sue in your local courts that cannot be waived, this clause does not remove them.
- **/legal/evaluation-licence/, description and intro**: "Draft evaluation licence ..." became "Evaluation licence for the AssuredForge desktop kit given to design partners."; "This draft covers the evaluation licence for the desktop kit." became "This licence covers the desktop kit given to design partners for evaluation."
- **/legal/design-partner-agreement/, Data and exit** (was: "... For the desktop edition see the next section. [Counsel to finalize the contract wording.]")
  > The program starts with synthetic or test data; production data needs separate written authorization. Hosted edition (planned): on exit, your data is exported to you, then deleted. For the desktop edition see the next section. The signed agreement sets out the details.
- **/legal/design-partner-agreement/, Confidentiality** (was: "A mutual NDA is available where required.")
  > Each party keeps the other's non-public information confidential, as set out in the evaluation licence. A mutual NDA is available where required.
- **/legal/design-partner-agreement/, Ending participation** (new section)
  > Either party may end participation at any time by written notice; email is enough. On exit, the steps above for your edition apply.
- **/legal/design-partner-agreement/, Warranty, liability and law** (new section)
  > The evaluation licence sets out the warranty disclaimer, the limit of liability, and Michigan law and courts. They apply to the program.
- **/legal/design-partner-agreement/, After the program** (assessor change 2, owner decision 2026-11-21; was: "Pricing after the program is not set.", and before that "[Owner decision: pricing intent is not stated here.]")
  > Free during the program. Founding partners get founding pricing, at least 30 days' notice before any fee, and never an automatic charge.
  - Spelling only: "programme" in DEC-438's wording is written "program" (US spelling, as on the rest of the site); the wording is otherwise unchanged (owner, 2026-11-21). The same sentence on the FAQ and /solutions/individuals/ gets the same spelling.
  - Source: DEC-438 (beside CL-55 in the claims register). The same sentence is in the interim design-partner agreement, Sec. 1.3 (DESIGN-PARTNER-AGREEMENT-INTERIM.md).
- **/legal/acceptable-use/, Enforcement** (was: "We may suspend access that breaks this policy. [Counsel to set notice and cure terms.]")
  > If use breaks this policy, we may suspend or end the access we provide: support, and new or renewed licences. Unless the breach is serious, we first tell you by email what is wrong and give you a reasonable time to fix it. We may act at once for unlawful use, a security threat or harm to others. In the desktop edition your records stay on your own PC, under your control.
- **/terms/, Limit of liability** (was: "To the extent the law allows, Tierra LLC is not liable for loss arising from use of, or inability to use, this website. [Counsel to set the exact limit and the carve-outs the law requires.]")
  > To the extent the law allows, Tierra LLC is not liable for indirect, incidental, special, consequential or punitive damages, or for loss of profits, data or goodwill, arising from use of, or inability to use, this website. Tierra LLC's total liability for any claim relating to this website is limited to the greater of the amounts you paid us to use it (none: the website is free) and USD 100. Nothing in these terms limits liability that the law does not allow to be limited.
- **/terms/, Governing law and courts** (heading was "Governing law"; text was "These terms are governed by the laws of the State of Michigan, USA. [Counsel to confirm venue and any consumer-law exceptions.]")
  > These terms are governed by the laws of the State of Michigan, USA, without regard to its conflict-of-law rules. Disputes are decided by the state or federal courts located in Michigan, and each party accepts their jurisdiction. Where the law of the place you live gives you, as a consumer, protections or a right to sue in your local courts that cannot be waived, this clause does not remove them.
- **/privacy/, Your rights and complaints** (was: "... You may also complain to your local data protection authority. [Counsel to confirm the rights text for the jurisdictions we serve.]")
  > Depending on where you live, you may have rights to access, correct, delete or object to our use of personal data we hold about you. Write to info@assuredforge.com. We answer within one month, may first need to confirm who you are, and do not charge for a reasonable request. You may also complain to your local data protection authority.
- **/trust/subprocessors/, Changes** (was: "We update this page when the list changes and tell design partners of a change before it takes effect. [Counsel to set the notice period.]")
  > We update this page when the list changes and tell design partners by email at least 30 days before a new subprocessor starts, unless a change is needed sooner for security or legal reasons; then we tell them as soon as we can.
- **/trust/ai-use-policy/, Training became "Your prompts and project content"** (was: "Tierra does not train models on your data. [Counsel and owner to confirm this wording; ...]"). The training sentence has no claims-register entry, so it is replaced by the CL-47 wording. The section shows only when the AI switch is on (components/AiWording.tsx).
  > Prompts and project content for a run go to the provider you chose, under your own agreement with that provider; Tierra does not receive them unless you send us a support bundle that includes them.
- **/trust/ (Trust Center) and /security/**: "Items marked draft await counsel review." became "Items marked interim are pending formal legal review."; the "Draft, counsel review" badge became "Interim"; "The legal texts there are drafts awaiting counsel review." became "The legal texts there are interim versions, pending formal legal review."

### Points chosen for the interim text that counsel should confirm
- Liability cap: the greater of the amounts paid (none) and USD 100 (owner instruction). Excluded damage types: indirect, consequential, lost profits and data. A consumer carve-out ("liability the law does not allow to be limited"; non-waivable local protections and courts).
- Courts: state or federal courts located in Michigan, with a consumer carve-out for the individuals track.
- Confidentiality has no survival period stated: it continues after the evaluation ends (termination clause) with no end date. Counsel to set a period, or keep it without one.
- Feedback licence: free, worldwide, perpetual and irrevocable, limited to improving and developing the product.
- Acceptable use: "a reasonable time to fix it" (no number); Tierra may stop support and decline new or renewed licences. No remote shut-off is claimed.
- Privacy: "We answer within one month", identity check, no charge for a reasonable request.
- Subprocessors: 30 days' notice before a new subprocessor, with an exception for security and legal reasons.
- /solutions/individuals/ is not a legal page and still shows "[counsel review: age line]" (CL-52, claims register text, under counsel review). It is still a publish marker (see HANDOFF.md).
