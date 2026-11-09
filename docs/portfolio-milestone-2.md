# Milestone 2 — localized Bento Grid

## Changes

- `components/project-gallery.client.tsx`: shared gallery, translated heading,
  description and JavaScript/Python filter navigation. Existing route URLs are
  preserved. The desktop grid has 12 columns: 8/4, 4/8, 6/6; an odd final card
  fills the row. Tablet has two columns; mobile has one. Planets Express and Pong
  lead JavaScript; RAG leads Python.
- `app/projects/js/page.tsx`, `app/projects/python/page.tsx`: small route wrappers
  around the shared gallery, replacing duplicated gallery markup.
- `components/project-card.server.tsx`: reused the existing client component
  entry point. Videos remain muted, autoplaying and looping behind text and
  badges; pointer hover reveals the video. Added a separate preview toggle for
  keyboard/touch, Escape to restore details, and pause/play buttons. Source links
  are siblings of the main card link, never nested inside it. Added translated
  media-error feedback and disabled unusable controls on media failure.
- `app/globals.css`: scoped reveal behavior to gallery cards and hover-capable
  pointers. Keyboard focus retains readable details unless preview is explicitly
  enabled. All videos use `object-contain` so the recorded UI is not cropped.
- `lib/i18n/dictionaries.ts`: translated all nine project descriptions, filter
  labels, gallery instructions, controls, accessible link names and error text.
- `constants/projects.ts`: typed project names, verified source URLs, explicit
  demo/source destination kind, and permanent ReAct media URL.
- `scripts/check-bento.mjs`: repeatable browser checks. Playwright was installed
  separately under `/tmp`; project package dependencies and lockfiles are unchanged.

The dark coffee/plum/amber theme, typography, homepage video cards, existing
language cookie, and all route paths remain. About, Contact and the separate
Lain 2.0 work were not changed. No deployment was performed.

## Link and content evidence

The public GitHub repository API confirmed these sources:

| Project               | Repository                                |
| --------------------- | ----------------------------------------- |
| Planets Express       | https://github.com/Jhonneg/planetsExpress |
| Multiplayer Pong      | https://github.com/Jhonneg/PongJS         |
| Lain Chatbot          | https://github.com/Jhonneg/lainChatbot    |
| Games stores App      | https://github.com/Jhonneg/gamesStoreApp  |
| Discord weather bot   | https://github.com/Jhonneg/DiscordJS      |
| Face Recognition App  | https://github.com/Jhonneg/smartbrainJSX  |
| Commandline Quiz game | https://github.com/Jhonneg/python_trivia  |
| ReAct Agent           | https://github.com/Jhonneg/py-react       |
| RAG App               | https://github.com/Jhonneg/py-rag         |

Planets Express's README confirms its React/Express/MongoDB/Docker/Jest stack and
matches the existing video. Its repository homepage still lists
`https://pongjs.onrender.com/`; the unusual hostname alone is not proof of a
mismatch. That URL timed out in this run. Pong's repository lists
`https://pongmp.onrender.com/`, which also timed out; its previous Railway URL
returned 404 in milestone 1. Both gallery cards now explicitly open verified
source code rather than claim an available demo. Restoring live-demo destinations
requires a successful availability/content check or owner confirmation.

Lain, Games stores and Face Recognition returned HTTP 200. Their current URLs
were retained; HTTP success alone does not establish full application behavior.
RAG retains its existing Streamlit URL and a separate verified source link;
live application availability remains uncertain due to login redirects observed
in milestone 1.

The ReAct README supplies the permanent GitHub attachment URL, replacing the
expired signed private-user-images URL. All nine media assets loaded in Chromium.

## Verification

- `npx tsc --noEmit`: passed.
- `npm run lint`: passed, with no warnings/errors.
- `npm run build`: passed outside sandbox; remaining warning is stale Browserslist
  data. No package updates were made for that unrelated warning.
- Browser QA: headless Chromium, desktop 1440×1000; tablet 768×900; mobile
  375×900 and 320×900. Both categories and both languages had no horizontal
  overflow. Touch context additionally tested at 375×812.
- Verified 8/4 leading columns, Python's full-width final card, hover reveal,
  keyboard preview/Enter/Escape, touch preview without navigation, and separate
  interactive controls with no nested anchors/buttons.
- Verified English selection updates the rendered page and persists through
  category navigation and reload.
- Real remote Planets video loaded, autoplayed, paused and resumed. All six JS
  and three Python videos reported dimensions and no media error. The video
  dimensions ranged from 1046×533 to 1838×908; `object-contain` preserves them.
- Clicking the Lain card opened its existing demo in a new tab.
- Overlay heading/body/action text measured at least 5.85:1 contrast against
  a worst-case white video frame under the 90% dark overlay. This is a focused
  contrast check, not a whole-site accessibility certification.
- No browser client exceptions. Desktop/mobile screenshots were captured and
  inspected at `/tmp/jhonneg-bento-desktop.png` and `/tmp/jhonneg-bento-mobile.png`.

To repeat the browser check with a local Playwright installation and browser:

```sh
npm run dev -- --hostname 127.0.0.1 --port 3100
node scripts/check-bento.mjs /absolute/path/to/playwright/index.mjs
```

## Outstanding and next milestone

Planets/Pong live destinations still need confirmation. RAG's live demo requires
interactive verification. Posters, offscreen playback management and systematic
reduced-motion handling remain milestone 5 work. The manual play/pause button is
available now. CV download remains blocked on a real PDF.

Next: milestone 3, the bilingual About terminal and recruiter-oriented Contact
page. This milestone does not implement those changes or deploy anything.
