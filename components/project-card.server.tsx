"use client";

import { useState } from "react";
import type { ProjectCardProps } from "@/constants/projects";
import { useLanguage } from "./language-provider.client";
import ProjectVideo from "./project-video.client";

export default function ProjectCard({
  name,
  anchorLink,
  mediaUrl,
  techStack,
  sourceLink,
  linkKind = "demo",
  className = "",
}: ProjectCardProps & { className?: string }) {
  const { t } = useLanguage();
  const [failed, setFailed] = useState(false);

  return (
    <article
      className={`project-card flex min-w-0 flex-col overflow-hidden rounded-3xl border border-primary/30 bg-base-200 ${className}`}
      data-failed={failed}
    >
      <a
        href={anchorLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${linkKind === "source" ? t.gallery.source : t.gallery.demo}: ${name} (${t.featured.newTab})`}
        className="project-media relative grid min-h-96 flex-1 place-items-center bg-base-300 p-6 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-warning sm:p-8"
      >
        <ProjectVideo
          name={name}
          className="pointer-events-none absolute inset-0 size-full object-contain"
          mediaUrl={mediaUrl}
          onError={() => {
            setFailed(true);
          }}
        />
        <div className="project-overlay pointer-events-none absolute inset-0 bg-base-300/90" />
        <div className="project-overlay relative max-w-xl text-left">
          <h2 className="break-words text-2xl font-bold text-warning sm:text-3xl">
            {name}
          </h2>
          <p className="mt-4 text-sm leading-7 text-base-content sm:text-base">
            {t.projects[name]}
          </p>
          <ul aria-label={name} className="mt-5 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <li
                key={tech}
                className="badge badge-primary h-auto min-h-6 py-1"
              >
                {tech}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-warning underline">
            {linkKind === "source" ? t.gallery.sourceOnly : t.gallery.demo} ↗
          </p>
        </div>
      </a>
      {failed && (
        <p role="status" className="px-5 pt-4 text-sm text-warning">
          {t.gallery.unavailable}
        </p>
      )}
      <div className="flex flex-wrap items-center gap-2 border-t border-primary/20 p-3">
        <a
          href={sourceLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${t.gallery.source}: ${name} (${t.featured.newTab})`}
          className="link link-warning ml-auto inline-flex min-h-11 items-center px-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-warning"
        >
          {t.gallery.source} ↗
        </a>
      </div>
    </article>
  );
}
