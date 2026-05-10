# Rols Carpets — Design System

A design system for **Rols Carpets**, a Spanish manufacturer of handwoven natural-fiber rugs and outdoor textiles, based on their official brand manual (*Manual de Marca Rols Carpets*).

> Use this folder as a single source of truth when designing for Rols across web, e-commerce, decks, print collateral, and social.

---

## About Rols

Rols designs and manufactures premium woven rugs — many in natural fibers (jute, sisal, recycled PET) — for interior and outdoor use. The visual identity is built around three pillars:

1. **Mediterranean warmth** — sun-bleached neutrals, sandstone, terracotta accents in product photography.
2. **Quiet craft** — minimalist typography, generous whitespace, restrained graphic elements. The product does the talking.
3. **Lived-in lifestyle** — photography always shows rugs *in context* (poolside, terrace, kitchen) with people, food, and natural light.

The brand voice is calm, confident, lowercase. It does not shout; it invites.

---

## Sources

- `uploads/manual-marca-rols.pdf` — official brand manual (single page, in Spanish)
- `uploads/logo_rols.png` / `uploads/logo_rols_blanco.jpg` — primary logo (black) and inverted (white)
- `brand_voice/` — **Brand Voice v1.0 + anexos Email v1.3 + Instagram v1.1** (oficial, abril 2026)
- Product photography extracted from the manual is in `assets/`

If you have additional materials (full website, photo library, e-commerce brand kit, social style guide), drop them in `uploads/` and re-run.

---

## What's in this folder

```
README.md                      ← you are here
SKILL.md                       ← Agent Skills entrypoint (works in Claude Code)
colors_and_type.css            ← all design tokens (colors, type, spacing, radii, shadows)

assets/                        ← logos + product photography
  logo-rols-black.png
  logo-rols-white.jpg
  product-lemons.png
  product-textures.png
  product-poolside.png

preview/                       ← cards rendered in the Design System tab
  *.html

ui_kits/
  website/                     ← marketing website kit (homepage, PDP, etc.)
    index.html
    *.jsx

reference/                     ← raw extracted images (do not ship)
```

See [Visual Foundations](#visual-foundations) and [Content Fundamentals](#content-fundamentals) below before designing anything.

---

## Visual Foundations

### Colors

The brand manual specifies four core colors. Everything else is derived to keep the palette quiet and warm.

| Token            | Hex       | Use |
|------------------|-----------|-----|
| `--rols-sand`    | `#D7CDC5` | warm beige — primary brand surface, soft section backgrounds |
| `--rols-white`   | `#FFFFFF` | clean white — main page background, generous canvas |
| `--rols-tan`     | `#D5B38C` | sandstone / dorado — accent, button hovers, highlight bands |
| `--rols-graphite`| `#4D4D4D` | body copy, headlines (NOT pure black — softer ink) |

**Rules:**
- Never use pure black (`#000`). Always `#4D4D4D` or `#2A2A2A` for ink.
- Sand and tan can coexist — they are siblings. Both should *only* be used against white or graphite, not each other unless the contrast is intentional and the surface is large.
- Imagery carries the saturated color (sea blue, coral, lemon yellow). The UI itself stays in the four-color palette.
- No semantic green/red/blue for success/error states is defined in the manual — when needed, derive understated versions (e.g. muted forest, muted brick) and **flag for review**.

### Typography

| Family | Use | Weights |
|--------|-----|---------|
| **League Spartan** | Display, headlines, large titles, the logo's tonal cousin | 300, 400, 500, 600, 700 |
| **Montserrat**     | Body, subtitles, CTAs (always lowercase), labels, microcopy | 300, 400, 500, 600, 700 |

Both are on Google Fonts (already imported in `colors_and_type.css`).

**Rules from the manual:**
- League Spartan for **encabezados y títulos** (headers and titles).
- Montserrat for **subtítulos y textos** (subtitles and body) — and CTAs in **lowercase only**.
- The logo wordmark itself is custom (mixed case `roLs` with elongated L) — *do not recreate in type*. Always use the supplied PNG.

### Spacing

8px base grid with a 4px half-step. Generous vertical rhythm — Rols breathes.

| Token | Value | Typical use |
|-------|-------|-------------|
| `--space-1` | 4px | icon gaps, tight inline spacing |
| `--space-2` | 8px | inside small components |
| `--space-3` | 12px | label-to-input |
| `--space-4` | 16px | tight card padding |
| `--space-5` | 24px | comfortable card padding |
| `--space-6` | 32px | section internal spacing |
| `--space-7` | 48px | between content blocks |
| `--space-8` | 64px | section-to-section (mobile) |
| `--space-9` | 96px | section-to-section (desktop) |
| `--space-10`| 128px | hero / major break |

### Radii

Rols uses **generously rounded** shapes: pill CTAs and softly-curved imagery. This gives the site warmth and approachability while the typography stays crisp.

- `--radius-none` 0 — full-bleed dividers
- `--radius-sm` 4px — inputs, tags
- `--radius-md` 8px — small cards
- `--radius-lg` 14px — **default for product imagery, image cards** (~14–16px)
- `--radius-xl` 20px — large hero / feature images
- `--radius-pill` 999px — **default for ALL primary CTAs**

### Form fields

- **Inputs and selects:** rectangular with soft rounded corners (`--radius-md`, 8px). Height **44px**. Border `1px solid var(--rols-mist-200)` (`#DDDDDD`); on focus, border darkens to graphite (`#4D4D4D`). White background.
- **Label** sits **above** the field, 13px Montserrat 500, graphite. Optional unit in parentheses uses `--color-fg-muted` (`#7A7A7A`) and weight 400 — `Ancho <span style="color:#7A7A7A">(cm)</span>`.
- **Helper text** sits **below** the field, 12px, `--color-fg-muted`. Used for ranges, validation hints — `Min: 50 — Max: 300`.
- **Selects** carry a custom chevron icon (right 14px), 12×8 SVG, graphite stroke.
- Field gap inside a stacked form: **18px**. Two-up grid uses 12px column gap.
- No pill form fields — pill is reserved for CTAs.

### Buttons

- **Primary CTA:** pill (`border-radius: 999px`), `--rols-tan` background (`#D5B38C`), graphite text, **semibold (600)** in **regular Title Case** ("Descubre cómo trabajamos"). On hover: background → `--rols-mist-100` (`#ECECEC`) — switches from warm tan to cool gray, matching the Rols live web behaviour.
- **Secondary:** pill outline, transparent → graphite fill on hover.
- **Inline / tertiary link:** lowercase, no pill — used for understated text links inside copy. The lowercase rule from the manual applies to *inline links*, not pill buttons.
- Padding: `14px 28px` for default size.
- Never use squared/sharp-cornered CTAs.

### Shadows

Warm-tinted, very soft. Shadows imply paper and woven fiber, not glass.

```
--shadow-xs:  0 1px 2px rgba(77, 77, 77, 0.06)
--shadow-sm:  0 2px 8px rgba(77, 77, 77, 0.06)
--shadow-md:  0 8px 24px rgba(77, 77, 77, 0.08)
--shadow-lg:  0 20px 48px rgba(77, 77, 77, 0.12)
```

Avoid blue-tinted or deep gray shadows. Keep them low-opacity.

### Backgrounds & section separation

Rols uses **two distinct families of section backgrounds** — warm and cool — depending on the editorial intent:

- **White (`#FFFFFF`)** — default page background.
- **Sand 50 (`#FAF8F6`)** — soft warm tint for editorial breathing room.
- **Sand (`#D7CDC5`)** — *highlight* sections (story, about, testimonial) where you want warmth.
- **Mist 50 (`#F5F5F5`)** — **secondary sections / separators**. Cool light gray used to break the rhythm between editorial blocks (e.g. the B Corp / "Expertly Designed, Consciously Crafted" block on the live site). Use this when sand would feel too warm or when the section is informational rather than emotional.
- **Mist 100 (`#ECECEC`)** — slightly stronger separator, dividers on cool sections.
- **Graphite (`#4D4D4D`)** — footer, dark inverted blocks.

Rule of thumb: **alternate warm and cool**. Don't stack two sand sections back-to-back. Use mist between them.

### Photography rules

- **The rug is always visible and central** — it's the protagonist of every image. Crop to keep the weave, the texture, the pattern, in frame.
- **Never crop a person's head.** If a person is in the frame, frame them respectfully — full head visible, or a clear part-figure (hands, legs, feet) that doesn't look amputated. No half-faces, no chopped foreheads.
- Prefer wide editorial shots where the rug fills 50%+ of the frame, with people present but not centered.
- Use `object-position: center 70%` (or similar) when applying `object-fit: cover` to push the focal point toward the rug rather than cropping the upper subject.
- Always shot in natural light, warm tones. Lifestyle context (home, terrace, poolside, kitchen) preferred over studio.

### Motion

Slow, intentional, never bouncy.
- Default duration `--dur-base` (280ms) with `--ease-out` (`cubic-bezier(0.22, 1, 0.36, 1)`).
- Page transitions: simple fades, no slide-ins.
- Hover: opacity drop to 0.7, or border-color shift, or color crossfade. **No transforms** on hover (no scale, no lift) — too playful for the brand.
- Image reveals: gentle fade-in over 500ms is fine, paired with subtle blur-out → blur-in.

### Hover & press states

- **Buttons:** background fades from `--rols-graphite` → `--rols-ink-900` (or tan → tan-400). Text stays put.
- **Links:** underline appears on hover (`text-decoration-thickness: 1px`, `text-underline-offset: 4px`). No color change.
- **Cards:** border darkens from `--color-border` → `--color-border-strong`. No translation, no shadow growth on the marketing site.
- **Press:** opacity drops to 0.85. No shrink/scale.

### Borders & dividers

- Default border: `1px solid var(--color-border)` (`--rols-sand-200`).
- Hairlines for dividers: `1px solid var(--color-divider)`.
- Cards use borders OR shadows, **rarely both**. Editorial > skeuomorphic.

### Layout & grids

- 12-column grid on desktop, 1280px max content width, with generous gutters (32–48px).
- Asymmetric editorial layouts encouraged — image left, text right with extra whitespace, then mirror.
- Center-aligned headlines for hero/section starters; left-aligned body copy.

### Transparency & blur

Avoid. The brand is solid, material, woven — not glassy. The only acceptable use is a navbar that fades to translucent white on scroll, with `backdrop-filter: blur(12px)`.

---

## Content Fundamentals

> **Documento oficial:** ver `brand_voice/` — Brand Voice v1.0 + anexos de Email (v1.3) e Instagram (v1.1). Lo que sigue es un resumen operativo; cuando haya conflicto, manda el documento oficial.

### Esencia

> *Los pies en el suelo. La mente en el cielo.*

- **Posicionamiento:** True Singular Makers — fabricamos de principio a fin, sin intermediarios.
- **Territorio:** *Control creates Magic.*
- **Arquetipo:** Sabio (con toques de Creador).
- **Empresa:** familiar, 4ª generación, Crevillent (Alicante), desde 1917, B Corp certificada (87,7).

### La regla de oro

> **Correcta pero no pomposa. Educada pero no fría. Sincera pero no directa. Simpática pero no cómica.**

### Personalidad (5 rasgos)

Minuciosos (datos concretos, no hipérbole) · Adaptables (nunca «imposible») · Elegantes (calmados, sin pomposidad) · Compañeros («acompañar», «escuchar») · Sostenibles (con cifras, sin greenwashing).

### Tuteo y tono

- **Tuteo siempre**, en todos los canales.
- Tono por canal:
  - **Web** — editorial, claro, orgullo de fábrica.
  - **Email comercial** — cercano y consultivo. Asesoría, no venta.
  - **Instagram** — inspiracional editorial; bilingüe ES/EN.
  - **LinkedIn** — casos de éxito, hitos institucionales.
  - **Atención al cliente** — empático y resolutivo (reconocer → entender → resolver).
  - **Hospitality** — más técnico (certificaciones, plazos, normativa).

### Palabras prohibidas

`imposible` · `no se puede` · `problema` — explícitamente prohibidas por la plataforma de marca.

### Casing & CTAs

- **Headlines:** Title Case o sentence case. Nunca ALL CAPS para titulares.
- **Eyebrows / overlines:** UPPERCASE con tracking ancho (0.18em).
- **CTAs primarios** (pill, fondo tan): **Title Case** — «Ver todos los proyectos», «Pide tus muestras».
- **CTAs inline / texto enlazado:** lowercase — «ver colección →», «descubrir más».
- **Producto:** Title Case, a veces con código de colección (e.g. «Calma · 200×300»).

### Datos que se pueden citar con confianza

- B Corp Score **87,7** desde dic 2023.
- **67 %** de alfombras con fibra naturalmente sostenible o plástico reciclado.
- **−30 %** huella de carbono 2025 vs. 2019 (meta neutralidad **2028**).
- **86 %** fabricación in-house (meta 100 % en 2028).
- Muestras **15×15 cm en 24 h**.
- Pitch comercial **3 semanas**; tránsito Europa **4–10 días**.

### Vocabulario

- **Sí:** tejer · telares · fábrica · empresa familiar · 4ª generación · desde 1917 · sin intermediarios · a medida · acompañar · escuchar · muestras · B Corp · trazabilidad · kilómetro cero · Rols Pro.
- **No:** lo más barato · líderes del mercado · revolucionario · diminutivos comerciales · «pasión por lo que hacemos» · «¡compra ya!» · samples (salvo internacional) · look & feel.

### Punctuation

- Em-dashes para pausas editoriales.
- Sin signos de exclamación.
- Reglas tipográficas españolas (`¿…?`, `¡…!`).

### Emoji

- Web/email castellano: **no**.
- Email internacional (inglés): permitido `😊` y similares (ver anexo Email v1.3).
- Instagram: con criterio. Recomendados: `🌏 🇪🇸 ✨ 🤍 🛒`.

### Buyer personas

🎨 **Interioristas** (inbound, prescriben) · 🛍️ **Tiendas de Decoración** (outbound, margen 50 %) · 🏨 **Hospitality** (outbound, técnico). Detalle en `brand_voice/_CONTEXTO_ROLS.md`.

### Ejemplo on-voice

> *Hay alfombras que se ponen. Y hay alfombras que se viven.*
>
> *La colección Calma nace de los suelos vividos del Mediterráneo, tejida en nuestra fábrica de Crevillent con algodón 100 % reciclado. Cada metro lleva 240 botellas recuperadas.*
>
> *Pide tus muestras gratuitas en 24 h.*

---

## Iconography

The Rols brand manual does **not** define an icon system. The brand operates with a near-iconless aesthetic: navigation, CTAs, and metadata rely on type and whitespace, not pictograms.

**When icons are unavoidable** (cart, account, search, social), use:

- **[Lucide](https://lucide.dev)** at **1.25px stroke**, color `var(--color-fg)`, sized 20px or 24px.
- Why Lucide: thin-stroke, neutral, no fills, no playful curves. It matches the typographic restraint of the brand.

CDN:
```html
<script src="https://unpkg.com/lucide@latest"></script>
<script>lucide.createIcons();</script>
```

This is a **substitution** — the manual does not specify Lucide. **Flag this for the brand team** if rolling out beyond prototypes.

**Never use:**
- Filled / duotone / colorful icon sets (Heroicons solid, Phosphor fill, etc.)
- Emoji as icons
- Hand-drawn or sketchy icon styles
- 3D icons or glyphs with shadows

---

## Surfaces (UI kits)

| Surface | Path | Status |
|---------|------|--------|
| Marketing website | `ui_kits/website/index.html` | initial draft |

Additional surfaces (e-commerce PDP, decks, social templates) — **request from user** before building.

---

## Caveats / open questions

These are flagged for brand-team review:

1. **Extended palette is derived.** The manual specifies only 4 colors. The `sand-50…sand-500`, `tan-100…400`, and `ink-100…900` ramps are harmonious extrapolations and need approval.
2. **No semantic states defined** (success/error/warning/info). Placeholder values are not yet provided — design these together with the team.
3. **Iconography is a substitution** (Lucide, see above).
4. **Logo wordmark is bitmap only.** A vector (SVG/AI) version would be ideal for crisp scaling. Currently using the supplied PNG.
5. **No motion, animation, or interaction guidance** in the source manual — the rules in *Visual Foundations → Motion* are inferred from brand tone.
6. **Photography is limited to 3 images** from the manual. A larger library would strengthen the system.

> **Fonts are self-hosted.** League Spartan and Montserrat are bundled in `fonts/` (latin subset, weights 300–700). No external network call needed at runtime.

---

## Index

- `colors_and_type.css` — design tokens (import in any HTML)
- `SKILL.md` — agent skill definition
- `assets/` — logos + product photography
- `preview/` — cards visible in the Design System tab
- `ui_kits/website/` — marketing site recreation

