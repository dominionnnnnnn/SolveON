import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy policy",
  // Placeholder page: keep it out of search results until the real text is in.
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <section className="wrap section">
      <h1 className="disp h1-page">Privacy policy</h1>
      <p className="muted mt-6 max-w-[620px] text-lg leading-relaxed">
        This page is being written and will be published soon.
      </p>
    </section>
  );
}
