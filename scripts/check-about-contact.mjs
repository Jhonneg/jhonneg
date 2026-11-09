import assert from "node:assert/strict";

// Pass a Playwright module path when installed outside this project.
const { chromium } = await import(process.argv[2] ?? "playwright");
const browser = await chromium.launch({ headless: true });
const origin = "http://127.0.0.1:3100";

try {
  for (const width of [1440, 768, 375, 320]) {
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
      } else {
        await page.goto(`${origin}/about`);
      }

      await page.goto(`${origin}/about`);
      assert.equal(await page.locator("html").getAttribute("lang"), locale);
      assert.equal(
        await page.locator("h1").innerText(),
        locale === "en" ? "About me" : "Sobre mim",
      );
      for (const command of ["whoami", "cat stack.json", "ls projects/"]) {
        assert.equal(
          await page.getByRole("heading", { name: command }).count(),
          1,
        );
      }
      assert.equal(
        await page.getByText("installing", { exact: false }).count(),
        0,
      );
      assert.ok(
        await page
          .getByText("Planets Express", { exact: false })
          .first()
          .isVisible(),
      );
      assert.ok(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      );

      if (width === 1440 || width === 375) {
        await page.screenshot({
          path: `/tmp/jhonneg-about-${width}-${locale}.png`,
          fullPage: true,
        });
      }

      await page.goto(`${origin}/contact`);
      assert.equal(await page.locator("html").getAttribute("lang"), locale);
      assert.equal(
        await page.locator("h1").innerText(),
        locale === "en" ? "Get in touch" : "Entre em contato",
      );
      const email = page.getByRole("link", {
        name: locale === "en" ? "Send an email" : "Enviar e-mail",
      });
      assert.equal(
        await email.getAttribute("href"),
        "mailto:jonee4339@hotmail.com",
      );
      const linkedIn = page.getByRole("link", { name: /LinkedIn/ });
      assert.equal(
        await linkedIn.getAttribute("href"),
        "https://www.linkedin.com/in/jhonne-guerra-505494197/",
      );
      assert.equal(await linkedIn.getAttribute("target"), "_blank");
      const whatsapp = page.getByRole("link", { name: /WhatsApp/ });
      const whatsappUrl = new URL(await whatsapp.getAttribute("href"));
      assert.equal(whatsappUrl.pathname, "/5511947148220");
      assert.match(
        whatsappUrl.searchParams.get("text"),
        locale === "en"
          ? /development opportunity/
          : /oportunidade de desenvolvimento/,
      );
      assert.ok(await page.getByText("@jonee2").isVisible());
      assert.ok(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      );
      await email.focus();
      assert.equal(
        await email.evaluate((element) => element === document.activeElement),
        true,
      );
      await linkedIn.focus();
      assert.equal(
        await linkedIn.evaluate(
          (element) => element === document.activeElement,
        ),
        true,
      );

      if (width === 1440 || width === 375) {
        await page.screenshot({
          path: `/tmp/jhonneg-contact-${width}-${locale}.png`,
          fullPage: true,
        });
      }
    }
    assert.deepEqual(errors, []);
    console.log(
      `PASS About/Contact at ${width}px: PT/EN, commands, contact links, focus, no overflow/errors`,
    );
    await context.close();
  }
} finally {
  await browser.close();
}
