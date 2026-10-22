import { Cta } from "@/components/home/cta";
import { Faq } from "@/components/home/faq";
import { Hero } from "@/components/home/hero";
import { Insights } from "@/components/home/insights";
import { Ownership } from "@/components/home/ownership";
import { Phases } from "@/components/home/phases";
import { SelectedWork } from "@/components/home/selected-work";
import { ServicesAccordion } from "@/components/home/services-accordion";
import { StackMarquee } from "@/components/home/stack-marquee";
import { Stats } from "@/components/home/stats";
import { Testimonials } from "@/components/home/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <SelectedWork />
      <ServicesAccordion />
      <StackMarquee />
      <Ownership />
      <Phases />
      <Testimonials />
      <Faq />
      <Insights />
      <Cta />
    </>
  );
}
