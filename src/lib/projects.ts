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

/** A screenshot for a case-study gallery. width/height are the image file's pixel size. */
export type GalleryShot = {
  src: string;
  alt: string;
  caption: string;
  kind: "desktop" | "phone";
  width: number;
  height: number;
};

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

  /** Our own product rather than client work: the page says "In-house product" instead of a client */
  inHouse?: boolean;
  /** Logo shown on the card label instead of the client name (light = for pale cards, dark = for dark cards) */
  logo?: { light: string; dark: string; width: number; height: number };
  /** Real screenshots for the card image; replaces the drawn illustration */
  shots?: { desktop: string; phone: string };

  /* ---- Case-study page ---- */
  year: string;
  /** e.g. "6 weeks". Left out of the page when empty */
  timeline?: string;
  /** The situation before: who the users are and what wasn't working */
  problem: string;
  /** What was designed and built, one point per line */
  built: string[];
  /** Measurable outcomes, e.g. { value: "38%", label: "fewer missed bookings" } */
  results: { value: string; label: string }[];
  /** For young products without numbers yet: where it stands and where it's going (shown instead of results) */
  status?: { value: string; label: string }[];
  /** Screenshots for the case-study gallery */
  gallery?: GalleryShot[];
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

// Order matters: Home shows the first four. TODO: replace the [placeholder] projects with real ones.
export const projects: Project[] = [
  {
    slug: "ledgio",
    draft: false,
    inHouse: true,
    name: "Ledgio",
    client: "In-house product",
    logo: {
      light: "/work/ledgio/logo.svg",
      dark: "/work/ledgio/logo-dark.svg",
      width: 906,
      height: 283,
    },
    shots: {
      desktop: "/work/ledgio/landing.webp",
      phone: "/work/ledgio/phone-dashboard.webp",
    },
    tagline: "A record book for small businesses that adds itself up.",
    summary:
      "Our own product: a record book for small businesses that tracks each day's work, every worker's results and the profit.",
    tags: ["Web app", "SaaS", "PWA"],
    categories: ["web", "backend"],
    visual: "browser",
    theme: "dark",
    year: "2026",
    problem:
      "Many small businesses still run on a paper notebook or a WhatsApp chat. Owners write down each day's work, then add it up by hand to find out what each worker brought in or whether the month made a profit. Records go missing, totals are guessed, and nobody can see how the business is really doing.",
    built: [
      "A multi-tenant web app where each business keeps its own workers, daily records and custom record fields, with revenue, expenses and profit worked out automatically.",
      "Reports and worker performance by day, week and month, on a phone-first interface that installs like an app (PWA) and keeps working with no network, syncing once it's back online.",
      "A Firebase backend with Firestore security rules that keep each business's data private, an admin console for plans and support, and web push reminders when a day goes unrecorded.",
    ],
    results: [],
    status: [
      { value: "Live", label: "Launched and open to any small business, free for up to 3 workers" },
      { value: "Early", label: "A small group of first businesses using it day to day" },
      {
        value: "Next",
        label: "Scaling up: onboarding more businesses and building on their feedback",
      },
    ],
    stack: ["React", "Tailwind CSS", "Firebase", "Firestore", "PWA", "Web Push"],
    liveUrl: "https://ledgio-nine.vercel.app",
    gallery: [
      {
        src: "/work/ledgio/landing.webp",
        alt: "Ledgio landing page: Know how your business is doing, every day",
        caption: "Landing page",
        kind: "desktop",
        width: 1600,
        height: 755,
      },
      {
        src: "/work/ledgio/phone-dashboard.webp",
        alt: "Ledgio dashboard on a phone showing this week's revenue, profit and workers",
        caption: "The week at a glance",
        kind: "phone",
        width: 608,
        height: 1279,
      },
      {
        src: "/work/ledgio/phone-add-record.webp",
        alt: "Ledgio form for adding a day's record with worker, date, revenue and expense",
        caption: "Adding a day's record",
        kind: "phone",
        width: 600,
        height: 1280,
      },
      {
        src: "/work/ledgio/phone-notifications.webp",
        alt: "Ledgio notifications reminding the owner that nothing was recorded yesterday",
        caption: "Reminders when a day is missed",
        kind: "phone",
        width: 600,
        height: 1280,
      },
      {
        src: "/work/ledgio/records.webp",
        alt: "Ledgio records page with monthly totals, a records table and worker performance",
        caption: "Records and worker performance",
        kind: "desktop",
        width: 1500,
        height: 909,
      },
    ],
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
