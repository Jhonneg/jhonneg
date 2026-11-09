# Portfolio Redesign — Implementation Plan

> This is the **requested scope**, not a claim that the work has been done. The IDE agent must fill in actual repository paths and implementation decisions *after inspecting code*.

## Start here: audit and i18n foundation

- [ ] Read `AGENTS.md` and `PORTFOLIO_AGENT_CONTEXT_FINAL.md`.
- [ ] Inspect routes, component tree, CSS/theme tokens, fonts, project metadata, media files, and available scripts.
- [ ] Record verified current behaviors and broken links; distinguish observed issues from suggestions.
- [ ] Select an i18n strategy suitable for the real framework and routing. Document the decision (state/context vs locale routes, dictionary structure, persistence, SSR hydration behavior).
- [ ] Define `pt-BR` default, `en` alternative, language persistence, accessible PT/EN control, and translation keys for all user-visible content.
- [ ] Create a minimal, testable language-switching foundation before editing many pages. Avoid regressions to existing routes.

## Milestone 1 — Homepage

- [ ] Localize professional hero headline/subtitle and description in PT/EN.
- [ ] Add localized Projects and CV CTAs; verify URLs.
- [ ] Feature 2–3 accurate, high-quality projects.
- [ ] Preserve actual dark theme, typography, and existing motion/design effects.
- **Done when:** In both languages, role, engineering evidence, projects, and actions are immediately understandable; navigation/CTAs work.

## Milestone 2 — Bento Grid

- [ ] Reuse existing video project-card component where practical.
- [ ] Implement balanced desktop 12-column Bento Grid emphasizing verified strongest work.
- [ ] Keep playing video behind default overlay; reveal on hover; clicking opens live demo.
- [ ] Provide accessible keyboard and touch preview behavior; make source links separately reachable without nested anchors.
- [ ] Preserve and localize JS/Python (and any other actual) filters; filtered grid has no awkward gaps.
- [ ] Adapt layout to video dimensions; prevent important video UI cropping.
- [ ] Test desktop/tablet/mobile and dark-theme text contrast.
- **Done when:** Project card interactions and links work as before, with consistent responsive asymmetry and language support.

## Milestone 3 — About & Contact

- [ ] Implement the About terminal's useful `whoami`, `cat stack.json`, `ls projects/` structure; no false 'installing' state.
- [ ] Write/verify honest biography and categorized stack in **both** languages, with readable line lengths.
- [ ] Add accessible, localized command switching if implemented, without gating essential content behind animations.
- [ ] Make email/LinkedIn primary, WhatsApp/Discord secondary; preserve all valid contact links.
- **Done when:** About and Contact are readable, accurate, keyboard/mobile usable, and fully translated.

## Milestone 4 — Navigation, language toggle, responsive typography

- [ ] Consistent primary navigation: desktop top, mobile bottom (adjust based on actual architecture).
- [ ] Add PT/EN toggle to shared navigation; sync state across pages, sessions, deep links, and filters.
- [ ] Localize navigation labels, active-state/aria labels, and category labels.
- [ ] Set document language (`pt-BR`/`en`) and avoid hydration flicker; respect selected locale on direct navigation.
- [ ] Implement typography/spacing tokens and check different translation lengths.
- [ ] Prevent bottom-nav content occlusion and horizontal overflow.
- **Done when:** All pages are discoverable at mobile and desktop sizes and language selection behaves consistently.

## Milestone 5 — Accessibility, video and page performance

- [ ] Add poster/fallback visuals and viewport-aware playback.
- [ ] Pause offscreen videos and support reduced-motion settings.
- [ ] Confirm touch preview affordance and card click behavior do not conflict.
- [ ] Ensure keyboard focus, semantics, adequate contrast, descriptive links, translated ARIA text.
- [ ] Audit assets, heavy imports, layout shift, hydration and network usage.
- [ ] Run existing checks and performance audits. Record measured results, not aspirational scores.
- **Done when:** No critical interaction regressions; accessible non-hover path and measured improvements documented.

## Milestone 6 — Recruiter readiness, SEO, verification

- [ ] Confirm developer positioning, education/date, and skills align with factual CV and projects.
- [ ] Add **working** download CV; label the language of available CV honestly. If distinct PT and EN PDFs exist, link accordingly.
- [ ] Show clear live demo + GitHub source paths for key projects. Validate working links; repair mismatches only using verified targets.
- [ ] Add localized title/description/Open Graph data, HTML lang and canonical/hreflang as appropriate.
- [ ] Review mobile experience, social previews, navigation paths and translations.
- [ ] Final smoke test for PT/EN, reload persistence, route switching, keyboard, touch, video playback and project filtering.
- **Done when:** A recruiter can find relevant work and contact/CV in both languages, all relevant links verify, and checks pass.

## Required handoff report after each milestone

1. What changed (file names + brief rationale).
2. Which features stayed unchanged.
3. What was tested (commands/browser sizes; evidence).
4. What is still uncertain or needs user verification.
5. Suggested next milestone.

## Never do without explicit user permission

- Deploy to production; replace third-party resources or URLs with guesses; change account-level settings; invent experience/credentials; build the separate Lain 2.0 app.
