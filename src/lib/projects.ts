// Case studies, shown on Work (all) and Home (the first four).
// Everything in [brackets] is a placeholder from the design (tracked in CHECKLIST.md).

export type Category = "web" | "mobile" | "backend" | "ai";

export const categories: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "backend", label: "Backend" },
  { id: "ai", label: "AI & WhatsApp" },
];

/** Which drawn illustration the card uses until there's a real screenshot. */
export type Visual = "phone" | "browser" | "chat" | "dashboard" | "api" | "landing";

export type Project = {
  /** Case-study URL: /work/<slug>. Use lowercase words with dashes, e.g. "lekki-salon-bookings" */
  slug: string;
  /**
   * true while the project is still placeholder content: the page works for previewing,
   * but is hidden from Google and left out of the sitemap. Set to false when it's real.
   */
  draft: boolean;
  name: string;
  client: string;
  /** One line on what the product does for its users (shown on the card image) */
  tagline: string;
  /** Two lines on the problem, what was built and the result */
  summary: string;
  tags: string[];
  categories: Category[];
  visual: Visual;
  /** Card background theme, from the design */
  theme: "dark" | "pale" | "white" | "green" | "ink" | "mint";

  /* ---- Case-study page ---- */
  year: string;
  /** e.g. "6 weeks" */
  timeline: string;
  /** The situation before: who the users are and what wasn't working */
  problem: string;
  /** What was designed and built, one point per line */
  built: string[];
  /** Measurable outcomes, e.g. { value: "38%", label: "fewer missed bookings" } */
  results: { value: string; label: string }[];
  stack: string[];
  /** Optional client quote */
  quote?: { text: string; name: string; role: string };
  /** Optional link to the live product */
  liveUrl?: string;
};

// Placeholder case-study content, shared by every draft project below.
const draftStory = {
  draft: true,
  year: "[Year]",
  timeline: "[0] weeks",
  problem:
    "[Who the client is, who their users are, and what wasn't working before. Two or three sentences.]",
  built: [
    "[The main thing we designed and built]",
    "[A second feature or integration that mattered]",
    "[How we handled launch and handover]",
  ],
  results: [
    { value: "[00%]", label: "[What improved]" },
    { value: "[00]", label: "[Something that grew]" },
    { value: "[0 wks]", label: "[Time to launch]" },
  ],
  stack: ["[Tech]", "[Tech]", "[Tech]"],
  quote: {
    text: "[Client quote about the result.]",
    name: "[Client name]",
    role: "[Role, Company]",
  },
} satisfies Partial<Project>;

// TODO: replace with real projects. Order matters: Home shows the first four.
export const projects: Project[] = [
  {
    ...draftStory,
    slug: "project-1",
    name: "[Project name]",
    client: "[Client logo]",
    tagline: "[One line on what this product does for its users.]",
    summary: "[Two lines on the problem, what we built and the result it delivered.]",
    tags: ["Mobile app", "Backend/API"],
    categories: ["mobile", "backend"],
    visual: "phone",
    theme: "dark",
  },
  {
    ...draftStory,
    slug: "project-2",
    name: "[Project name]",
    client: "[Client logo]",
    tagline: "[One line on what this product does for its users.]",
    summary: "[Two lines on the problem, what we built and the result it delivered.]",
    tags: ["Web app", "SaaS"],
    categories: ["web"],
    visual: "browser",
    theme: "pale",
  },
  {
    ...draftStory,
    slug: "project-3",
    name: "[Project name]",
    client: "[Client logo]",
    tagline: "[One line on what this product does for its users.]",
    summary: "[Two lines on the problem, what we built and the result it delivered.]",
    tags: ["AI/WhatsApp agent", "Backend/API"],
    categories: ["ai", "backend"],
    visual: "chat",
    theme: "white",
  },
  {
    ...draftStory,
    slug: "project-4",
    name: "[Project name]",
    client: "[Client logo]",
    tagline: "[One line on what this product does for its users.]",
    summary: "[Two lines on the problem, what we built and the result it delivered.]",
    tags: ["Dashboard", "Internal tool"],
    categories: ["web"],
    visual: "dashboard",
    theme: "green",
  },
  {
    ...draftStory,
    slug: "project-5",
    name: "[Project name]",
    client: "[Client logo]",
    tagline: "[One line on what this product does for its users.]",
    summary: "[Two lines on the problem, what we built and the result it delivered.]",
    tags: ["Backend/API", "Integrations"],
    categories: ["backend"],
    visual: "api",
    theme: "ink",
  },
  {
    ...draftStory,
    slug: "project-6",
    name: "[Project name]",
    client: "[Client logo]",
    tagline: "[One line on what this product does for its users.]",
    summary: "[Two lines on the problem, what we built and the result it delivered.]",
    tags: ["Website", "Landing page"],
    categories: ["web"],
    visual: "landing",
    theme: "mint",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

/** The project after this one, wrapping around, for "Next case study" links. */
export const nextProject = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
};
