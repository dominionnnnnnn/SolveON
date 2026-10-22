import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

// Home shows the first four projects. Edit them in src/lib/projects.ts.
export function WorkCards() {
  return (
    <>
      {projects.slice(0, 4).map((p) => (
        <ProjectCard key={p.slug} project={p} size="home" />
      ))}
    </>
  );
}
