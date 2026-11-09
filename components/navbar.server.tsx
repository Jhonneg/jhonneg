"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";
import ghSvg from "@/public/github-mark-white.svg";
import LanguageToggle from "./language-toggle.client";
import { useLanguage } from "./language-provider.client";

export default function Navbar() {
  const { t } = useLanguage();
  const pathname = usePathname();
  return (
    <nav
      aria-label={t.navigation.label}
      className="navbar flex-wrap items-center justify-center gap-2 rounded-3xl bg-neutral"
    >
      <a
        href="https://github.com/jhonneg"
        target="_blank"
        rel="noreferrer"
        aria-label={t.navigation.github}
        className="rounded-full p-2 transition hover:bg-primary/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-warning"
      >
        <Image
          className="animate-spin-slow"
          width="30"
          height="30"
          src={ghSvg}
          alt="github"
        />
      </a>
      <ul className="menu menu-horizontal flex-wrap justify-center px-1">
        {(
          [
            ["/", t.navigation.home],
            ["/projects/js", t.navigation.projects],
            ["/about", t.navigation.about],
            ["/contact", t.navigation.contact],
          ] as const
        ).map(([href, label]) => (
          <li key={href}>
            <Link
              href={href}
              aria-current={
                (
                  href === "/projects/js"
                    ? pathname.startsWith("/projects/")
                    : pathname === href
                )
                  ? "page"
                  : undefined
              }
              className="min-h-11 focus-visible:outline focus-visible:outline-2 focus-visible:outline-warning aria-[current=page]:text-warning"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <LanguageToggle />
    </nav>
  );
}
