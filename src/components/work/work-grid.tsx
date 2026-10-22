"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { categories, projects, type Category } from "@/lib/projects";

/**
 * Case-study grid with working filters. The design only drew the buttons;
 * here they filter by each project's categories (set in src/lib/projects.ts).
 */
export function WorkGrid() {
  const [active, setActive] = useState<Category | "all">("all");
  const shown = active === "all" ? projects : projects.filter((p) => p.categories.includes(active));

  return (
    <section className="tint pb-[72px] pt-16 phone:pb-[120px] phone:pt-24">
      <div className="wrap">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <h2 className="disp text-[clamp(30px,3.4vw,44px)]">
            All <span className="mk">case studies</span>
          </h2>
          <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
            {categories.map((c) => {
              const on = active === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setActive(c.id)}
                  className={`btn h-[38px] px-4 ${on ? "bg-ink text-white hover:bg-ink hover:text-white" : ""}`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          Showing {shown.length} {shown.length === 1 ? "project" : "projects"}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-x-7 gap-y-12 tab:grid-cols-2">
          {shown.map((p) => (
            <ProjectCard key={p.slug} project={p} size="work" />
          ))}
        </div>
      </div>
    </section>
  );
}
