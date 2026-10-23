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
  /** Which part of the photo stays in view when it's cropped to the card (CSS object-position). */
  photoFocus?: string;
  /** Shown as icon links on the team card. Leave any out to hide that icon. */
  links?: { portfolio?: string; github?: string; linkedin?: string };
};

// TODO: co-founder details, and both bios.
export const founders: Founder[] = [
  {
    name: "Adebiyi AbdulQuawiy",
    initial: "A",
    focus: "Backend & Architecture",
    role: "Co-founder · Backend & Architecture",
    bio: "Owns the backend: APIs, databases and the architecture that keeps products reliable after launch. Has built GraphQL APIs, payment flows and real-time systems with Django, PostgreSQL and Supabase.",
    photo: "/team/adebiyi-abdulquawiy.jpg",
    photoFocus: "50% 38%",
    links: {
      portfolio: "https://domstack.vercel.app",
      github: "https://github.com/dominionnnnnnn",
      linkedin: "https://www.linkedin.com/in/aabdulquawiy/",
    },
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
