"use client";

import { contact } from "@/constants/contact";
import { useLanguage } from "./language-provider.client";

export function WhatsAppButton() {
  const { t } = useLanguage();
  const copy = t.contact;
  const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(copy.whatsappMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-outline mt-5 min-h-11 rounded-full px-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-warning"
      aria-label={`${copy.whatsappAction} (${copy.newTab})`}
    >
      {copy.whatsappAction} ↗
    </a>
  );
}
