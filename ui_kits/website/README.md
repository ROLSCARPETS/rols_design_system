# Website UI Kit — Rols Carpets

Marketing site recreation in React + JSX. Demonstrates the visual foundations from the brand manual applied at full scale: full-bleed editorial hero, three-up collection grid, sand-tinted story section, restrained newsletter, and a graphite footer.

## Structure

```
index.html              ← entry; wires all components
site.css                ← layout container + resets
Navbar.jsx              ← sticky nav, fades to translucent on scroll
Hero.jsx                ← full-bleed image hero with overlaid headline
CollectionGrid.jsx      ← 3-up product/collection feature
StorySection.jsx        ← side-by-side image + text on sand background
Footer.jsx              ← Newsletter + Footer (exported separately)
```

## Notes

- All components export themselves to `window.*` so each `<script type="text/babel">` block sees them globally.
- Styles use CSS variables from `colors_and_type.css` (loaded by `index.html`).
- CTAs are always lowercase, per the brand manual.
- Images come from `assets/` extracted from the brand manual PDF.

## Open

- Replace photos with the full Rols photo library when available.
- Add: PDP (product detail page), cart drawer, account flows, mobile nav.
- Iconography is currently inline arrows; if more icons are needed, wire Lucide.
