import Link from "next/link";
import { FounderPhoto } from "@/components/founder-photo";
import { founders } from "@/lib/content";
import { site } from "@/lib/site";

export function AboutHero() {
  const [a, b] = founders;
  return (
    <section className="relative overflow-hidden">
      <div className="gridbg gridbg-down absolute inset-0" aria-hidden="true" />
      <div className="wrap relative flex flex-wrap items-center gap-12 pb-24 pt-20">
        <div className="min-w-0 flex-[1_1_100%] phone:flex-[1_1_520px]">
          <span className="eb">About</span>
          <h1 className="disp h1-page mt-[22px] max-phone:text-[42px]">
            Two builders.
            <br />
            <span className="mk">One standard.</span>
          </h1>
          <p className="muted mt-[26px] max-w-[520px] text-lg leading-[1.6]">
            {site.name} is a small Nigeria-based software team. We take what people need, turn it
            into working software, and stay accountable for it after launch.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-g">
              Start a project
            </Link>
            <Link href="/work" className="btn">
              View our work
            </Link>
          </div>
        </div>

        {/* Founder cards */}
        <div
          className="hv relative h-[420px] w-full flex-[0_0_auto] phone:w-auto phone:flex-[1_1_400px]"
          role="img"
          aria-label="Two founder profile cards"
        >
          <div className="fl2 absolute left-[4%] top-10 w-60">
            <div className="rounded-[20px] bg-black p-5 text-white shadow-[0_24px_60px_rgba(0,0,0,.2)]">
              <FounderPhoto
                founder={a}
                tone="card"
                className="h-[190px] rounded-[14px]"
                sizes="200px"
              />
              <div className="mt-4 font-display text-xl font-extrabold tracking-[-0.02em]">
                {a.name}
              </div>
              <div className="mt-1 text-[13px] text-green">{a.focus}</div>
            </div>
          </div>
          <div className="fl absolute right-[4%] top-20 w-60">
            <div className="rounded-[20px] border border-ink/10 bg-white p-5 shadow-[0_24px_60px_rgba(0,0,0,.12)]">
              <FounderPhoto
                founder={b}
                tone="light"
                className="h-[190px] rounded-[14px]"
                sizes="200px"
              />
              <div className="mt-4 font-display text-xl font-extrabold tracking-[-0.02em]">
                {b.name}
              </div>
              <div className="mt-1 text-[13px] font-semibold text-green-dark">{b.focus}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
