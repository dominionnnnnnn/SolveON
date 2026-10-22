import type { Metadata } from "next";
import {
  Engagements,
  HowPricingWorks,
  InEveryPhase,
  PricingCta,
  PricingFaq,
  PricingHero,
} from "@/components/pricing/pricing-sections";

const description =
  "We price one focused phase at a time. After a short discovery call you get a written scope, timeline and fixed price, with design, QA and handover included.";

export const metadata: Metadata = {
  title: "Pricing",
  description,
  alternates: { canonical: "/pricing" },
  openGraph: { title: "Pricing", description, url: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <Engagements />
      <InEveryPhase />
      <HowPricingWorks />
      <PricingFaq />
      <PricingCta />
    </>
  );
}
