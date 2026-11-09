import assert from "node:assert/strict";

// Supply a Playwright module path if installed outside this project.
const { chromium } = await import(process.argv[2] ?? "playwright");
const browser = await chromium.launch({ headless: true });
const origin = "http://127.0.0.1:3100";

try {
  for (const width of [1440, 1024, 768, 767, 375, 320]) {
    const context = await browser.newContext({
      viewport: { width, height: 900 },
    });
    const page = await context.newPage();
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));

    for (const locale of ["pt-BR", "en"]) {
      if (locale === "en") {
        await page
          .getByRole("button", { name: "English", exact: true })
          .click();
        await page.waitForFunction(
          () => document.documentElement.lang === "en",
        );
      }

      const labels =
        locale === "en"
          ? {
              nav: "Primary navigation",
              home: "Home",
              projects: "Projects",
              about: "About me",
              contact: "Contact",
            }
          : {
              nav: "Navegação principal",
              home: "Início",
              projects: "Projetos",
              about: "Sobre mim",
              contact: "Contato",
            };

      for (const [route, active] of [
        ["/", labels.home],
        ["/projects/js", labels.projects],
        ["/projects/python", labels.projects],
        ["/about", labels.about],
        ["/contact", labels.contact],
      ]) {
        await page.goto(origin + route);
        assert.equal(await page.locator("html").getAttribute("lang"), locale);
        const nav = page.getByRole("navigation", { name: labels.nav });
        assert.equal(await nav.count(), 1);
        assert.equal(
          await nav
            .getByRole("link", { name: active, exact: true })
            .getAttribute("aria-current"),
          "page",
        );
        assert.equal(await nav.getByRole("link").count(), 5);
        assert.equal(await nav.getByRole("button").count(), 2);
        assert.ok(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= innerWidth,
          ),
          `Horizontal overflow at ${width}px ${route}`,
        );

        const placement = await page.evaluate(() => {
          const nav = document.querySelector("nav[aria-label]");
          const bar = nav.getBoundingClientRect();
          const main = document.querySelector("main").getBoundingClientRect();
          return {
            position: getComputedStyle(nav).position,
            bar,
            main,
            height: innerHeight,
          };
        });
        if (width < 768) {
          assert.equal(placement.position, "fixed");
          assert.ok(
            placement.bar.bottom <= placement.height &&
              placement.bar.bottom > placement.height - 64,
          );
          assert.ok(placement.bar.height < 144, "Mobile bar must stay compact");
          for (const link of await nav.getByRole("link").all()) {
            const box = await link.boundingBox();
            assert.ok(
              box.width >= 44 && box.height >= 44,
              "Mobile links need touch targets",
            );
          }
          await page.evaluate(() =>
            window.scrollTo(0, document.body.scrollHeight),
          );
          await page.waitForTimeout(100);
          const clearance = await page.evaluate(() => ({
            mainBottom: document.querySelector("main").getBoundingClientRect()
              .bottom,
            navTop: document
              .querySelector("nav[aria-label]")
              .getBoundingClientRect().top,
          }));
          assert.ok(
            clearance.mainBottom < clearance.navTop,
            `Mobile bar covers final content on ${route}`,
          );
        } else {
          assert.equal(placement.position, "sticky");
          assert.ok(
            placement.bar.bottom <= placement.main.top,
            "Desktop nav must precede content",
          );
        }

        if (
          (width === 1440 || width === 375 || width === 320) &&
          ["/", "/contact"].includes(route)
        ) {
          await page.screenshot({
            path: `/tmp/jhonneg-nav-${width}-${locale}-${route === "/" ? "home" : "contact"}.png`,
            fullPage: route === "/contact",
          });
        }
      }

      await page.goto(origin + "/projects/js");
      await page
        .getByRole("navigation", {
          name:
            locale === "en" ? "Project categories" : "Categorias de projetos",
        })
        .getByRole("link", { name: "Python" })
        .click();
      await page.waitForURL("**/projects/python");
      assert.equal(
        await page
          .getByRole("navigation", { name: labels.nav })
          .getByRole("link", { name: labels.projects, exact: true })
          .getAttribute("aria-current"),
        "page",
      );
      await page.reload();
      assert.equal(await page.locator("html").getAttribute("lang"), locale);
    }
    assert.deepEqual(errors, []);
    console.log(
      `PASS ${width}px: top/bottom placement, clearance, PT/EN, active links, filters, reload, no overflow/errors`,
    );
    await context.close();
  }

  const touchContext = await browser.newContext({
    viewport: { width: 375, height: 812 },
    hasTouch: true,
    isMobile: true,
  });
  const touchPage = await touchContext.newPage();
  await touchPage.goto(origin);
  await touchPage.keyboard.press("Tab");
  assert.equal(
    await touchPage
      .getByRole("link", { name: "Pular para o conteúdo" })
      .evaluate((link) => link === document.activeElement),
    true,
  );
  await touchPage.keyboard.press("Enter");
  assert.equal(
    await touchPage
      .locator("main")
      .evaluate((main) => main === document.activeElement),
    true,
  );
  await touchPage
    .getByRole("navigation", { name: "Navegação principal" })
    .getByRole("link", { name: "Projetos" })
    .tap();
  await touchPage.waitForURL("**/projects/js");
  await touchPage.getByRole("button", { name: "English", exact: true }).tap();
  await touchPage.waitForFunction(() => document.documentElement.lang === "en");
  await touchPage
    .getByRole("navigation", { name: "Primary navigation" })
    .getByRole("link", { name: "Contact" })
    .tap();
  await touchPage.waitForURL("**/contact");
  assert.equal(await touchPage.locator("html").getAttribute("lang"), "en");
  console.log(
    "PASS touch and keyboard: skip link, mobile route navigation, language switch, direct contact",
  );
  await touchContext.close();
} finally {
  await browser.close();
}
