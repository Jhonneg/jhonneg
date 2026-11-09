# Milestone 4 — navigation and responsive type

## What changed

- `app/layout.tsx` now renders the shared navigation before the main content.
  It reserves mobile bottom space including the device safe area so a fixed
  bar does not cover the end of a page. The skip link remains first in keyboard
  order and targets the main content.
- `components/navbar.server.tsx` keeps the same route targets and GitHub link.
  It is sticky at the top from 768px upwards and a compact fixed bottom bar
  below 768px. Four page links remain visible with 44px touch targets; About
  has an abbreviated visible label on mobile while retaining its full accessible
  name. The active page is shown through `aria-current` and theme styling.
- `components/language-toggle.client.tsx` still uses the cookie-backed shared
  locale. Its error message is positioned outside the bar so failure feedback
  cannot increase the bar height and cover content.
- `lib/i18n/dictionaries.ts` adds the mobile About label in each language and
  shortens the Contact CV and WhatsApp actions at very small widths. The CV
  continues to identify the supplied document as PT-BR.
- `tailwind.config.ts` defines responsive display/section type and a reading
  measure; the homepage, gallery, About and Contact use those shared tokens.
- `app/globals.css` defines mobile navigation clearance with safe-area support.
- `scripts/check-navigation.mjs` exercises placement, page clearance, active
  routes, language switching, project filters, reloads, keyboard skip link and
  touch navigation.

The dark plum and amber palette, PT-BR default and cookie persistence, CV
download, project videos and Bento Grid were preserved. No production deploy.

## Checks

- TypeScript, ESLint and production build passed. The build reports an outdated
  Browserslist data warning; it did not require a dependency change.
- Headless Chromium checked 1440, 1024, 768, 767, 375 and 320px widths across
  home, both project routes, About and Contact in both languages. There was no
  horizontal overflow or client exception. The mobile bar remained below
  144px high, and end-of-page content cleared it at each mobile width.
- Desktop top placement and mobile fixed bottom placement were measured from
  computed browser styles. Active state stayed on Projects after switching
  JS/Python categories; the selected language survived navigation and reload.
- Touch navigation, PT/EN switching and keyboard skip-link activation passed.
  Screenshots of desktop and narrow mobile pages were inspected. The 320px
  Contact copy was shortened after spotting isolated arrows wrapping onto new
  lines, and that layout passed the follow-up browser check.

## Next

Phase 5: optimize videos with posters, viewport-aware playback and reduced
motion, then perform broader accessibility and performance checks. The owner
explicitly removed preview and pause/play buttons in prior turns; do not restore
those controls when implementing Phase 5. The separate Lain 2.0 app is outside
scope. No deployment is authorized.
