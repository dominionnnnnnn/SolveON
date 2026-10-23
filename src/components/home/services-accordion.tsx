"use client";

import Link from "next/link";
import { memo, useCallback, useEffect, useRef, useState, type ReactNode } from "react";

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

type Service = {
  key: string;
  title: string;
  desc: string;
  bg: string;
  fg: string;
  href: string;
  icon: ReactNode;
  rowA: string[];
  rowB: string[];
};

const iconProps = {
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#111",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const services: Service[] = [
  {
    key: "web",
    title: "Web apps & SaaS",
    desc: "Portals, dashboards and multi-user platforms with roles, workflows and integrations.",
    bg: "#DCFCE7",
    fg: "#111111",
    href: "/services#web-apps",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="4" width="18" height="14" rx="3" />
        <path d="M3 9h18M8 21h8" />
      </svg>
    ),
    rowA: ["Client portals", "Dashboards", "SaaS platforms", "Admin panels"],
    rowB: ["Booking systems", "Internal tools", "Inventory", "CRMs"],
  },
  {
    key: "mobile",
    title: "Mobile apps",
    desc: "iOS and Android products built for release: flows, backend, QA and store support.",
    bg: "#4ADE80",
    fg: "#111111",
    href: "/services#mobile-apps",
    icon: (
      <svg {...iconProps}>
        <rect x="7" y="2" width="10" height="20" rx="3" />
        <path d="M11 18h2" />
      </svg>
    ),
    rowA: ["iOS", "Android", "React Native", "Marketplaces"],
    rowB: ["Delivery apps", "Fintech", "Community apps", "Field tools"],
  },
  {
    key: "backend",
    title: "Backend & APIs",
    desc: "APIs, databases and integrations built to stay maintainable after launch.",
    bg: "#FFFFFF",
    fg: "#111111",
    href: "/services#backend",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="3" width="18" height="7" rx="2" />
        <rect x="3" y="14" width="18" height="7" rx="2" />
        <path d="M7 6.5h.01M7 17.5h.01" />
      </svg>
    ),
    rowA: ["REST APIs", "Payments", "Integrations", "Databases"],
    rowB: ["Accounting", "Auth & roles", "Webhooks", "Reporting"],
  },
  {
    key: "ai",
    title: "AI & automation",
    desc: "Chatbots, WhatsApp agents and workflows designed around real business processes.",
    bg: "#111111",
    fg: "#FFFFFF",
    href: "/services#ai-automation",
    icon: (
      <svg {...iconProps}>
        <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.2A8 8 0 1 1 21 12z" />
        <path d="M9 11h6M9 14h3" />
      </svg>
    ),
    rowA: ["WhatsApp agents", "Chatbots", "Automations", "Follow-ups"],
    rowB: ["Knowledge assistants", "Voice agents", "Smart reports", "Lead capture"],
  },
  {
    key: "site",
    title: "Websites",
    desc: "Fast, clear sites that turn visitors into enquiries, with content you can edit yourself.",
    bg: "#BBF7D0",
    fg: "#111111",
    href: "/services#websites",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </svg>
    ),
    rowA: ["Landing pages", "Company sites", "Portfolios", "Blogs"],
    rowB: ["Editable content", "SEO basics", "Contact forms", "Analytics"],
  },
  {
    key: "mvp",
    title: "MVP development",
    desc: "The smallest version that proves the idea, shipped in focused 4–6 week phases.",
    bg: "#FFFFFF",
    fg: "#111111",
    href: "/services#mvp",
    icon: (
      <svg {...iconProps}>
        <path d="M5 19c0-7 4-12 14-14-1 10-6 14-14 14z" />
        <path d="M5 19l6-6" />
      </svg>
    ),
    rowA: ["Prototypes", "4–6 week phases", "Validation", "Launch"],
    rowB: ["User testing", "Iterate", "Handover", "Scale up"],
  },
];

const extras = ["UI/UX design", "Cloud & DevOps", "Payments integration", "Maintenance & support"];

const tagColors = [
  { bg: "#4ADE80", fg: "#111111" },
  { bg: "#FFFFFF", fg: "#111111" },
  { bg: "#111111", fg: "#FFFFFF" },
  { bg: "#BBF7D0", fg: "#111111" },
];

/* ------------------------------------------------------------------ */
/* Motion constants (from the design)                                  */
/* ------------------------------------------------------------------ */

const LAST = services.length - 1; // 5
const PIN_HEIGHT = 3500; // px of scroll the section stays pinned for
const HOLD = 0.55; // share of each step the open panel holds still (desktop, as designed)
const HOLD_MOBILE = 0.4; // phones: longer, gentler transitions
const LERP = 0.16; // per-frame smoothing (desktop, as designed)
const LERP_MOBILE = 0.24; // phones: follows the finger more closely
const DESIGN_H = 560; // desktop panel height in the design
const EASE = "cubic-bezier(.2,.8,.2,1)";

const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);

/* ------------------------------------------------------------------ */

const TagRow = memo(function TagRow({
  labels,
  shift,
  reverse,
}: {
  labels: string[];
  shift: number;
  reverse?: boolean;
}) {
  // Repeat the list so the marquee loops seamlessly.
  const items = [...labels, ...labels, ...labels, ...labels];
  return (
    <div className="flex overflow-hidden">
      <div className={reverse ? "svc-mq-r" : "svc-mq"}>
        {items.map((label, i) => {
          const c = tagColors[(i + shift) % tagColors.length];
          return (
            <span key={i} className="svc-tag" style={{ background: c.bg, color: c.fg }}>
              <span className="svc-tag-dot" style={{ borderColor: c.fg }} />
              {label}
            </span>
          );
        })}
      </div>
    </div>
  );
});

export function ServicesAccordion() {
  const pinRef = useRef<HTMLDivElement>(null);
  const vpRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const fRef = useRef(0);
  const targetRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const mobileRef = useRef(false);

  const [f, setF] = useState(0); // 0..5, which panel is open (fractional while moving)
  const [cw, setCw] = useState(1136); // width of the panel area
  const [vpH, setVpH] = useState(560); // phones: panel height fitted to the screen
  const [scale, setScale] = useState(1); // desktop: whole panel scaled down on short screens
  const [pinned, setPinned] = useState(false);

  const apply = useCallback((v: number) => {
    fRef.current = v;
    setF(v);
  }, []);

  // Smoothly move f toward the target each frame.
  const kick = useCallback(() => {
    if (rafRef.current !== null) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const step = () => {
      const d = targetRef.current - fRef.current;
      if (reduce || Math.abs(d) < 0.002) {
        rafRef.current = null;
        apply(targetRef.current);
        return;
      }
      apply(fRef.current + d * (mobileRef.current ? LERP_MOBILE : LERP));
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
  }, [apply]);

  const sync = useCallback(() => {
    const el = pinRef.current;
    if (!el) return;
    const total = el.offsetHeight - window.innerHeight;
    if (total <= 0) return;
    const p = Math.min(1, Math.max(0, -el.getBoundingClientRect().top / total));
    const raw = p * LAST;
    const seg = Math.min(LAST - 1, Math.floor(raw));
    const hold = mobileRef.current ? HOLD_MOBILE : HOLD;
    const x = Math.max(0, Math.min(1, (raw - seg - hold) / (1 - hold)));
    const eased = x * x * (3 - 2 * x); // smoothstep
    targetRef.current = raw >= LAST ? LAST : seg + eased;
    kick();
  }, [kick]);

  useEffect(() => {
    const measure = () => {
      const vp = vpRef.current;
      const sticky = stickyRef.current;
      if (!vp || !sticky) return;
      const width = vp.clientWidth;
      const mobile = width < 640;
      // Fit the panels to the screen: whatever height is left after the header bar
      // (sticky below 960px) and this section's own heading.
      const headerOffset = window.innerWidth <= 960 ? 64 : 0;
      const chrome = sticky.offsetHeight - vp.offsetHeight;
      const available = window.innerHeight - headerOffset - chrome;
      const min = mobile ? 300 : 360;
      const canPin = available >= min;
      mobileRef.current = mobile;
      setCw(width);
      if (mobile) {
        // Phones: the vertical stack fills whatever height is left.
        setVpH(canPin ? Math.min(540, Math.floor(available)) : 440);
        setScale(1);
      } else {
        // Desktop: keep the design's exact 560px layout and scale the whole panel
        // down evenly on shorter screens, so proportions never change.
        setVpH(DESIGN_H);
        setScale(canPin ? Math.min(1, available / DESIGN_H) : 1);
      }
      // Only extremely short windows (e.g. a phone held sideways) skip pinning;
      // there the panels are tapped instead.
      setPinned(canPin);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    if (!pinned) return;
    sync();
    window.addEventListener("scroll", sync, { passive: true });
    return () => window.removeEventListener("scroll", sync);
  }, [pinned, sync]);

  useEffect(
    () => () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null; // so a remount (e.g. React strict mode) can animate again
    },
    [],
  );

  const goTo = (i: number) => {
    const el = pinRef.current;
    if (pinned && el) {
      const total = el.offsetHeight - window.innerHeight;
      const top = window.scrollY + el.getBoundingClientRect().top + (i / LAST) * total + 1;
      window.scrollTo({ top, behavior: "smooth" });
    } else {
      targetRef.current = i;
      apply(i);
    }
  };

  // Layout maths. Desktop: panels open sideways (as in the design).
  // Phones: panels stack vertically and the next one rises from the bottom.
  const i0 = Math.min(LAST, Math.floor(f));
  const t = f - i0;
  const sel = Math.min(LAST, Math.round(f));
  const mob = cw < 640;
  const innerW = mob ? cw : cw / scale; // desktop layout width before scaling
  const closed = mob ? 56 : 112;
  const step = closed + (mob ? 8 : 14);
  const span = mob ? vpH : innerW; // length of the axis the panels move along
  const openSize = mob ? Math.max(240, span - step) : Math.max(520, innerW - 252);
  // How many rows of tags fit under the text at this panel height
  const chipRows = mob ? (openSize >= 400 ? 2 : openSize >= 340 ? 1 : 0) : 2; // desktop always has the design's full height

  return (
    <section className="wrap svc-sec pt-16 phone:pt-28" aria-labelledby="what-we-build">
      <div ref={pinRef} className="relative" style={{ height: pinned ? PIN_HEIGHT : "auto" }}>
        <div
          ref={stickyRef}
          className="svc-sticky top-0 bg-white py-4 phone:py-7"
          style={{ position: pinned ? "sticky" : "relative" }}
        >
          <div className="flex flex-wrap items-end justify-between gap-4 phone:gap-6">
            <div>
              <span className="eb">What we build</span>
              <h2 id="what-we-build" className="disp h2 mt-4">
                One team for product,
                <br />
                design and <span className="mk">engineering.</span>
              </h2>
            </div>
            <div className="flex items-center gap-3.5">
              <div aria-hidden="true" className="flex gap-1.5">
                {services.map((s, i) => (
                  <span
                    key={s.key}
                    className="block h-2.5 rounded-full border-2 border-ink transition-[width] duration-400"
                    style={{
                      width: i === sel ? 34 : 10,
                      background: i === sel ? "#4ADE80" : "#fff",
                    }}
                  />
                ))}
              </div>
              <span
                aria-live="polite"
                className="inline-flex h-[38px] items-center whitespace-nowrap rounded-full border border-ink bg-green-soft px-4 text-[13px] font-semibold"
              >
                {pad(sel + 1)} / {pad(services.length)}
                {pinned ? " · Scroll to explore" : ""}
              </span>
            </div>
          </div>

          <div
            ref={vpRef}
            className="svc-vp mt-5 overflow-hidden font-display phone:mt-7"
            style={{ height: mob ? vpH : DESIGN_H * scale }}
          >
            <div
              style={
                mob
                  ? { height: "100%" }
                  : {
                      width: innerW,
                      height: DESIGN_H,
                      transform: scale < 1 ? `scale(${scale})` : undefined,
                      transformOrigin: "0 0",
                    }
              }
            >
              <ul
                className={`m-0 flex h-full list-none p-0 will-change-transform ${
                  mob ? "flex-col gap-2" : "gap-3.5"
                }`}
                style={{
                  transform: mob
                    ? `translateY(-${(f * step).toFixed(2)}px)`
                    : `translateX(-${(f * step).toFixed(2)}px)`,
                  transition: pinned ? "none" : `transform 0.55s ${EASE}`,
                }}
              >
                {services.map((s, i) => {
                  const open = i === sel;
                  const grow = i === i0 ? 1 - t : i === i0 + 1 ? t : 0;
                  const full = i === LAST ? Math.max(openSize, span) : openSize;
                  const size = closed + grow * (full - closed);
                  const op = Math.max(0, Math.min(1, 1 - 2 * Math.abs(f - i)));
                  return (
                    <li
                      key={s.key}
                      className={`relative box-border overflow-hidden border-ink ${
                        mob ? "w-full rounded-3xl border-2" : "h-full rounded-[36px] border-[3px]"
                      }`}
                      style={{
                        flex: `0 0 ${size.toFixed(1)}px`,
                        [mob ? "minHeight" : "minWidth"]: closed,
                        background: s.bg,
                        color: s.fg,
                        transition: pinned ? "none" : `flex 0.55s ${EASE}`,
                      }}
                    >
                      <span
                        aria-hidden="true"
                        className={`absolute inline-flex items-center justify-center rounded-full border-2 border-ink bg-green transition-[left,top] duration-[550ms] ${
                          mob ? "h-[42px] w-[42px] [&_svg]:h-5 [&_svg]:w-5" : "top-7 h-14 w-14"
                        }`}
                        style={
                          mob
                            ? { left: open ? 22 : 5, top: open ? 16 : 5 }
                            : { left: open ? 40 : 25 }
                        }
                      >
                        {s.icon}
                      </span>

                      {/* Body is always in the HTML so every service is readable by search engines. */}
                      <div
                        className={`absolute ${
                          mob ? "left-[22px] right-[22px] top-[72px]" : "left-10 right-10 top-28"
                        }`}
                        style={{ opacity: op, visibility: op > 0 ? "visible" : "hidden" }}
                        aria-hidden={!open}
                        inert={!open}
                      >
                        <h3
                          className={`m-0 font-extrabold leading-none tracking-[-0.045em] ${
                            mob ? "text-[30px]" : "whitespace-nowrap text-[clamp(40px,4.4vw,60px)]"
                          }`}
                        >
                          {s.title}
                        </h3>
                        <p
                          className={`max-w-[540px] leading-normal opacity-85 ${
                            mob ? "mt-2.5 text-[15px]" : "mt-[18px] text-[19px]"
                          }`}
                        >
                          {s.desc}
                        </p>
                        <Link
                          href={s.href}
                          className={`inline-flex items-center justify-center rounded-full border-2 border-ink bg-white px-6 font-bold text-ink hover:text-ink ${
                            mob ? "mt-4 h-[42px] text-sm" : "mt-6 h-12 text-[15px]"
                          }`}
                        >
                          Learn more →
                        </Link>
                      </div>

                      {open && chipRows > 0 && (
                        <div
                          aria-hidden="true"
                          className={`absolute inset-x-0 flex flex-col ${
                            mob ? "bottom-[18px] gap-2" : "bottom-[26px] gap-3.5"
                          }`}
                          style={{ opacity: op }}
                        >
                          <TagRow labels={s.rowA} shift={0} />
                          {chipRows > 1 && <TagRow labels={s.rowB} shift={2} reverse />}
                        </div>
                      )}

                      {!open && (
                        <>
                          {mob ? (
                            // Collapsed strip on phones: title reads across, next to the icon
                            <span
                              aria-hidden="true"
                              className="absolute left-[60px] right-4 top-0 flex h-[52px] items-center truncate text-xl font-extrabold tracking-[-0.03em]"
                            >
                              {s.title}
                            </span>
                          ) : (
                            <span
                              aria-hidden="true"
                              className="absolute bottom-7 left-1/2 whitespace-nowrap text-[46px] font-extrabold leading-none tracking-[-0.04em] [writing-mode:vertical-rl]"
                              style={{ transform: "translateX(-50%) rotate(180deg)" }}
                            >
                              {s.title}
                            </span>
                          )}
                          <button
                            type="button"
                            onClick={() => goTo(i)}
                            aria-label={`Show ${s.title}`}
                            className={`svc-open absolute inset-0 m-0 h-full w-full cursor-pointer border-0 bg-transparent p-0 ${
                              mob ? "rounded-[22px]" : "rounded-[33px]"
                            }`}
                          />
                        </>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-9 flex flex-wrap items-center justify-between gap-5 pb-[72px] phone:pb-[120px]">
        <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
          {extras.map((e) => (
            <li
              key={e}
              className="inline-flex h-8 items-center rounded-full border border-ink/25 px-3.5 text-[13px] font-medium"
            >
              {e}
            </li>
          ))}
        </ul>
        <Link href="/services" className="btn">
          View all services →
        </Link>
      </div>
    </section>
  );
}
