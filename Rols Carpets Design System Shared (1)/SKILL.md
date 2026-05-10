---
name: rols-carpets-design
description: Use this skill to generate well-branded interfaces and assets for Rols Carpets, a Spanish manufacturer of handwoven natural-fiber rugs. Suitable for production work or throwaway prototypes, mocks, decks, social, and print collateral. Contains the official brand colors, typography, voice rules, logos, photography, and a marketing-website UI kit.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files. Key reference points:

- **`README.md`** — full Visual Foundations + Content Fundamentals + Iconography. Read first.
- **`colors_and_type.css`** — design tokens. Import this in any HTML you generate.
- **`assets/`** — logos (black + white) and product photography from the brand manual.
- **`ui_kits/website/`** — a working marketing-site recreation (React + JSX). Lift components from here when building new pages.
- **`preview/`** — small specimen cards showing tokens in use.

## Working rules

When generating visual artifacts (slides, mocks, throwaway prototypes):
- **Copy assets out** of `assets/` into your output folder; do not reference this skill's paths from production output.
- **Always import `colors_and_type.css`** so tokens are available.
- **CTAs are always lowercase** — this is non-negotiable per the brand manual.
- **No emoji, no pure black, no gradients, no decorative SVG.**
- **League Spartan** for display/headlines, **Montserrat** for everything else (both Google Fonts).
- Keep imagery editorial — full-bleed, warm, lived-in. The product is the protagonist.

If working on production code, read `colors_and_type.css` carefully and lift the variables verbatim. Photography from this skill is reference-only — request the live photo library from the brand team.

## When invoked without guidance

Ask the user what they want to build (web page, deck, social, print piece, app screen), confirm scope, then act as an expert designer who outputs HTML artifacts or production code, depending on the need. Default to HTML mockups unless they say otherwise.
