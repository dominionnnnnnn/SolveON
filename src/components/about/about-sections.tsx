import Link from "next/link";
import type { ReactNode } from "react";
import { FounderPhoto } from "@/components/founder-photo";
import { PhasesGrid } from "@/components/phases-grid";
import { founders } from "@/lib/content";

/* ---------------- Story ---------------- */

// TODO: write the founding story (two short paragraphs).
const story = {
  why: "[Two or three sentences on why you started the team: the problem you kept seeing with how software gets built and handed over.]",
  how: "[One or two sentences on how you work differently: small team, one accountable lead, clear scope, real handover.]",
};

const localSkills = ["Paystack & Flutterwave", "WhatsApp Business API", "Offline-friendly apps"];

export function Story() {
  return (
    <section className="tint section">
      <div className="wrap flex flex-wrap items-center gap-12">
        <div className="min-w-0 flex-[1_1_100%] tab:flex-[1_1_480px]">
          <h2 className="disp h2">
            We build like it&apos;s
            <br />
            <span className="mk">our own product.</span>
          </h2>
          <p className="muted mt-6 max-w-[520px] text-[17px] leading-[1.7]">{story.why}</p>
          <p className="mt-4 max-w-[520px] text-[17px] leading-[1.7]">{story.how}</p>
        </div>

        <div className="relative min-w-0 flex-[1_1_100%] overflow-hidden rounded-[20px] bg-black p-10 text-white tab:flex-[1_1_420px]">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(360px_220px_at_100%_100%,rgba(74,222,128,.28),transparent_70%)]"
          />
          <div className="relative">
            <div className="text-[13px] font-medium text-white/60">Where we work from</div>
            <p className="disp mt-3.5 text-[clamp(30px,3vw,40px)] font-extrabold leading-[1.08]">
              Rooted in Lagos.
              <br />
              <span className="text-green">Shipping anywhere.</span>
            </p>
            <p className="mt-[18px] text-[15px] leading-[1.7] text-white/70">
              We know the local realities first-hand: Naira payments, WhatsApp-first customers and
              unreliable networks. The same habits serve clients anywhere else.
            </p>
            <ul className="m-0 mt-[22px] flex list-none flex-wrap gap-2 p-0">
              {localSkills.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-white/25 px-3 py-1.5 text-xs font-semibold"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Values ---------------- */

const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#111",
  strokeWidth: 2,
  "aria-hidden": true,
};

const values: { title: string; desc: string; icon: ReactNode }[] = [
  {
    title: "Outcome first",
    desc: "We agree the number that has to move before anyone writes code.",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    title: "Clear ownership",
    desc: "One accountable lead, documented decisions and a proper handover.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Honest scope",
    desc: "We tell you what to build first, and what isn't worth building yet.",
    icon: (
      <svg {...iconProps}>
        <path d="M4 7h16M4 12h10M4 17h6" />
      </svg>
    ),
  },
];

export function Values() {
  return (
    <section className="section">
      <div className="wrap">
        <span className="eb">What we believe</span>
        <h2 className="disp h2 mt-[18px]">
          How we treat
          <br />
          <span className="mk">every project.</span>
        </h2>
        <ul className="m-0 mt-14 grid list-none grid-cols-1 gap-x-7 border-t border-ink/12 p-0 phone:grid-cols-2 tab:grid-cols-3 tab:gap-x-0">
          {values.map((v, i) => (
            <li
              key={v.title}
              className={`pb-2 pt-8 tab:px-7 ${i === 0 ? "tab:pl-0" : "tab:border-l tab:border-ink/12"} ${
                i === values.length - 1 ? "tab:pr-0" : ""
              }`}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green">
                {v.icon}
              </span>
              <h3 className="mt-[22px] text-xl font-semibold">{v.title}</h3>
              <p className="muted mt-2 text-[15px] leading-[1.6]">{v.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- Team ---------------- */

export function Team() {
  return (
    <section id="team" className="tint section scroll-mt-16 tab:scroll-mt-0">
      <div className="wrap">
        <span className="eb">The team</span>
        <h2 className="disp h2 mt-[18px]">
          The people you&apos;ll
          <br />
          <span className="mk">actually work with.</span>
        </h2>
        <div className="mt-14 grid grid-cols-1 gap-5 phone:grid-cols-2 tab:grid-cols-3">
          {founders.map((f, i) => (
            <article key={f.name} className="rounded-[18px] bg-white p-[18px]">
              <FounderPhoto
                founder={f}
                tone={i === 0 ? "dark" : "light"}
                className="h-[300px] rounded-xl text-sm"
                sizes="(min-width: 961px) 360px, (min-width: 641px) 50vw, 100vw"
              />
              <div className="px-1.5 pb-2 pt-[18px]">
                <h3 className="text-xl font-semibold">{f.name}</h3>
                <div className="mt-1 text-sm font-semibold text-green-dark">{f.role}</div>
                <p className="muted mt-3 text-[15px] leading-[1.6]">{f.bio}</p>
              </div>
            </article>
          ))}
          <div className="flex min-h-[300px] flex-col items-center justify-center rounded-[18px] border border-dashed border-ink/30 p-[18px] text-center tab:min-h-[440px]">
            <span
              aria-hidden="true"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-ink text-[26px] font-light"
            >
              +
            </span>
            <h3 className="mt-[18px] text-lg font-semibold">Specialists on demand</h3>
            {/* TODO: confirm this line */}
            <p className="muted mt-2 max-w-[240px] text-sm leading-[1.6]">
              [Designers, QA or DevOps we bring in when a project needs them.]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- How we work + closing CTA ---------------- */

export function HowWeWork() {
  return (
    <section id="how-we-work" className="dark section scroll-mt-16 tab:scroll-mt-0">
      <div className="wrap">
        <span className="eb">How we work</span>
        <h2 className="disp h2 mt-[18px]">
          Five phases from idea
          <br />
          to <span className="mk-d">handover.</span>
        </h2>
        <PhasesGrid tone="dark" />
        <div className="mt-[72px] flex flex-wrap items-center justify-between gap-6 border-t border-white/14 pt-14">
          <h2 className="disp text-[clamp(30px,3.4vw,46px)]">
            Let&apos;s build something <span className="mk-d">together.</span>
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-g">
              Book a call
            </Link>
            <Link href="/work" className="btn btn-w">
              View our work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
