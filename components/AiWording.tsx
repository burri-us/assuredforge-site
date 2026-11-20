// WS-01 (website review 2026-11-20): how the site describes AI.
//
// ONE SWITCH. Every sentence on the site that says whether AI assistance is available today comes from this file.
//   false (default, HOLD)  the wording in force on main: AI assistance is planned and is not part of the platform today
//                          (claims register 0.1, CL-19; DEC-257 AI-OD-4).
//   true  (new wording)    the kit ships an AI delivery pipeline; the wording below describes it.
// The owner approves or holds the new wording at publish time (it conflicts with claims register 0.1 CL-19 until the
// register conflict with DEC-348/349 is resolved; register 0.2 is blocked, DEC-427 Amendment 2). Change only this constant.
// CLAIM-UNVERIFIED: every sentence in the `true` branch rests on no approved register entry.
export const AI_DELIVERY_AVAILABLE = false;

export const AI = AI_DELIVERY_AVAILABLE
  ? {
      // ---- NEW WORDING (needs the owner's decision) ----
      tag: "Design-partner evaluation",
      heroTitle: "Governed software delivery, with AI that never approves.",
      heroLead:
        "AssuredForge runs AI-assisted delivery under your rules: every requirement traced, every result independently tested, every release approved and signed by a named person.",
      homeBlock:
        "AI assistance runs inside the platform's governance: it prepares work, runs agent runs and recommends. Independent tests check the result, and only a named person approves, accepts risk or authorizes a release.",
      deliverTile: "Agents prepare changes and independent tests check them, under the same gates as human work. You choose the model source, set run budgets and monthly limits, and an administrator turns model execution on.",
      deliverStatus: "Available to design partners",
      productLead:
        "AI-assisted delivery runs inside AssuredForge's gates. Agent runs plan, write and test changes; independent tests check the result; people approve.",
      step2: "AI-assisted delivery with independent tests",
      available: true,
    }
  : {
      // ---- HOLD WORDING (matches the live site and claims register 0.1) ----
      tag: "Software Delivery Governance Platform",
      heroTitle: "Governed software delivery, where only people approve.",
      heroLead:
        "AssuredForge governs software delivery under your rules: every requirement traced, every release approved and signed by a named person, every action in a tamper-evident audit chain.",
      homeBlock:
        "AI assistance is planned as an optional extension under the same governance: it may recommend and prepare, and it never approves, accepts risk or authorizes a release. It is not part of the platform available today.",
      deliverTile: "AI assistance is planned as an optional extension under the same governance. It may recommend and prepare; people decide.",
      deliverStatus: "Planned",
      productLead:
        "AI assistance is planned as an optional extension under the same governance: it may recommend and prepare, and it never approves, accepts risk or authorizes a release. It is not part of the platform available today.",
      step2: "Delivery and independent integration checks",
      available: false,
    };
