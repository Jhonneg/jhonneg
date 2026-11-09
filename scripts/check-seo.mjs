import assert from "node:assert/strict";

// Run against `npm run dev -- --hostname 127.0.0.1 --port 3100`.
const origin = "http://127.0.0.1:3100";
const site = "https://jhonneg.is-a.dev";
const routes = [
  ["/", "Jhonne | Desenvolvedor Full-Stack Júnior", "Jhonne | Junior Full-Stack Developer"],
  ["/about", "Sobre Jhonne | Desenvolvedor Full-Stack Júnior", "About Jhonne | Junior Full-Stack Developer"],
  ["/contact", "Contato | Jhonne Guerra", "Contact Jhonne | Junior Full-Stack Developer"],
  ["/projects/js", "Projetos JavaScript | Jhonne Guerra", "JavaScript Projects | Jhonne Guerra"],
  ["/projects/python", "Projetos Python | Jhonne Guerra", "Python Projects | Jhonne Guerra"],
];

for (const locale of ["pt-BR", "en"]) {
  for (const [path, ptTitle, enTitle] of routes) {
    const response = await fetch(origin + path, {
      headers: { cookie: `portfolio-locale=${locale}` },
    });
    assert.equal(response.status, 200, path);
    const html = await response.text();
    const title = locale === "en" ? enTitle : ptTitle;
    const canonical = path === "/" ? site : site + path;
    assert.ok(html.includes(`<html lang="${locale}"`), path);
    assert.ok(html.includes(`<title>${title}</title>`), path);
    assert.ok(html.includes(`rel="canonical" href="${canonical}"`), path);
    assert.ok(html.includes(`property="og:title" content="${title}"`), path);
    assert.ok(html.includes(`property="og:url" content="${canonical}"`), path);
    const ogLocale = locale.replace("-", "_");
    assert.ok(html.includes(`property="og:locale" content="${ogLocale}"`), path);
    assert.ok(html.includes('name="twitter:card" content="summary_large_image"'), path);
    assert.match(html, /property="og:image" content="https?:\/\/[^\"]+\/opengraph-image/);
    assert.ok(!html.includes('hreflang="en"'), "Cookie-based locales have no distinct URLs");
  }
}

const sitemap = await fetch(`${origin}/sitemap.xml`);
assert.equal(sitemap.status, 200);
const sitemapText = await sitemap.text();
for (const [path] of routes) assert.ok(sitemapText.includes(`${site}${path}`));
assert.ok(!sitemapText.includes(`${site}/chat`));
const robots = await fetch(`${origin}/robots.txt`);
assert.equal(robots.status, 200);
assert.ok((await robots.text()).includes(`${site}/sitemap.xml`));
const previews = [];
for (const locale of ["pt-BR", "en"]) {
  const image = await fetch(`${origin}/opengraph-image`, {
    headers: { cookie: `portfolio-locale=${locale}` },
  });
  assert.equal(image.status, 200);
  assert.match(image.headers.get("content-type") ?? "", /image\/png/);
  const bytes = new Uint8Array(await image.arrayBuffer());
  assert.deepEqual([...bytes.slice(0, 8)], [137, 80, 78, 71, 13, 10, 26, 10]);
  assert.ok(bytes.length > 1000);
  previews.push(Buffer.from(bytes).toString("base64"));
}
assert.notEqual(previews[0], previews[1], "Social previews are localized");
console.log("PASS localized route metadata, canonicals, social image, sitemap and robots");
