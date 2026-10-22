import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div className="gridbg absolute inset-0" aria-hidden="true" />
      <div className="wrap section relative text-center">
        <span className="eb">404</span>
        <h1 className="disp h1-page mx-auto mt-6 max-w-[800px]">
          This page <span className="mk">doesn&apos;t exist.</span>
        </h1>
        <p className="muted mx-auto mt-7 max-w-[520px] text-lg leading-relaxed">
          The link may be old or mistyped. Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-g">
            Back home
          </Link>
          <Link href="/contact" className="btn">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
