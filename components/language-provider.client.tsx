"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Locale } from "@/lib/i18n/config";
import { dictionaries } from "@/lib/i18n/dictionaries";

const LanguageContext = createContext<Locale | null>(null);

export function LanguageProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  return (
    <LanguageContext.Provider value={locale}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const locale = useContext(LanguageContext);
  if (!locale) throw new Error("useLanguage requires LanguageProvider");
  return { locale, t: dictionaries[locale] };
}
