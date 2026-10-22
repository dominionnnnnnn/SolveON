import Link from "next/link";

// TODO: pull these from real articles once Resources has content.
const articles = [{ tag: "Cost & planning" }, { tag: "Product" }, { tag: "Engineering" }].map(
  (a) => ({
    ...a,
    date: "[Date]",
    title: "[Article title goes here, up to two lines long]",
    summary: "[A one or two line summary of what the reader will learn.]",
    href: "/resources",
  }),
);

export function Insights() {
  return (
    <section className="section bg-green-soft">
      <div className="wrap">
        <span className="eb">Insights</span>
        <h2 className="disp h2 mt-[18px]">
          Guides for people who have to
          <br />
          make <span className="mk">the product decision.</span>
        </h2>
        <div className="mt-14 grid grid-cols-1 gap-5 phone:grid-cols-2 tab:grid-cols-3">
          {articles.map((a, i) => (
            <Link
              key={i}
              href={a.href}
              className="group flex min-h-[260px] flex-col rounded-2xl bg-white p-7 hover:text-ink"
            >
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-[26px] items-center rounded-full border border-ink px-[11px] text-xs font-semibold">
                  {a.tag}
                </span>
                <span className="muted text-xs">{a.date}</span>
              </div>
              <h3 className="mt-[18px] text-[19px] font-semibold leading-[1.35] tracking-[-0.01em]">
                {a.title}
              </h3>
              <p className="muted mt-3 text-sm leading-[1.6]">{a.summary}</p>
              <span className="lnk mt-auto pt-5 group-hover:underline">Read article →</span>
            </Link>
          ))}
        </div>
        <Link href="/resources" className="btn mt-8">
          View all articles →
        </Link>
      </div>
    </section>
  );
}
