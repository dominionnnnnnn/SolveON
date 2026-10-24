import type { ReactNode } from "react";

export type LegalSection = { title: string; body: ReactNode };

/** Shared layout for the Privacy policy and Terms of service pages. */
export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: ReactNode;
  sections: LegalSection[];
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="gridbg gridbg-down absolute inset-x-0 top-0 h-[460px]" aria-hidden="true" />
      <div className="wrap relative pb-24 pt-14 phone:pt-20">
        <span className="eb">Legal</span>
        <h1 className="disp h1-page mt-[22px]">{title}</h1>
        <p className="muted mt-4 text-sm">Last updated {updated}</p>
        <div className="mt-10 max-w-[760px] text-[17px] leading-[1.7]">
          <div className="muted">{intro}</div>
          {sections.map((s, i) => (
            <section key={s.title} className="mt-12 border-t border-ink/12 pt-8">
              <h2 className="text-[22px] font-semibold tracking-[-0.01em]">
                <span className="mr-3 text-green-dark">{String(i + 1).padStart(2, "0")}</span>
                {s.title}
              </h2>
              <div className="legal mt-4">{s.body}</div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
