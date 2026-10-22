import type { Metadata } from "next";
import { PageStub } from "@/components/page-stub";

const description =
  "Start with the outcome you need. We put the right mix of product, design and engineering around it, and keep one person accountable from first call to handover.";

export const metadata: Metadata = {
  title: "Services",
  description,
  alternates: { canonical: "/services" },
  openGraph: { title: "Services", description, url: "/services" },
};

export default function Page() {
  return (
    <PageStub
      label="Services"
      title={
        <>
          Everything it takes
          <br />
          to <span className="mk">ship a product.</span>
        </>
      }
      lead={description}
    />
  );
}
