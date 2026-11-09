"use client";

import Link from "next/link";
import { projectsData, projectsDataPython } from "@/constants/projects";
import { useLanguage } from "./language-provider.client";
import type { FeaturedProjectName } from "@/lib/i18n/dictionaries";

const featuredProjects: { name: FeaturedProjectName; sourceHref?: string }[] = [
  { name: "Multiplayer Pong", sourceHref: "https://github.com/Jhonneg/PongJS" },
  { name: "Lain Chatbot" },
  { name: "RAG App" },
];
const allProjects = [...projectsData, ...projectsDataPython];

export default function FeaturedProjects() {
  const { t } = useLanguage();
  return (
    <section aria-labelledby="featured-projects-title" className="mb-12">
      <div className="mb-6 flex flex-col gap-3 text-left sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-warning">
            {t.featured.eyebrow}
          </p>
          <h2
            id="featured-projects-title"
            className="mt-2 text-section font-bold"
          >
            {t.featured.title}
          </h2>
        </div>
        <Link
          href="/projects/js"
          className="link link-warning w-fit focus-visible:outline focus-visible:outline-2 focus-visible:outline-warning"
        >
          {t.featured.all} →
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {featuredProjects.map(({ name, sourceHref }) => {
          const project = allProjects.find((entry) => entry.name === name);
          if (!project) return null;
          return (
            <a
              key={project.name}
              href={sourceHref ?? project.anchorLink}
              target="_blank"
              rel="noreferrer"
              aria-label={`${sourceHref ? t.featured.source : t.featured.demo}: ${project.name} (${t.featured.newTab})`}
              className="group relative flex min-h-80 items-center justify-center overflow-hidden rounded-2xl border border-primary/20 bg-base-200 text-center transition hover:border-warning/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-warning"
            >
              <video
                className="pointer-events-none absolute inset-0 size-full object-cover"
                src={project.mediaUrl.trim()}
                aria-hidden="true"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="pointer-events-none absolute inset-0 bg-base-300/70 transition-opacity duration-300 group-hover:opacity-0 group-focus-visible:opacity-100" />
              <div className="relative z-10 flex flex-col items-center p-5 transition-opacity duration-300 group-hover:opacity-0 group-focus-visible:opacity-100">
                <h3 className="text-xl font-bold text-warning">
                  {project.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-warning">
                  {t.projects[name]}
                </p>
                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="badge badge-primary badge-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                {sourceHref && (
                  <p className="mt-4 text-xs text-warning underline">
                    {t.featured.source}
                  </p>
                )}
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
