"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { mainNav, site } from "@/lib/site";

function Chevron({ size = 12, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      className={className}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the menu on navigation (including back/forward), adjusting state
  // during render rather than in an effect.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  // Lock page scroll and allow Escape to close while the menu is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header className="wrap sticky w-full top-0 z-[60] flex h-16 items-center justify-between gap-6 bg-white tab:static tab:h-[76px]">
        <Link href="/" aria-label={`${site.name} home`} className="flex shrink-0 items-center">
          <Logo priority />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main" className="hidden items-center gap-0.5 tab:flex">
          {mainNav.map((item) => {
            const active = isActive(item.href);
            return (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm hover:bg-green-soft hover:text-ink ${
                    active ? "bg-green-soft font-semibold" : ""
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <Chevron className="transition-transform group-focus-within:rotate-180 group-hover:rotate-180" />
                  )}
                </Link>
                {item.children && (
                  <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition-[opacity,visibility] duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <div className="flex min-w-[220px] flex-col rounded-2xl border border-ink/10 bg-white p-2 shadow-[0_18px_40px_rgba(17,17,17,.10)]">
                      {item.children.map((c) => (
                        <Link
                          key={c.label}
                          href={c.href}
                          className="rounded-lg px-3 py-2.5 text-sm hover:bg-green-soft"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <Link href="/contact" className="btn btn-g hidden tab:inline-flex">
          Book a call
        </Link>

        {/* Hamburger */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
          className={`inline-flex h-11 w-11 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-full border border-ink p-0 tab:hidden ${
            open ? "bg-green" : "bg-white"
          }`}
        >
          <span
            className={`block h-0.5 w-[18px] rounded bg-ink transition-transform duration-[250ms] ${
              open ? "translate-y-1 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-[18px] rounded bg-ink transition-transform duration-[250ms] ${
              open ? "-translate-y-1 -rotate-45" : ""
            }`}
          />
        </button>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        inert={!open}
        className={`fixed inset-x-0 bottom-0 top-16 z-[55] flex flex-col overflow-y-auto bg-white px-5 pb-7 pt-1 transition-[opacity,transform,visibility] duration-[250ms] tab:hidden ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2.5 opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col">
          {mainNav.map((item) =>
            item.children ? (
              <details key={item.href} className="group border-b border-ink/12">
                <summary className="flex min-h-[66px] cursor-pointer list-none items-center justify-between font-display text-[26px] font-semibold tracking-[-0.03em] group-open:text-green-dark [&::-webkit-details-marker]:hidden">
                  {item.label}
                  <Chevron size={22} className="transition-transform group-open:rotate-180" />
                </summary>
                <div className="flex flex-col pb-4">
                  {item.children.map((c) => (
                    <Link
                      key={c.label}
                      href={c.href}
                      onClick={() => setOpen(false)}
                      className="flex min-h-11 items-center text-base text-ink/72"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </details>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[66px] items-center border-b border-ink/12 font-display text-[26px] font-semibold tracking-[-0.03em]"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <div className="mt-auto flex flex-col gap-3 pt-7">
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn btn-g h-[52px] text-[15px]"
          >
            Book a call
          </Link>
          <Link href="/work" onClick={() => setOpen(false)} className="btn h-[52px] text-[15px]">
            View our work
          </Link>
          <p className="muted mt-1.5 text-center text-sm">
            {site.email} · {site.location}
          </p>
        </div>
      </div>
    </>
  );
}
