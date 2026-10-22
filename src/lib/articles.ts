// Insights articles, shown on Resources (all) and Home (the first three non-featured).
// Everything in [brackets] is a placeholder from the design (tracked in CHECKLIST.md).

export type ArticleCategory = "cost" | "product" | "engineering" | "case-notes";

export const articleCategories: { id: ArticleCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "cost", label: "Cost & planning" },
  { id: "product", label: "Product" },
  { id: "engineering", label: "Engineering" },
  { id: "case-notes", label: "Case notes" },
];

export const categoryLabel = (id: ArticleCategory) =>
  articleCategories.find((c) => c.id === id)?.label ?? id;

export type Article = {
  /** Future article URL: /resources/<slug> */
  slug: string;
  title: string;
  summary: string;
  category: ArticleCategory;
  date: string;
  readMinutes: string;
  /** The featured article gets the large card with a two-line cover. */
  featured?: { coverLine: string; coverHighlight: string };
};

const placeholder = {
  title: "[Article title goes here, up to two lines long]",
  summary: "[A one or two line summary of what the reader will learn.]",
  date: "[Date]",
  readMinutes: "[0]",
};

// TODO: replace with real articles. The featured one appears first, in the large card.
export const articles: Article[] = [
  {
    slug: "build-vs-buy",
    title: "[Featured article title goes here, up to two lines]",
    summary:
      "[A two-line summary of what the reader will learn and why it matters for their decision.]",
    category: "product",
    date: "[Date]",
    readMinutes: "[8]",
    featured: { coverLine: "Build vs", coverHighlight: "buy." },
  },
  { ...placeholder, slug: "article-1", category: "cost" },
  { ...placeholder, slug: "article-2", category: "product" },
  { ...placeholder, slug: "article-3", category: "engineering" },
  { ...placeholder, slug: "article-4", category: "case-notes" },
  { ...placeholder, slug: "article-5", category: "cost" },
  { ...placeholder, slug: "article-6", category: "product" },
];
