Portfolio Redesign — Agent Context (Final)
Purpose: Product/design requirements for the existing portfolio at https://jhonneg.is-a.dev/. This is not a description of its current source code. Inspect the repository and preserve its established architecture. Last handoff: November 2026.

Mission and audience
Improve Jhonne's portfolio to help recruiters understand his skills and contact him for junior backend/full-stack web development roles, particularly in Brazil. Treat this as an incremental redesign, not a rewrite. Present personal projects honestly as personal projects, not paid developer work. Do not invent results, years of professional developer experience, employers, user numbers, or deployment claims. Confirm details against the code and current CV.
Non-negotiable visual identity

- Preserve the existing dark plum / gold / amber retro-terminal aesthetic, rounded cards, and monospace character.
- Reference colors, approximate until checked against actual CSS: deep plum #1C131B, muted gold #C59F60, amber #DB924B, cream #F4E5CF.
- A light pastel/white print-to-PDF screenshot of the homepage was bugged; it does not represent the intended site.
- Use the actual site's design tokens where possible rather than duplicating hardcoded colors.
- Preserve the existing page personality; improve clarity and usability without generic corporate styling.
  What the current project cards ACTUALLY do
  A screen recording demonstrated the interactive gallery. Do not mistake the cards for static screenshot cards.
- Each card has a video of the project playing behind its text and tech-badge overlay.
- On hover, the overlay disappears/fades to reveal the demo video.
- Clicking a card opens the project's live demo.
- Keep these interactions when changing the layout, and ensure keyboard/touch equivalents.
- Add discoverable GitHub/source links without nesting interactive elements in anchors or accidentally triggering card navigation.
- Verify actual video playback, link targets, and project metadata in the codebase rather than assuming earlier descriptions/URLs are correct.
  New requirement: bilingual website — Português / English
  The user explicitly approved adding a Portuguese/English language toggle. This is required scope.
- Put a small, accessible PT / EN toggle in the shared navigation (desktop and mobile). It must be usable with keyboard, touch, and screen readers; selected language must be visually obvious.
- Default to Brazilian Portuguese (pt-BR) for new visitors when no preference exists. Remember the visitor's explicit selection across navigation, reloads, and return visits, subject to available storage and privacy constraints. Avoid a flash of the wrong language during hydration.
- Translate all user-facing copy: homepage hero/CTAs, navigation, About terminal content and commands' explanatory text, Contact, project headings/descriptions/tags where language-dependent, filters, buttons, accessibility names, and empty/error states.
- Preserve product names, project names, libraries, code commands, and technical terms where appropriate. Do not machine-translate terminology into misleading claims.
- Use centralized, typed translation dictionaries (or existing i18n stack). No scattered page-specific language === ... ? ... strings. Choose the i18n approach compatible with the actual framework and routing.
- Set correct HTML lang and language-specific page title/meta description/Open Graph descriptions; use localized URLs and hreflang alternates if compatible with current routing. If a route-based strategy is adopted, preserve direct/deep links, project URLs, and any legacy redirects.
- Each language should have readable, proofread copy; do not silently fabricate a Portuguese or English résumé. If CVs exist for both languages, route download links accordingly; if only Portuguese exists, label the download honestly (e.g. Baixar CV (PT) / Download CV (Portuguese)).
- User-controlled language must not be reset by project filters or navigation. Check mobile layout and small viewport fit for both translations.
  Agreed redesign — 6 phases
  Phase 1 — Homepage and first impression
- Replace the weak/incorrect subtitle previously seen as A aspiring webdev with a professionally accurate title such as Desenvolvedor Full-Stack Júnior · Foco em Back-end / Junior Full-Stack Developer · Backend Focused.
- Emphasize evidence: Node.js/Express APIs, Docker, automated testing/CI, AWS deployment, Socket.io real-time apps, where verified.
- Add obvious Projects and Download CV CTAs, localizing both.
- Feature 2–3 strong projects near the first fold, without duplicating a heavy video gallery unnecessarily. Do not misrepresent project status.
  Phase 2 — Bento Grid (approved, required)
- Replace the uniform grid with a controlled asymmetric Bento Grid (e.g. 12 desktop columns). Feature Planets Express prominently; consider Pong Multiplayer and other verified work.
- Preserve existing overlay, background-video, hover-reveal, click-to-demo behavior and category filters.
- Choose card sizes by actual video composition; avoid cropping essential UI. Confirm all live/demo and source links, notably earlier reports of mismatched Planets Express/Pong links.
- Ensure category filtering produces coherent layouts. Responsive layout can simplify to 2 columns on tablet and 1 on mobile.
- A separate Lain 2.0 app is NOT part of this redesign; the current Lain portfolio card may remain as an existing project.
  Phase 3 — About Me and Contact
- Keep the retro terminal treatment of About Me. Replace misleading placeholder headings such as My Tech Stack above biography and $ installing where present.
- Present readable personal story (whoami), categorized skills (cat stack.json), and selected projects (ls projects/); commands may become accessible tabs, but the essential content must not be hidden behind long typing effects.
- Left-align long paragraphs, use a reasonable measure, and communicate career transition truthfully.
- Make email and LinkedIn prominent contact methods, retaining WhatsApp and Discord as secondary options; localize labels and recruitment availability message.
  Phase 4 — Navigation, typography and responsive design
- Consistent shared top navigation on desktop and compact bottom navigation on mobile, provided actual site layout supports it; keep project category filtering visibly distinct from page navigation.
- Include PT / EN toggle in both navigation patterns; use the same shared language state.
- Preserve monochrome/retro typography but establish a hierarchy for hero, section titles, project titles, body text, badges.
- Avoid occluding content with mobile bottom bar; ensure adequate focus/touch targets and no horizontal scrolling.
  Phase 5 — Accessibility and performance
- Viewport-aware background video playback (pause offscreen), poster frames, suitable preload, compressed assets and reduced-motion fallback.
- Cards usable via keyboard and touch, not only hover. Maintain meaningful accessible names and visible focus indicators. Offer touch preview while preserving ability to follow live-demo links.
- Check color contrast, semantic headings, forms/links, language controls and translations. Performance scores are goals, not guaranteed facts.
- Test production build, existing lint/typecheck/tests, several viewport sizes and at least a few slow/mobile conditions.
  Phase 6 — Recruiter readiness, content quality and SEO
- Align homepage, portfolio, GitHub, LinkedIn, and CV around junior backend/full-stack work. Keep Python/RAG secondary and accurate.
- Feature working GitHub repository links with clear READMEs; identify any missing documentation as separate action items. Do not edit external GitHub repositories without permission and tools.
- Verify correct CV and working download. Add localized metadata, Open Graph, sitemap and canonical/hreflang where applicable.
- Validate all internal/external URLs, contact methods, and project descriptions; do not claim deployment or availability without verification.
- Ensure a recruiter can identify role → see featured work → inspect demo/source → view/download CV → contact the developer.
  Sequencing and task boundaries
  The bilingual toggle is a cross-cutting requirement: plan the localization architecture first, then integrate it while implementing phases 1–4, and validate fully in phases 5–6. Do not bolt it on as inconsistent strings at the end. Do not combine all phases in one giant unreviewable edit.
  Agent workflow / definition of done

1. Read existing AGENTS.md and this file; inspect framework, routes, CSS, project data, videos, and current scripts. Existing repository instructions prevail for implementation details unless they conflict with these explicit product requirements.
2. Audit verified present behavior vs requested work. Identify potential regressions and existing links that need confirmation.
3. Propose file-level changes and execute one milestone at a time; preserve reusable components, use the existing package manager, and avoid speculative refactoring.
4. After each milestone run supported lint/build/typecheck/tests; check both languages, keyboard/mobile interactions, and video hover/click behavior.
5. Record changes, unresolved questions, screenshots if actually captured, and tests performed. Never claim a browser test that was not run.
   Explicit exclusions

- Do not work on Lain 2.0 (separate AI/3D app on hold).
- Do not replace video cards with static cards or remove hover-to-preview interactions.
- Do not revert to a white/pastel theme.
- Do not invent résumé details, metrics, testimonials, or working demo URLs.
- Do not deploy to production or make destructive changes without explicit approval.
