# StratCanvas Design Guidelines

## Personality
Dark, technical, precise. Trader-grade credibility — no playful SaaS vibes. Every element earns its place.

---

## Color

| Token | Hex | Use |
|---|---|---|
| `strat-bg` | `#0a0d12` | Page background |
| `strat-bg2` | `#0f1319` | Inputs, ticker bar |
| `strat-bg3` | `#151b24` | Cards, panels |
| `strat-surface` | `#1a2230` | Raised surfaces |
| `strat-text` | `#e8edf5` | Primary text |
| `strat-muted` | `#7a8899` | Secondary text, labels |
| `strat-accent` | `#00e5a0` | Primary accent — CTAs, highlights, active states |
| `strat-accent2` | `#00aaff` | Secondary accent — data, charts |
| `strat-accent3` | `#ff6b35` | Tertiary accent — warnings, energy |
| `strat-gold` | `#f4c842` | Risk / caution signals |

**Rules**
- `strat-accent` is the one CTA color. Don't use `accent2/3` for buttons.
- Borders: `border-white/[0.07]` default, `border-white/[0.13]` on interactive elements.
- Glow: `shadow-[0_0_12px_#00e5a0]` on the logo dot only. Use sparingly.

---

## Typography

| Role | Class | Weight |
|---|---|---|
| Display / h1 | `font-serif font-bold` | 700 |
| Section h2 | `font-serif font-bold` | 700 |
| Body | `font-sans font-light` | 300 |
| UI labels | `font-sans font-medium` | 500 |
| Buttons | `font-sans font-semibold` | 600 |
| Eyebrows / badges | `font-mono uppercase tracking-[0.1em]` | 400–500 |
| Code / tickers | `font-mono` | 400 |

**Fonts:** Outfit (display + body) · DM Mono (labels, badges, tickers)

**Scale:** `clamp(2rem, 4vw, 3rem)` for section headings · `clamp(2.6rem, 6vw, 5.5rem)` for hero h1

**Italic:** Used on h1/h2 for tonal contrast — accent color for hero, `strat-muted` for subheadings.

---

## Spacing

- Section vertical padding: `py-24`
- Section max-width: `max-w-[1100px] mx-auto px-6 sm:px-8`
- Card internal padding: `p-7` or `p-8`
- Component gap: `gap-px` (grid divider pattern) or `gap-4 / gap-6`

---

## Components

**Buttons**
- Primary: `bg-strat-accent text-strat-bg rounded-lg px-7 py-3.5 font-semibold hover:opacity-90`
- Ghost: `border border-white/[0.13] text-strat-text rounded-lg hover:border-strat-accent hover:text-strat-accent`
- Always include `focus-visible:ring-2 focus-visible:ring-strat-accent focus-visible:ring-offset-2 focus-visible:ring-offset-strat-bg`

**Cards**
- Default: `rounded-2xl border border-white/[0.13] bg-strat-bg3 p-7`
- Featured: add `border-strat-accent` + `shadow-[0_0_0_1px_rgba(0,229,160,0.18),0_20px_60px_-30px_rgba(0,229,160,0.4)]`
- Grid divider: `gap-px bg-white/[0.07] overflow-hidden rounded-2xl`; children use `bg-strat-bg`

**Section eyebrow**
```
font-mono text-[0.72rem] uppercase tracking-[0.1em] text-strat-accent
before:inline-block before:h-px before:w-5 before:bg-strat-accent
```

**Badges / pills**
```
rounded-full border border-strat-accent/20 bg-strat-accent/10
px-3.5 py-1.5 font-mono text-[0.72rem] uppercase tracking-[0.06em] text-strat-accent
```

**Inputs**
```
rounded-lg border border-white/[0.13] bg-strat-bg2 px-4 py-3
text-sm text-strat-text placeholder:text-strat-muted
hover:border-white/25 focus:border-strat-accent/60 focus:ring-2 ring-strat-accent/40
```

---

## Iconography
SVG only — no emojis. 24×24 viewBox, `strokeWidth={1.7}`, `strokeLinecap="round"`, `strokeLinejoin="round"`.  
Size in use: `size-4` (inline), `size-5` (feature icons), `size-3.5` (button icons).

---

## Backgrounds & Depth
- Fixed grid overlay: `rgba(0,229,160,0.03)` at `48px × 48px` — always present, never prominent.
- Glow orbs: `blur-[100px] opacity-[0.08]` — accent top-right, accent2 bottom-left.
- Gradient panels (CTAs): `from-strat-accent/12 via-strat-bg3 to-strat-bg3` with local glow orbs inside.

---

## Accessibility
- Every interactive element: `focus-visible:ring-2 focus-visible:ring-strat-accent`
- Decorative elements: `aria-hidden`
- Skip link: `.skip-link` (offscreen, reveals on focus)
- Respect `prefers-reduced-motion` — all animations declared in globals.css are suppressed
