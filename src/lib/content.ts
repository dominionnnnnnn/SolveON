// Content shared across pages. Edit here and every page that uses it updates.
// Anything in [brackets] is a placeholder from the design (tracked in CHECKLIST.md).

export type Founder = {
  name: string;
  initial: string;
  /** Short role for the About hero cards, e.g. "Backend & architecture" */
  focus: string;
  /** Role line on the team cards */
  role: string;
  bio: string;
  /** Path under /public, e.g. "/team/ada.jpg". Leave empty until there's a photo. */
  photo: string;
};

// TODO: real names, roles, bios and photos.
export const founders: Founder[] = [
  {
    name: "[Founder name]",
    initial: "[A]",
    focus: "[Role, e.g. Backend & architecture]",
    role: "[Co-founder · Role]",
    bio: "[One or two lines on what they own on the team and what they've built before.]",
    photo: "",
  },
  {
    name: "[Co-founder name]",
    initial: "[B]",
    focus: "[Role, e.g. Frontend & product]",
    role: "[Co-founder · Role]",
    bio: "[One or two lines on what they own on the team and what they've built before.]",
    photo: "",
  },
];

export const phases = [
  { title: "Understand", desc: "Problem, users and the outcome that matters." },
  { title: "Scope", desc: "One phase, priced clearly before we build." },
  { title: "Build", desc: "Weekly demos and visible milestones." },
  { title: "Test", desc: "Real-world QA before we call it done." },
  { title: "Launch", desc: "Deploy, document and hand over." },
];

export const pad2 = (n: number) => (n < 10 ? `0${n}` : `${n}`);

// TODO: confirm. Used on Services ("Support after launch") and Pricing.
export const supportDays = "[30]";
