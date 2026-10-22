import type { Metadata } from "next";
import { LatestGuides } from "@/components/resources/latest-guides";
import { Newsletter } from "@/components/resources/newsletter";
import { ResourcesHero } from "@/components/resources/resources-hero";

const description =
  "Plain-language answers on what software costs, how long it takes and what to build first, written from the projects we deliver.";

export const metadata: Metadata = {
  title: "Insights",
  description,
  alternates: { canonical: "/resources" },
  openGraph: { title: "Insights", description, url: "/resources" },
};

export default function ResourcesPage() {
  return (
    <>
      <ResourcesHero />
      <LatestGuides />
      <Newsletter />
    </>
  );
}
