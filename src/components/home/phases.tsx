import Link from "next/link";

const phases = [
  { title: "Understand", desc: "Problem, users and the outcome that matters." },
  { title: "Scope", desc: "One phase, priced clearly before we build." },
  { title: "Build", desc: "Weekly demos and visible milestones." },
  { title: "Test", desc: "Real-world QA before we call it done." },
  { title: "Launch", desc: "Deploy, document and hand over." },
];

export function Phases() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eb">How we work</span>
            <h2 className="disp h2 mt-[18px]">
              Five phases from idea
              <br />
              to <span className="mk">handover.</span>
            </h2>
            <p className="muted mt-[18px] text-[17px]">
              You always know what is in, what is out, and what happens next.
            </p>
          </div>
          <Link href="/about#how-we-work" className="btn">
            See how we work →
          </Link>
        </div>

        <ol className="m-0 mt-14 grid list-none grid-cols-1 gap-x-7 border-t border-ink/12 p-0 phone:grid-cols-2 tab:grid-cols-5 tab:gap-x-0">
          {phases.map((p, i) => (
            <li
              key={p.title}
              className={`pb-2 pt-8 tab:px-6 ${i === 0 ? "tab:pl-0" : "tab:border-l tab:border-ink/12"} ${
                i === phases.length - 1 ? "tab:pr-0" : ""
              }`}
            >
              <div className="disp text-[34px] font-extrabold text-green-dark">{pad(i + 1)}</div>
              <h3 className="mt-[18px] text-lg font-semibold">{p.title}</h3>
              <p className="muted mt-2 text-sm leading-[1.55]">{p.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);
