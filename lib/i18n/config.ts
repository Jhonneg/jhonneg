export const locales = ["pt-BR", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pt-BR";
export const localeCookie = "portfolio-locale";

export function isLocale(value: unknown): value is Locale {
  return value === "pt-BR" || value === "en";
}

export function resolveLocale(value: unknown): Locale {
  return isLocale(value) ? value : defaultLocale;
}
