import Link from "next/link";
import { HeroMockup } from "@/components/home/hero-mockup";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="gridbg absolute inset-0" aria-hidden="true" />
      <div className="wrap relative pt-12 text-center phone:pt-[88px]">
        <span className="eb">Idea in. Product out. Handover done properly.</span>
        <h1 className="disp mx-auto mt-[26px] max-w-[1000px] text-[42px] phone:text-[clamp(46px,6.6vw,90px)]">
          Software built around <br className="hidden phone:block" />
          <span className="mk">what you actually need.</span>
        </h1>
        <p className="muted mx-auto mt-7 max-w-[640px] text-[19px] leading-[1.6]">
          Tell us the problem. We scope it, design it, build it and hand it over in focused 4–6 week
          phases, with the code and accounts in your name.
        </p>
        <div className="mt-[34px] flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="btn btn-g">
            Book a call
          </Link>
          <Link href="/work" className="btn">
            View our work
          </Link>
        </div>
      </div>
      <HeroMockup />
    </section>
  );
}
