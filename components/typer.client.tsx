"use client";
import React from "react";
import { ReactTyped } from "react-typed";

export default function Typer() {
  const text = [
    "Look at this cool typer effect",
    "A aspiring webdev",
    "Check out the projects tab",
    "A linux enthusiast",
    "Learning data enginnering",
    "Check out the chat tab too",
  ];

  return (
    <>
      <section className="mb-12 flex min-h-screen items-center justify-center rounded-3xl border border-primary/20 bg-base-200">
        <div className="text-center">
          <div className="max-w-md">
            <div className="mb-14">
              <h1 className="text-4xl font-bold">Hello, I&apos;m Jhonne</h1>
              <ReactTyped strings={text} typeSpeed={50} loop cursorChar="" />
            </div>
            <p>
              I&apos;m a developer from Brazil focused on solutions for the web,
              i enjoy building things and now i&apos;m learning data related
              stuff.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
