# Changelog

All notable changes to the Rols Carpets design system.
Format roughly follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [1.0.0] — 2026-05-10

Initial release. Built from the *Manual de Marca Rols Carpets* + the Brand Voice v1.0 documents (with anexos Email v1.3 and Instagram v1.1).

### Added
- `README.md` — Visual Foundations, Content Fundamentals, Iconography.
- `SKILL.md` — Agent skill entrypoint (works with Claude Code and compatible agents).
- `colors_and_type.css` — design tokens (colors, typography, spacing, radii, shadows, motion).
- `fonts/` — self-hosted League Spartan + Montserrat (variable fonts, latin subset).
- `assets/` — logos (black + white) and 3 product photographs from the manual.
- `brand_voice/` — Brand Voice v1.0 + anexos Email v1.3 + Instagram v1.1 + `_CONTEXTO_ROLS.md`.
- `preview/` — 16 specimen cards (colors, type, spacing, radii, shadows, components, brand).
- `ui_kits/website/` — marketing site recreation in React + JSX (Navbar, Hero, CollectionGrid, StorySection, InspiraSection, Newsletter, Footer).

### Open questions (flagged for brand-team review)
- **Extended palette is derived.** The manual specifies only 4 colors. The `sand-50…500`, `tan-100…400`, `ink-100…900`, and `mist-50…200` ramps are harmonious extrapolations and need approval.
- **No semantic states defined** (success / error / warning / info). Placeholders only.
- **Iconography is a substitution.** Recommending Lucide (1.25px stroke). Not in the source manual.
- **Logo is bitmap PNG only.** Vector (SVG/AI) version recommended.
- **Photography library limited to 3 images** from the manual PDF.
- **No motion / animation guidance** in the source manual — current rules are inferred from brand tone.

## Surfaces still to build
- E-commerce: PDP, cart drawer, account flows, mobile nav.
- Decks and slide templates.
- Instagram / social post templates.
- Email templates (commercial castellano + international).
- Rols Pro professional area.
