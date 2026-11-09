"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
      className="fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-50 mx-auto max-w-7xl rounded-2xl border border-primary/30 bg-neutral/95 p-2 shadow-xl backdrop-blur md:sticky md:inset-auto md:top-3 md:mb-8 md:flex md:min-h-16 md:items-center md:gap-4 md:rounded-3xl md:px-5"
    >
      <ul className="grid grid-cols-4 gap-1 md:flex md:flex-1 md:items-center md:justify-center md:gap-2">
        {(
          [
            ["/", t.navigation.home, t.navigation.home],
            ["/projects/js", t.navigation.projects, t.navigation.projects],
            ["/about", t.navigation.about, t.navigation.aboutShort],
            ["/contact", t.navigation.contact, t.navigation.contact],
          ] as const
        ).map(([href, label, shortLabel]) => (
          <li key={href} className="min-w-0">
            <Link
              href={href}
              aria-label={label}
              aria-current={
                (
                  href === "/projects/js"
                    ? pathname.startsWith("/projects/")
                    : pathname === href
                )
                  ? "page"
                  : undefined
              }
              className="flex min-h-11 items-center justify-center rounded-xl px-1 text-center text-xs leading-tight transition hover:bg-primary/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-warning aria-[current=page]:bg-primary/20 aria-[current=page]:text-warning md:px-3 md:text-sm"
            >
              <span className="md:hidden">{shortLabel}</span>
              <span className="hidden md:inline">{label}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-1 flex items-center justify-between gap-2 border-t border-primary/20 px-1 pt-1 md:mt-0 md:border-0 md:p-0">
        <a
          href="https://github.com/jhonneg"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.navigation.github}
          className="flex size-11 items-center justify-center rounded-xl transition hover:bg-primary/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-warning"
        >
          <Image
            className="motion-safe:animate-spin-slow"
            width={26}
            height={26}
            src={ghSvg}
            alt=""
          />
        </a>
        <LanguageToggle />
      </div>
    </nav>
  );
}
