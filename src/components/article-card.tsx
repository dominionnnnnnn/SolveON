import Link from "next/link";
import { categoryLabel, type Article } from "@/lib/articles";

/** Small article card, used on Resources and in Home's Insights section. */
export function ArticleCard({
  article,
  variant = "resources",
}: {
  article: Article;
  /** Home's cards are a little taller with tighter titles and no hover lift (as designed) */
  variant?: "home" | "resources";
}) {
  const home = variant === "home";
  return (
    // TODO: link to /resources/<slug> once article pages exist (see CHECKLIST.md)
    <Link
      href="/resources"
      className={`group flex flex-col rounded-2xl bg-white p-7 hover:text-ink ${
        home ? "min-h-[260px]" : "acard min-h-[250px]"
      }`}
    >
      <div className="flex items-center gap-2.5">
        <span className="inline-flex h-[26px] items-center rounded-full border border-ink px-[11px] text-xs font-semibold">
          {categoryLabel(article.category)}
        </span>
        <span className="muted text-xs">{article.date}</span>
      </div>
      <h3
        className={`mt-[18px] text-[19px] font-semibold leading-[1.35] ${home ? "tracking-[-0.01em]" : ""}`}
      >
        {article.title}
      </h3>
      <p className="muted mt-3 text-sm leading-[1.6]">{article.summary}</p>
      <span className="lnk mt-auto pt-5 group-hover:underline">Read article →</span>
    </Link>
  );
}
