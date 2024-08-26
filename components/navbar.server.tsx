import Link from "next/link";
import React from "react";
import Image from "next/image";
import ghSvg from "@/public/github-mark-white.svg";

export default function Navbar() {
  return (
    <div className="navbar bg-neutral justify-center items-center">
      <a href="https://github.com/jhonneg">
        <Image
          className="animate-spin-slow"
          width="30"
          height="30"
          src={ghSvg}
          alt="github"
        />
      </a>
      <ul className="menu menu-horizontal px-1">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="contact">Contact</Link>
        </li>
        <li>
          <Link href="projects">Projects</Link>
        </li>
        <li>
          <Link href="about">About me</Link>
        </li>
      </ul>
    </div>
  );
}
