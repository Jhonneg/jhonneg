# Milestone 5 — media performance and reduced motion

## What changed

- `components/project-video.client.tsx` shares poster, lazy loading, playback,
  tab visibility and reduced-motion behavior between the homepage and gallery.
  Videos load as cards approach the viewport, play while visible, and pause when
  scrolled away or the tab is hidden. Reduced-motion users see static posters.
- `public/posters/` contains nine WebP frames extracted from the existing demo
  videos (76 KB total on disk). `scripts/generate-posters.mjs` regenerates them
  from the current project URLs. Video assets and links remain unchanged.
- `components/typer.client.tsx` displays stable stack text for reduced-motion
  users. `app/globals.css` keeps card overlays readable on hover in that mode.
- `scripts/check-localization.mjs` and `scripts/check-bento.mjs` account for
  poster-first lazy loading. `scripts/check-media.mjs` covers playback,
  offscreen pause/resume, poster presence and reduced motion.

The dark plum/amber theme, localized copy, Bento Grid, default overlay,
hover-reveal on pointer devices, click-through links and hidden video controls
remain. The previously removed preview and playback buttons were not restored.

## Checks and measurements

- Initial media request count in headless Chromium at 1440×900, after 3.5 s:
  JS gallery **11 before → 4 after**. The same test saw all nine gallery videos
  load after scrolling them into view. Homepage cards are all visible at this
  width, so its media requests did not fall (**7 before → 8 after** in this
  sample); poster requests are additional small images.
- Browser checks verified offscreen pause and resume, live motion-preference
  changes, no video requests under reduced motion, readable overlays, hover,
  keyboard focus, touch details, links and PT/EN persistence. Gallery text
  contrast measured at least 5.85:1 in the existing brightest-frame test.
- The nine posters occupy 76 KB on disk. Original remote video compression and
  hosting remain outside this repository's control.
- TypeScript, ESLint, production build, localization, Bento and navigation
  checks passed. No deployment was performed.

## Next

Phase 6: final recruiter content, link, CV, SEO and cross-route review. The
separate Lain 2.0 project remains outside scope.
