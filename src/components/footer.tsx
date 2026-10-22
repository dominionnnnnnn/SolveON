import Link from "next/link";
import { Logo } from "@/components/logo";
import { footerNav, site } from "@/lib/site";

// Year is computed at build time and refreshed on each deploy.
async function CopyrightYear() {
  "use cache";
  return new Date().getFullYear();
}

export function Footer() {
  return (
    <footer className="dark border-t border-white/10">
      <div className="wrap pb-9 pt-20">
        <div className="flex flex-wrap justify-between gap-14">
          <div className="max-w-[300px]">
            <Logo variant="dark" height={36} />
            <p className="mt-4 text-[15px] leading-relaxed text-muted-dark">{site.tagline}</p>
            <Link href="/contact" className="btn btn-g mt-[22px] w-full">
              Book a call
            </Link>
            <p className="mt-[18px] text-sm font-semibold">
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <p className="mt-1.5 text-[13px] text-white/55">{site.locationLong}</p>
          </div>

          <div className="flex flex-wrap gap-14 text-sm">
            {footerNav.map((col) => (
              <div key={col.title}>
                <div className="font-semibold">{col.title}</div>
                <ul className="mt-4 flex flex-col gap-[11px] text-muted-dark">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="hover:text-green">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-between gap-4 border-t border-white/10 pt-6 text-[13px] text-white/55 phone:mt-[72px]">
          <span>
            © <CopyrightYear /> {site.name}. All rights reserved.
          </span>
          <span className="flex gap-6">
            <Link href="/privacy" className="hover:text-green">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-green">
              Terms
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
