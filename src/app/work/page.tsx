import type { Metadata } from "next";
import { PageStub } from "@/components/page-stub";

const description =
  "A look at what we have designed, built and handed over: the problem, what we shipped and what changed after launch.";

export const metadata: Metadata = {
  title: "Work",
  description,
  alternates: { canonical: "/work" },
  openGraph: { title: "Work", description, url: "/work" },
};

export default function Page() {
  return (
    <PageStub
      label="Work"
      title={
        <>
          Products that had to
          <br />
          work <span className="mk">for real users.</span>
        </>
      }
      lead={description}
    />
  );
}
