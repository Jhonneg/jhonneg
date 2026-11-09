# Milestone 3 — About and Contact

## Changes

- `app/about/page.tsx`: replaced the misleading "installing" animation and
  forced line breaks with visible `whoami`, `cat stack.json` and `ls projects/`
  sections. The story describes a career transition and personal projects
  without presenting them as paid developer work. Stack categories and project
  links work in both PT-BR and English. The page is server-rendered, so its
  essential content does not wait for client animation.
- `app/contact/page.tsx`: email and the LinkedIn URL supplied by the owner are
  primary contact cards. WhatsApp and the existing Discord handle remain as
  secondary options. This keeps the dark plum/gold theme and rounded styling.
- `components/whatsappbutton.client.tsx`: retained the existing phone number,
  translated the button and the prefilled message, and aimed that message at
  a development opportunity. The message changes with the persisted language.
- `constants/contact.ts`: single source for the existing email, WhatsApp number
  and Discord handle, plus the LinkedIn URL supplied by the owner.
- `lib/i18n/dictionaries.ts`: typed PT-BR and English About and Contact copy.
- `scripts/check-about-contact.mjs`: browser checks for both languages, links,
  keyboard focus and responsive layout.

Existing video cards, gallery filters, language state and route URLs were not
changed. The contact page links to LinkedIn but does not claim to have checked
the external profile content; the URL came directly from the owner.

## Validation

- `npx tsc --noEmit`, `npm run lint`, and `npm run build`: passed. The build
  continues to warn about stale Browserslist data.
- Headless Chromium: checked PT-BR and English on About and Contact at 1440,
  768, 375 and 320 pixels. All command headings and links appeared; no
  horizontal overflow or client exceptions were observed. Language selection
  remained on navigation between the two pages.
- Verified `mailto:jonee4339@hotmail.com`, the owner-provided LinkedIn URL,
  localized WhatsApp text/phone number and the existing Discord handle in
  rendered browser pages. Email and LinkedIn accepted keyboard focus.
- Captured and inspected About and Contact screenshots at desktop and mobile
  sizes in both languages under `/tmp/jhonneg-{about,contact}-{1440,375}-{pt-BR,en}.png`.

The CV was supplied after this milestone as `public/CVWEB2026.pdf`; the homepage
and Contact now offer a verified download labeled as Portuguese in both site
languages. The LinkedIn URL was supplied by the owner, but the external profile
could not be fetched independently through the available web tool. Site-wide
navigation placement and responsive typography are the next milestone. No
production deployment was made.
