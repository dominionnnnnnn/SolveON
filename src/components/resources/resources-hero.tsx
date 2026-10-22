import Link from "next/link";

export function ResourcesHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="gridbg gridbg-down absolute inset-0" aria-hidden="true" />
      <div className="wrap relative flex flex-wrap items-center gap-12 pb-[88px] pt-20">
        <div className="min-w-0 flex-[1_1_100%] phone:flex-[1_1_520px]">
          <span className="eb">Insights</span>
          <h1 className="disp h1-page mt-[22px] max-phone:text-[42px]">
            Guides for people
            <br />
            who have to <span className="mk">decide.</span>
          </h1>
          <p className="muted mt-[26px] max-w-[520px] text-lg leading-[1.6]">
            Plain-language answers on what software costs, how long it takes and what to build
            first, written from the projects we deliver.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#latest" className="btn btn-g">
              Read the latest
            </a>
            <Link href="/pricing#faq" className="btn">
              Pricing FAQ
            </Link>
          </div>
        </div>

        {/* Stack of guide cards */}
        <div
          className="hv relative h-[380px] w-full flex-[0_0_auto] phone:w-auto phone:flex-[1_1_400px]"
          role="img"
          aria-label="A stack of guide cards"
        >
          <div className="fl3 absolute left-[6%] top-[70px] h-60 w-[250px] rounded-2xl bg-green-pale" />
          <div className="fl2 absolute right-[6%] top-[30px] box-border h-60 w-[250px] rounded-2xl bg-black p-[22px] text-white">
            <span className="rounded-full border border-green px-[9px] py-1 text-[11px] font-semibold text-green">
              Engineering
            </span>
            <div className="mt-[70px] h-3 w-[85%] rounded-full bg-white" />
            <div className="mt-2 h-3 w-[60%] rounded-full bg-white" />
          </div>
          <div className="fl absolute left-1/2 top-[90px] -ml-[140px] box-border w-[280px] rounded-2xl border border-ink/10 bg-white p-6 shadow-[0_30px_70px_rgba(0,0,0,.14)]">
            <div className="flex items-center gap-2">
              <span className="rounded-full border border-ink px-[9px] py-1 text-[11px] font-semibold">
                Cost &amp; planning
              </span>
              <span className="muted text-[11px]">6 min read</span>
            </div>
            <div className="disp mt-4 text-[22px] font-extrabold leading-[1.15] tracking-[-0.03em]">
              How much does an app cost to build?
            </div>
            <div className="mt-3 h-2 w-full rounded-full bg-[#EEF0EC]" />
            <div className="mt-1.5 h-2 w-[80%] rounded-full bg-[#EEF0EC]" />
            <div className="lnk mt-4">Read article →</div>
          </div>
        </div>
      </div>
    </section>
  );
}
