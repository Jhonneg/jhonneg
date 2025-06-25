"use client";
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
    <a href={anchorLink} target="_blank">
      <div className="hero min-h-80 w-full ">
        <div className="aspect-video">
          <video
            className="left-0 top-0 size-full  object-cover object-center md:rounded-none lg:rounded-3xl"
            autoPlay
            loop
            muted
            src={mediaUrl}
          ></video>
        </div>
        <div className="hero-overlay bg-opacity-60 sm:rounded-none lg:rounded-3xl"></div>
        <div className="hero-content text-center text-neutral-content">
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
    </a>
  );
}
