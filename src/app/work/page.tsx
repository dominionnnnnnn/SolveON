import type { Metadata } from "next";
import { WorkGrid } from "@/components/work/work-grid";
import { WorkCta, WorkHero } from "@/components/work/work-sections";

const description =
  "A look at what we have designed, built and handed over: the problem, what we shipped and what changed after launch.";

export const metadata: Metadata = {
  title: "Work",
  description,
  alternates: { canonical: "/work" },
  openGraph: { title: "Work", description, url: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <WorkHero />
      <WorkGrid />
      <WorkCta />
    </>
  );
}
