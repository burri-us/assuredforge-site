// CL-51 (DEC-439 P-1, option B) and CL-52 (individual track). Every sentence that says who an edition
// is for comes from here, so a change of positioning is one edit. Age line as in the interim agreement §2 (DEC-462); still on the counsel list.
import { AI } from "./AiWording";

export const POSITION = {
  desktop: "The desktop edition is for individuals and small teams.",
  hosted: "The hosted edition (planned) is for regulated organizations.",
  desktopWho: "Students, aspiring professionals, freelance developers, content creators and small business owners.",
  hostedWho: "Regulated and quality-driven organizations, manufacturing first. IT checklists, proxies, single sign-on and segregated approvers are planned for the hosted edition.",
  // Design-partner tracks.
  trackIndividual: {
    title: "Individuals and small teams (desktop edition)",
    eligibility: [
      "You must be at least 18, and you set up and use the evaluation yourself or with your small team.", // interim agreement §2 (DEC-462)
      "A Windows 11 Home or Pro PC that meets the system requirements.",
      "You build software, or run something that depends on it, and want to know who approved what.",
    ],
    commitments: [
      "Use the evaluation on your own PC for the six-month program.",
      ...(AI.ownKeyBilling ? [AI.ownKeyBilling] : []), // CL-52
      "Report problems and share feedback, in short working sessions.",
      "Send a support bundle (a short set of details you choose to send us when you ask for help) only when you choose to, so we can help with an issue.",
    ],
  },
  trackOrganization: {
    title: "Regulated organizations (hosted edition, planned): waitlist",
    eligibility: [
      "Organizations building internal software under quality or regulatory pressure; manufacturing first (hosted edition, planned).",
      "Jira, Azure DevOps or a similar tool for work items.",
      "Windchill or Creo in your engineering landscape is a plus.",
      "A sponsor who can give regular, structured feedback.",
    ],
    offers: [
      "Early access to AssuredForge for Manufacturing as it is shaped (planned).",
      "Direct influence on AssuredForge for Manufacturing (planned): your priority use cases shape what we build next.",
    ],
    commitments: [
      "Product feedback and participation in working sessions.",
      "Validation of requirements against deliveries of your own projects in the evaluation.",
      "Participation in a pilot.",
    ],
  },
};
