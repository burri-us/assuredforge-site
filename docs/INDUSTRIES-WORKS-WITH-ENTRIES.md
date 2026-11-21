# Industries and Works with: register entries the site needs

Author: Burri. 2026-11-21. For Kit Notices, who owns the claims register and the glossary.

The owner decided (2026-11-21):
- Remove the Manufacturing page; /manufacturing/ forwards to /industries/.
- Add an Industries menu item with an overview page: one short section per industry, all with the same structure.
- Add a "Works with" page, linked from Platform and the FAQ, with a Supported / Being validated / Planned badge on each item.
- Text comes only from approved register entries. No compliance claims.

The structure is built (branch w11-site-redesign; not pushed). Every text slot shows a `[CLAIM- entry pending: …]` marker,
and a publish build refuses those markers. When an entry is approved, its text is copied verbatim into
`components/Registered.ts`, together with its CL number.

## 1. What is built

| Item | State |
|---|---|
| /industries/ | Title "Industries". A lead, then jump links to 8 cards in the owner's order: Manufacturing, Healthcare and life sciences, Retail and e-commerce, Banking and financial services, Insurance, Public sector, Education, Software and technology. Each card has a name, a status badge, a summary and up to three points |
| /works-with/ | Title "Works with". A lead, a line explaining the badges, then three groups: Languages and toolchains; AI model sources; Connectors. Each group has an introduction and items, and each item has a name, a short note and a badge |
| /manufacturing/ | A forwarding page. It sends visitors on to /industries/#manufacturing with a meta refresh (GitHub Pages cannot redirect), and it is noindex, has no canonical URL and is not in the sitemap. The site check verifies all of this |
| Menu | "Industries" follows "Solutions" in the menu. With nine items the desktop header is now two rows: the wordmark and the call to action, then the menu (at 1024 px it already wrapped before). Phone menu unchanged in form |
| Links | Platform ("Deeper pages") and the FAQ connector answer link to Works with. The footer lists "Industries" under Solutions and "Works with" under Product. Links that pointed to /manufacturing/ now point to /industries/ |
| Check | `scripts/check.mjs` fails the build if either page contains a compliance term, such as compliant, certified, HIPAA, SOC 2, ISO 27001, GxP, 21 CFR, PCI, FedRAMP, FERPA or GDPR. A negative test confirms the check catches such a term |

The Manufacturing page's old text is not reused, because it had no approved entry for the new page. The register rows it
drew on are listed in §2 as candidates.

## 2. Entries needed

### Industries page

| Slot | Needed | Candidates in the register today |
|---|---|---|
| Page description (meta) and lead | One sentence each | CL-02 (audiences); CL-51 (desktop for individuals and small teams; hosted for regulated organizations, planned) |
| Status, per industry | One of: Available today, Available to design partners, Being validated, Planned | None per industry. The question is whether the badge shows the edition's status or the industry version's. The desktop edition is open to individuals and small teams in any industry (CL-51, CL-52); the hosted edition is planned (CL-20) |
| Summary, per industry (8) | One or two sentences: what teams in that industry must show, and what AssuredForge does for that (no compliance claim) | Manufacturing: CL-02, CL-23 (manufacturing first), CL-17 (Windchill planned with design partners); the removed page drew on CL-03, CL-05 and CL-06. **The other seven industries have no register basis**: any sentence about them is a new claim |
| Points, per industry (optional, up to 3) | Short bullets | CL-03, CL-05, CL-06, CL-16 apply to every industry; the same bullets on all eight cards would read as filler, so per-industry points are better left out unless the register has something specific |

### Works with page

| Slot | Needed | Candidates in the register today |
|---|---|---|
| Page description and lead | One sentence each | CL-16 |
| Badge meanings | Glossary definitions of Supported, Being validated and Planned | "Supported" is new on the site, and the other pages say "Available today". Please define whether Supported means register status Current |
| Languages and toolchains: introduction and items | Which languages and toolchains, each with a badge | **No register entry** |
| AI model sources: introduction and items | Each model source with a badge | CL-48 (your own Anthropic API key; Being validated until W8). CL-48 is limited to "technical pages, quick start and FAQ only": please say whether Works with counts as a technical page. The site check warns on vendor names (AD-010 principle 4), so naming a provider here needs a decision. **This group shows only while the AI switch is on** (`AI_DELIVERY_AVAILABLE`): the AI switch check forbids naming a model source while it is off (WR-01, as for "model usage", sweep decision 11) |
| Connectors: introduction and items | Each connector with a badge | CL-17: Jira, Confluence, Bitbucket and Azure DevOps exist (Current; "no self-service connector set-up", so set up together during the program); GitHub and GitLab Planned; PTC Windchill Planned with design partners. CL-16 for "fully usable without connectors". Needed: whether the four existing connectors get "Supported" or "Available to design partners" |

## 3. Questions for the register owner

1. Industry badge: does it show the edition's status or the industry version's? The page currently has one badge per card.
2. Seven industries other than Manufacturing have no basis in the register. Are entries planned for each, or should the page
   show fewer industries until they exist? The owner's list stands until then.
3. "Supported": its definition, and how it maps to register statuses.
4. CL-48 on Works with: does the page count as a technical page, and may it name the model provider?

## 4. Structure checked against the claim drafts (architecture bff6eb9, waiting for the owner)

Kit Notices drafted the entries (`program/reviews/CLAIMS-DRAFT-INDUSTRIES-AND-WORKS-WITH-2026-11-21.md`). The markers stay until
the owner approves them. The page structure now matches the drafts:
- Industries:
  - A slot for the shared line for organizations (CL-IND-00), shown after the lead and under each industry.
  - No status badge per industry. The drafts give none, which answers question 1.
  - Each industry has one summary (CL-IND-01..08); points stay optional.
- Works with:
  - The lead slot takes the headline (CL-WW-00).
  - Each group has its introduction, items with badge and note, and a "Status as of <date>, for the desktop evaluation kit
    <release>" line, plus optional limit lines (the languages limits).
- The compliance check no longer matches "validated for", which the proposed CL-48 wording uses ("validated for your
  installed version"). Named standards and "complian…", "certif…" and "accredit…" still fail the build.

Open points for Kit Notices:
1. **AI switch.** While `AI_DELIVERY_AVAILABLE` is off (today), the model-sources group is hidden: the AI switch check forbids
   "model source", "Anthropic" and "API key" on every page (WR-01). The CL-WW-02 lead and table would show only once the switch is
   on, unless the owner exempts this page from WR-01.
2. **Statuses outside the three badges.** The drafts have "Not in this evaluation version" (subscription access), "Planned with
   design partners", "Planned (as demand shows)" and "Built; checked against sandbox systems; set up with you by agreement" for
   the connectors. The page can show a badge (Supported / Being validated / Planned) and put the rest in the row's note. Please
   give each row one of the three badges, or say whether a fourth badge ("Not in this version") is wanted.
3. **Industry naming still on the site.** Design partners (`components/Positioning.tsx`): "Early access to AssuredForge for
   Manufacturing as it is shaped (planned)" and "Direct influence on AssuredForge for Manufacturing (planned)". Also "manufacturing
   first" on the organization lines, which comes from CL-23. The "AssuredForge for <Industry>" naming was not adopted (DEC-469), and
   the replacement wording (CL-23 and CL-25 in the drafts, Sec. 3) waits for the owner. These lines stay unchanged until then.
