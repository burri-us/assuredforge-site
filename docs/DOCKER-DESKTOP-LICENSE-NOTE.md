# Docker Desktop license check for the Editions page (OI-755 item 6, DEC-655)

Site Brand window, 2026-11-25. Analysis only: no site change, no contact with Docker, no account sign-in. Read on 2026-11-25 from
Docker's own public pages. Quotes are verbatim; "Reading" is this window's interpretation; "For counsel" marks what is unclear.

## 1. Sources

| # | Page | Address | Date or version shown |
|---|---|---|---|
| S1 | Docker Desktop license | https://docs.docker.com/subscription/desktop-license/ | none shown |
| S2 | Docker Subscription Service Agreement | https://www.docker.com/legal/docker-subscription-service-agreement/ | "Last updated on August 26, 2026" |
| S3 | Pricing | https://www.docker.com/pricing/ | none shown (footer 2026) |
| S4 | Pricing FAQ | https://www.docker.com/pricing/faq/ | "New pricing goes into effect on December 10, 2024, for all new customers." |
| S5 | Docker Engine overview | https://docs.docker.com/engine/ | none shown |

Limit of this read: S2 is long; its sections 1 to 3.3 were read word for word, later sections (16, 17) only in summary. Quotes below
from S2 are all from the part read word for word, except where marked.

## 2. Why it matters

AssuredForge Desktop needs Docker Desktop on the user's Windows PC (CL-54). Docker Desktop has its own license between the user (or
their organization) and Docker. AssuredForge's license does not cover it.

## 3. Answers

### (a) An individual using AssuredForge Desktop for their own work

Quoted:
- S1: "Docker Desktop is free for:" ... "Personal use", "Education", "Non-commercial open source projects", and "Small businesses
  (fewer than 250 employees AND less than $10 million in annual revenue)".
- S2 §3.2 (Developer Use): "Use is limited to a single, individual developer acting in a personal, non-commercial capacity" ... "to
  develop Open Source Software or free applications as further described under this Agreement." Also: "Developer Use does not include
  use in connection with an individual's employment or engagement by a company".
- S2 §3.3: "The use of Docker Desktop without a paid subscription for Services, is further restricted" ... "use in a commercial
  undertaking with fewer than 250 employees and less than US $10,000,000 (or equivalent local currency) in annual revenue."

Reading: an individual working on their own, non-commercial projects is covered free. An individual doing paid work (a freelancer, a
one-person business) appears to be covered free as a small commercial undertaking under §3.3. Someone using it for an employer is
covered free only if that employer is under both limits.

For counsel: whether a sole trader's paid client work is "personal use" (S1) or a "commercial undertaking" (S2 §3.3); the free
result is the same, but the wording on our page should not pick one.

### (b) Students and education

Quoted:
- S1: "Education" is in the free list, with no further text.
- S2 §3.2 (Educational Use): "Use is limited to individual members of an educational organization enrolled in a classroom learning
  environment" ... "solely for academic or research purposes, or contribution to an open source project." Also: "Educational Use does
  not include use by multiple individuals under a coordinated arrangement" ... "intended to achieve institutional-scale usage through
  aggregated personal accounts." Also: "such use requires procurement of an appropriate paid institutional Service."
- S2 §16 (summary only, not read word for word): US government entities, "including state, local, or public education entities", are
  subject to a separate Public Sector Subscription Service Agreement.

Reading: an enrolled student using it for coursework or research is free. A self-directed learner not enrolled anywhere falls under
personal use (free). A university rolling it out to a class or campus is "institutional-scale" use and needs a paid institutional
service; a US public university may fall under the public-sector agreement.

For counsel: the campus editions route (CL-91) and any coordinated course use: who needs the paid institutional or public-sector
subscription, the university or each student. The learner pilot on the hosted edition (CL-92) is not affected if the hosted edition
runs Docker Engine on servers without Docker Desktop (see (d)).

### (c) Small-business limits and the paid tiers

Quoted:
- Limits, S1: "fewer than 250 employees AND less than $10 million in annual revenue". S2 §3.3: "fewer than 250 employees and less
  than US $10,000,000 (or equivalent local currency) in annual revenue." Both conditions must hold.
- S1: "Docker Desktop requires a paid subscription for:" "Professional use in larger organizations", "Government entities",
  "Commercial use beyond the free tier limits". Paid tiers with Desktop: "Docker Pro, Team, and Business subscriptions".
- S3 (per user per month, billed annually; "Prices in the plan headings are per user per month, billed annually."): "Personal $0
  /mo" (one user), "Pro $9 per user/mo" (monthly billing $11), "Team $15 per user/mo" (monthly billing $16), "Business $24 per
  user/mo" (annual only; elsewhere on the page "Contact sales"). S3 shows "Docker Desktop" as "Included" in all four.
- S4 confirms the Pro and Team prices: "Docker Pro plans increased from $5/month (annual) to $9/month (annual)" and "Docker Team price
  increased from $9/user/month (annual) to $15/user/mo (annual)".

Reading: prices change; our page should not quote them. It should name the limits and point to Docker's pricing page.

### (d) Design partner organizations, and hosted or server installs

Quoted:
- S4: "All users authorized to access any products or features listed in the corresponding paid subscription plan are required to
  have a paid subscription."
- S2 §3.3: "Government Entities shall not use Docker Desktop or access other Entitlements of the Services without a paid
  subscription for Services."
- S2 §1 (paid tiers): "Users may include employees, consultants, contractors, and agents of Customer or its affiliates".
- S5 (Licensing): "Commercial use of Docker Engine obtained via Docker Desktop" ... "within larger enterprises (exceeding 250
  employees OR with annual revenue surpassing" ... "$10 million USD), requires a paid subscription." License of Docker Engine:
  "Apache License, Version 2.0."
- S1: "The licensing and distribution terms for Docker and Moby open-source projects, such as Docker Engine, aren't changing."
- S4: "Docker's open-source software such as the Docker Engine is accessible for all and supported by the Moby project maintainers and
  community members."

Reading:
- A design partner organization at or above either limit, or any government body, needs a paid Docker subscription for each person
  who uses Docker Desktop to run AssuredForge Desktop. That cost is theirs, under their own agreement with Docker.
- A contractor working for such an organization is covered by that organization's paid seats (S2 §1), not by a free Personal account.
- The hosted edition and any Linux server install that runs Docker Engine without Docker Desktop: Docker Engine is under the Apache
  License 2.0, and the paid-subscription sentence on S5 is about Engine "obtained via Docker Desktop". So no Docker subscription
  appears to be needed for Engine on a server.

For counsel:
- Confirm that Docker Engine installed directly on Linux servers (hosted edition, campus or self-hosted installs) needs no Docker
  subscription at any company size.
- The S2 §3.3 clause on no-fee accounts used to provide services (partly quoted: "use no-Fee accounts to provide any services to
  Customer"): whether a free-tier individual doing paid work for a larger client organization needs a paid seat.
- S2 §16 and §17 were read only in summary; read them word for word before any page wording that touches public education or
  governing law.

## 4. Proposed claims row for the Editions page (state Draft)

> The desktop edition uses Docker Desktop, which has its own license from Docker. Docker Desktop is free for personal use, education,
> non-commercial open source projects and small businesses (fewer than 250 employees and less than $10 million in annual revenue).
> Larger organizations and government bodies need a paid Docker subscription. Docker's terms apply; check them for your case.

Sources: S1, S2 §3.2 and §3.3, S4. Placement: Editions and deployment, under "System requirements", next to CL-54 (which already
names Docker Desktop). No prices (they change; S3). Before use: counsel's answers above, and a re-read of S1 and S2 on the day of
release, since Docker can change them.
