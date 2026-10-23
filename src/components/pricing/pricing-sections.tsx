import Link from "next/link";
import { FaqList, type FaqItem } from "@/components/faq-list";
import { pad2, supportDays } from "@/lib/content";

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

// TODO: set real starting prices (shown as "₦ [—]" until then).
export const engagements = [
  {
    name: "MVP Sprint",
    badge: "4–6 weeks",
    desc: "Prove the idea with real users. One scoped phase covering design, build, launch and handover of the core features.",
    priceLabel: "Starting from",
    price: "₦ [—]",
  },
  {
    name: "Product Build",
    badge: "Multiple phases",
    popular: true,
    desc: "A complete product delivered in clear phases: web, mobile and backend, integrations and payments, QA and deployment.",
    priceLabel: "Per phase from",
    price: "₦ [—]",
  },
  {
    name: "Ongoing Partner",
    badge: "Monthly",
    desc: "Keep improving after launch: priority fixes, new features each cycle, monitoring and hosting, direct team access.",
    priceLabel: "Per month from",
    price: "₦ [—]",
  },
];

const inEveryPhase = [
  { title: "Written scope", desc: 'In, out and "done" agreed up front.' },
  { title: "Milestone payments", desc: "Pay as visible work is delivered." },
  { title: "Weekly demos", desc: "See progress every week, not at the end." },
  { title: "Design included", desc: "UI/UX is never an extra line item." },
  { title: "You own everything", desc: "Code, data and accounts in your name." },
  { title: "Support after launch", desc: `${supportDays} days of fixes included.`, dark: true },
];

// How many days a written proposal usually takes.
const proposalDays = "3";

const steps = [
  {
    title: "Discovery call",
    desc: "A free 30-minute call about the problem, users and outcome.",
  },
  {
    title: "Written proposal",
    desc: `Scope, timeline and fixed price for one phase, usually within ${proposalDays} days.`,
  },
  {
    title: "Approve and start",
    desc: "You approve the phase, pay the first milestone and we begin.",
  },
];

// TODO: write the real answers (then add FAQPage structured data).
export const pricingFaqs: FaqItem[] = [
  {
    q: "Why don't you list fixed prices?",
    a: "[Answer: two apps that sound the same can differ a lot in platforms, integrations and risk. A short discovery call lets us quote a price we will actually hold to.]",
  },
  { q: "How do payments work?", a: "[Answer goes here.]" },
  { q: "What if the scope changes mid-phase?", a: "[Answer goes here.]" },
  { q: "Are hosting and third-party costs included?", a: "[Answer goes here.]" },
  { q: "Do you work with clients outside Nigeria?", a: "[Answer goes here.]" },
];

const quoteLines = [
  "Product scope & flows",
  "UI design",
  "Mobile app + backend",
  "Payments integration",
  "QA, launch & handover",
];

function Check({ size = 12, width = 3.5 }: { size?: number; width?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#111"
      strokeWidth={width}
      aria-hidden="true"
    >
      <path d="M5 12l5 5 9-10" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */

export function PricingHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="gridbg gridbg-down absolute inset-0" aria-hidden="true" />
      <div className="wrap relative flex flex-wrap items-center gap-12 pb-24 pt-20">
        <div className="min-w-0 flex-[1_1_100%] phone:flex-[1_1_520px]">
          <span className="eb">Pricing</span>
          <h1 className="disp h1-page mt-[22px] max-phone:text-[42px]">
            We price a phase,
            <br />
            <span className="mk">not a guess.</span>
          </h1>
          <p className="muted mt-[26px] max-w-[520px] text-lg leading-[1.6]">
            Software isn&apos;t bought off a menu. After a short discovery call we quote one focused
            phase, based on what you need, the platforms involved and the risk.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-g">
              Get a phase quote
            </Link>
            <Link href="/work" className="btn">
              View our work
            </Link>
          </div>
        </div>

        {/* Sample quote card */}
        <div
          className="hv relative h-[440px] w-full flex-[0_0_auto] phone:w-auto phone:flex-[1_1_400px]"
          role="img"
          aria-label="A sample phase quote card with scope items and an approve button"
        >
          <div className="fl absolute left-1/2 top-5 -ml-[170px] box-border w-[340px] rounded-[20px] border border-ink/10 bg-white p-[26px] shadow-[0_30px_70px_rgba(0,0,0,.12)]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-ink/55">PHASE QUOTE</span>
              <span className="rounded-full bg-green-pale px-[9px] py-1 text-[11px] font-semibold text-green-dark">
                Phase 1
              </span>
            </div>
            <div className="disp mt-3 text-[26px] font-extrabold tracking-[-0.03em]">
              Booking app MVP
            </div>
            <div className="mt-[18px] flex flex-col gap-[11px] text-sm">
              {quoteLines.map((l) => (
                <div key={l} className="flex justify-between">
                  <span>{l}</span>
                  <span className="font-semibold text-green-dark">Included</span>
                </div>
              ))}
            </div>
            <div className="mt-[18px] flex items-end justify-between border-t border-dashed border-ink/20 pt-4">
              <div>
                <div className="text-xs text-ink/55">Timeline</div>
                <div className="font-bold">5 weeks</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-ink/55">Fixed price</div>
                <div className="disp text-2xl font-extrabold">₦ [—]</div>
              </div>
            </div>
            <div className="mt-[18px] flex h-11 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white">
              Approve phase
            </div>
          </div>
          <div className="fl2 absolute bottom-5 right-[2%] flex items-center gap-2 rounded-full bg-green px-4 py-2.5 text-[13px] font-semibold shadow-[0_14px_40px_rgba(21,128,61,.3)]">
            <Check size={14} width={3} />
            Scope agreed before we build
          </div>
        </div>
      </div>
    </section>
  );
}

export function Engagements() {
  return (
    <section className="pb-[72px] pt-10 phone:pb-[120px]">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eb">Ways to work with us</span>
            <h2 className="disp h2 mt-[18px]">
              Three ways <span className="mk">to start.</span>
            </h2>
          </div>
          <p className="muted m-0 max-w-[420px] text-base leading-[1.6]">
            Each is a typical shape. Your quote comes after we understand what &quot;done&quot;
            means for your product.
          </p>
        </div>
        <ul className="m-0 mt-12 list-none border-t border-ink/12 p-0">
          {engagements.map((e) => (
            <li key={e.name}>
              <Link
                href="/contact"
                className="row flex flex-wrap items-center gap-x-8 gap-y-4 border-b border-ink/12 py-[34px] hover:text-ink"
              >
                <div className="min-w-0 flex-[1_1_380px]">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-[22px] font-semibold">{e.name}</h3>
                    <span className="rounded-full border border-ink/25 px-2.5 py-1 text-xs font-semibold">
                      {e.badge}
                    </span>
                    {e.popular && (
                      <span className="rounded-full bg-green px-2.5 py-1 text-xs font-semibold">
                        Most common
                      </span>
                    )}
                  </div>
                  <p className="muted mt-2 text-[15px] leading-[1.6]">{e.desc}</p>
                </div>
                <div className="flex-[0_0_220px]">
                  <div className="muted text-xs">{e.priceLabel}</div>
                  <div className="disp text-[30px] font-extrabold tracking-[-0.03em] text-green-dark">
                    {e.price}
                  </div>
                </div>
                <span className="lnk rowgo ml-auto">Get a quote →</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function InEveryPhase() {
  return (
    <section className="tint section">
      <div className="wrap flex flex-wrap items-start gap-14">
        <div className="flex-[1_1_100%] tab:flex-[1_1_380px]">
          <span className="eb">In every phase</span>
          <h2 className="disp h2 mt-[18px]">
            No surprises.
            <br />
            <span className="mk">No lock-in.</span>
          </h2>
          <p className="muted mt-5 max-w-[420px] text-[17px] leading-[1.6]">
            The price you approve covers the whole phase. What&apos;s in and what&apos;s out is
            written down before any work starts.
          </p>
        </div>
        <ul className="m-0 grid flex-[1_1_100%] list-none grid-cols-1 gap-3.5 p-0 phone:grid-cols-2 tab:flex-[1_1_520px]">
          {inEveryPhase.map((item) => (
            <li
              key={item.title}
              className={`flex items-start gap-3 rounded-[14px] p-[22px] ${
                item.dark ? "bg-ink text-white" : "bg-white"
              }`}
            >
              <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-green">
                <Check />
              </span>
              <div>
                <div className="font-semibold">{item.title}</div>
                <div
                  className={`mt-1 text-sm leading-normal ${item.dark ? "text-white/66" : "text-muted"}`}
                >
                  {item.desc}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function HowPricingWorks() {
  return (
    <section className="section">
      <div className="wrap">
        <span className="eb">How pricing works</span>
        <h2 className="disp h2 mt-[18px]">
          From first call to
          <br />
          <span className="mk">approved quote.</span>
        </h2>
        <ol className="m-0 mt-14 grid list-none grid-cols-1 gap-x-7 border-t border-ink/12 p-0 phone:grid-cols-3 phone:gap-x-0">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className={`pb-2 pt-8 phone:px-7 ${i === 0 ? "phone:pl-0" : "phone:border-l phone:border-ink/12"} ${
                i === steps.length - 1 ? "phone:pr-0" : ""
              }`}
            >
              <div className="disp text-[34px] font-extrabold text-green-dark">{pad2(i + 1)}</div>
              <h3 className="mt-[18px] text-[19px] font-semibold">{s.title}</h3>
              <p className="muted mt-2 text-[15px] leading-[1.6]">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function PricingFaq() {
  return (
    <section id="faq" className="tint section scroll-mt-16 tab:scroll-mt-0">
      <div className="wrap max-w-[820px]">
        <h2 className="disp h2">
          Pricing <span className="mk">questions</span>
        </h2>
        <FaqList items={pricingFaqs} />
      </div>
    </section>
  );
}

export function PricingCta() {
  return (
    <section className="dark relative overflow-hidden py-[72px] text-center phone:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(600px_260px_at_50%_100%,rgba(74,222,128,.22),transparent_70%)]"
      />
      <div className="wrap relative">
        <h2 className="disp mx-auto max-w-[820px] text-[clamp(38px,4.8vw,64px)]">
          Get a clear price <span className="mk-d">for your first phase.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-[520px] text-[17px] leading-[1.6] text-white/66">
          Book a short call. We&apos;ll come back with scope, timeline and a fixed price.
        </p>
        <div className="mt-[34px] flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="btn btn-g">
            Get a phase quote
          </Link>
          <Link href="/work" className="btn btn-w">
            View our work
          </Link>
        </div>
      </div>
    </section>
  );
}
