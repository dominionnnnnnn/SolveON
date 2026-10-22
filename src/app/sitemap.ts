import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { pages, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = pages.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: path === "/resources" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
  // Case studies, except drafts (placeholder content stays out of search).
  const caseStudies: MetadataRoute.Sitemap = projects
    .filter((p) => !p.draft)
    .map((p) => ({ url: `${site.url}/work/${p.slug}`, changeFrequency: "yearly", priority: 0.6 }));
  return [...staticPages, ...caseStudies];
}
