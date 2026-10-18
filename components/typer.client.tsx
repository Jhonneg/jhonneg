"use client";
import React from "react";
import { ReactTyped } from "react-typed";
import BlobBackground from "./blobbackground.client";

export default function Typer() {
  const text = [
    "Look at this cool typer effect",
    "A aspiring webdev",
    "Check out the projects tab",
    "A linux enthusiast",
    "Learning data enginnering",
    "Did you like the gradient background?",
  ];

  return (
    <>
      <section className="relative mb-12 flex min-h-screen items-center justify-center overflow-hidden rounded-3xl border border-primary/20 bg-base-200">
        <BlobBackground />
        <div className="relative z-10 text-center">
          <div className="max-w-md">
            <div className="mb-14">
              <h1 className="text-4xl font-bold">Hello, I&apos;m Jhonne</h1>
              <ReactTyped strings={text} typeSpeed={50} loop cursorChar="" />
            </div>
            <p>
              A Full-Stack Developer focused on backend. I build
              and deploy web APIs and apps with Node.js, React, Docker and AWS,
              and I’m exploring AI with Python (RAG and LLM APIs).
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
