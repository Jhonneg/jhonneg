"use client";
import React from "react";
import { ReactTyped } from "react-typed";
import Link from "next/link";
import BlobBackground from "./blobbackground.client";
import { useLanguage } from "./language-provider.client";

export default function Typer() {
  const { locale, t } = useLanguage();
  const text = ["Node.js · React · Docker · AWS", "Python · RAG · LLM APIs"];

  return (
    <>
      <section className="relative mb-8 flex items-center justify-center overflow-hidden rounded-3xl border border-primary/20 bg-base-200 px-5 py-12 sm:px-8 sm:py-16">
        <BlobBackground />
        <div className="relative z-10 text-center">
          <div className="max-w-2xl">
            <div className="mb-8">
              <p className="mb-4 text-sm uppercase tracking-[0.24em] text-warning">
                {t.hero.eyebrow}
              </p>
              <h1 className="text-display font-bold">{t.hero.greeting}</h1>
              <p className="mt-5 text-lg text-warning sm:text-xl">
                {t.hero.role}
              </p>
              <div className="mt-3 min-h-14 text-sm text-warning sm:min-h-7 sm:text-base">
                <span aria-hidden="true">
                  <ReactTyped
                    key={locale}
                    strings={text}
                    typeSpeed={50}
                    backSpeed={25}
                    loop
                    cursorChar=""
                  />
                </span>
              </div>
            </div>
            <p className="mx-auto max-w-reading leading-8 text-base-content/80 sm:text-lg">
              {t.hero.description}
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/projects/js"
                className="btn btn-warning rounded-full px-7 text-base font-semibold"
              >
                {t.hero.projects}
              </Link>
              <a
                href="/CVWEB2026.pdf"
                download="Jhonne-Guerra-CV-PT-BR.pdf"
                className="btn btn-outline rounded-full px-7 text-base"
              >
                {t.hero.cv}
              </a>
            </div>
            <Link
              href="/contact"
              className="link link-warning mt-4 inline-flex min-h-11 items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-warning"
            >
              {t.hero.contact}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
