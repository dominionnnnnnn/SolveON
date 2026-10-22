import type { Metadata } from "next";
import { PageStub } from "@/components/page-stub";

const description =
  "Solveon is a small Lagos-based software team. We take what people need, turn it into working software, and stay accountable for it after launch.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about" },
  openGraph: { title: "About", description, url: "/about" },
};

export default function Page() {
  return (
    <PageStub
      label="About"
      title={
        <>
          Two builders.
          <br />
          <span className="mk">One standard.</span>
        </>
      }
      lead={description}
    />
  );
}
