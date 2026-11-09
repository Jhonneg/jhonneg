import type { Metadata } from "next";
import { dictionaries, type Dictionary } from "./i18n/dictionaries";
import { getLocale } from "./i18n/server";
import { siteUrl } from "./site";

type PageKey = keyof Dictionary["metadata"]["pages"];

export function portfolioMetadata(path?: string, page?: PageKey): Metadata {
  const locale = getLocale();
  const copy = dictionaries[locale].metadata;
  const { title, description } = page ? copy.pages[page] : copy;
  const image = { url: "/opengraph-image", width: 1200, height: 630, alt: copy.imageAlt };

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    ...(path ? { alternates: { canonical: path } } : {}),
    openGraph: {
      title,
      description,
      type: "website",
      siteName: "Jhonne Guerra",
      locale: locale.replace("-", "_"),
      ...(path ? { url: path } : {}),
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}
