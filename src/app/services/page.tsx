import type { Metadata } from "next";
import {
  CoreServices,
  coreServices,
  Included,
  ServicesCta,
  ServicesHero,
} from "@/components/services/services-sections";
import { site } from "@/lib/site";

const description =
  "Web apps, mobile apps, backends and APIs, AI and WhatsApp automation, websites and MVPs. Each starts as a focused first phase, with design, QA, deployment and handover included.";

export const metadata: Metadata = {
  title: "Services",
  description,
  alternates: { canonical: "/services" },
  openGraph: { title: "Services", description, url: "/services" },
};

// Describes each service to search engines.
const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: coreServices.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.title,
      description: s.desc,
      url: `${site.url}/services#${s.id}`,
      provider: { "@type": "Organization", name: site.name, url: site.url },
      areaServed: "Worldwide",
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ServicesHero />
      <CoreServices />
      <Included />
      <ServicesCta />
    </>
  );
}
