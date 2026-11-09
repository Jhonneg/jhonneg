# Milestone 6 — recruiter readiness and SEO

## Changes

- `constants/projects.ts`, `components/featured-projects.server.tsx`, and
  `lib/i18n/dictionaries.ts`: corrected the Face Recognition stack and copy to
  match its Next.js/Clarifai repository and the supplied CV. The RAG Streamlit
  destination currently loops through login redirects, so its gallery and
  homepage cards now open the verified GitHub source and say that a demo is
  unavailable. Planets Express and Pong remain source-only because their
  OnRender destinations timed out during this audit.
- `app/about/page.tsx` and the shared dictionaries: added the Faculdade
  Anhanguera Systems Analysis and Development course with the December 2026
  expected completion date shown in the supplied CV.
- `lib/seo.ts`, `lib/site.ts`, the five portfolio route files and
  `app/layout.tsx`: added route-specific PT-BR/English titles, descriptions,
  Open Graph/Twitter metadata and canonical URLs. The homepage continues to
  default to Portuguese. Hreflang was omitted because the language preference
  is stored in a cookie and there are no distinct URLs for each language.
- `app/opengraph-image.tsx`, `app/sitemap.ts`, `app/robots.ts`: added a branded
  plum/amber social image, sitemap for the five portfolio routes and robots
  discovery. The image changes with the language cookie. The separate `/chat`
  route is not promoted in the sitemap.
- `scripts/check-seo.mjs` verifies both languages, canonicals, social metadata,
  the generated PNG, sitemap and robots. `scripts/check-bento.mjs` verifies the
  corrected RAG source destination.

The responsive Bento Grid, video interactions, language toggle, contact
methods, CV download and dark theme were preserved. No deployment was made.

## Link and content evidence

- The supplied `CVWEB2026.pdf` names Node.js/Express, Docker, AWS EC2, Jest,
  React/Next.js, Clarifai and Socket.io for the highlighted projects. Homepage,
  About and project copy were checked against it. The PDF is Portuguese only
  and both site languages identify that correctly.
- All nine public GitHub repository links and the GitHub profile returned HTTP
  200. Lain, Games stores and Face Recognition Netlify URLs returned HTTP 200;
  this confirms an HTTP response, not full application behavior. Both OnRender
  URLs timed out after 15 seconds. The RAG Streamlit URL entered repeated 303
  login redirects. The user-supplied LinkedIn URL returned HTTP 999 to an
  automated request, so the profile itself could not be independently checked.
  WhatsApp redirected to its send page. Email and Discord identities match the
  supplied CV or prior owner-provided details.
- README follow-up outside this repository: Lain's README is only 31 bytes;
  Face Recognition and RAG setup instructions contain placeholder repository
  names/URLs. These public repositories were not edited.

## Verification

- `npm run lint`, `npx tsc --noEmit`, `npm run build`, and `git diff --check`
  passed. The production build emits all five portfolio routes, sitemap,
  robots and Open Graph image.
- `scripts/check-seo.mjs` passed for PT-BR and English on all five routes.
  The 1200×630 social image was rendered and visually inspected; the two locale
  responses had different bytes and `no-cache, no-store` headers in dev.
- `scripts/check-localization.mjs`, `scripts/check-about-contact.mjs`,
  `scripts/check-navigation.mjs`, `scripts/check-bento.mjs`, and
  `scripts/check-media.mjs` passed against the local dev server. Browser widths
  included 1440, 1024, 768, 767, 375 and 320 pixels, with keyboard/touch,
  locale persistence, CV, contact, project filtering, hover, video playback,
  reduced motion and source/demo destinations checked.

## Remaining owner/external follow-up

- Confirm the LinkedIn profile opens as expected in a normal signed-in browser.
- Restore a RAG, Planets Express or Pong live-demo link only after confirming
  a reachable and usable destination. Current cards accurately point to source.
- Improve the three READMEs noted above in their own repositories when ready.
- Review the local change set and approve deployment separately if desired.
