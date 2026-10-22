import type { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { HowWeWork, Story, Team, Values } from "@/components/about/about-sections";
import { site } from "@/lib/site";

const description = `${site.name} is a small Lagos-based software team. We take what people need, turn it into working software, and stay accountable for it after launch.`;

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about" },
  openGraph: { title: "About", description, url: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Story />
      <Values />
      <Team />
      <HowWeWork />
    </>
  );
}
