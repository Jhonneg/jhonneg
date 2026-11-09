"use client";
import React from "react";
import { ReactTyped } from "react-typed";
import Link from "next/link";
import BlobBackground from "./blobbackground.client";

export default function Typer() {
  const text = [
    "Full-Stack Developer · Backend Focused",
    "Node.js · React · Docker · AWS",
    "Python · RAG · LLM APIs",
  ];

  return (
    <>
      <section className="relative mb-12 flex min-h-[calc(100vh-8rem)] items-center justify-center overflow-hidden rounded-3xl border border-primary/20 bg-base-200 px-6 py-20">
        <BlobBackground />
        <div className="relative z-10 text-center">
          <div className="max-w-2xl">
            <div className="mb-8">
              <p className="mb-4 text-sm uppercase tracking-[0.24em] text-warning">
                Junior developer · Brazil
              </p>
              <h1 className="text-4xl font-bold sm:text-6xl">
                Hello, I&apos;m Jhonne
              </h1>
              <div className="mt-5 min-h-7 text-lg text-warning sm:text-xl">
                <span className="sr-only">Full-Stack Developer, backend focused</span>
                <span aria-hidden="true">
                  <ReactTyped
                    strings={text}
                    typeSpeed={50}
                    backSpeed={25}
                    loop
                    cursorChar=""
                  />
                </span>
              </div>
            </div>
            <p className="mx-auto max-w-xl leading-8 text-base-content/80 sm:text-lg">
              I build and deploy web APIs and full-stack applications with
              Node.js, React, Docker and AWS. I&apos;m also exploring AI with
              Python, RAG and LLM APIs.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/projects/js"
                className="btn btn-warning rounded-full px-7 text-base font-semibold"
              >
                View projects
              </Link>
              <Link
                href="/contact"
                className="btn btn-outline rounded-full px-7 text-base"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
