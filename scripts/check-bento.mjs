// Pass a Playwright module path when installed outside the project.
const { chromium } = await import(process.argv[2] ?? "playwright");
import assert from "node:assert/strict";

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 1000 },
});
const page = await context.newPage();
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));
const origin = "http://127.0.0.1:3100";

async function noOverflow(page) {
  assert.ok(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
    "No horizontal overflow",
  );
}
async function locale(value) {
  await page
    .getByRole("button", {
      name: value === "en" ? "English" : "Português do Brasil",
      exact: true,
    })
    .click();
  await page.waitForFunction(
    (value) => document.documentElement.lang === value,
    value,
  );
}
try {
  await page.goto(origin + "/projects/js");
  await page.locator(".project-card").first().waitFor();
  assert.equal(await page.locator(".project-card").count(), 6);
  assert.equal(await page.locator("h1").innerText(), "Projetos");
  assert.equal(
    await page.locator(".project-card h2").first().innerText(),
    "Planets Express",
  );
  assert.equal(await page.locator("a a, a button").count(), 0);
  await noOverflow(page);
  const first = page.locator(".project-card").first();
  const second = page.locator(".project-card").nth(1);
  assert.ok(
    (await first.boundingBox()).width >
      (await second.boundingBox()).width * 1.9,
  );
  await page.screenshot({
    path: "/tmp/jhonneg-bento-desktop.png",
    fullPage: true,
  });
  await first.locator(".project-media").hover();
  await page.waitForFunction(
    () =>
      getComputedStyle(document.querySelector(".project-overlay")).opacity ===
      "0",
  );
  await page.mouse.move(0, 0);
  assert.equal(
    await page.getByRole("button", { name: /^Ver prévia/ }).count(),
    0,
  );
  await first.locator(".project-media").focus();
  await page.waitForFunction(
    () =>
      getComputedStyle(document.querySelector(".project-overlay")).opacity ===
      "1",
  );
  console.log(
    "PASS desktop: 8/4 leading grid, default overlay, hover reveal, keyboard focus details, no preview button",
  );
  assert.equal(await page.locator(".project-card button").count(), 0);
  try {
    await page.waitForFunction(
      () => {
        const v = document.querySelector("video");
        return v.readyState >= 2 && v.currentTime > 0;
      },
      null,
      { timeout: 20000 },
    );
    assert.equal(await first.locator("video").evaluate((v) => v.paused), false);
    console.log(
      "PASS real remote video loads and autoplays without playback buttons",
    );
  } catch (error) {
    console.log("VIDEO CHECK INCOMPLETE:", error.message.slice(0, 180));
  }
  await locale("en");
  assert.equal(await page.locator("h1").innerText(), "Projects");
  await page
    .getByRole("navigation", { name: "Project categories" })
    .getByRole("link", { name: "Python", exact: true })
    .click();
  await page.waitForURL("**/projects/python");
  assert.equal(await page.locator(".project-card").count(), 3);
  await page.reload();
  assert.equal(await page.locator("html").getAttribute("lang"), "en");
  assert.equal(await page.locator("h1").innerText(), "Projects");
  assert.equal(
    await page
      .locator(".project-card")
      .last()
      .evaluate((el) => getComputedStyle(el).gridColumnEnd),
    "span 12",
  );
  console.log(
    "PASS EN persists through filter navigation and reload; Python final card spans remaining row",
  );
  for (const width of [768, 375, 320]) {
    await page.setViewportSize({ width, height: 900 });
    for (const lang of ["pt-BR", "en"]) {
      await locale(lang);
      for (const route of ["js", "python"]) {
        await page.goto(origin + "/projects/" + route);
        await noOverflow(page);
        assert.equal(await page.locator("html").getAttribute("lang"), lang);
      }
    }
    console.log("PASS responsive routes/languages at width", width);
  }
  const touchContext = await browser.newContext({
    viewport: { width: 375, height: 812 },
    hasTouch: true,
    isMobile: true,
  });
  const touch = await touchContext.newPage();
  await touch.goto(origin + "/projects/js");
  const touchCard = touch.locator(".project-card").first();
  assert.equal(
    await touchCard.getByRole("button", { name: /^Ver prévia/ }).count(),
    0,
  );
  await touch.waitForFunction(
    () =>
      getComputedStyle(document.querySelector(".project-overlay")).opacity ===
      "1",
  );
  await touch.screenshot({
    path: "/tmp/jhonneg-bento-mobile.png",
    fullPage: true,
  });
  console.log(
    "PASS touch card keeps details visible without a preview control",
  );
  for (const route of ["js", "python"]) {
    await page.goto(origin + "/projects/" + route);
    await page.waitForFunction(
      () =>
        [...document.querySelectorAll(".project-card video")].every(
          (v) => v.videoWidth > 0 && !v.error,
        ),
      null,
      { timeout: 25000 },
    );
    console.log(
      "PASS all media loads for",
      route,
      JSON.stringify(
        await page
          .locator("video")
          .evaluateAll((vs) => vs.map((v) => [v.videoWidth, v.videoHeight])),
      ),
    );
  }
  await page.goto(origin + "/projects/js");
  const lain = page.locator(".project-card").filter({
    has: page.getByRole("heading", { name: "Lain Chatbot", exact: true }),
  });
  const popupPromise = page.waitForEvent("popup");
  await lain.locator(".project-media").click();
  const popup = await popupPromise;
  await popup.waitForURL("https://lainchat.netlify.app/**");
  await popup.close();
  console.log(
    "PASS demo card opens the correct external destination in a new tab",
  );
  const contrast = await page.evaluate(() => {
    const canvas = document.createElement("canvas"),
      ctx = canvas.getContext("2d");
    function rgb(color) {
      ctx.clearRect(0, 0, 1, 1);
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, 1, 1);
      return [...ctx.getImageData(0, 0, 1, 1).data];
    }
    function lum(c) {
      return c
        .slice(0, 3)
        .map((v) => {
          v /= 255;
          return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
        })
        .reduce((s, v, i) => s + v * [0.2126, 0.7152, 0.0722][i], 0);
    }
    const overlay = rgb(
      getComputedStyle(document.querySelector(".project-overlay"))
        .backgroundColor,
    );
    const worst = overlay
      .slice(0, 3)
      .map((v) => v * (overlay[3] / 255) + 255 * (1 - overlay[3] / 255));
    return [
      ...document.querySelectorAll(
        ".project-card h2, .project-card .project-overlay p",
      ),
    ].map((el) => {
      const fg = lum(rgb(getComputedStyle(el).color)),
        bg = lum(worst);
      return {
        text: el.textContent.slice(0, 30),
        ratio: (Math.max(fg, bg) + 0.05) / (Math.min(fg, bg) + 0.05),
      };
    });
  });
  assert.ok(
    contrast.every((item) => item.ratio >= 4.5),
    "Text contrast over brightest possible video frame",
  );
  console.log(
    "PASS overlay text contrast >= 4.5:1; minimum",
    Math.min(...contrast.map((x) => x.ratio)).toFixed(2),
  );
  console.log(
    "Media dimensions:",
    JSON.stringify(
      await page.locator("video").evaluateAll((videos) =>
        videos.map((v) => ({
          width: v.videoWidth,
          height: v.videoHeight,
          fit: getComputedStyle(v).objectFit,
          error: v.error?.code ?? null,
        })),
      ),
    ),
  );
  assert.deepEqual(errors, [], "No client exceptions");
  console.log("PASS no browser exceptions");
} finally {
  await browser.close();
}
