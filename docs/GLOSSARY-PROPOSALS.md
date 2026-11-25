# Glossary proposals from the plain-language sweep (draft definitions)

Author: Burri. 2026-11-21. For Kit Notices, who updates the glossary (assessor decisions on PLAIN-LANGUAGE-SWEEP §6, items 7
and 10). Drafts only: the site does not use these definitions until they are in the glossary.

Each definition is written for the desktop audience (DEC-436) in plain words. None adds a claim: each says what a word
means, not what the product does beyond the claims register. Where a definition depends on a fact, the source is named;
"check" marks a fact the glossary owner should confirm.

## 1. New entries (terms the site uses with no glossary or register wording)

| Term | Proposed definition | Where the site uses it | Source or check |
|---|---|---|---|
| Portal | The AssuredForge web application you sign in to in your browser, where you record work, approve and see the records. | Audit, Governance, Resources | Check: the product name used in Help |
| Push, main line | Push: copying the approved Release's code into your main code line, the branch your team treats as the current version. AssuredForge records the push against the approved Release. | Home, Platform, Governance, Traceability | CL-08, CL-11 (recorded against the Release) |
| Governed action | An action the platform records because its rules govern it, such as an approval, a sign-off or a decision. Every governed action is written to the audit chain. | Home, Platform, Audit | CL-05, CL-06 |
| Git remote | The online copy of your code repository (for example on GitHub, GitLab or Bitbucket) that you choose to connect. | Home, Editions and deployment, FAQ | CL-53 (one of the services you set up) |
| Installation id | A code that identifies your AssuredForge installation. You send it to Tierra when you ask for a licence; it does not contain your records. | Home, Editions and deployment, FAQ, Security | CL-53; check: "does not contain your records" |
| Evaluation kit | The AssuredForge download for the design-partner evaluation, sent to you as a single link. | Editions and deployment, Resources | CL-48 ("evaluation kit"); site text (deployment install steps) |
| Launcher | The program in the evaluation kit that checks your PC, starts AssuredForge on it and stops it. | Editions and deployment | DEC-435 S-23 (`launcher check`); check against the Quick Start |
| Docker Desktop | Software from Docker, Inc. that runs the parts of AssuredForge on your Windows PC. You install it yourself; its own licence terms apply. | Individuals, Editions and deployment, FAQ | Site text (deployment, Docker licence paragraph); DEC-435 principles (the launcher never installs Docker) |
| SHA-256 check | A way to confirm that the file you downloaded is exactly the file we published: you compare its SHA-256 fingerprint with the one in the Quick Start. | Editions and deployment, Resources | Site text (deployment install step 2) |
| Windows SmartScreen, code signing | SmartScreen is the Windows warning shown before running a program it does not recognise. Code signing is a publisher's digital signature on a program. The kit is not code-signed during the evaluation, so Windows shows this warning; the Quick Start explains the steps. | Editions and deployment | Site text (deployment install step 3) |
| Container image | A packaged, ready-to-run part of AssuredForge. The same images run on a desktop PC and in the hosted edition. | Editions and deployment, Trust Center, Security | CL-35 (one product, shared test suite); check |
| Single-tenant hosting, air-gapped operation | Single-tenant hosting: an installation run for one organization only. Air-gapped: running with no connection to the internet. Both are future directions, not offers. | Editions and deployment | Site text (deployment, "future directions") |
| Proxies | Company network servers that internet traffic must pass through. | Regulated (hosted edition, planned) | Check: kept only on the organization pages |
| Segregated approvers | A rule that the person who prepared a change cannot approve it; a different person must. | Regulated (hosted edition, planned) | Check against the governance mode definitions |
| Dependency and container image scanning | Automatic checks of the third-party software AssuredForge is built with, and of its container images, for known security problems. | Trust Center, Security | CL-39 |
| External penetration test | A security test in which an outside company tries to break into a system. None is claimed. | FAQ, Trust Center, Regulated | Claims register must-not list |
| security.txt | A standard file on a website that tells security researchers how to report a vulnerability. Ours is at /.well-known/security.txt. | Security, Responsible disclosure | CL-29 |
| Pilot (partner pilot) | A period in which a design partner uses AssuredForge on real work of their own, with agreed goals and our support. | Design partners (organization track) | CL-24; check: the organization-track meaning |
| Quality-system pressure | The need to show, under a quality management system or regulation, what was delivered, who approved it and how it was validated. | Manufacturing | Site text (manufacturing and regulated leads) |
| Delivery lifecycle | The steps from a requirement to its deployment: delivery, checks, approval, push and recorded deployment. | Editions and deployment | CL-08 |

## 2. Changes to existing entries

| Entry | Change | Source |
|---|---|---|
| Founding Design Partner Program | Add the individual and small-team track on the desktop edition; organizations join a waitlist for the hosted edition (planned). The entry still says it is for manufacturing organizations only. | CL-23, CL-52; DEC-439 O-1, O-3 |
| Edition | The owner's two edition names (2026-11-21, sweep item 9): "Desktop edition" and "Hosted edition (planned)". "(planned, on Microsoft Azure)" only on the deployment page. "Cloud edition", "Azure editions" and "customer-hosted" are not used on marketing pages. Industry versions are "AssuredForge for <Industry>", not "Editions". | Owner decision, sweep item 9 |
| Gate | Note: the website does not use "Gate"; it says "the approvals the governance requires" (assessor, sweep item 1; claims register must-not list). | Claims register must-not row |

## 3. Claims register follow-ups (for the register owner)

1. **CL-30** ("on the desktop and Azure editions") and **CL-35** ("two editions (desktop and Azure)") use edition names the
   owner retired from marketing pages. The Regulated page now reads: "Each release passes the readiness suite (one shared
   test suite) on the desktop edition and on the installation that runs our own internal pilot, before it reaches that
   pilot." Please confirm or replace with register wording.
2. **CL-20** is used verbatim on the deployment page under "Hosted edition (planned, on Microsoft Azure)".

## 4. Outcome

Approved with edits on 2026-11-21 (DEC-469). The definitions are now glossary section H (architecture 2ab3fa7) and are used on
the site. The edits: Container image without "The same images run on a desktop PC and in the hosted edition"; Launcher "checks
your PC, installs, starts, updates and stops AssuredForge"; SmartScreen "Until the kit is code-signed, Windows shows this
warning; the Quick Start explains the steps"; Segregated approvers "Where the governance requires it, the person who prepared a
change cannot approve it; a different person must." Not adopted: "AssuredForge for <Industry>" naming (general-purpose
positioning, DEC-468 (12)). CL-30 and CL-35 are revised in the register (§3 item 1 settled).
