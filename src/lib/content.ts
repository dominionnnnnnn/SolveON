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
  links?: { portfolio?: string; github?: string; linkedin?: string; email?: string };
};

// Founder and co-founder. Open items are marked TODO.
export const founders: Founder[] = [
  {
    name: "Adebiyi AbdulQuawiy",
    initial: "A",
    focus: "Backend & Architecture",
    role: "Founder · Backend & Architecture",
    bio: "Designs and builds the systems behind our products, from data models to APIs to deployment. Recent work includes an emergency-response platform and a peer-to-peer trading app.",
    photo: "/team/adebiyi-abdulquawiy.jpg",
    photoFocus: "50% 38%",
    links: {
      portfolio: "https://domstack.vercel.app",
      github: "https://github.com/dominionnnnnnn",
      linkedin: "https://www.linkedin.com/in/aabdulquawiy/",
      email: "a.abdulquawiy@gmail.com",
    },
  },
  {
    name: "Adefalu Abdulrahman",
    initial: "A",
    focus: "Frontend & Product",
    role: "Co-founder · Frontend & Product",
    bio: "Owns the frontend and the product side: turning ideas into clear flows and interfaces people actually enjoy using, and making sure what we ship works well on every screen.",
    photo: "/team/adefalu-abdulrahman.jpg",
    photoFocus: "50% 20%",
    links: {
      portfolio: "https://adefalu.online",
      github: "https://github.com/Lanrewaju-adedapo",
      linkedin: "https://www.linkedin.com/in/adefalu-abdulrahman",
      email: "adefaluara@gmail.com",
    },
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
