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
          <code>Linux/Shell bash</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>Git/Github/Gitbash</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>HTML/CSS/Javascript</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>Tailwind/Styles Components</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>React/NextJs</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>Node/Express</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>Socket.io</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>Typescript</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>PostgresSQL/Firebase</code>
        </pre>
      </div>
    </section>
  );
}
