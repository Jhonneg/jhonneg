"use client";

import { useState } from "react";
import { setLocale } from "@/app/actions/locale";
import type { Locale } from "@/lib/i18n/config";
import { useLanguage } from "./language-provider.client";

export default function LanguageToggle() {
  const { locale, t } = useLanguage();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);

  async function switchLanguage(next: Locale) {
    if (next === locale) return;
    setPending(true);
    setError(false);
    try {
      // Setting the cookie re-renders the server layout and its locale provider.
      await setLocale(next);
    } catch {
      setError(true);
    } finally {
      setPending(false);
    }
  }

  return (
    <div>
      <div
        role="group"
        aria-label={t.language.label}
        aria-busy={pending}
        className="flex gap-1"
      >
        {(
          [
            ["pt-BR", "PT", t.language.portuguese],
            ["en", "EN", t.language.english],
          ] as const
        ).map(([value, label, name]) => (
          <button
            key={value}
            type="button"
            lang={value}
            aria-label={name}
            aria-pressed={locale === value}
            disabled={pending}
            onClick={() => switchLanguage(value)}
            className={`btn min-h-11 px-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-warning ${locale === value ? "btn-warning" : "btn-ghost"}`}
          >
            {label}
          </button>
        ))}
      </div>
      {error && (
        <p role="alert" className="max-w-xs text-sm text-warning">
          {t.language.error}
        </p>
      )}
    </div>
  );
}
