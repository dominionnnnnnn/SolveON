import type { Metadata } from "next";
import { PageStub } from "@/components/page-stub";

const description =
  "Software isn't bought off a menu. After a short discovery call we quote one focused phase, based on what you need, the platforms involved and the risk.";

export const metadata: Metadata = {
  title: "Pricing",
  description,
  alternates: { canonical: "/pricing" },
  openGraph: { title: "Pricing", description, url: "/pricing" },
};

export default function Page() {
  return (
    <PageStub
      label="Pricing"
      title={
        <>
          We price a phase,
          <br />
          <span className="mk">not a guess.</span>
        </>
      }
      lead={description}
    />
  );
}
