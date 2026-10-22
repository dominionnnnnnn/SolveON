import type { MetadataRoute } from "next";
import { pages, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: path === "/resources" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
