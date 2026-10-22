import Link from "next/link";
import type { ReactNode } from "react";

/** Page hero used until each page is built out from the design. */
export function PageStub({
  label,
  title,
  lead,
}: {
  label: string;
  title: ReactNode;
  lead: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="gridbg absolute inset-0" aria-hidden="true" />
      <div className="wrap section relative text-center">
        <span className="eb">{label}</span>
        <h1 className="disp h1-page mx-auto mt-6 max-w-[900px]">{title}</h1>
        <p className="muted mx-auto mt-7 max-w-[620px] text-lg leading-relaxed">{lead}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="btn btn-g">
            Book a call
          </Link>
          <Link href="/work" className="btn">
            View our work
          </Link>
        </div>
      </div>
    </section>
  );
}
