import Link from "next/link";

// TODO: write the real answers. Once they're in, add FAQPage structured data
// so the answers can show directly in Google results.
export const homeFaqs = [
  {
    q: "Can you build a whole product in six weeks?",
    a: "[Answer: most products ship as a first focused phase in 4–6 weeks, then grow in further phases.]",
  },
  { q: "Do you handle design and engineering together?", a: "[Answer goes here.]" },
  { q: "Do I need a full specification first?", a: "[Answer goes here.]" },
  { q: "How much does a project cost?", a: "[Answer goes here.]" },
  { q: "Do I get the source code and accounts?", a: "[Answer goes here.]" },
  { q: "What happens after launch?", a: "[Answer goes here.]" },
];

export function Faq() {
  return (
    <section className="section">
      <div className="wrap max-w-[820px]">
        <h2 className="disp h2">
          Before you start <span className="mk">a project</span>
        </h2>
        <div className="mt-11 border-t border-ink/12">
          {homeFaqs.map((f, i) => (
            <details key={f.q} open={i === 0} className="group border-b border-ink/12">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-[22px] text-[17px] font-semibold [&::-webkit-details-marker]:hidden">
                {f.q}
                <svg
                  className="shrink-0 transition-transform duration-200 group-open:rotate-180"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </summary>
              <p className="muted mb-6 text-base leading-[1.65]">{f.a}</p>
            </details>
          ))}
        </div>
        <Link href="/pricing#faq" className="btn mt-8">
          Read all FAQs
        </Link>
      </div>
    </section>
  );
}
