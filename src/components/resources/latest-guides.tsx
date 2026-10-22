"use client";

import Link from "next/link";
import { useState } from "react";
import { ArticleCard } from "@/components/article-card";
import { articleCategories, articles, type ArticleCategory } from "@/lib/articles";

const PAGE = 6; // cards shown per "Load more"

/**
 * Featured article + grid, with working filters and "Load more".
 * (The design drew both as static buttons.)
 */
export function LatestGuides() {
  const [active, setActive] = useState<ArticleCategory | "all">("all");
  const [shown, setShown] = useState(PAGE);

  const featured = articles.find((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);
  const featuredVisible = featured && (active === "all" || featured.category === active);
  const filtered = active === "all" ? rest : rest.filter((a) => a.category === active);
  const visible = filtered.slice(0, shown);

  const pick = (id: ArticleCategory | "all") => {
    setActive(id);
    setShown(PAGE);
  };

  return (
    <section
      id="latest"
      className="tint scroll-mt-16 pb-[72px] pt-16 phone:pb-[120px] phone:pt-24 tab:scroll-mt-0"
    >
      <div className="wrap">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <h2 className="disp text-[clamp(30px,3.4vw,44px)]">
            Latest <span className="mk">guides</span>
          </h2>
          <div role="group" aria-label="Filter guides" className="flex flex-wrap gap-2">
            {articleCategories.map((c) => {
              const on = active === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  aria-pressed={on}
                  onClick={() => pick(c.id)}
                  className={`btn h-[38px] px-4 ${on ? "bg-ink text-white hover:bg-ink hover:text-white" : ""}`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          Showing {visible.length + (featuredVisible ? 1 : 0)} guides
        </p>

        {featuredVisible && featured?.featured && (
          // TODO: link to /resources/<slug> once article pages exist
          <Link
            href="/resources"
            className="acard mt-11 flex flex-wrap overflow-hidden rounded-[18px] bg-white hover:text-ink"
          >
            <div
              className="relative flex min-h-[260px] flex-[1_1_440px] items-center justify-center text-white phone:min-h-[340px]"
              style={{
                background:
                  "radial-gradient(380px 240px at 80% 100%,rgba(74,222,128,.35),transparent 70%),#0B0B0B",
              }}
            >
              <div className="disp text-center text-[clamp(40px,4.4vw,64px)] font-extrabold leading-none tracking-[-0.04em]">
                {featured.featured.coverLine}
                <br />
                <span className="text-green">{featured.featured.coverHighlight}</span>
              </div>
            </div>
            <div className="box-border flex flex-[1_1_440px] flex-col justify-center p-7 phone:p-11">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-[26px] items-center rounded-full bg-green px-[11px] text-xs font-semibold">
                  Featured
                </span>
                <span className="muted text-[13px]">
                  {featured.date} · {featured.readMinutes} min read
                </span>
              </div>
              <h3 className="disp mt-[18px] text-[clamp(26px,2.6vw,34px)] font-extrabold leading-[1.15] tracking-[-0.03em]">
                {featured.title}
              </h3>
              <p className="muted mt-3.5 max-w-[460px] text-base leading-[1.6]">
                {featured.summary}
              </p>
              <span className="lnk mt-6">Read article →</span>
            </div>
          </Link>
        )}

        {visible.length > 0 ? (
          <div
            className={`grid grid-cols-1 gap-5 phone:grid-cols-2 tab:grid-cols-3 ${
              featuredVisible ? "mt-6" : "mt-11"
            }`}
          >
            {visible.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        ) : (
          !featuredVisible && (
            <p className="muted mt-11 text-base">No guides in this category yet.</p>
          )
        )}

        {filtered.length > shown && (
          <div className="mt-9 text-center">
            <button type="button" className="btn" onClick={() => setShown((n) => n + PAGE)}>
              Load more articles
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
