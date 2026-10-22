import Link from "next/link";
import type { ReactNode } from "react";

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#111",
  strokeWidth: 1.8,
  "aria-hidden": true,
};

export type CoreService = {
  /** Anchor id, used by the nav and the Home services panels */
  id: string;
  title: string;
  desc: string;
  /** TODO: adjust to your real delivery times */
  phase: string;
  icon: ReactNode;
  highlight?: boolean;
};

export const coreServices: CoreService[] = [
  {
    id: "web-apps",
    title: "Web apps & SaaS",
    desc: "Multi-user platforms, dashboards and portals with roles, workflows and integrations.",
    phase: "4–6 weeks",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="4" width="18" height="14" rx="3" />
        <path d="M3 9h18M8 21h8" />
      </svg>
    ),
  },
  {
    id: "mobile-apps",
    title: "Mobile apps",
    desc: "iOS and Android products built for release: flows, backend, QA and store submission.",
    phase: "4–6 weeks",
    icon: (
      <svg {...iconProps}>
        <rect x="7" y="2" width="10" height="20" rx="3" />
        <path d="M11 18h2" />
      </svg>
    ),
  },
  {
    id: "backend",
    title: "Backend & APIs",
    desc: "APIs, databases, payments and integrations built to stay maintainable after launch.",
    phase: "3–5 weeks",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="3" width="18" height="7" rx="2" />
        <rect x="3" y="14" width="18" height="7" rx="2" />
        <path d="M7 6.5h.01M7 17.5h.01" />
      </svg>
    ),
  },
  {
    id: "ai-automation",
    title: "AI & WhatsApp automation",
    desc: "Chatbots, WhatsApp agents and automated workflows designed around real business processes.",
    phase: "2–4 weeks",
    icon: (
      <svg {...iconProps}>
        <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.2A8 8 0 1 1 21 12z" />
        <path d="M9 11h6M9 14h3" />
      </svg>
    ),
  },
  {
    id: "websites",
    title: "Websites & landing pages",
    desc: "Fast, clear sites that turn visitors into enquiries, with content you can edit yourself.",
    phase: "2–3 weeks",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </svg>
    ),
  },
  {
    id: "mvp",
    title: "MVP development",
    desc: "The smallest version that proves your idea with real users, then a clear plan for what comes next.",
    phase: "4–6 weeks",
    highlight: true,
    icon: (
      <svg {...iconProps}>
        <path d="M5 19c0-7 4-12 14-14-1 10-6 14-14 14z" />
        <path d="M5 19l6-6" />
      </svg>
    ),
  },
];

const smallIcon = { ...iconProps, width: 18, height: 18, strokeWidth: 2 };

const included: { title: string; desc: string; icon: ReactNode; dark?: boolean }[] = [
  {
    title: "UI/UX design",
    desc: "Flows and screens designed before code, so you see it first.",
    icon: (
      <svg {...smallIcon}>
        <path d="M12 3l9 4.5-9 4.5-9-4.5z" />
        <path d="M3 12l9 4.5 9-4.5" />
      </svg>
    ),
  },
  {
    title: "QA & testing",
    desc: "Real-device and real-scenario testing before anything ships.",
    icon: (
      <svg {...smallIcon}>
        <path d="M5 12l5 5 9-10" />
      </svg>
    ),
  },
  {
    title: "Deployment",
    desc: "Set up on hosting and stores in accounts that belong to you.",
    icon: (
      <svg {...smallIcon}>
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    ),
  },
  {
    title: "Documentation",
    desc: "Plain-language docs for your team and the next developer.",
    icon: (
      <svg {...smallIcon}>
        <path d="M6 3h9l3 3v15H6z" />
        <path d="M9 11h6M9 15h6" />
      </svg>
    ),
  },
  {
    title: "Full ownership",
    desc: "Source code, data and accounts handed over properly.",
    icon: (
      <svg {...smallIcon}>
        <rect x="5" y="10" width="14" height="10" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </svg>
    ),
  },
  {
    title: "Support after launch",
    // TODO: confirm the number of days of fixes included
    desc: "[30] days of fixes included, then optional ongoing care.",
    dark: true,
    icon: (
      <svg {...smallIcon}>
        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
];

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="gridbg gridbg-down absolute inset-0" aria-hidden="true" />
      <div className="wrap relative flex flex-wrap items-center gap-12 pb-24 pt-20">
        <div className="min-w-0 flex-[1_1_100%] phone:flex-[1_1_520px]">
          <span className="eb">Services</span>
          <h1 className="disp h1-page mt-[22px] max-phone:text-[42px]">
            Everything it takes
            <br />
            to <span className="mk">ship a product.</span>
          </h1>
          <p className="muted mt-[26px] max-w-[520px] text-lg leading-[1.6]">
            Start with the outcome you need. We put the right mix of product, design and engineering
            around it, and keep one person accountable from first call to handover.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-g">
              Book a call
            </Link>
            <Link href="/pricing" className="btn">
              See how pricing works
            </Link>
          </div>
        </div>

        {/* Fanned service cards */}
        <div
          className="hv relative h-[420px] w-full flex-[0_0_auto] phone:w-auto phone:flex-[1_1_420px]"
          role="img"
          aria-label="Service cards for web, mobile and AI fanned out"
        >
          <div className="fl3 absolute left-[4%] top-[70px] box-border h-[280px] w-60 rounded-[18px] bg-black p-[22px] text-white shadow-[0_24px_60px_rgba(0,0,0,.18)]">
            <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-green">
              <svg {...smallIcon}>
                <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.2A8 8 0 1 1 21 12z" />
              </svg>
            </span>
            <div className="mt-20 font-display text-2xl font-extrabold tracking-[-0.03em]">
              AI &amp; automation
            </div>
            <div className="mt-2 h-[7px] w-[70%] rounded-full bg-white/20" />
          </div>
          <div className="fl2 absolute right-[4%] top-10 box-border h-[280px] w-60 rounded-[18px] bg-green p-[22px] shadow-[0_24px_60px_rgba(21,128,61,.25)]">
            <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-ink">
              <svg {...smallIcon} stroke="#4ADE80">
                <rect x="7" y="2" width="10" height="20" rx="3" />
              </svg>
            </span>
            <div className="mt-20 font-display text-2xl font-extrabold tracking-[-0.03em]">
              Mobile apps
            </div>
            <div className="mt-2 h-[7px] w-[70%] rounded-full bg-ink/20" />
          </div>
          <div className="fl absolute left-1/2 top-[110px] -ml-[130px] box-border h-[300px] w-[260px] rounded-[18px] border border-ink/10 bg-white p-[22px] shadow-[0_30px_70px_rgba(0,0,0,.14)]">
            <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-green-pale">
              <svg {...smallIcon}>
                <rect x="3" y="4" width="18" height="14" rx="3" />
                <path d="M3 9h18" />
              </svg>
            </span>
            <div className="mt-24 font-display text-2xl font-extrabold tracking-[-0.03em]">
              Web apps &amp; SaaS
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {["Portals", "Dashboards", "SaaS"].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-green-soft px-[9px] py-1 text-[11px] font-semibold"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CoreServices() {
  return (
    <section className="pb-[72px] pt-10 phone:pb-[120px]">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="disp h2">
            Core <span className="mk">services.</span>
          </h2>
          <p className="muted m-0 max-w-[420px] text-base leading-[1.6]">
            Each one usually starts as a focused first phase. The quote comes after we agree what
            &quot;done&quot; means for you.
          </p>
        </div>
        <ul className="m-0 mt-12 list-none border-t border-ink/12 p-0">
          {coreServices.map((s) => (
            <li key={s.id} id={s.id} className="scroll-mt-20 tab:scroll-mt-4">
              <Link
                href="/contact"
                className="row flex flex-wrap items-center gap-x-7 gap-y-4 border-b border-ink/12 py-[30px] hover:text-ink"
              >
                <span
                  className={`flex h-12 w-12 flex-none items-center justify-center rounded-[14px] ${
                    s.highlight ? "bg-green" : "bg-green-soft"
                  }`}
                >
                  {s.icon}
                </span>
                <div className="min-w-0 flex-[1_1_360px]">
                  <h3 className="text-[21px] font-semibold tracking-[-0.01em]">{s.title}</h3>
                  <p className="muted mt-1.5 text-[15px] leading-[1.55]">{s.desc}</p>
                </div>
                <div className="flex-[0_0_200px]">
                  <div className="muted text-xs">Typical first phase</div>
                  <div className="disp text-2xl font-extrabold tracking-[-0.03em] text-green-dark">
                    {s.phase}
                  </div>
                </div>
                <span className="lnk rowgo ml-auto flex-none">Explore →</span>
              </Link>
            </li>
          ))}
        </ul>
        {/* TODO: remove the bracketed note once the timelines are confirmed */}
        <p className="muted mt-[18px] text-[13px]">
          Timelines are typical ranges, not quotes. [Adjust to your real delivery times.]
        </p>
      </div>
    </section>
  );
}

export function Included() {
  return (
    <section className="tint section">
      <div className="wrap">
        <span className="eb">Included every time</span>
        <h2 className="disp h2 mt-[18px]">
          The parts other teams
          <br />
          bill <span className="mk">as extras.</span>
        </h2>
        <ul className="m-0 mt-14 grid list-none grid-cols-1 gap-5 p-0 phone:grid-cols-2 tab:grid-cols-3">
          {included.map((item) => (
            <li
              key={item.title}
              className={`rounded-2xl p-[30px] ${item.dark ? "bg-ink text-white" : "bg-white"}`}
            >
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-full ${
                  item.dark ? "bg-green" : "bg-green-pale"
                }`}
              >
                {item.icon}
              </span>
              <h3 className="mt-[22px] text-lg font-semibold">{item.title}</h3>
              <p
                className={`mt-2 text-[15px] leading-[1.6] ${item.dark ? "text-white/66" : "text-muted"}`}
              >
                {item.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ServicesCta() {
  return (
    <section className="dark relative overflow-hidden py-[72px] text-center phone:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(600px_260px_at_50%_100%,rgba(74,222,128,.22),transparent_70%)]"
      />
      <div className="wrap relative">
        <h2 className="disp mx-auto max-w-[820px] text-[clamp(38px,4.8vw,64px)]">
          Not sure what you need? <span className="mk-d">Tell us the problem.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-[520px] text-[17px] leading-[1.6] text-white/66">
          We&apos;ll tell you what to build first, and what isn&apos;t worth building yet.
        </p>
        <div className="mt-[34px] flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="btn btn-g">
            Book a call
          </Link>
          <Link href="/work" className="btn btn-w">
            View our work
          </Link>
        </div>
      </div>
    </section>
  );
}
