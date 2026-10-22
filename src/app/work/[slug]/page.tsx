import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectCard, ProjectMedia } from "@/components/project-card";
import { WorkCta } from "@/components/work/work-sections";
import { getProject, nextProject, projects } from "@/lib/projects";
import { site } from "@/lib/site";

// One page per project, built at deploy time.
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  const title = `${p.name} case study`;
  return {
    title,
    description: p.summary,
    alternates: { canonical: `/work/${p.slug}` },
    openGraph: { title, description: p.summary, url: `/work/${p.slug}` },
    // Drafts can be previewed but stay out of search results.
    robots: p.draft ? { index: false, follow: true } : undefined,
  };
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  const next = nextProject(p.slug);

  const facts = [
    { label: "Client", value: p.client },
    { label: "Services", value: p.tags.join(", ") },
    { label: "Timeline", value: p.timeline },
    { label: "Year", value: p.year },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: p.name,
    description: p.summary,
    url: `${site.url}/work/${p.slug}`,
    creator: { "@type": "Organization", name: site.name, url: site.url },
  };

  return (
    <>
      {!p.draft && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      )}

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="gridbg gridbg-down absolute inset-0" aria-hidden="true" />
        <div className="wrap relative pb-12 pt-14 phone:pb-16 phone:pt-20">
          <nav aria-label="Breadcrumb" className="text-sm">
            <ol className="m-0 flex list-none items-center gap-2 p-0">
              <li>
                <Link href="/work" className="muted hover:text-green-dark">
                  Work
                </Link>
              </li>
              <li aria-hidden="true" className="muted">
                /
              </li>
              <li aria-current="page" className="font-medium">
                {p.name}
              </li>
            </ol>
          </nav>
          <span className="eb mt-8">Case study</span>
          <h1 className="disp h1-page mt-[22px] max-w-[900px] max-phone:text-[42px]">{p.name}</h1>
          <p className="muted mt-[26px] max-w-[640px] text-lg leading-[1.6]">{p.summary}</p>

          <dl className="m-0 mt-12 grid grid-cols-2 gap-x-7 border-t border-ink/12 tab:grid-cols-4 tab:gap-x-0">
            {facts.map((f, i) => (
              <div
                key={f.label}
                className={`pt-6 tab:px-6 ${i === 0 ? "tab:pl-0" : "tab:border-l tab:border-ink/12"}`}
              >
                <dt className="muted text-xs">{f.label}</dt>
                <dd className="m-0 mt-1.5 text-[15px] font-semibold">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Big card image */}
      <div className="wrap">
        <ProjectMedia project={p} size="work" height={460} className="rounded-3xl" />
        {p.liveUrl && (
          <a
            href={p.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="lnk mt-4 inline-block"
          >
            Visit the live product ↗
          </a>
        )}
      </div>

      {/* Story */}
      <section className="section">
        <div className="wrap grid grid-cols-1 gap-12 tab:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] tab:gap-20">
          <div>
            <span className="eb">The problem</span>
            <h2 className="disp h2 mt-[18px]">
              What wasn&apos;t
              <br />
              <span className="mk">working.</span>
            </h2>
          </div>
          <p className="m-0 self-end text-[19px] leading-[1.7]">{p.problem}</p>

          <div className="tab:pt-10">
            <span className="eb">What we built</span>
            <h2 className="disp h2 mt-[18px]">
              The work,
              <br />
              <span className="mk">in short.</span>
            </h2>
          </div>
          <ol className="m-0 list-none border-t border-ink/12 p-0 tab:mt-10 tab:self-end">
            {p.built.map((b, i) => (
              <li key={i} className="flex gap-5 border-b border-ink/12 py-5">
                <span className="disp text-[22px] font-extrabold text-green-dark">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[17px] leading-[1.6]">{b}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Results */}
      <section className="dark section">
        <div className="wrap">
          <span className="eb">Results</span>
          <h2 className="disp h2 mt-[18px]">
            What changed
            <br />
            <span className="mk-d">after launch.</span>
          </h2>
          <dl className="m-0 mt-14 grid grid-cols-1 border-t border-white/14 phone:grid-cols-3">
            {p.results.map((r, i) => (
              <div
                key={i}
                className={`flex flex-col-reverse pt-10 phone:px-6 ${
                  i === 0 ? "phone:pl-0" : "phone:border-l phone:border-white/14"
                }`}
              >
                <dt className="mt-2.5 text-sm font-semibold text-white/70">{r.label}</dt>
                <dd className="disp m-0 text-[clamp(44px,5vw,68px)] font-extrabold text-green">
                  {r.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-16 flex flex-wrap items-center gap-2">
            <span className="mr-2 text-sm text-white/60">Built with</span>
            {p.stack.map((t, i) => (
              <span
                key={i}
                className="rounded-full border border-white/25 px-3 py-1.5 text-xs font-semibold"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      {p.quote && (
        <section className="tint section">
          <div className="wrap">
            <figure className="m-0 max-w-[900px]">
              <blockquote className="disp m-0 text-[clamp(28px,3vw,40px)] leading-[1.25] tracking-[-0.025em]">
                “{p.quote.text}”
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <span
                  className="h-11 w-11 shrink-0 rounded-full bg-green-pale"
                  aria-hidden="true"
                />
                <span>
                  <span className="block text-[15px] font-semibold">{p.quote.name}</span>
                  <span className="muted block text-[13px]">{p.quote.role}</span>
                </span>
              </figcaption>
            </figure>
          </div>
        </section>
      )}

      {/* Next case study */}
      <section className="section">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="disp text-[clamp(30px,3.4vw,44px)]">
              Next <span className="mk">case study</span>
            </h2>
            <Link href="/work" className="btn">
              All work →
            </Link>
          </div>
          <div className="mt-10 max-w-[620px]">
            <ProjectCard project={next} size="work" />
          </div>
        </div>
      </section>

      <WorkCta />
    </>
  );
}
