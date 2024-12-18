import ProjectCard from "@/components/project-card.server";
import { projectsData } from "@/constants/projects";

export default function Page() {
  return (
    <>
      <div>
        <section className="mb-12 flex min-h-48 items-center justify-center rounded-3xl bg-base-200">
          <div className="text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">My Projects</h1>
            </div>
          </div>
        </section>
        <div className="my-12 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2">
          {projectsData.map((projects) => (
            <ProjectCard
              key={projects.name}
              name={projects.name}
              techStack={projects.techStack}
              description={projects.description}
              anchorLink={projects.anchorLink}
              mediaUrl={projects.mediaUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
}
