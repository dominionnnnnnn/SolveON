import Link from "next/link";
import { PhasesGrid } from "@/components/phases-grid";

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
        <PhasesGrid />
      </div>
    </section>
  );
}
