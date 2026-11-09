import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar.server";

const roboto = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jhonne | Junior Full-Stack Developer",
  description:
    "Portfolio of Jhonne, a junior full-stack developer focused on backend development with Node.js, React, Docker and AWS.",
  openGraph: {
    title: "Jhonne | Junior Full-Stack Developer",
    description:
      "Backend-focused full-stack development projects built with Node.js, React, Docker and AWS.",
    type: "website",
  },
  icons: "https://img.icons8.com/ios-filled/50/FFFFFF/source-code.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} mx-auto my-0 max-w-7xl p-4 text-center sm:p-8`}
      >
        <main>{children}</main>
        <Navbar />
      </body>
    </html>
  );
}
