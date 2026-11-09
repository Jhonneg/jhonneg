import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar.server";
import { LanguageProvider } from "@/components/language-provider.client";
import { getLocale } from "@/lib/i18n/server";
import { dictionaries } from "@/lib/i18n/dictionaries";

const roboto = Roboto_Mono({ subsets: ["latin"] });

export function generateMetadata(): Metadata {
  const locale = getLocale();
  const { title, description } = dictionaries[locale].metadata;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: locale.replace("-", "_"),
    },
    icons: "https://img.icons8.com/ios-filled/50/FFFFFF/source-code.png",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = getLocale();
  return (
    <html lang={locale} data-theme="coffee">
      <body
        className={`${roboto.className} mx-auto my-0 max-w-7xl p-4 pb-[var(--mobile-nav-clearance)] text-center md:p-8`}
      >
        <LanguageProvider locale={locale}>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-base-100 focus:p-4"
          >
            {dictionaries[locale].navigation.skip}
          </a>
          <Navbar />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
