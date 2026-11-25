# Plain-language sweep of assuredforge.com

Author: Burri.
Date: 2026-11-21.
Status: report only. No page was changed.

## 1. Scope, sources and method

**Pages swept (20 pages plus the shared header and footer).** Home; Platform (Product overview); Product: AI-assisted delivery, Governance and approvals, Traceability, Audit and evidence, Integrations; Solutions: Individuals and small teams, Manufacturing, Regulated and quality-driven teams; Editions and deployment; Design partners; Demo; Resources; FAQ; Trust Center; Security; Responsible disclosure; About; Contact; 404. The header and footer (`components/Layout.tsx`) are swept once.

**Pages excluded.** The nine legal pages (terms, privacy, legal/evaluation-licence, legal/acceptable-use, legal/design-partner-agreement, trust/ai-use-policy, trust/subprocessors, trust/product-privacy, trust/accessibility), because they are interim legal texts under formal legal review; and third-party-notices, because it is licence text. Two excluded pages were read only as sources of existing site explanations (trust/product-privacy for "support bundle", trust/accessibility for the accessibility target).

**Sources for proposed wording.**
- Claims register: `assuredforge-architecture/research/design-partners/materials/CLAIMS-REGISTER.md`, version 0.3 draft (2026-11-21, with the 2026-11-20 and 2026-11-21 updates). Claim wording and state wording ("Being validated", "planned") are kept.
- Glossary: `assuredforge-architecture/glossary/GLOSSARY.md`.
- Existing site explanations, reused word for word where possible: `pages/platform.tsx:14` (Tenant, Workspace, Portfolio), `pages/platform.tsx:17` (Deliveries), `pages/product/governance.tsx:16-17` (Tenant, Workspace, Portfolio, escalation, "combining the delivered changes"), `pages/index.tsx:34` (one connected record), `pages/deployment.tsx:27-28,33` (virtualization, WSL2, Windows 10), `pages/security.tsx:18` (Tenant data kept separate), `pages/trust/product-privacy.tsx:24` (support bundle), `pages/trust/accessibility.tsx:10` (accessibility target).
- Rules applied: DEC-453 (plain language and progressive disclosure: no internal codes in user-facing text, names not IDs, Help explains rules in words) and the Tierra design system README, section 3 (plain words, no internal codes, sentence case, short, honest; claim only what is proven).

**Method.** Visible text was extracted from each built page in `out/` (scripts, styles and comments removed; aria-label, alt and title attributes kept; meta descriptions read as search-result text). Each sentence was traced to its source file and line under `pages/` or `components/`. A sentence is a finding when a reader from the desktop audience (individual, freelancer, small business owner, DEC-436) would not understand it because of an internal code, a product name not explained on that page at first use, or unexplained jargon. Technical pages (Editions and deployment, technical FAQ answers, Security, Responsible disclosure) may keep jargon that their readers need, if it is explained. Proposed wording uses only the three sources above; where none supports a plain version, the row says "no source wording; owner/register decision needed".

**What `scripts/check.mjs` already enforces.** Its vocabulary check (warning only) flags AI vendor and model names; none of the findings below are vendor names, so nothing here duplicates it. Its marker check (WR-02) lists "placeholder", "W8", "CONFIRM", "CLAIM-", "TODO", "DRAFT" (upper case), "COUNSEL REVIEW" and "[Owner"/"[Counsel" items as warnings, and a publish build (`SITE_PUBLISH=1`) fails on them. The placeholders in section 4 are therefore already blocked from publishing; they are listed only. The check does not catch product names, jargon, or the lower-case "(draft)" labels.

**Internal codes.** No claim id, decision id or other internal code appears in visible text, except "W8" inside the placeholders and the RAM marker (section 4).

Issue types: **PN** product-internal name not explained at first use; **JA** unexplained jargon or abbreviation; **RW** wording that differs from the approved register wording or status (included because it confuses the reader); **IC** internal code (none outside section 4).

## 2. Summary counts

Findings table (section 3): 57 rows. A row that covers the same sentence on several pages is counted once, under the page where its section sits; a row with two types is counted under the first type listed.

| Issue type | Rows |
|---|---|
| PN product-internal name | 20 |
| JA jargon or abbreviation | 33 |
| RW register wording or status | 4 |
| IC internal code (outside placeholders) | 0 |
| Total | 57 |
| Known OI-608 placeholders (section 4, listed only) | 15 slots on 7 pages |

| Page | Rows | | Page | Rows |
|---|---|---|---|---|
| Header and footer | 1 | | Regulated and quality-driven teams | 3 |
| Home | 9 | | Editions and deployment | 9 |
| Platform | 6 | | Design partners | 2 |
| AI-assisted delivery | 1 | | Demo | 1 |
| Governance and approvals | 2 | | Resources | 2 |
| Traceability | 2 | | FAQ | 1 |
| Audit and evidence | 3 | | Trust Center | 2 |
| Integrations | 1 | | Security | 4 |
| Individuals and small teams | 3 | | About | 1 |
| Manufacturing | 2 | | Contact, 404 | 0 |
| | | | Search-result text (meta) | 2 |

Shared rows (same sentence on several pages): 1, 8, 9, 10, 12, 22, 27, 37, 42, 43, 47, 48, 50, 53.

## 3. Findings

Pages in site-navigation order. "Existing site text" means the wording is already on the site at the cited line.

### Header and footer (components/Layout.tsx)

| # | Page | file:line | Current text | Type | Proposed plain wording | Source |
|---|---|---|---|---|---|---|
| 1 | Footer, Trust Center, Responsible disclosure | `components/Layout.tsx:24`; `pages/trust.tsx:11`; `pages/trust/disclosure.tsx:9` | "Responsible disclosure" (link and page title) | JA | Keep the page name, and add its plain purpose where it is a heading: "Responsible disclosure: how to report a vulnerability". The footer label may stay. | Existing site text (`pages/trust.tsx:11`, "How to report a vulnerability.") |

### Home (pages/index.tsx)

| # | Page | file:line | Current text | Type | Proposed plain wording | Source |
|---|---|---|---|---|---|---|
| 2 | Home (hero tag and page title) | `components/AiWording.tsx:64`; `pages/index.tsx:42` | "Software Delivery Governance Platform" | JA | Sentence case: "Software delivery governance platform". "Governance" has no plain definition in any source; the plainest existing explanation is the home heading "Who approved what, and why?" with CL-03. Owner/register decision needed on a plain tagline (see section 6, item 6). | Design system README section 3 (sentence case); CL-02; CL-03 |
| 3 | Home (hero diagram and its description) | `components/FlowDiagram.tsx:22-23`; `components/AiWording.tsx:82-83` | "2. Delivery"; "independent checks run on the integration" | PN | Label "2. Work delivered"; description "...the work is delivered, independent checks run on the combined changes, you approve it, and it is released with the proof recorded." | Existing site text (`components/AiWording.tsx:79` "Work is delivered"; `pages/product/governance.tsx:17` "combining the delivered changes") |
| 4 | Home (How it works, step 1) | `components/AiWording.tsx:79` | "Work is delivered against a Feature, with each Delivery recorded." | PN | "Work is delivered against a Feature (an individual functional unit that is built, tested and delivered), with each Delivery (the code that delivered it) recorded." | Glossary: Feature; existing site text (`pages/manufacturing.tsx:15` "which code delivered it"; `pages/platform.tsx:17`) |
| 5 | Home (How it works, step 2) | `components/AiWording.tsx:80` | "Tests run on the integration in an isolated suite runner, apart from whoever wrote the change." | PN | "Tests run on the combined changes in an isolated suite runner (a disposable place used only for that test run), apart from whoever wrote the change." | CL-36; glossary: Suite Runner ("a disposable, per-run container"); existing site text (`pages/product/governance.tsx:17`) |
| 6 | Home (How it works, step 4) | `pages/index.tsx:27` | "The push and the deployment are recorded against the approved Release..." | PN, JA | "The push and the deployment are recorded against the approved Release (a deployable package of one or more Features), and your records can be exported and verified offline." For "push": no source wording; owner/register decision needed. | Glossary: Release; CL-07, CL-11 |
| 7 | Home (Govern tile) | `pages/index.tsx:33` | "Gates, signed approvals by named people in scoped roles, and release governance enforced by the platform, not by convention." | PN | "The approvals the governance requires, signed by named people whose roles are granted for the whole Tenant (your organization's account), a Workspace or a Portfolio, and release governance enforced by the platform, not by convention." Drop "Gates" (see section 6, item 1). | Claims register must-not row ("say 'the approvals the governance requires'"); CL-13; existing site text (`pages/platform.tsx:14`) |
| 8 | Home, Platform, Audit, Security, Regulated, Manufacturing, Demo | `pages/index.tsx:15,35`; `pages/platform.tsx:20`; `pages/product/audit.tsx:11`; `pages/security.tsx:15`; `pages/solutions/regulated.tsx:19`; `pages/manufacturing.tsx:16`; `pages/demo.tsx:9` | "tamper-evident audit chain" (and "every governed action ... audit chain that you can verify in the Portal") | PN, JA | Explain once per page at first use: "a tamper-evident audit chain (a record of every governed action, whose entries cannot be updated or deleted by any role)". "Portal": see row 18. | Glossary: Audit Chain ("append-only ... record of governed actions"); CL-06; CL-34 |
| 9 | Home, Editions and deployment, FAQ | `pages/index.tsx:119`; `pages/deployment.tsx:19`; `pages/faq.tsx:19` | "...if you add them, your own git remote, connectors and sign-in provider. Tierra receives your installation id when you ask for a licence, and prompts or project content only in a support bundle you choose to send." | JA | "...if you add them, your own git remote, connectors (integrations to outside systems such as Jira or Azure DevOps) and sign-in provider. Tierra receives your installation id when you ask for a licence, and prompts or project content only in what you choose to send us: a support bundle (a short set of details you choose to send us when you ask for help), or feedback with files you attach." For "git remote" and "installation id": no source wording; owner/register decision needed. | CL-53 (incl. the DEC-459 update); glossary: Connector; existing site text (`pages/trust/product-privacy.tsx:24`) |
| 10 | Home, Design partners | `pages/index.tsx:135`; `pages/design-partners.tsx:17` | "A small founding cohort" | JA | "A small founding cohort (the first design partners admitted to the program)" | Glossary: Founding cohort |

### Platform (pages/platform.tsx)

| # | Page | file:line | Current text | Type | Proposed plain wording | Source |
|---|---|---|---|---|---|---|
| 11 | Platform | `pages/platform.tsx:11` | "Every Release moves through recorded stages: Deliveries recorded, integrated with tests run, ... pushed to the main line and deployment recorded." | PN, JA | "Every Release (a deployable package of one or more Features) moves through recorded stages: Deliveries (the commits that implement them) recorded, the delivered changes combined and tests run, user acceptance test (UAT) result recorded, approved with a signed decision, pushed to the main line and deployment recorded." Move the Deliveries explanation here from line 17 (first use). For "pushed to the main line": no source wording; owner/register decision needed. | Glossary: Release; existing site text (`pages/platform.tsx:17`; `pages/product/governance.tsx:17`) |
| 12 | Platform, Traceability | `pages/platform.tsx:16-17`; `pages/product/traceability.tsx:9-11` | "Traceability and the Digital Thread" / "The Digital Thread": "Visions, Requirements, Features, Releases, their Deliveries ..., UAT results, approvals, pushes and deployments in one connected record." | PN | Open with: "The Digital Thread is one connected record from requirement to Release, approval, push and recorded deployment, and back." Then explain at first use: "Visions (business initiatives: the what and why), Requirements (statements of business need that must be satisfied and verified), Features, Releases, their Deliveries (the commits that implement them), ..." | Existing site text (`pages/index.tsx:34`; `pages/platform.tsx:17`); glossary: Lineage / Digital Thread, Vision, Requirement |
| 13 | Platform | `pages/platform.tsx:19` | Heading "Auditability" | JA | "Audit and evidence" | Existing site text (`components/Layout.tsx:21`; `pages/product/audit.tsx:7`) |
| 14 | Platform | `pages/platform.tsx:23` | "Sign-in with Microsoft Entra ID for an installation's own directory." | JA | No source wording; owner/register decision needed (CL-15 is the approved wording). | CL-15 (none plainer) |
| 15 | Platform | `pages/platform.tsx:26` | "AssuredForge is the system of governance and is fully functional without any external work-item system. Connectors ... are built and tested against their contracts; first use with live systems is planned with design partners. Every write a connector proposes is decided by a person." | JA | "AssuredForge is fully usable without third-party connectors. Optional connectors for Jira, Confluence, Bitbucket and Azure DevOps exist; connecting your systems is set up together, by agreement, during the program. A connector write into an external tool needs a signed human decision. GitHub and GitLab are planned; PTC Windchill is planned with design partners." See section 6, item 8, for the status difference. | CL-16; CL-17; CL-18 |
| 16 | Platform | `pages/platform.tsx:28` | Heading "AI assistance (planned)" above "...is being validated..." | RW | "AI assistance (being validated)" | CL-46 state; existing site text (`components/AiWording.tsx:71`) |

### AI-assisted delivery (pages/product/ai-assisted-delivery.tsx)

| # | Page | file:line | Current text | Type | Proposed plain wording | Source |
|---|---|---|---|---|---|---|
| 17 | AI-assisted delivery | `pages/product/ai-assisted-delivery.tsx:11,32` | Status label "Planned" and section heading "Planned", under the lead "...is being validated..." | RW | Status label and heading "Being validated". (The `Status` component in `components/Blocks.tsx:10-11` has no such kind; a code change is needed.) | CL-46 state; existing site text (`components/AiWording.tsx:71`) |

### Governance and approvals (pages/product/governance.tsx)

| # | Page | file:line | Current text | Type | Proposed plain wording | Source |
|---|---|---|---|---|---|---|
| 18 | Governance | `pages/product/governance.tsx:11` | "A Release moves through Feature, Release, Delivery, Integration, UAT (user acceptance testing), Approval, Push and Deployment in the Portal." | PN | Use the stage sentence from row 11 (with its explanations), then "...in the Portal". For "Portal" and "Push": no source wording; owner/register decision needed. | CL-08; glossary: Release, Feature; existing site text (`pages/platform.tsx:11,17`; `pages/product/governance.tsx:17`) |
| 19 | Governance | `pages/product/governance.tsx:7` | "Gates and approvals are enforced by the platform, not by convention." | PN | "The approvals the governance requires are enforced by the platform, not by convention." | Claims register must-not row ("say 'the approvals the governance requires'"); CL-04 |

### Traceability (pages/product/traceability.tsx)

| # | Page | file:line | Current text | Type | Proposed plain wording | Source |
|---|---|---|---|---|---|---|
| 20 | Traceability | `pages/product/traceability.tsx:16` | "Integration runs in an isolated suite runner, and the integration's tree is what the approval and the deployment are checked against." | PN, JA | "Integration (combining the delivered changes) runs in an isolated suite runner (a disposable place used only for that test run), and the combined changes it tested are what the approval and the deployment are checked against." Rewording of an approved claim: register owner to confirm. | CL-36; glossary: Suite Runner; existing site text (`pages/product/governance.tsx:17`) |
| 21 | Traceability | `pages/product/traceability.tsx:17` | "Records are append-only: a change is a new version." | JA | "Records cannot be updated or deleted by any role: a change is a new version." | CL-34; existing site text (`pages/product/audit.tsx:13`) |

### Audit and evidence (pages/product/audit.tsx)

| # | Page | file:line | Current text | Type | Proposed plain wording | Source |
|---|---|---|---|---|---|---|
| 22 | Audit, Regulated | `pages/product/audit.tsx:12`; `pages/solutions/regulated.tsx:19` | "A Tenant can be exported, and the export is verified offline." / "a Tenant export verified offline" | PN | "A Tenant (your organization's account) can be exported, and the export is verified offline." | CL-07; existing site text (`pages/platform.tsx:14`) |
| 23 | Audit | `pages/product/audit.tsx:13` | "Records cannot be updated or deleted by any role; the audit entries are append-only." | JA | "Records, including audit entries, cannot be updated or deleted by any role. A change is a new version." | CL-34 |
| 24 | Audit | `pages/product/audit.tsx:14` | "Tenant isolation is enforced by the database." | JA | "Each Tenant's data is kept separate from every other Tenant's." | CL-33 (meaning); existing site text (`pages/security.tsx:18`) |

### Integrations (pages/product/integrations.tsx)

| # | Page | file:line | Current text | Type | Proposed plain wording | Source |
|---|---|---|---|---|---|---|
| 25 | Integrations | `pages/product/integrations.tsx:18,31` | "AssuredForge is fully usable without third-party connectors..." / "A connector write into an external tool needs a signed human decision. ... there is no self-service connector set-up." | JA | Lead: "...without third-party connectors (integrations to outside systems such as Jira or Azure DevOps); they extend it and are never required." Last paragraph: keep CL-18 as written; for a plainer "write", no source wording; owner/register decision needed. | Glossary: Connector; CL-16; CL-17; CL-18 |

### Individuals and small teams (pages/solutions/individuals.tsx)

| # | Page | file:line | Current text | Type | Proposed plain wording | Source |
|---|---|---|---|---|---|---|
| 26 | Individuals | `pages/solutions/individuals.tsx:27` | "...PC with virtualization turned on, WSL 2, Docker Desktop ... Windows 10 is not supported: it is out of Microsoft support, and Docker Desktop supports only Windows versions within Microsoft's servicing timeline. The free Windows 11 upgrade is named where the PC qualifies." | JA | "...virtualization turned on in the firmware (BIOS or UEFI), WSL 2 (Windows Subsystem for Linux 2), Docker Desktop ... Windows 10 is not supported: Microsoft no longer supports it, and Docker Desktop supports only Windows versions that Microsoft still supports. If your PC qualifies, the upgrade to Windows 11 is free (Settings > Windows Update)." For "Docker Desktop": no source wording (row 31). | CL-54; existing site text (`pages/deployment.tsx:27-28,33`) |
| 27 | Individuals, Design partners | `pages/solutions/individuals.tsx:21`; `components/Positioning.tsx:22` | "...sending a support bundle only when you choose to." | JA | "...sending a support bundle (a short set of details you choose to send us when you ask for help) only when you choose to." | CL-52; existing site text (`pages/trust/product-privacy.tsx:24`) |
| 28 | Individuals | `pages/solutions/individuals.tsx:30-32` | Section "Model usage": "Model usage is billed to you by your own provider; Tierra does not resell, bill or mark up model usage." | JA | No plainer source than CL-52 ("You use your own model key; your provider bills you for its usage."), which the hold wording does not show. Owner/register decision needed (section 6, item 11). | CL-55; CL-52 |

### Manufacturing (pages/manufacturing.tsx)

| # | Page | file:line | Current text | Type | Proposed plain wording | Source |
|---|---|---|---|---|---|---|
| 29 | Manufacturing | `pages/manufacturing.tsx:21` | "Connection to engineering context through a PTC Windchill integration." | JA | "A PTC Windchill connector, planned with design partners." | CL-17 |
| 30 | Manufacturing | `pages/manufacturing.tsx:9`; `pages/manufacturing.tsx:7` (meta) | "building internal software under quality-system pressure" | JA | No source wording; owner/register decision needed. (Acceptable for the manufacturing audience; listed for completeness.) | none |

### Regulated and quality-driven teams (pages/solutions/regulated.tsx)

| # | Page | file:line | Current text | Type | Proposed plain wording | Source |
|---|---|---|---|---|---|---|
| 31 | Regulated | `components/Positioning.tsx:9` (shown at `pages/solutions/regulated.tsx:11`) | "IT checklists, proxies, single sign-on and segregated approvers are planned for the hosted edition." | JA | No source wording for "proxies" or "segregated approvers"; owner/register decision needed. | none |
| 32 | Regulated | `pages/solutions/regulated.tsx:15` | "Each release passes the readiness suite on the desktop and Azure editions before it reaches the pilot." | JA | "Each release passes one shared test suite on both editions (desktop and Azure) before it reaches AssuredForge's own internal pilot." Rewording of an approved claim: register owner to confirm. | CL-30; CL-35; CL-20 |
| 33 | Regulated | `pages/solutions/regulated.tsx:15` | "A governed release path from Feature to recorded Deployment." | PN | "A governed release path from a Feature (an individual functional unit that is built, tested and delivered) to its recorded deployment." | CL-08; glossary: Feature |

### Editions and deployment (pages/deployment.tsx)

| # | Page | file:line | Current text | Type | Proposed plain wording | Source |
|---|---|---|---|---|---|---|
| 34 | Editions and deployment | `pages/deployment.tsx:11` | "AssuredForge governs the delivery lifecycle, not the place your software runs. Your deployment step reports each deployment back, and the Release's record shows where and when the approved change was deployed." | JA, PN | Add the edition explanation first: "One product, two editions (desktop and Azure), one shared test suite that must pass on both." For "delivery lifecycle" and "your deployment step reports each deployment back": no source wording; owner/register decision needed. Release: as row 6. | CL-35; glossary: Release |
| 35 | Editions and deployment | `components/AiWording.tsx:85` (shown at `pages/deployment.tsx:47`) | "Create your Tenant and sign in." | PN | "Create your Tenant (your organization's account) and sign in." | Existing site text (`pages/platform.tsx:14`) |
| 36 | Editions and deployment | `pages/deployment.tsx:29` | "Docker Desktop, in a supported version." | JA | No source wording for what Docker Desktop is; owner/register decision needed. | none |
| 37 | Editions and deployment, Resources | `pages/deployment.tsx:44`; `pages/resources.tsx:12` | "check its SHA-256 against the list in the Quick Start" / "the SHA-256 list" | JA | No source wording; owner/register decision needed. | none |
| 38 | Editions and deployment | `pages/deployment.tsx:45` | "Start the launcher. The Quick Start explains the Windows SmartScreen steps; the kit is not code-signed during the evaluation." | JA | No source wording for "launcher", "SmartScreen" or "code-signed"; owner/register decision needed. | none |
| 39 | Editions and deployment | `pages/deployment.tsx:55` | "Cloud edition on Microsoft Azure ... It runs AssuredForge's own internal pilot today. A hosted edition is planned..." | PN | Keep CL-20; name editions consistently (section 5, "edition names"). | CL-20 |
| 40 | Editions and deployment | `pages/deployment.tsx:56` | "Customer-hosted in your own cloud or data center, from the same images" | JA | No source wording for "images"; owner/register decision needed. | none |
| 41 | Editions and deployment | `pages/deployment.tsx:58` | "Dedicated single-tenant hosting and air-gapped operation are future directions." | JA | No source wording; owner/register decision needed. | none |
| 42 | Editions and deployment, FAQ | `pages/deployment.tsx:43`; `pages/faq.tsx:23` | "install WSL2 and Docker Desktop" / FAQ "virtualization, WSL2, Docker Desktop" | JA | FAQ: "virtualization turned on, WSL2 (Windows Subsystem for Linux 2), Docker Desktop, ..." | CL-54; existing site text (`pages/deployment.tsx:28`) |

### Design partners (pages/design-partners.tsx)

| # | Page | file:line | Current text | Type | Proposed plain wording | Source |
|---|---|---|---|---|---|---|
| 43 | Design partners, FAQ | `pages/design-partners.tsx:22`; `pages/faq.tsx:52` | "First cohort begins once participating organizations have been selected." / "the first cohort begins once organizations have been selected." | RW | "Applications open now. First cohort begins once participants have been selected." (An individual reading "organizations" may think the program is not for them.) | CL-27 |
| 44 | Design partners | `components/Positioning.tsx:40` | "Participation in a pilot." | PN | No source wording for what a partner pilot involves; owner/register decision needed. | CL-24 (none plainer) |

### Demo (pages/demo.tsx)

| # | Page | file:line | Current text | Type | Proposed plain wording | Source |
|---|---|---|---|---|---|---|
| 45 | Demo | `pages/demo.tsx:6-7` | Screenshot captions "Requirement and Feature with the Digital Thread"; "A Release with Deliveries and test results" | PN | The page has no explanation of these names. Add one line under "Screenshots": "The Digital Thread is one connected record from requirement to Release, approval, push and recorded deployment, and back." | Existing site text (`pages/index.tsx:34`) |

### Resources (pages/resources.tsx)

| # | Page | file:line | Current text | Type | Proposed plain wording | Source |
|---|---|---|---|---|---|---|
| 46 | Resources | `pages/resources.tsx:13` | "Help is built into the Portal: task guides, role guides, troubleshooting and Help for this page." | PN, RW | "Help is built into the Portal: task guides, role guides, troubleshooting, and "Help for this page"." (Quote marks show it is a button name.) For "Portal": no source wording (section 6, item 7). | CL-31 |
| 47 | Resources, Editions and deployment | `pages/resources.tsx:12,14`; `pages/deployment.tsx:44-45` | "Delivered with the kit" | JA | "Delivered with the evaluation kit (the download we send you a single link to)" | CL-48 ("evaluation kit"); existing site text (`pages/deployment.tsx:44`) |

### FAQ (pages/faq.tsx)

| # | Page | file:line | Current text | Type | Proposed plain wording | Source |
|---|---|---|---|---|---|---|
| 48 | FAQ, Trust Center, Regulated | `pages/faq.tsx:48`; `pages/trust.tsx:30`; `pages/solutions/regulated.tsx:21` | "No certification (such as SOC 2 or ISO 27001) and no external penetration test is claimed." | JA | Keep (it is the register's must-not statement and names the standards as examples). For "external penetration test": no source wording; owner/register decision needed. | Claims register must-not row |

### Trust Center (pages/trust.tsx)

| # | Page | file:line | Current text | Type | Proposed plain wording | Source |
|---|---|---|---|---|---|---|
| 49 | Trust Center | `pages/trust.tsx:12` | "Our WCAG 2.2 AA target." | JA | "Our accessibility target: we aim for this website to meet WCAG 2.2 level AA." | Existing site text (`pages/trust/accessibility.tsx:10`) |
| 50 | Trust Center, Security | `pages/trust.tsx:30`; `pages/security.tsx:19` | "Not claimed: ... [Available today] Dependency and container image scanning, and a structured internal security review." | JA | Put the "Available today" item in its own paragraph after the "Not claimed" sentence, so the label is not read as part of what is not claimed. For "dependency and container image scanning": no source wording; owner/register decision needed. | CL-39 |

### Security (pages/security.tsx)

| # | Page | file:line | Current text | Type | Proposed plain wording | Source |
|---|---|---|---|---|---|---|
| 51 | Security | `pages/security.tsx:16` | "Scoped, role-based authorization enforced by the platform." | JA | "Roles are granted for the whole Tenant (your organization's account), a Workspace (a separate space inside it, for example for one client) or a Portfolio (a long-lived product line or initiative), and enforced by the platform; a revoked role is refused at once." | CL-13; existing site text (`pages/platform.tsx:14`) |
| 52 | Security | `pages/security.tsx:18` | "Each Tenant's data is kept separate from every other Tenant's." | PN | "Each Tenant's (organization account's) data is kept separate from every other Tenant's." | Existing site text (`pages/platform.tsx:14`) |
| 53 | Security, Responsible disclosure | `pages/security.tsx:26`; `pages/trust/disclosure.tsx:12` | "Our security.txt has the details." / "Details: security.txt." | JA | No source wording for "security.txt"; owner/register decision needed. | none |
| 54 | Security | `pages/security.tsx:36-37` | "The desktop edition keeps your data on your own machine. Tierra receives nothing unless you send a support bundle." | RW | "In the desktop edition your records stay on your own PC, under your control. ... Tierra receives your installation id when you ask for a licence, and prompts or project content only in what you choose to send us: a support bundle (a short set of details you choose to send us when you ask for help), or feedback with files you attach." (Current text says "nothing", which CL-53 does not support; section 6, item 4.) | CL-53; existing site text (`pages/trust/product-privacy.tsx:24`) |

### About (pages/about.tsx)

| # | Page | file:line | Current text | Type | Proposed plain wording | Source |
|---|---|---|---|---|---|---|
| 55 | About | `pages/about.tsx:10-11` | "...focused on software delivery governance, traceability and audit-ready release management." | JA | Keep: it is the approved company statement (CL-28, Decided). A plainer version needs a register decision (section 6, item 6). | CL-28 |

### Search-result text (meta descriptions)

| # | Page | file:line | Current text | Type | Proposed plain wording | Source |
|---|---|---|---|---|---|---|
| 56 | Audit | `pages/product/audit.tsx:6` | "A tamper-evident audit chain you can verify, and a Tenant export that is verified offline." | PN | "A tamper-evident audit chain you can verify, and an export of your organization's records that is verified offline." | CL-06; CL-07; existing site text (`pages/platform.tsx:14,20`) |
| 57 | Governance | `pages/product/governance.tsx:6` | "Release stages, signed approvals by named people in scoped roles, and escalations decided by a person." | JA | "Release stages, signed approvals by named people holding the required role, and escalations decided by a person." | CL-05; CL-10 |

## 4. Known OI-608 placeholders (list only)

All are already refused by a publish build (`scripts/check.mjs`, marker check). The shared text comes from `components/Blocks.tsx:40,43,45` (screenshot slot), `components/Blocks.tsx:63,66,69` (video slot) and `components/Measured.tsx:11` (RAM marker).

| Page | file:line | Visible placeholder |
|---|---|---|
| Home | `pages/index.tsx:22-29,88` | Four video slots: "Video placeholder ... Short silent loop with a pause control. Recorded after W8." (aria-label "... to be recorded after the W8 rehearsal") for: a Feature with its linked Requirement and Deliveries; a Release with its Deliveries and test results; the approval record with a signature; the Release record and the evidence export |
| Governance | `pages/product/governance.tsx:21` | "Screenshot placeholder: The approval record ... Demo Tenant, invented data. Captured after W8." |
| Traceability | `pages/product/traceability.tsx:20` | "Screenshot placeholder: The Digital Thread for one Release ... Captured after W8." |
| Audit | `pages/product/audit.tsx:18` | "Screenshot placeholder: The audit chain check and the export ... Captured after W8." |
| Individuals | `pages/solutions/individuals.tsx:27`; `components/Measured.tsx:11` | "[RAM: CONFIRM AT W8]" |
| Editions and deployment | `pages/deployment.tsx:49` | "Screenshot placeholder: The launcher and first sign-in ... Captured after W8." |
| Demo | `pages/demo.tsx:21,25` | One video slot ("Three-minute walkthrough ... Self-hosted, about 3 minutes, with captions. Recorded after W8.") and five screenshot slots (Requirement and Feature with the Digital Thread; A Release with Deliveries and test results; The signed approval; The audit chain check; The evidence export) |

Also visible, not a placeholder marker but a status the check does not catch: "(draft)" after links to legal pages (`pages/product/ai-assisted-delivery.tsx:48`, `pages/faq.tsx:19`) while the Trust Center labels the same pages "Interim" (section 6, item 12).

## 5. Terms used on many pages, best explained once

Recommendation: keep the site's existing pattern (a short explanation in brackets at first use on each page, as `pages/platform.tsx:14` and `pages/product/governance.tsx:16-17` do), and add one "What the words mean" answer to the FAQ that collects the same explanations. Explanations below are taken from the glossary or existing site text.

| Term | Pages that use it without explaining it | Explanation to reuse | Source |
|---|---|---|---|
| Tenant | Home (none), Audit, Security, Regulated, Editions and deployment, Demo captions ("Demo Tenant") | "your organization's account" | `pages/platform.tsx:14`; glossary: Tenant |
| Workspace, Portfolio | Home tile (as "scoped roles"), Security | "a separate space inside it, for example for one client"; "a long-lived product line or initiative" | `pages/platform.tsx:14`; `pages/product/governance.tsx:16`; glossary |
| Release | Home, Platform, Governance, Traceability, Regulated, Editions and deployment, Demo | "a deployable package of one or more Features" | Glossary: Release |
| Delivery / Deliveries | Home, Governance, Traceability, Demo | "the commits that implement them" (or "the code that delivered it") | `pages/platform.tsx:17`; `pages/manufacturing.tsx:15` |
| Feature | Home, Platform, Governance, Traceability, Regulated, Demo | "an individual functional unit that is built, tested and delivered" | Glossary: Feature |
| Vision, Requirement | Platform, Traceability | "a business initiative: the what and why"; "a statement of business need that must be satisfied and verified" | Glossary: Vision, Requirement |
| Digital Thread | Platform, Traceability, Demo | "one connected record from requirement to Release, approval, push and recorded deployment, and back" | `pages/index.tsx:34`; glossary |
| Audit chain, tamper-evident | Home, Platform, Audit, Security, Regulated, Manufacturing, Demo | "a record of every governed action, whose entries cannot be updated or deleted by any role" | Glossary: Audit Chain; CL-34 |
| Integration | Home, Governance, Traceability | "combining the delivered changes" | `pages/product/governance.tsx:17`; glossary: Escalation |
| Suite runner | Home, Traceability | "a disposable place used only for that test run" | Glossary: Suite Runner |
| Escalation | (explained on Governance only; used elsewhere only in meta text) | existing explanation | `pages/product/governance.tsx:17` |
| Connector | Home, Platform, Editions and deployment, FAQ, Integrations | "an integration to an outside system such as Jira or Azure DevOps" | Glossary: Connector |
| Support bundle | Home, Individuals, Design partners, Editions and deployment, FAQ, Security | "a short set of details you choose to send us when you ask for help" | `pages/trust/product-privacy.tsx:24` |
| UAT | Platform, Governance, Traceability | already spelled out at first use ("user acceptance test (UAT)"); keep | site text |
| Edition names | Home, Deployment, Regulated, Solutions, FAQ: "desktop edition", "cloud edition", "Azure editions", "hosted edition (planned)", "customer-hosted", "Edition" (by industry) | "One product, two editions (desktop and Azure)"; Editions by industry: "AssuredForge for <Domain>" | CL-35; CL-20; glossary: Edition. Naming needs an owner decision (section 6, item 9) |
| Portal, push / main line, governed action, kit, launcher | many | no source wording | Section 6, item 7 |

## 6. Items needing an owner or register-owner decision

1. **"Gates".** The home Govern tile (`pages/index.tsx:33`) and the Governance lead (`pages/product/governance.tsx:7`) use "Gates". The glossary defines a Gate as "a governed checkpoint requiring Approval by a specific role", but the claims register's must-not list forbids implying that a person approves every gate and naming any gate, and asks for "the approvals the governance requires". Rows 7 and 19 propose the register wording. Decision: drop "Gates" from the website, or add a register-approved plain definition.
2. **AI status label.** Platform heading "AI assistance (planned)" and the AI-assisted delivery status label and heading "Planned" contradict the body text and the register state "Being validated" (CL-46), while the home tile already says "Being validated". Rows 16 and 17. Needs a "Being validated" kind in `components/Blocks.tsx`.
3. **CL-27 wording.** The site says "participating organizations" (Design partners) and "organizations" (FAQ) where the register says "participants". Row 43.
4. **Security data-flow sentence.** "Tierra receives nothing unless you send a support bundle" (`pages/security.tsx:37`, marked CLAIM-UNVERIFIED in code) is not supported by CL-53, which names the installation id sent with a licence request and feedback with attached files. Row 54.
5. **CL-53 update not yet on the site.** The register (DEC-459 update, 2026-11-21) adds "or feedback with files you attach"; Home, Editions and deployment and the FAQ still say "only in a support bundle". Row 9.
6. **Approved wording that is itself jargon.** The register owner decides whether plain versions may replace or accompany: CL-02 and the hero tag ("software delivery governance"), CL-28 (About: "audit-ready release management"), CL-15 ("Microsoft Entra ID for an installation's own directory"), CL-18 ("connector write"), CL-33, CL-36 ("the integration's tree"), CL-30 ("readiness suite ... pilot"), CL-53 ("git remote", "installation id") and CL-54 ("WSL 2", "servicing timeline"). Rows 2, 14, 20, 25, 32, 55.
7. **Terms with no source wording (glossary additions needed, by pull request per glossary rule 4).** Portal; push and "main line"; governed action; git remote; installation id; evaluation kit and launcher; Docker Desktop; SHA-256 check; Windows SmartScreen and code signing; container images; single-tenant hosting and air-gapped operation; proxies and segregated approvers; dependency and container image scanning; external penetration test; security.txt; pilot (partner pilot); "quality-system pressure"; "delivery lifecycle". Rows 6, 11, 18, 30, 31, 34, 36-38, 40, 41, 44, 46, 48, 50, 53.
8. **Connector status.** The Integrations page marks Jira, Confluence, Bitbucket and Azure DevOps "Available today", while the Platform page says "first use with live systems is planned with design partners" and "tested against their contracts", which is not in CL-17. Row 15. Decision: one status wording from CL-17.
9. **Edition names.** "Desktop edition", "cloud edition", "Azure editions", "hosted edition (planned)", "customer-hosted" and industry "Editions" appear together; a reader cannot tell whether the Azure cloud edition and the planned hosted edition differ. CL-20 and CL-35 are the sources; an owner decision on one naming set is needed.
10. **Glossary out of date.** The glossary entry "Founding Design Partner Program" still says "for manufacturing organizations", while CL-23 and CL-52 add the individual and small-team track that the site describes. Glossary owner to update.
11. **"Model usage" section on the Individuals page.** It shows CL-55 even while AI assistance is held as "being validated" and no page names a model key; the reader meets "model usage" and "provider" with no explanation. Row 28. Decision: show it only with the AI switch on (as CL-52's key sentence already is), or add a register-approved explanation.
12. **"(draft)" versus "Interim".** The AI-assisted delivery page and the FAQ call the AI use policy and product privacy notice "(draft)"; the Trust Center labels them "Interim" (DEC-462). One label is needed; the marker check does not catch lower-case "draft".
13. **RAM figures.** The FAQ (`pages/faq.tsx:23`) and Editions and deployment (`pages/deployment.tsx:30`) state "8 GB RAM minimum; 16 GB recommended" while CL-54 and the Individuals page still carry "[RAM: CONFIRM AT W8]". `scripts/check.mjs` compares the three pages only after the marker is removed. Decision: hold the figures on the FAQ and Editions pages until W8, or confirm them in the register.

Reviewed and acceptable as they are (technical pages, readers need the term, or already explained): "Virtualization turned on in the firmware (BIOS or UEFI)" and "WSL2 (Windows Subsystem for Linux 2)" on Editions and deployment; "user acceptance test (UAT)" where spelled out; the escalation and Tenant/Workspace/Portfolio explanations on Governance; "denial-of-service or social-engineering tests" and "bounty" on Responsible disclosure (security-researcher audience); "Jira, Azure DevOps or a similar tool for work items" and "Windchill or Creo in your engineering landscape" on the organization track (organization audience); Contact and 404 pages.

## 7. Decisions and what was applied (2026-11-21)

Decisions on §6: the assessor, and the owner for item 9. The findings table's wording was applied with these decisions; build and site check pass (32 pages), and the AI switch check passes for both values. Not pushed.

| §6 item | Decision | Applied |
|---|---|---|
| 1 | "The approvals the governance requires"; no "Gates" | Home Govern tile, Governance lead. "gate" remains only in two interim legal pages (acceptable use, AI use policy): for the assessor, not changed here |
| 2 | "Being validated" badge for AI everywhere (CL-46) | New `Status` kind `validated`; AI-assisted delivery page (badge and section), Platform AI section, home tile label in both switch states |
| 3 | "Participants" (CL-27) | Design partners, FAQ |
| 4 | CL-53 wording on Security | Security, "Data flow of the desktop edition" |
| 5 | Updated CL-53 wording | Home, Editions and deployment, FAQ, Security |
| 6 | Registered claim text verbatim, plain explanation alongside | Traceability (CL-36), Audit (CL-06, CL-33), Platform and Integrations (CL-16, CL-17, CL-18) |
| 7 | Draft definitions for terms with no source wording, to Kit Notices | `docs/GLOSSARY-PROPOSALS.md`; those rows stay unchanged on the site until the glossary has them |
| 8 | One connector status from CL-17; drop "tested against their contracts" | Platform, Integrations |
| 9 | Two edition names: "Desktop edition", "Hosted edition (planned)"; "(planned, on Microsoft Azure)" only on the deployment page | Deployment (heading, meta, desktop line), Regulated (CL-30 sentence reworded; register owner to align CL-30, CL-35), Manufacturing and design-partner offers ("AssuredForge for Manufacturing", no industry "Editions"). The deployment page keeps its "Customer-hosted ... Planned" line as a technical deployment option; flagged for the owner |
| 10 | Kit Notices updates the glossary | Founding Design Partner Program entry in `docs/GLOSSARY-PROPOSALS.md` §2 |
| 11 | Individuals "Model usage" only with the AI switch on | Individuals: the section shows only with `AI.available`; the pricing sentence moved to a "Cost" section |
| 12 | "Interim" everywhere; marker check catches "(draft)" | AI-assisted delivery, FAQ; `scripts/check.mjs` marker `(draft)` (case-insensitive) |
| 13 | RAM unchanged until W8 | Unchanged |

Rows applied from §3 (with their source wording): 3, 4, 5, 6, 7, 8 (Audit), 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 29, 33, 35, 42, 43, 45, 46, 47, 49, 50, 51, 52, 54, 56, 57, and row 1 (Responsible disclosure lead). Also the design-partner eligibility line now reads "You must be at least 18", as on /solutions/individuals/.
Not applied, waiting for the glossary (item 7) or a register decision (item 6): rows 2, 8 on pages other than Audit, 14, 28 (section hidden instead), 30, 31, 32 (reworded for item 9 only), 34, 36, 37, 38, 39 (renamed only), 40, 41, 44, 48, 53, 55.

**Later change (owner decision 2026-11-21):** the Manufacturing page is removed; /manufacturing/ forwards to /industries/.
Rows 29 and 30 and the Manufacturing mentions in rows 4, 8 and the Delivery row of the term table refer to the removed
page. The Industries page takes its text only from approved register entries (`docs/INDUSTRIES-WORKS-WITH-ENTRIES.md`).

**DEC-469 (2026-11-21): glossary section H approved, with edits.** Rows now applied with the glossary wording at first use on
each page: 8 (Home, Platform, Security, Regulated; Portal on Audit and Resources), 31, 32 (CL-30 as revised, verbatim), 34
(delivery lifecycle; CL-35 as revised), 36, 37, 38, 41, 44, 48, 53. Also git remote and installation id (Home, Editions and
deployment, FAQ, Security), main line (Platform) and dependency and container image scanning (Security, Trust Center). Row 40:
the "Customer-hosted" line is removed (DEC-469 item 3), and so is "from the same code as the planned hosted edition" on the
desktop line, in line with the edited Container image entry. "Gate" on the two interim legal pages is replaced (assessor;
COUNSEL-LIST.md). Still waiting for a register decision: rows 2, 14, 28 and 55.
