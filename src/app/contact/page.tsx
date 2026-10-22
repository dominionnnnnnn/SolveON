import type { Metadata } from "next";
import { PageStub } from "@/components/page-stub";

const description =
  "You don't need a finished spec, a budget spreadsheet or technical words. A few lines about the problem is enough to start.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact", description, url: "/contact" },
};

export default function Page() {
  return (
    <PageStub
      label="Contact"
      title={
        <>
          Tell us what
          <br />
          you&apos;re <span className="mk">building.</span>
        </>
      }
      lead={description}
    />
  );
}
