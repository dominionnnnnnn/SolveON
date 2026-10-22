import Link from "next/link";
import { ArticleCard } from "@/components/article-card";
import { articles } from "@/lib/articles";

// Home shows the first three non-featured articles. Edit them in src/lib/articles.ts.
const latest = articles.filter((a) => !a.featured).slice(0, 3);

export function Insights() {
  return (
    <section className="section bg-green-soft">
      <div className="wrap">
        <span className="eb">Insights</span>
        <h2 className="disp h2 mt-[18px]">
          Guides for people who have to
          <br />
          make <span className="mk">the product decision.</span>
        </h2>
        <div className="mt-14 grid grid-cols-1 gap-5 phone:grid-cols-2 tab:grid-cols-3">
          {latest.map((a) => (
            <ArticleCard key={a.slug} article={a} variant="home" />
          ))}
        </div>
        <Link href="/resources" className="btn mt-8">
          View all articles →
        </Link>
      </div>
    </section>
  );
}
