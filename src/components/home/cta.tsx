import Image from "next/image";
import Link from "next/link";

export function Cta() {
  return (
    <section className="tint relative overflow-hidden py-[72px] text-center phone:py-32">
      {/* Animated crane (CSS inside the SVG; pauses for reduced motion) */}
      <div
        aria-hidden="true"
        className="absolute bottom-[-4px] left-1/2 w-[min(1100px,100%)] -translate-x-1/2"
      >
        <Image
          src="/illustrations/crane-build-animation.svg"
          alt=""
          width={1000}
          height={340}
          unoptimized
          className="block h-auto w-full"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_46%_42%_at_50%_34%,rgba(248,248,236,.96)_40%,rgba(248,248,236,0)_100%)]"
      />
      <div className="wrap relative">
        <h2 className="disp mx-auto max-w-[860px] text-[clamp(38px,4.8vw,64px)]">
          Tell us what you are building.{" "}
          <span className="mk">We&apos;ll help define the next phase.</span>
        </h2>
        <p className="muted mx-auto mt-6 max-w-[520px] text-[17px] leading-[1.6]">
          You don&apos;t need a finished spec, a budget spreadsheet or technical words to start.
        </p>
        <div className="mt-[34px] flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="btn btn-g">
            Book a call
          </Link>
          <Link href="/work" className="btn bg-white">
            View our work
          </Link>
        </div>
      </div>
    </section>
  );
}
