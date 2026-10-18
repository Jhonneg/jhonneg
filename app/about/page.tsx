"use client";
import React from "react";
import { ReactTyped } from "react-typed";

export default function Page() {
  return (
    <section className="my-24 flex flex-col">
      <div className="mockup-code">
        <h1 className="my-4 text-3xl">My Tech Stack</h1>
        <pre data-prefix="$" className="text-warning">
          <code>
            installing
            <ReactTyped
              strings={["..."]}
              typeSpeed={100}
              backSpeed={100}
              loop
              cursorChar=""
            />
          </code>
        </pre>
        <pre data-prefix=">">
          <code>
            I’m a career changer. I’ve worked since 2016 in a job where <br />
            deadlines, planning and quality checks are real, and I brought that
            <br />
            discipline into programming. I taught myself to build full-stack
            <br />
            apps, and I deploy them: tested APIs, Docker containers, CI/CD with
            <br />
            GitHub Actions, AWS EC2. I also build with Python and LLMs,
            <br />
            including a RAG app over private PDFs. I’m looking for a team where
            <br />I can contribute to real products and keep growing.
          </code>
        </pre>
      </div>
    </section>
  );
}
