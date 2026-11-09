import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

// Run against `npm run dev -- --hostname 127.0.0.1 --port 3100`.
// These checks exercise server rendering and persistence, not browser interaction.
const origin = "http://127.0.0.1:3100";

async function getPage(path = "/", cookie = "") {
  const response = await fetch(`${origin}${path}`, { headers: { cookie } });
  assert.equal(response.status, 200, `${path} must return 200`);
  return response.text();
}

function checkLocale(html, locale) {
  assert.ok(
    html.includes(`<html lang="${locale}"`),
    `Expected HTML lang ${locale}`,
  );
  assert.ok(
    html.includes(
      locale === "en" ? "Primary navigation" : "Navegação principal",
    ),
  );
}

const portuguese = await getPage();
checkLocale(portuguese, "pt-BR");
assert.ok(portuguese.includes("Desenvolvedor Full-Stack Júnior"));
assert.ok(portuguese.includes("Baixar currículo (PT-BR)"));
assert.ok(portuguese.includes('href="/CVWEB2026.pdf"'));
assert.ok(portuguese.includes('download="Jhonne-Guerra-CV-PT-BR.pdf"'));
const videos = portuguese.match(/<video\b[^>]*>/g) ?? [];
assert.equal(videos.length, 3);
for (const video of videos) {
  assert.match(video, /poster="\/posters\/[^"]+\.webp"/i);
  assert.match(video, /preload="none"/i);
  assert.match(video, /muted/i);
  assert.match(video, /loop/i);
  assert.match(video, /playsInline/i);
  assert.doesNotMatch(video, /controls/i);
  assert.doesNotMatch(video, /src="https?:/i);
}

const manifest = JSON.parse(
  await readFile(
    new URL(
      "../.next-dev/server/server-reference-manifest.json",
      import.meta.url,
    ),
  ),
);
const action = Object.entries(manifest.node).find(([, entry]) =>
  Object.values(entry.workers).some((worker) =>
    String(worker).includes("app/actions/locale.ts"),
  ),
);
assert.ok(action, "Expected the development server locale action");

async function selectLanguage(locale) {
  const response = await fetch(origin, {
    method: "POST",
    headers: {
      "Next-Action": action[0],
      "Content-Type": "text/plain;charset=UTF-8",
      Origin: origin,
    },
    body: JSON.stringify([locale]),
  });
  await response.text();
  const cookie = response.headers.get("set-cookie") ?? "";
  assert.ok(
    cookie.includes(`portfolio-locale=${locale}`),
    "Language action must persist the selection",
  );
  assert.match(cookie, /Path=\//i);
  assert.match(cookie, /Max-Age=31536000/i);
  return cookie.split(";")[0];
}

const englishCookie = await selectLanguage("en");
const english = await getPage("/", englishCookie);
checkLocale(english, "en");
assert.ok(english.includes("Junior Full-Stack Developer"));
assert.ok(english.includes("Download CV (Portuguese)"));
assert.ok(english.includes('<meta name="description" content="Jhonne'));
assert.ok(english.includes('<meta property="og:locale" content="en"'));

for (const route of [
  "/projects/js",
  "/projects/python",
  "/about",
  "/contact",
]) {
  checkLocale(await getPage(route, englishCookie), "en");
  checkLocale(await getPage(route), "pt-BR");
}
checkLocale(await getPage("/", "portfolio-locale=invalid"), "pt-BR");
checkLocale(await getPage("/", await selectLanguage("pt-BR")), "pt-BR");
const pdfResponse = await fetch(`${origin}/CVWEB2026.pdf`);
assert.equal(pdfResponse.status, 200, "CV file must be served");
assert.match(
  pdfResponse.headers.get("content-type") ?? "",
  /application\/pdf/i,
);
const pdfBytes = new Uint8Array(await pdfResponse.arrayBuffer());
assert.ok(pdfBytes.length > 80000);
assert.equal(new TextDecoder().decode(pdfBytes.slice(0, 5)), "%PDF-");
console.log(
  "PASS: PT default, EN/PT actions, cookie persistence, reload/deep links, localized metadata/navigation, PDF route, and three lazy background videos with posters.",
);
