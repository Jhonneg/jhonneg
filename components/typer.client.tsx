"use client";
import React from "react";
import { ReactTyped } from "react-typed";

export default function Typer() {
  const text = [
    "A aspiring webdev",
    "A linux enthusiast",
    "A aspiring 3D artist",
    "Front-end enjoyer",
  ];

  return (
    <>
      <section className="mb-12 flex min-h-screen items-center justify-center rounded-3xl border border-primary/20 bg-base-200">
        <div className="text-center">
          <div className="max-w-md">
            <div className="mb-14">
              <h1 className="text-4xl font-bold">Hello, I&apos;m Jhonne</h1>
              <ReactTyped strings={text} typeSpeed={60} loop cursorChar="" />
            </div>
            <p>
              I&apos;m a developer from Brazil focused on solutions for the web,
              i enjoy building things and anything 3D.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
