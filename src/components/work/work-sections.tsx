import Link from "next/link";

export function WorkHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="gridbg gridbg-down absolute inset-0" aria-hidden="true" />
      <div className="wrap relative flex flex-wrap items-center gap-12 py-20">
        {/* Text column is wider than on other pages: each headline line needs ~665px at full size */}
        <div className="min-w-0 flex-[1_1_100%] phone:flex-[1_1_680px]">
          <span className="eb">Work</span>
          <h1 className="disp h1-page mt-[22px] max-phone:text-[42px]">
            Products that had to
            <br />
            work <span className="mk">for real users.</span>
          </h1>
          <p className="muted mt-[26px] max-w-[520px] text-lg leading-[1.6]">
            A look at what we have designed, built and handed over: the problem, what we shipped and
            what changed after launch.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-g">
              Start a project
            </Link>
            <Link href="/services" className="btn">
              See services
            </Link>
          </div>
        </div>

        {/* Dashboard + phone */}
        <div
          className="hv relative h-[400px] w-full flex-[0_0_auto] phone:w-auto phone:flex-[1_1_400px]"
          role="img"
          aria-label="A web dashboard and a phone app shown together"
        >
          <div className="fl absolute left-0 top-10 h-[300px] w-[78%] overflow-hidden rounded-[14px] border border-ink/10 bg-white shadow-[0_30px_70px_rgba(0,0,0,.12)]">
            <div className="flex h-[30px] items-center gap-1.5 bg-[#F4F5F2] px-3">
              {[0, 1, 2].map((i) => (
                <span key={i} className="h-2 w-2 rounded-full bg-[#D9DCD6]" />
              ))}
            </div>
            <div className="flex h-full">
              <div className="w-20 bg-green-soft" />
              <div className="flex-1 p-4">
                <div className="h-2.5 w-[40%] rounded-full bg-ink" />
                <div className="mt-3.5 grid grid-cols-3 gap-2">
                  <div className="h-[52px] rounded-lg bg-green-soft" />
                  <div className="h-[52px] rounded-lg bg-green-soft" />
                  <div className="h-[52px] rounded-lg bg-green" />
                </div>
                <div className="mt-2.5 box-border flex h-[120px] items-end gap-1.5 rounded-lg border border-[#EEF0EC] p-2.5">
                  {[
                    [40, "bg-green-pale-2"],
                    [65, "bg-green-pale-2"],
                    [50, "bg-green-pale-2"],
                    [85, "bg-ink"],
                    [70, "bg-green-pale-2"],
                    [95, "bg-green"],
                  ].map(([h, c], i) => (
                    <span
                      key={i}
                      className={`flex-1 rounded-[3px] ${c}`}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="fl2 absolute right-0 top-0 box-border h-[380px] w-[190px] rounded-[32px] bg-[#1C1C1C] p-2 shadow-[0_30px_70px_rgba(0,0,0,.25)]">
            <div className="box-border h-full rounded-[25px] bg-white px-3 py-4">
              <div className="h-[9px] w-1/2 rounded-full bg-ink" />
              <div className="mt-3.5 box-border h-[84px] rounded-[14px] bg-black p-3">
                <div className="h-2 w-1/2 rounded-full bg-white/40" />
                <div className="mt-3 h-5 w-[70%] rounded-md bg-green" />
              </div>
              <div className="mt-2.5 h-9 rounded-[10px] bg-green-soft" />
              <div className="mt-1.5 h-9 rounded-[10px] bg-green-soft" />
              <div className="mt-1.5 h-9 rounded-[10px] bg-green-soft" />
              <div className="mt-3.5 h-[34px] rounded-full bg-green" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WorkCta() {
  return (
    <section className="dark relative overflow-hidden py-[72px] text-center phone:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(600px_260px_at_50%_100%,rgba(74,222,128,.22),transparent_70%)]"
      />
      <div className="wrap relative">
        <h2 className="disp mx-auto max-w-[820px] text-[clamp(38px,4.8vw,64px)]">
          Your product could be <span className="mk-d">the next case study.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-[520px] text-[17px] leading-[1.6] text-white/66">
          Start with a short call. No finished spec needed.
        </p>
        <div className="mt-[34px] flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="btn btn-g">
            Book a call
          </Link>
          <Link href="/services" className="btn btn-w">
            See services
          </Link>
        </div>
      </div>
    </section>
  );
}
