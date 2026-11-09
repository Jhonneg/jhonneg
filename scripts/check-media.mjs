// Run against `npm run dev -- --hostname 127.0.0.1 --port 3100`.
const { chromium } = await import(process.argv[2] ?? "playwright");
import assert from "node:assert/strict";

const origin = "http://127.0.0.1:3100";
const browser = await chromium.launch({ headless: true });
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 700 } });
  await page.goto(`${origin}/projects/js`);
  const first = page.locator(".project-card video").first();
  const last = page.locator(".project-card video").last();
  await first.scrollIntoViewIfNeeded();
  await page.waitForFunction(() => {
    const video = document.querySelector(".project-card video");
    return video?.currentTime > 0 && !video.paused;
  }, null, { timeout: 25000 });
  assert.match(await first.getAttribute("poster"), /^\/posters\/.+\.webp$/);
  assert.equal(await first.getAttribute("preload"), "none");
  assert.equal(await last.getAttribute("src"), null, "Distant card is not loaded initially");

  await last.scrollIntoViewIfNeeded();
  await page.waitForFunction(() => document.querySelector(".project-card video")?.paused);
  assert.ok(await last.getAttribute("src"), "Nearby card loads its video");
  await first.scrollIntoViewIfNeeded();
  await page.waitForFunction(() => !document.querySelector(".project-card video")?.paused);
  console.log("PASS poster, lazy load, offscreen pause, and resume on return");

  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.waitForFunction(() =>
    [...document.querySelectorAll(".project-card video")].every(
      (video) => !video.getAttribute("src") && video.paused,
    ),
  );
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.waitForFunction(() => Boolean(document.querySelector(".project-card video")?.getAttribute("src")));
  console.log("PASS switching motion preference stops and restores video loading");

  const reduced = await browser.newPage({
    viewport: { width: 1440, height: 700 },
    reducedMotion: "reduce",
  });
  let mediaRequests = 0;
  reduced.on("request", (request) => {
    if (request.resourceType() === "media") mediaRequests++;
  });
  for (const route of ["/", "/projects/js"]) {
    await reduced.goto(`${origin}${route}`);
    await reduced.locator("video").first().scrollIntoViewIfNeeded();
    await reduced.waitForTimeout(300);
    const videos = await reduced.locator("video").evaluateAll((items) =>
      items.map((video) => ({ src: video.getAttribute("src"), paused: video.paused, poster: video.poster })),
    );
    assert.ok(videos.every((video) => !video.src && video.paused && video.poster));
    if (route === "/") {
      await reduced.waitForFunction(() =>
        document.querySelector("main section")?.textContent?.includes("Node.js · React · Docker · AWS / Python · RAG · LLM APIs"),
      );
    }
  }
  const card = reduced.locator(".project-card").first();
  await card.locator(".project-media").hover();
  assert.equal(await card.locator(".project-overlay").first().evaluate((el) => getComputedStyle(el).opacity), "1");
  assert.equal(mediaRequests, 0, "Reduced motion must not request video media");
  console.log("PASS reduced-motion static posters and readable overlays on both routes");
  await page.close();
  await reduced.close();
} finally {
  await browser.close();
}
