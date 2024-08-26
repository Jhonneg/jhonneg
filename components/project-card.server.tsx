import React from "react";
import { ProjectCardProps } from "@/constants/projects";

export default function ProjectCard({
  name,
  description,
  anchorLink,
  mediaUrl,
  techStack,
}: ProjectCardProps) {
  return (
    <a href={anchorLink}>
      <div className="">
        <div className="hero min-h-80">
          <video
            width="570"
            height="auto"
            autoPlay
            loop
            muted
            src={mediaUrl}
          ></video>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold text-warning">{name}</h1>
              <p className="mb-5 text-warning">{description}</p>
              {techStack.map((tech, index) => (
                <div key={index} className="badge badge-primary">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
