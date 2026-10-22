// Options for the Contact form, shared by the form and the /api/contact endpoint.

export const serviceOptions = [
  "Web app",
  "Mobile app",
  "Backend / API",
  "AI / WhatsApp",
  "Website",
  "Not sure yet",
] as const;

/** Services page anchors → the form option they pre-select (via /contact?service=...). */
export const serviceFromAnchor: Record<string, (typeof serviceOptions)[number]> = {
  "web-apps": "Web app",
  "mobile-apps": "Mobile app",
  backend: "Backend / API",
  "ai-automation": "AI / WhatsApp",
  websites: "Website",
  mvp: "Not sure yet",
};

// TODO: set real budget ranges, e.g. "Under ₦2m", "₦2m–₦5m", "₦5m+".
export const budgetOptions = ["[Range 1]", "[Range 2]", "[Range 3]", "Not sure yet"];

export const timelineOptions = [
  "As soon as possible",
  "In 1–3 months",
  "Later this year",
  "Just exploring",
];

export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  services: string[];
  budget?: string;
  timeline?: string;
  message: string;
  /** Hidden field; real people leave it empty */
  website?: string;
};
