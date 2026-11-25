# SB2 preview: what to review (assuredforge.com and tierra-llc.com)

Site Brand window, 2026-11-25. For the owner's one review of the full SB2 preview (DEC-662, DEC-671, DEC-673). Nothing is pushed,
nothing is live. After the review, each site's release is its own approval.

## 1. What changes at the next release, with today's claims states

| Site | Change | Why |
|---|---|---|
| assuredforge.com | Middle-dot separators become commas or "and"; "labelled" becomes "labeled"; "licence" becomes "license" on the product privacy notice. 36 text lines in all; nothing else differs from the live site (checked line by line) | DEC-674 |
| assuredforge.com | "licence" stays on the evaluation licence, acceptable use and design partner agreement pages and the footer link | DEC-675 |
| tierra-llc.com | About gets the company line (CL-28); Contact gets the AssuredForge addresses (CL-29). Both rows are Decided | DEC-608 plan |
| tierra-llc.com | Page titles read "About \| Tierra LLC" instead of the middle dot; the em dash on Contact becomes a colon | DEC-674 |

Everything else in this round is held: it appears only once its claims row allows it, at a later release you approve.

## 2. What the preview shows held (with "[Held: row, state]" markers)

| Site | Content | Rows |
|---|---|---|
| assuredforge.com | Hero "From goals to execution", hero lead, one-liner, footer tagline "Build. Govern. Prove." | CL-74 to CL-77 |
| assuredforge.com | "Plan, build, decide, prove" pillars replacing the four tiles; names "Governed execution", "Governed build" | CL-79 to CL-85 |
| assuredforge.com | New share image and its alt text (today's still carries "Build anywhere...") | CL-74, CL-76 |
| assuredforge.com | Learner line (Home, Individuals); learner routes: own student cloud, campus editions, invite-only pilot | CL-89 to CL-92 |
| assuredforge.com | Editions: Licenses (every edition needs a license), download page and free license request, registration privacy summary | CL-93 to CL-95 |
| tierra-llc.com | Home lead (Tierra line), product card sentence, Trust line; About fourth principle and narrowed privacy principle | CL-78, CL-70, CL-69, CL-71, CL-72 |
| tierra-llc.com | New Trust page and its menu item | CL-73 |

SB1 (sign-in chooser, account links) is a separate preview branch and never goes to the live site before go-live (DEC-632).

## 3. How held content ships

Each site keeps a snapshot of the claims states (assuredforge.com `content/claims-state.json`, tierra-llc.com `src/claims-state.json`),
refreshed from the claims register at each release. A block shows only when its row's state allows it: facts need Current,
commitments may be Decided or Approved wording, and Being validated or Planned rows show only as labelled state lines (your
decision 1, DEC-671). The release notes list every block that appears or disappears with the refresh, so your release approval
covers exactly that.

## 4. Checks run

- Release builds: both sites pass their site checks, the claims checks, the US English style check (DEC-674) and, for
  assuredforge.com, the AI switch check for both values. The release build of assuredforge.com equals the live site except for the
  style fixes in section 1.
- Previews: accessibility scans with 0 problems (assuredforge.com 15 runs on Home, Individuals and Editions; tierra-llc.com 25 runs
  including the Trust page); style check 0 problems on both, assuredforge.com with the AI switch off and on.
- No cookies on either live site (CL-73 evidence): no Set-Cookie header on 10 addresses; no cookies or browser storage after load.

## 5. Where to look

- Screenshots: `C:\Users\burri\AF-backups\site-brand-2026-11-25\sb2-preview\` (assuredforge: Home light and dark at 1440 and 390,
  taken before the learner line was added, which shows on the Individuals page screenshot; Individuals; Editions; the new share
  image. tierra: Home, About, Trust. SB1: chooser at 390 with the CL-86 to CL-88 wording, menu, footer).
- Live previews on this PC on request: Site Brand starts them on ports 4174 and 4175 and stops them afterwards.
- Branches (local): assuredforge-site `sb2-claims-gate`, tierra-site `sb2-tierra`, assuredforge-site `sb1-account-preview`.

## 6. Decisions for you

1. Approve the held wording as shown, or name changes (rows stay Draft until you approve; Kit Notices then moves them).
2. Release order: assuredforge.com first, then tierra-llc.com after its live check (as on 2026-11-25), each with its own approval.
