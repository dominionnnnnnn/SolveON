// Single source of truth for brand details and navigation.
// Anything marked TODO is still a placeholder from the design.

export const site = {
  name: "SolveON",
  tagline: "Product, design, engineering and launch support from one small team.",
  description:
    "SolveON scopes, designs, builds and hands over software for businesses: web apps, mobile apps, backends, AI automation and websites, delivered in focused 4–6 week phases.",
  // TODO: replace with the production domain once it's set up.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://solveon.vercel.app",
  // TODO: real contact details.
  email: "hello@solveon.com",
  /** WhatsApp number in international format, digits only, e.g. "2348012345678". Empty = placeholder shown. */
  whatsapp: "2348083842079" as string,
  /** Booking link (e.g. Calendly or Cal.com). Empty = placeholder shown. */
  calendarUrl: "" as string,
  /** How fast you reply to enquiries, shown on Contact. */
  replyTime: "one working day",
  location: "Nigeria",
  locationLong: "Nigeria · Working with clients anywhere",
} as const;

export type NavLink = { label: string; href: string };
export type NavItem = NavLink & { children?: NavLink[] };

export const mainNav: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Web apps & SaaS", href: "/services#web-apps" },
      { label: "Mobile apps", href: "/services#mobile-apps" },
      { label: "Backend & APIs", href: "/services#backend" },
      { label: "AI & automation", href: "/services#ai-automation" },
      { label: "Websites", href: "/services#websites" },
      { label: "View all services →", href: "/services" },
    ],
  },
  // Plain link while Testimonials is hidden. To restore the dropdown, add back:
  // children: [{ label: "Case studies", href: "/work" }, { label: "Testimonials", href: "/#testimonials" }]
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About us", href: "/about" },
      { label: "Team", href: "/about#team" },
      { label: "How we work", href: "/about#how-we-work" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Insights", href: "/resources" },
      { label: "Pricing FAQ", href: "/pricing#faq" },
    ],
  },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Services",
    links: [
      { label: "Web apps & SaaS", href: "/services#web-apps" },
      { label: "Mobile apps", href: "/services#mobile-apps" },
      { label: "Backend & APIs", href: "/services#backend" },
      { label: "AI & automation", href: "/services#ai-automation" },
      { label: "Websites", href: "/services#websites" },
    ],
  },
  {
    title: "Work",
    links: [
      { label: "Case studies", href: "/work" },
      // { label: "Testimonials", href: "/#testimonials" }, // hidden until there are real quotes
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Team", href: "/about#team" },
      { label: "How we work", href: "/about#how-we-work" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Insights", href: "/resources" },
      { label: "Pricing", href: "/pricing" },
      { label: "FAQ", href: "/pricing#faq" },
    ],
  },
];

// Pages listed in the sitemap.
export const pages = ["", "/services", "/work", "/pricing", "/about", "/resources", "/contact"];

/** Display version of the WhatsApp number, e.g. "+234 801 234 5678". */
export const whatsappDisplay = site.whatsapp
  ? `+${site.whatsapp.replace(/^(\d{3})(\d{3})(\d{3})(\d+)$/, "$1 $2 $3 $4")}`
  : "[+234 000 000 0000]";
export const whatsappUrl = site.whatsapp ? `https://wa.me/${site.whatsapp}` : "";
