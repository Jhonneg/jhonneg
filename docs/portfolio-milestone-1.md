# Portfolio audit and milestone 1

## Requirements and scope

The finalized context is stored as `PORTFOLIO_AGENT_CONTEXT.md` (heading:
“Portfolio Redesign — Agent Context (Final)”), as confirmed by the owner.
`AGENTS.md` and `PORTFOLIO_IMPLEMENTATION_PLAN.md` define incremental milestones.
This pass covers the localization foundation and homepage only. No deployment.

## Verified repository audit

- Next.js 14.2.6 App Router, React 18, TypeScript, Tailwind 3 and DaisyUI 4.
- Roboto Mono is loaded with `next/font/google`; DaisyUI's coffee theme supplies
  the existing gold/amber tokens, with plum/cream global colors. The Three.js
  blob already uses the agreed palette.
- Routes: `/`, `/projects/js`, `/projects/python`, `/about`, `/contact`, `/chat`
  and `/api/chat`. The chat is outside this milestone and remains unchanged.
- `app/layout.tsx` owns the shared navigation, currently below page content.
  Navigation repositioning belongs to milestone 4.
- `constants/projects.ts` holds names, descriptions, technology tags, demo links
  and remotely hosted videos. There are separate homepage and gallery cards.
- Both card implementations play muted, looping videos behind text, reveal the
  video on hover, and provide an external destination. The homepage also keeps
  its overlay visible on keyboard focus.
- Homepage: one column on small screens, three featured cards from `md` upwards.
  Gallery: one column, then two from `sm`; no Bento Grid yet.
- About has a real biography, but also a misleading “installing” animation and
  hard-coded line breaks. Contact only exposes Discord/WhatsApp. These remain
  milestone 3 work. README supplies the email used by the interim CV action.
- No CV PDF or LinkedIn URL was found. No CV download was fabricated.
- Planets Express points at a Pong deployment. Its intended URL remains unknown.
  The ReAct Agent media URL contains an expiring signed token; repair is pending.
- Available commands: `npm run dev`, `npm run build`, `npm run lint`;
  type checking via `npx tsc --noEmit`. No existing test runner was configured.

## Localization decision and files

Use a validated `portfolio-locale` cookie with `pt-BR` as default and `en` as the
alternative. Preserve all existing paths rather than introducing locale routes.
The root layout reads the cookie on the server, supplies the initial provider
value, HTML language and metadata, and renders matching initial content. There
is no localStorage/effect-based language change after hydration.

The language control invokes a server action, which sets a one-year, path-wide,
HttpOnly, SameSite=Lax cookie and causes Next.js to render the layout again.
Production uses Secure cookies. The control has translated accessible labels,
pressed state, pending protection, and a translated failure message. Persistence
depends on the browser accepting cookies. Failed actions retain the old locale.

Tradeoff: reading cookies in the root layout makes these routes dynamically
rendered. This requires Next.js server hosting rather than static export. It
also means language-specific URLs/hreflang are not appropriate for this strategy.

- `lib/i18n/config.ts`: supported locales, default, cookie name, validation.
- `lib/i18n/dictionaries.ts`: matching typed dictionaries; navigation, language
  control, hero, featured descriptions and metadata are covered in this pass.
- `lib/i18n/server.ts`, `app/actions/locale.ts`: server read/write boundaries.
- `components/language-provider.client.tsx`: shared locale from server props.
- `components/language-toggle.client.tsx`: accessible PT/EN selection.
- `app/layout.tsx`: provider, localized metadata/lang, explicit coffee theme,
  localized skip link and main-content target.
- `components/navbar.server.tsx`: localized client navigation and language
  control. The existing filename is retained; it now declares `use client`.
- `components/typer.client.tsx`: stable localized professional role, shorter
  hero, existing animated technology line/blob, project/email/contact actions.
- `components/featured-projects.server.tsx`: localized client cards, stable
  name-based selection instead of array offsets; existing video behavior kept.
- `scripts/check-localization.mjs`: dependency-free HTTP smoke checks against
  the Turbopack dev server on `127.0.0.1:3100`.

Future dictionaries should extend these namespaces with gallery/filter and
preview labels (milestone 2), About terminal and Contact text (milestone 3),
and remaining accessibility/error/empty-state text in the relevant milestone.
Other routes still have English body content; only their shared navigation and
metadata are localized so far. This is not a claim of full-site translation.

## Homepage content and links

The role is always visible; it is no longer gated by typing. Existing descriptions
support Node.js/Express, Socket.io, Nuxt and Python/RAG summaries. No employment,
usage, performance or new deployment claims were added. Product and stack names
remain unchanged in both languages.

The homepage retains Pong, Lain and RAG videos with hidden controls, autoplay,
muting, looping and inline playback. Text and badge overlays remain above them.
The shader, gallery interactions and About/Contact bodies were not rewritten.

HTTP link checks during this pass:

- Pong Railway demo: HTTP 404. The repository referenced by its existing GitHub
  media path, `https://github.com/Jhonneg/PongJS`, returns HTTP 200. The homepage
  card now links there and explicitly labels the demo as unavailable. The gallery
  link remains an outstanding milestone 2 repair.
- Lain Netlify demo: HTTP 200 (availability only, not functional testing).
- RAG Streamlit demo: login redirects exceed the automated redirect limit.
  Retained the existing link; interactive availability is unverified.
- Internal CTA destinations render successfully in the HTTP smoke checks.
- The interim CV CTA requests a CV through the existing README email address.
  A working download remains blocked until the owner supplies a real PDF and its
  language. The email action is not represented as a completed download feature.

## Validation and handoff

Passed: TypeScript, lint (one pre-existing `bg-opacity-60` gallery warning), and
production build outside the sandbox. The sandboxed build reports a generic
webpack failure; running the same command with approval succeeds. Existing build
warnings also mention optional `sharp` and outdated Browserslist data.

HTTP smoke checks exercise default PT, EN/PT server actions, persistent cookie
attributes, reload/direct-route language, invalid-cookie fallback, metadata,
navigation and background-video markup. Run with:

```sh
npm run dev -- --hostname 127.0.0.1 --port 3100
node scripts/check-localization.mjs
```

No browser automation or installed browser was found. No screenshots, viewport
layout checks, physical keyboard/touch checks or actual video-playback checks
are claimed. These remain manual review items in both languages.

Milestone 1 is implemented with an outstanding CV-download requirement and
browser verification. The next implementation milestone is the Bento Grid:
reuse the video card, localize gallery/filter content, provide keyboard/touch
preview and separate source links, and resolve the Planets Express URL before
promoting it. Do not advance or deploy as part of this milestone handoff.
