"use client";

import Link from "next/link";
import { projectsData, projectsDataPython } from "@/constants/projects";
import { useLanguage } from "./language-provider.client";
import ProjectCard from "./project-card.server";

export default function ProjectGallery({
  category,
}: {
  category: "js" | "python";
}) {
  const { t } = useLanguage();
  const priority =
    category === "js"
      ? [
          "Planets Express",
          "Multiplayer Pong",
          "Lain Chatbot",
          "Games stores App",
          "Discord weather bot",
          "Face Recognition App",
        ]
      : ["RAG App", "ReAct Agent", "Commandline Quiz game"];
  const projects = [
    ...(category === "js" ? projectsData : projectsDataPython),
  ].sort((a, b) => priority.indexOf(a.name) - priority.indexOf(b.name));

  return (
    <section className="mb-12 text-left" aria-labelledby="gallery-title">
      <header className="rounded-3xl border border-primary/20 bg-base-200 px-6 py-10 sm:p-10">
        <h1
          id="gallery-title"
          className="text-4xl font-bold text-warning sm:text-5xl"
        >
          {t.gallery.title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-base-content">
          {t.gallery.intro}
        </p>
      </header>
      <nav
        aria-label={t.gallery.categories}
        className="my-6 flex flex-wrap gap-3"
      >
        {(
          [
            ["js", t.gallery.javascript],
            ["python", t.gallery.python],
          ] as const
        ).map(([value, label]) => (
          <Link
            key={value}
            href={`/projects/${value}`}
            aria-current={category === value ? "page" : undefined}
            className={`btn min-h-11 rounded-full px-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-warning ${category === value ? "btn-warning" : "btn-outline"}`}
          >
            {label}
          </Link>
        ))}
      </nav>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12">
        {projects.map((project, index) => {
          const lastUnpaired =
            index === projects.length - 1 && projects.length % 2 === 1;
          const span = lastUnpaired
            ? "sm:col-span-2 lg:col-span-12"
            : [
                "lg:col-span-8",
                "lg:col-span-4",
                "lg:col-span-4",
                "lg:col-span-8",
                "lg:col-span-6",
                "lg:col-span-6",
              ][index % 6];
          return (
            <ProjectCard key={project.name} {...project} className={span} />
          );
        })}
      </div>
      {projects.length === 0 && (
        <p role="status" className="py-8">
          {t.gallery.empty}
        </p>
      )}
    </section>
  );
}
