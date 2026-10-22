import Link from "next/link";
import { WorkCards } from "@/components/home/work-cards";

export function SelectedWork() {
  return (
    <section className="tint section">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eb">Selected work</span>
            <h2 className="disp h2 mt-[18px]">
              Products built to work
              <br />
              for <span className="mk">real users.</span>
            </h2>
          </div>
          <Link href="/work" className="btn">
            View all work →
          </Link>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-x-7 gap-y-10 tab:grid-cols-2">
          <WorkCards />
        </div>
      </div>
    </section>
  );
}
