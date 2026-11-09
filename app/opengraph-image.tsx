import { ImageResponse } from "next/og";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/server";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const { hero } = dictionaries[getLocale()];
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 80,
        backgroundColor: "#1c131b",
        color: "#f4e5cf",
        fontFamily: "monospace",
        border: "20px solid #c59f60",
      }}
    >
      <div style={{ fontSize: 30, color: "#db924b", marginBottom: 26 }}>
        {hero.eyebrow}
      </div>
      <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1 }}>
        {hero.greeting}
      </div>
      <div style={{ fontSize: 35, color: "#db924b", marginTop: 30 }}>
        {hero.role}
      </div>
      <div style={{ fontSize: 26, marginTop: 55 }}>
        jhonneg.is-a.dev
      </div>
    </div>,
    size,
  );
}
