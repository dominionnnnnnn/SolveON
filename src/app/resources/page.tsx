import type { Metadata } from "next";
import { PageStub } from "@/components/page-stub";

const description =
  "Plain-language answers on what software costs, how long it takes and what to build first, written from the projects we deliver.";

export const metadata: Metadata = {
  title: "Insights",
  description,
  alternates: { canonical: "/resources" },
  openGraph: { title: "Insights", description, url: "/resources" },
};

export default function Page() {
  return (
    <PageStub
      label="Insights"
      title={
        <>
          Guides for people
          <br />
          who have to <span className="mk">decide.</span>
        </>
      }
      lead={description}
    />
  );
}
