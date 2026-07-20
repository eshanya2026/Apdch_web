---
name: coffee-tech-design
description: Design system skill for coffee-tech. Activate when building UI components, pages, or any visual elements. Provides exact color tokens, typography scale, spacing grid, component patterns, and craft rules. Read references/DESIGN.md before writing any CSS or JSX. Includes ultra-mode visual journey: read references/ANIMATIONS.md, references/LAYOUT.md, references/COMPONENTS.md, and references/INTERACTIONS.md for full motion and layout details.
---

# coffee-tech Design System

You are building UI for **coffee-tech**. Light-themed, cool palette, sans-serif typography (Inter), compact density on a 4px grid.

## Visual Reference

**IMPORTANT**: Study ALL screenshots below before writing any UI. Match colors, typography, spacing, layout, and motion exactly as shown.

### Homepage

![coffee-tech Homepage](screenshots/homepage.png)

### Scroll Journey (Cinematic Visual States)

> These screenshots capture the website at different scroll depths. The design changes dramatically as you scroll — each frame shows a different cinematic state. Replicate these exact visual transitions.

#### 0% — Hero / Above the fold

![Scroll 0%](screens/scroll/scroll-000.png)

#### 17% — Mid-page at 17% scroll

![Scroll 17%](screens/scroll/scroll-017.png)

#### 33% — Mid-page at 33% scroll

![Scroll 33%](screens/scroll/scroll-033.png)

#### 50% — Mid-page at 50% scroll

![Scroll 50%](screens/scroll/scroll-050.png)

#### 67% — Mid-page at 67% scroll

![Scroll 67%](screens/scroll/scroll-067.png)

#### 83% — Mid-page at 83% scroll

![Scroll 83%](screens/scroll/scroll-083.png)

#### 100% — Footer / End of page

![Scroll 100%](screens/scroll/scroll-100.png)

> Read `references/DESIGN.md` for full token details. Read `references/ANIMATIONS.md` for motion specs. Read `references/LAYOUT.md` for layout structure. Read `references/COMPONENTS.md` for component patterns.

## Ultra Reference Files

This package includes extended documentation. **Read these files before implementing:**

| File | Contents |
|------|----------|
| `references/DESIGN.md` | Full design system tokens, colors, typography, spacing |
| `references/VISUAL_GUIDE.md` | **START HERE** — Master visual guide with all screenshots embedded |
| `references/ANIMATIONS.md` | CSS keyframes, scroll triggers, motion library stack, video specs |
| `references/LAYOUT.md` | Flex/grid containers, page structure, spacing relationships |
| `references/COMPONENTS.md` | DOM component patterns, HTML structure, class fingerprints |
| `references/INTERACTIONS.md` | Hover/focus states with before/after style diffs |
| `screens/scroll/` | 7 scroll journey screenshots showing cinematic states |

## Design Philosophy

- **Layered depth** — use shadow tokens to create a sense of physical layering. Each elevation level has a specific shadow.
- **Gradient accents** — gradients are used thoughtfully for emphasis, not decoration.
- **Type pairing** — Inter for body/UI text, Google Sans for headings/display. Never introduce a third typeface.
- **compact density** — 4px base grid. Every dimension is a multiple of 4.
- **cool palette** — the color temperature runs cool, matching the sans-serif typography.
- **Restrained accent** — `#0082f3` is the only pop of color. Used exclusively for CTAs, links, focus rings, and active states.
- **Subtle motion** — transitions smooth state changes. Keep durations under 300ms, use ease-out curves.

## Color System

### Core Palette

| Role | Token | Hex | Use |
|------|-------|-----|-----|
| Background | `--background` | `#ffffff` | Page/app background |
| Text Primary | `--text-primary` | `#0d0e13` | Headings, body text |
| Text Muted | `--text-muted` | `#6f6f73` | Captions, placeholders |
| Accent | `--accent` | `#0082f3` | CTAs, links, focus rings |
| Border | `--border` | `#67625e` | Dividers, card borders |

### Status Colors

| Status | Hex | Use |
|--------|-----|-----|
| Warning | `#f3ede3` | Caution states, pending items |
| Danger | `#c8603d` | Errors, destructive actions |

### Extended Palette

- `#dddddd`
- `#2f2f2f`
- `#222222`
- `#758696`
- `#615048`
- `#3898ec`
- `#c8c8c8`
- `#000000` — Deep background layer or shadow color

### CSS Variable Tokens

```css
--primary-font: "Inter",sans-serif;
--border-radius: 0.868vw;
--tags-border-radius: 100vw;
--tag-border-width: 1px;
--primary-font: "Google Sans",sans-serif;
--border-radius: 2vw;
--tags-border-radius: 100vw;
--tag-border-width: 1px;
--primary-font: "Inter",sans-serif;
--border-radius: 0.868vw;
--tags-border-radius: 100vw;
--tag-border-width: 1px;
--primary-font: "Google Sans",sans-serif;
--border-radius: 2vw;
--tags-border-radius: 100vw;
--tag-border-width: 1px;
--primary-font: "Inter",sans-serif;
--border-radius: 0.868vw;
--tags-border-radius: 100vw;
--tag-border-width: 1px;
```

## Typography

### Font Stack

- **Inter** — Heading 1, Heading 2, Heading 3
- **Google Sans** — Body, Caption

### Font Sources

```css
@font-face {
  font-family: "Google Sans";
  src: url("fonts/GoogleSans-Bold.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "Google Sans";
  src: url("fonts/GoogleSans-Regular.ttf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "Inter";
  src: url("fonts/Inter-Bold.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "Inter";
  src: url("fonts/Inter-Regular.ttf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "webflow-icons";
  src: url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBiUAAAC8AAAAYGNtYXDpP+a4AAABHAAAAFxnYXNwAAAAEAAAAXgAAAAIZ2x5ZmhS2XEAAAGAAAADHGhlYWQTFw3HAAAEnAAAADZoaGVhCXYFgQAABNQAAAAkaG10eCe4A1oAAAT4AAAAMGxvY2EDtALGAAAFKAAAABptYXhwABAAPgAABUQAAAAgbmFtZSoCsMsAAAVkAAABznBvc3QAAwAAAAAHNAAAACAAAwP4AZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpAwPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAQAAAAAwACAACAAQAAQAg5gPpA//9//8AAAAAACDmAOkA//3//wAB/+MaBBcIAAMAAQAAAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEBIAAAAyADgAAFAAAJAQcJARcDIP5AQAGA/oBAAcABwED+gP6AQAABAOAAAALgA4AABQAAEwEXCQEH4AHAQP6AAYBAAcABwED+gP6AQAAAAwDAAOADQALAAA8AHwAvAAABISIGHQEUFjMhMjY9ATQmByEiBh0BFBYzITI2PQE0JgchIgYdARQWMyEyNj0BNCYDIP3ADRMTDQJADRMTDf3ADRMTDQJADRMTDf3ADRMTDQJADRMTAsATDSANExMNIA0TwBMNIA0TEw0gDRPAEw0gDRMTDSANEwAAAAABAJ0AtAOBApUABQAACQIHCQEDJP7r/upcAXEBcgKU/usBFVz+fAGEAAAAAAL//f+9BAMDwwAEAAkAABcBJwEXAwE3AQdpA5ps/GZsbAOabPxmbEMDmmz8ZmwDmvxmbAOabAAAAgAA/8AEAAPAAB0AOwAABSInLgEnJjU0Nz4BNzYzMTIXHgEXFhUUBw4BBwYjNTI3PgE3NjU0Jy4BJyYjMSIHDgEHBhUUFx4BFxYzAgBqXV6LKCgoKIteXWpqXV6LKCgoKIteXWpVSktvICEhIG9LSlVVSktvICEhIG9LSlVAKCiLXl1qal1eiygoKCiLXl1qal1eiygoZiEgb0tKVVVKS28gISEgb0tKVVVKS28gIQABAAABwAIAA8AAEgAAEzQ3PgE3NjMxFSIHDgEHBhUxIwAoKIteXWpVSktvICFmAcBqXV6LKChmISBvS0pVAAAAAgAA/8AFtgPAADIAOgAAARYXHgEXFhUUBw4BBwYHIxUhIicuAScmNTQ3PgE3NjMxOAExNDc+ATc2MzIXHgEXFhcVATMJATMVMzUEjD83NlAXFxYXTjU1PQL8kz01Nk8XFxcXTzY1PSIjd1BQWlJJSXInJw3+mdv+2/7c25MCUQYcHFg5OUA/ODlXHBwIAhcXTzY1PTw1Nk8XF1tQUHcjIhwcYUNDTgL+3QFt/pOTkwABAAAAAQAAmM7nP18PPPUACwQAAAAAANciZKUAAAAA1yJkpf/9/70FtgPDAAAACAACAAAAAAAAAAEAAAPA/8AAAAW3//3//QW2AAEAAAAAAAAAAAAAAAAAAAAMBAAAAAAAAAAAAAAAAgAAAAQAASAEAADgBAAAwAQAAJ0EAP/9BAAAAAQAAAAFtwAAAAAAAAAKABQAHgAyAEYAjACiAL4BFgE2AY4AAAABAAAADAA8AAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEADQAAAAEAAAAAAAIABwCWAAEAAAAAAAMADQBIAAEAAAAAAAQADQCrAAEAAAAAAAUACwAnAAEAAAAAAAYADQBvAAEAAAAAAAoAGgDSAAMAAQQJAAEAGgANAAMAAQQJAAIADgCdAAMAAQQJAAMAGgBVAAMAAQQJAAQAGgC4AAMAAQQJAAUAFgAyAAMAAQQJAAYAGgB8AAMAAQQJAAoANADsd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQByd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==") format("truetype");
  font-weight: 400;
}
```

### Type Scale

| Role | Family | Size | Weight |
|------|--------|------|--------|
| Heading 1 | Inter | 40px | 700 |
| Heading 2 | Inter | 38px | 700 |
| Heading 3 | Inter | 32px | 700 |
| Body | Google Sans | 14px | 400 |
| Caption | Google Sans | 18px | 400 |

### Typography Rules

- Body/UI: **Inter**, Headings: **Google Sans** — these are the only display fonts
- Max 3-4 font sizes per screen
- Headings: weight 600-700, body: weight 400
- Use color and opacity for text hierarchy, not additional font sizes
- Line height: 1.5 for body, 1.2 for headings

## Spacing & Layout

### Base Grid: 4px

Every dimension (margin, padding, gap, width, height) must be a multiple of **4px**.

### Spacing Scale

`2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 30` px

### Spacing as Meaning

| Spacing | Use |
|---------|-----|
| 4-8px | Tight: related items (icon + label, avatar + name) |
| 12-16px | Medium: between groups within a section |
| 24-32px | Wide: between distinct sections |
| 48px+ | Vast: major page section breaks |

### Border Radius

Scale: `.05vw, .25vw, .3vw, .5rem, .5vw, .8vw, 2px, 2vw, 3px, 3.6px, 4px, 5px, 9px, 12.4992px, 50vw, 100%, 100vw, 999px, unset`
Default: `3.6px`

### Container

Max-width: `991px`, centered with auto margins.

### Breakpoints

| Name | Value |
|------|-------|
| xs | 479px |
| md | 650px |
| md | 767px |
| md | 768px |
| lg | 769px |
| lg | 991px |

Mobile-first: design for small screens, layer on responsive overrides.

## Component Patterns

### Card

```css
.card {
  background: #ffffff;
  border: 1px solid #67625e;
  border-radius: 3.6px;
  padding: 16px;
  box-shadow: .4vw 0 0 0 var(--creme-light),0 .4vw 0 0 var(--creme-light),.4vw .4vw 0 0 var(--creme-light);
}
```

```html
<div class="card">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</div>
```

### Button

```css
/* Primary */
.btn-primary {
  background: #0082f3;
  color: #0d0e13;
  border-radius: 3.6px;
  padding: 8px 16px;
  font-weight: 500;
  transition: opacity 150ms ease;
}
.btn-primary:hover { opacity: 0.9; }

/* Ghost */
.btn-ghost {
  background: transparent;
  border: 1px solid #67625e;
  color: #0d0e13;
  border-radius: 3.6px;
  padding: 8px 16px;
}
```

```html
<button class="btn-primary">Get Started</button>
<button class="btn-ghost">Learn More</button>
```

### Input

```css
.input {
  background: #ffffff;
  border: 1px solid #67625e;
  border-radius: 3.6px;
  padding: 8px 12px;
  color: #0d0e13;
  font-size: 14px;
}
.input:focus { border-color: #0082f3; outline: none; }
```

```html
<input class="input" type="text" placeholder="Search..." />
```

### Badge / Chip

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 500;
  background: #ffffff;
  color: #6f6f73;
}
```

```html
<span class="badge">New</span>
<span class="badge">Beta</span>
```

### Modal / Dialog

```css
.modal-backdrop { background: rgba(0, 0, 0, 0.6); }
.modal {
  background: #ffffff;
  border: 1px solid #67625e;
  border-radius: unset;
  padding: 22px;
  max-width: 480px;
  width: 90vw;
  box-shadow: 0 0 10px rgba(255,255,255,.5);
}
```

```html
<div class="modal-backdrop">
  <div class="modal">
    <h2>Dialog Title</h2>
    <p>Dialog content.</p>
    <button class="btn-primary">Confirm</button>
    <button class="btn-ghost">Cancel</button>
  </div>
</div>
```

### Table

```css
.table { width: 100%; border-collapse: collapse; }
.table th {
  text-align: left;
  padding: 8px 12px;
  font-weight: 500;
  font-size: 12px;
  color: #6f6f73;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid #67625e;
}
.table td {
  padding: 12px;
  border-bottom: 1px solid #67625e;
}
```

```html
<table class="table">
  <thead><tr><th>Name</th><th>Status</th><th>Date</th></tr></thead>
  <tbody>
    <tr><td>Item One</td><td>Active</td><td>Jan 1</td></tr>
    <tr><td>Item Two</td><td>Pending</td><td>Jan 2</td></tr>
  </tbody>
</table>
```

### Navigation

```css
.nav {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-bottom: 1px solid #67625e;
}
.nav-link {
  color: #6f6f73;
  padding: 8px 12px;
  border-radius: 3.6px;
  transition: color 150ms;
}
.nav-link:hover { color: #0d0e13; }
.nav-link.active { color: #0082f3; }
```

```html
<nav class="nav">
  <a href="/" class="nav-link active">Home</a>
  <a href="/about" class="nav-link">About</a>
  <a href="/pricing" class="nav-link">Pricing</a>
  <button class="btn-primary" style="margin-left: auto">Get Started</button>
</nav>
```

### Extracted Components

These components were found in the codebase:

**Button** (`html`)

**Modal** (`html`)

## Page Structure

The following page sections were detected:

- **Navigation** — Top navigation bar (4 items)
- **Hero** — Hero/banner section with headline and CTAs
- **Features** — Feature/benefit cards grid (1 items)
- **Faq** — FAQ/accordion section
- **Footer** — Page footer with links and info (20 items)
- **Cta** — Call-to-action section
- **Testimonials** — Testimonials/reviews section
- **Stats** — Statistics/metrics display

When building pages, follow this section order and structure.

## Animation & Motion

This project uses **subtle motion**. Transitions smooth state changes without calling attention.

### CSS Animations

- `text-link-fadein`
- `modelScaleIn`
- `heroGlowScaleIn`
- `spin`

### Motion Tokens

- **Duration scale:** `0ms`, `.8s`, `100ms`, `150ms`, `200ms`, `300ms`, `350ms`, `400ms`, `500ms`, `600ms`, `650ms`, `700ms`, `1000ms`, `2000ms`
- **Easing functions:** `ease`, `linear`, `ease-out`, `cubic-bezier(.63,0,0,.99)`, `cubic-bezier(.35,.01,0,.99)`, `cubic-bezier(.46,0,0,.99)`, `cubic-bezier(.36,.15,0,.99)`, `cubic-bezier(.36,0,.15,.99)`, `cubic-bezier(.34,1.56,.64,1)`
- **Animated properties:** `opacity`

### Motion Guidelines

- **Duration:** Use values from the duration scale above. Short (0ms) for micro-interactions, long (2000ms) for page transitions
- **Easing:** Use `ease` as the default easing curve
- **Direction:** Elements enter from bottom/right, exit to top/left
- **Reduced motion:** Always respect `prefers-reduced-motion` — disable animations when set

## Depth & Elevation

### Shadow Tokens

- Subtle: `0 0 0 2px #fff`
- Subtle: `rgba(200, 96, 61, 0.4) 0px 0px 0px 0px`
- Raised (cards, buttons): `.4vw 0 0 0 var(--creme-light),0 .4vw 0 0 var(--creme-light),.4vw .4vw 0 0 var(--creme-light)`
- Raised (cards, buttons): `.4vw 0 0 0 var(--orange),0 .4vw 0 0 var(--orange),.4vw .4vw 0 0 var(--orange)`
- Raised (cards, buttons): `0 2px 8px rgba(0,0,0,.12)`
- Raised (cards, buttons): `0 0 0 0 rgba(200,96,61,.4)`

### Z-Index Scale

`0, 1, 2, 3, 4, 10, 99, 900, 999, 1000, 2000, 9997, 9998, 9999, 10001, 9999999, 10000000, 2147482000, 2147483647, 99999999999999`

Use these exact values — never invent z-index values.

## Anti-Patterns (Never Do)

- **No blur effects** — no backdrop-blur, no filter: blur()
- **No zebra striping** — tables and lists use borders for separation
- **No invented colors** — every hex value must come from the palette above
- **No arbitrary spacing** — every dimension is a multiple of 4px
- **No extra fonts** — only Inter and Google Sans are allowed
- **No arbitrary border-radius** — use the scale: .5rem, 2px, 3px, 3.6px, 4px, 5px, 9px, 12.4992px, 999px
- **No opacity for disabled states** — use muted colors instead

## Workflow

1. **Read** `references/DESIGN.md` before writing any UI code
2. **Pick colors** from the Color System section — never invent new ones
3. **Set typography** — Inter, Google Sans only, using the type scale
4. **Build layout** on the 4px grid — check every margin, padding, gap
5. **Match components** to patterns above before creating new ones
6. **Apply elevation** — use shadow tokens
7. **Validate** — every value traces back to a design token. No magic numbers.

## Brand Spec

- **Favicon:** `https://cdn.prod.website-files.com/6978cf5d8e122e23793db0cd/6978cf5d8e122e23793db140_favicon%20(6).png`
- **Site URL:** `https://www.coffee-tech.com/`
- **Brand color:** `#0082f3`
- **Brand typeface:** Inter

## Quick Reference

```
Background:     #ffffff
Surface:        (not extracted)
Text:           #0d0e13 / #6f6f73
Accent:         #0082f3
Border:         #67625e
Font:           Inter
Spacing:        4px grid
Radius:         3.6px
Components:     8 detected
```

## When to Trigger

Activate this skill when:
- Creating new components, pages, or visual elements for coffee-tech
- Writing CSS, Tailwind classes, styled-components, or inline styles
- Building page layouts, templates, or responsive designs
- Reviewing UI code for design consistency
- The user mentions "coffee-tech" design, style, UI, or theme
- Generating mockups, wireframes, or visual prototypes

---

# Full Reference Files

> Every output file is embedded below. Claude has full design system context from /skills alone.

## Design System Tokens (DESIGN.md)

# coffee-tech DESIGN.md

> Auto-generated design system — reverse-engineered via static analysis by skillui.
> Frameworks: None detected
> Colors: 20 · Fonts: 2 · Components: 8
> Icon library: not detected · State: not detected
> Primary theme: light · Dark mode toggle: no · Motion: subtle

## Visual Reference

**Match this design exactly** — study colors, fonts, spacing, and component shapes before writing any UI code.

![coffee-tech Homepage](../screenshots/homepage.png)

---

## 1. Visual Theme & Atmosphere

This is a **light-themed** interface with a cool, approachable feel. The light background emphasizes content clarity. Typography pairs **Google Sans** for display/headings with **Inter** for body text, creating clear visual hierarchy through type contrast. Spacing follows a **4px base grid** (compact density), with scale: 2, 4, 6, 8, 10, 12, 14, 16px. The accent color **#0082f3** anchors interactive elements (buttons, links, focus rings). Motion is subtle — smooth transitions (150-300ms) ease state changes without drawing attention.

---

## 2. Color Palette & Roles

| Token | Hex | Role | Use |
|---|---|---|---|
| background | `#ffffff` | background | Page background, darkest surface |
| text-primary | `#0d0e13` | text-primary | Headings and body text |
| text-muted | `#6f6f73` | text-muted | Captions, placeholders, secondary info |
| border | `#67625e` | border | Dividers, card borders, outlines |
| accent | `#0082f3` | accent | CTAs, links, focus rings, active states |
| danger | `#c8603d` | danger | Error states, destructive actions |
| warning | `#f3ede3` | warning | Warning states, caution indicators |
| info | `#3898ec` | info | Informational highlights |
| unknown | `#dddddd` | unknown | Palette color |
| unknown | `#2f2f2f` | unknown | Palette color |
| unknown | `#222222` | unknown | Palette color |
| unknown | `#758696` | unknown | Palette color |
| unknown | `#615048` | unknown | Palette color |
| unknown | `#c8c8c8` | unknown | Palette color |
| unknown | `#000000` | unknown | Palette color |
| unknown | `#999999` | unknown | Palette color |
| unknown | `#5d6c7b` | unknown | Palette color |
| unknown | `#17171a` | unknown | Palette color |
| unknown | `#ffdede` | unknown | Palette color |
| unknown | `#a85032` | unknown | Palette color |

### CSS Variable Tokens

```css
--primary-font: "Inter",sans-serif;
--border-radius: 0.868vw;
--tags-border-radius: 100vw;
--tag-border-width: 1px;
--primary-font: "Google Sans",sans-serif;
--border-radius: 2vw;
--tags-border-radius: 100vw;
--tag-border-width: 1px;
--primary-font: "Inter",sans-serif;
--border-radius: 0.868vw;
--tags-border-radius: 100vw;
--tag-border-width: 1px;
--primary-font: "Google Sans",sans-serif;
--border-radius: 2vw;
--tags-border-radius: 100vw;
--tag-border-width: 1px;
--primary-font: "Inter",sans-serif;
--border-radius: 0.868vw;
--tags-border-radius: 100vw;
--tag-border-width: 1px;
```


---

## 3. Typography Rules

**Font Stack:**
- **Inter** — Heading 1, Heading 2, Heading 3
- **Google Sans** — Body, Caption

**Font Sources:**

```css
@font-face {
  font-family: "Google Sans";
  src: url("fonts/GoogleSans-Bold.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "Google Sans";
  src: url("fonts/GoogleSans-Regular.ttf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "Inter";
  src: url("fonts/Inter-Bold.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "Inter";
  src: url("fonts/Inter-Regular.ttf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "webflow-icons";
  src: url("data:application/x-font-ttf;charset=utf-8;base64,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") format("truetype");
  font-weight: 400;
}
```

| Role | Font | Size | Weight |
|---|---|---|---|
| Heading 1 | Inter | 40px | 700 |
| Heading 2 | Inter | 38px | 700 |
| Heading 3 | Inter | 32px | 700 |
| Body | Google Sans | 14px | 400 |
| Caption | Google Sans | 18px | 400 |

**Typographic Rules:**
- Limit to 2 font families max per screen
- Use **Inter** for body/UI text, **Google Sans** for display/headings
- Maintain consistent hierarchy: no more than 3-4 font sizes per screen
- Headings use bold (600-700), body uses regular (400)
- Line height: 1.5 for body text, 1.2 for headings
- Use color and opacity for secondary hierarchy, not additional font sizes


---

## 4. Component Stylings

### Layout (1)

**Footer** — `html`

### Navigation (1)

**Navigation** — `html`

### Data Display (2)

**Badge** — `html`

**List** — `html`

### Data Input (2)

**Button** — `html`
- Animation: 

**Input** — `html`
- State: :focus, :placeholder

### Overlay (1)

**Modal** — `html`

### Media (1)

**Image** — `html`



---

## 5. Layout Principles

- **Base spacing unit:** 4px
- **Spacing scale:** 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 30
- **Border radius:** .05vw, .25vw, .3vw, .5rem, .5vw, .8vw, 2px, 2vw, 3px, 3.6px, 4px, 5px, 9px, 12.4992px, 50vw, 100%, 100vw, 999px, unset
- **Max content width:** 991px

**Spacing as Meaning:**
| Spacing | Use |
|---|---|
| 4-8px | Tight: related items within a group |
| 12-16px | Medium: between groups |
| 24-32px | Wide: between sections |
| 48px+ | Vast: major section breaks |


---

## 6. Depth & Elevation

### Flat — subtle depth hints

- `0 0 0 2px #fff`
- `rgba(200, 96, 61, 0.4) 0px 0px 0px 0px`

### Raised — cards, buttons, interactive elements

- `.4vw 0 0 0 var(--creme-light),0 .4vw 0 0 var(--creme-light),.4vw .4vw 0 0 var(--creme-light)`
- `.4vw 0 0 0 var(--orange),0 .4vw 0 0 var(--orange),.4vw .4vw 0 0 var(--orange)`
- `0 2px 8px rgba(0,0,0,.12)`

### Floating — dropdowns, popovers, modals

- `0 0 10px rgba(255,255,255,.5)`

### Overlay — full-screen overlays, top-level dialogs

- `0 10px 28px rgba(0,0,0,.4)`

### Z-Index Scale

`0, 1, 2, 3, 4, 10, 99, 900, 999, 1000, 2000, 9997, 9998, 9999, 10001, 9999999, 10000000, 2147482000, 2147483647, 99999999999999`



---

## 7. Animation & Motion

This project uses **subtle motion**. Transitions smooth state changes without demanding attention.

### CSS Animations

- `@keyframes text-link-fadein`
- `@keyframes modelScaleIn`
- `@keyframes heroGlowScaleIn`
- `@keyframes spin`

### Animated Components

- **Button**: 

### Motion Guidelines

- Duration: 150-300ms for micro-interactions, 300-500ms for page transitions
- Easing: `ease-out` for enters, `ease-in` for exits
- Always respect `prefers-reduced-motion`


---

## 8. Do's and Don'ts

### Do's

- Use `#0082f3` for interactive elements (buttons, links, focus rings)
- Use `#ffffff` as the primary page background
- Pair **Inter** (body) with **Google Sans** (display) — these are the only allowed fonts
- Follow the **4px** spacing grid for all margins, padding, and gaps
- Use the defined shadow tokens for elevation — see Section 6
- Use border-radius from the scale: .05vw, .25vw, .3vw, .5rem, .5vw
- Reuse existing components from Section 4 before creating new ones

### Don'ts

- Don't introduce colors outside this palette — extend the design tokens first
- Don't introduce additional font families beyond Inter and Google Sans
- Don't use arbitrary spacing values — stick to multiples of 4px
- Don't create custom box-shadow values outside the system tokens
- Don't use arbitrary border-radius values — pick from the defined scale
- Don't duplicate component patterns — check Section 4 first
- Don't use backdrop-blur or blur effects

### Anti-Patterns (detected from codebase)

- No blur or backdrop-blur effects
- No zebra striping on tables/lists


---

## 9. Responsive Behavior

| Name | Value | Source |
|---|---|---|
| xs | 479px | css |
| md | 650px | css |
| md | 767px | css |
| md | 768px | css |
| lg | 769px | css |
| lg | 991px | css |

**Approach:** Use `@media (min-width: ...)` queries matching the breakpoints above.


---

## 10. Agent Prompt Guide

Use these as starting points when building new UI:

### Build a Card

```
Background: #ffffff
Border: 1px solid #67625e
Radius: 3.6px
Padding: 16px
Font: Inter
Use shadow tokens from Section 6.
```

### Build a Button

```
Primary: bg #0082f3, text white
Ghost: bg transparent, border #67625e
Padding: 8px 16px
Radius: 3.6px
Hover: opacity 0.9 or lighter shade
Focus: ring with #0082f3
```

### Build a Page Layout

```
Background: #ffffff
Max-width: 991px, centered
Grid: 4px base
Responsive: mobile-first, breakpoints from Section 9
```

### Build a Stats Card

```
Surface: #ffffff
Label: #6f6f73 (muted, 12px, uppercase)
Value: #0d0e13 (primary, 24-32px, bold)
Status: use success/warning/danger from Section 2
```

### Build a Form

```
Input bg: #ffffff
Input border: 1px solid #67625e
Focus: border-color #0082f3
Label: #6f6f73 12px
Spacing: 16px between fields
Radius: 3.6px
```

### General Component

```
1. Read DESIGN.md Sections 2-6 for tokens
2. Colors: only from palette
3. Font: Inter, type scale from Section 3
4. Spacing: 4px grid
5. Components: match patterns from Section 4
6. Elevation: shadow tokens
```

## Visual Guide — Screenshots (VISUAL_GUIDE.md)

# coffee-tech — Visual Guide

> Master visual reference. Study every screenshot carefully before implementing any UI.
> Match colors, layout, typography, spacing, and motion states exactly.

## Scroll Journey

The page has cinematic scroll animations. Each screenshot below shows the exact visual state at that scroll depth.
**Replicate these transitions precisely** — the design changes dramatically as you scroll.

### Hero — Above the fold

*Scroll position: 0px of 8374px total*

![Hero — Above the fold](../screens/scroll/scroll-000.png)

### 17% scroll depth

*Scroll position: 1271px of 8374px total*

![17% scroll depth](../screens/scroll/scroll-017.png)

### 33% scroll depth

*Scroll position: 2466px of 8374px total*

![33% scroll depth](../screens/scroll/scroll-033.png)

### 50% scroll depth

*Scroll position: 3737px of 8374px total*

![50% scroll depth](../screens/scroll/scroll-050.png)

### 67% scroll depth

*Scroll position: 5008px of 8374px total*

![67% scroll depth](../screens/scroll/scroll-067.png)

### 83% scroll depth

*Scroll position: 6203px of 8374px total*

![83% scroll depth](../screens/scroll/scroll-083.png)

### Footer — End of page

*Scroll position: 7474px of 8374px total*

![Footer — End of page](../screens/scroll/scroll-100.png)

## Full Page Screenshots

### CoffeeTech® - Advanced Commercial Coffee Roasters

*URL: `https://www.coffee-tech.com/`*

![CoffeeTech® - Advanced Commercial Coffee Roasters](../screens/pages/home.png)

### CoffeeTech® - About coffee roasting equipment manufactures

*URL: `https://www.coffee-tech.com/about`*

![CoffeeTech® - About coffee roasting equipment manufactures](../screens/pages/about.png)

### CoffeeTech® - Coffee Technology and Innovation

*URL: `https://www.coffee-tech.com/technology`*

![CoffeeTech® - Coffee Technology and Innovation](../screens/pages/technology.png)

### CoffeeTech® - Efficiency Coffee Roasters Designed for Sustainability

*URL: `https://www.coffee-tech.com/efficiency`*

![CoffeeTech® - Efficiency Coffee Roasters Designed for Sustainability](../screens/pages/efficiency.png)

### CoffeeTech® - Sustainability

*URL: `https://www.coffee-tech.com/sustainability`*

![CoffeeTech® - Sustainability](../screens/pages/sustainability.png)

## Section Screenshots

Clipped sections showing individual components in context.

### Section 1 — `section`

*1440×1200px*

![Section 1](../screens/sections/home-section-1.png)

### Section 1 — `section`

*1440×1200px*

![Section 1](../screens/sections/about-section-1.png)

### Section 1 — `section`

*1440×1200px*

![Section 1](../screens/sections/technology-section-1.png)

### Section 6 — `[class*="hero"]`

*1296×1200px*

![Section 6](../screens/sections/technology-section-6.png)

### Section 1 — `section`

*1440×1200px*

![Section 1](../screens/sections/efficiency-section-1.png)

### Section 6 — `[class*="hero"]`

*1296×1200px*

![Section 6](../screens/sections/efficiency-section-6.png)

### Section 7 — `[class*="hero"]`

*1296×793px*

![Section 7](../screens/sections/efficiency-section-7.png)

### Section 1 — `section`

*1440×1200px*

![Section 1](../screens/sections/sustainability-section-1.png)

### Section 6 — `[class*="hero"]`

*1296×1200px*

![Section 6](../screens/sections/sustainability-section-6.png)

### Section 7 — `[class*="hero"]`

*1296×720px*

![Section 7](../screens/sections/sustainability-section-7.png)

## Animations & Motion (ANIMATIONS.md)

# Animation Reference

> Cinematic motion design extracted from live DOM. Follow these specs exactly to recreate the experience.

## Motion Technology Stack

Pure CSS animations — no external animation libraries detected.

## Scroll Journey

The page is **8,374px** tall. Each frame below shows what the user sees at that scroll depth.

> **Use these screenshots to understand WHAT animates, WHEN it animates, and HOW it moves.**

### 0% — Top / Hero
Scroll position: 0px

![Scroll 0%](../screens/scroll/scroll-000.png)

### 17% — Opening Section
Scroll position: 1,271px

![Scroll 17%](../screens/scroll/scroll-017.png)

### 33% — First Feature Section
Scroll position: 2,466px

![Scroll 33%](../screens/scroll/scroll-033.png)

### 50% — Mid-Page
Scroll position: 3,737px

![Scroll 50%](../screens/scroll/scroll-050.png)

### 67% — Lower Content
Scroll position: 5,008px

![Scroll 67%](../screens/scroll/scroll-067.png)

### 83% — Near Footer
Scroll position: 6,203px

![Scroll 83%](../screens/scroll/scroll-083.png)

### 100% — Bottom / Footer
Scroll position: 7,474px

![Scroll 100%](../screens/scroll/scroll-100.png)

## CSS Keyframes (1 extracted)

### `@keyframes spin`

Duration: `0.8s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.w-lightbox-spinner`

```css
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

> Transform/motion animation

## Motion Tokens (CSS Variables)

### Duration Tokens

```css
--motion-duration: 0.6s;
--header-theme-transition-duration: 0.5s;
--slider-duration: 0.5;
--short-duration: 0.3s;
--overlay-duration: 0.8s;
--catalog-animation-duration: 0.8;
```

### Other Tokens

```css
--cta-motion-easing: cubic-bezier(.60,.50,0,1);
--underline-motion: fadein 2.5s cubic-bezier(.60,0,0,1);
```

## Global Transition Declarations

These `transition` values were extracted from CSS rules across the site:

```css
transition: inherit;
transition: unset;
transition: background-color 0.1s, color 0.1s;
transition: 0.3s;
```

## How to Recreate This Motion Design

### Step 2 — Scroll-Reveal Pattern

Elements that animate into view follow this pattern:

```css
/* Initial hidden state */
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Step 3 — Key Motion Principles

- **Duration scale:** `0.6s` · `0.5s` · `0.5` · `0.3s` · `0.8s` · `0.8` · `0.1s` — use these values, never invent new durations
- **Always add** `@media (prefers-reduced-motion: reduce) { * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } }`

### Step 4 — Scroll Journey Reference

Match what happens at each scroll position:

- **0%** (`0px`) → `screens/scroll/scroll-000.png`
- **17%** (`1271px`) → `screens/scroll/scroll-017.png`
- **33%** (`2466px`) → `screens/scroll/scroll-033.png`
- **50%** (`3737px`) → `screens/scroll/scroll-050.png`
- **67%** (`5008px`) → `screens/scroll/scroll-067.png`
- **83%** (`6203px`) → `screens/scroll/scroll-083.png`
- **100%** (`7474px`) → `screens/scroll/scroll-100.png`

## Layout & Grid (LAYOUT.md)

# Layout Reference

> Auto-extracted from live DOM. Use this to understand how the site is structured spatially.

## Spacing System

**Base grid:** 4px

**Scale:** `2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 30, 36, 40, 42` px

| Spacing | Semantic Use |
|---------|-------------|
| 4px | Tight — within a component |
| 8px | Medium — between sibling items |
| 16px | Wide — between sections |
| 32px | Vast — major section breaks |

## Flex Layouts

| Element | Direction | Justify | Align | Gap | Children |
|---------|-----------|---------|-------|-----|----------|
| `section#model-page.hero.dark-theme` | column | center | center | — | 1 |
| `div.grid` | row | space-between | center | normal 41.616px | 5 |
| `div.container` | column | — | — | 41.616px | 3 |
| `div.hero-content` | column | — | center | — | 3 |
| `div.features-overlay-arrows` | row | — | — | 4.32px | 2 |
| `div.boxes-grid.w-dyn-items` | row | space-between | — | 41.616px | 3 |
| `div.boxes-grid.w-dyn-items` | row | space-between | — | 41.616px | 14 |
| `div.arrows` | row | — | — | 4.32px | 2 |
| `div.marquee-collection` | row | — | — | — | 1 |
| `div.flex` | row | — | center | 14.4px | 2 |

## Grid Layouts

| Element | Template Columns | Gap | Children |
|---------|-----------------|-----|----------|
| `div.grid` | `70.7344px 70.75px 70.75px 70.75px 70.7344px 70.734` | normal 41.616px | 2 |
| `div.grid.one-five` | `70.7344px 70.7344px 70.7344px 70.7344px 70.7344px ` | 66.672px 41.616px | 3 |
| `div.grid.one-five` | `70.7344px 70.7344px 70.7344px 70.7344px 70.7344px ` | 66.672px 41.616px | 2 |
| `div.grid.four-five` | `70.7344px 70.7344px 70.7344px 70.7344px 70.7344px ` | 0px 41.616px | 3 |
| `div.grid` | `70.7344px 70.7344px 70.7344px 70.7344px 70.7344px ` | normal 41.616px | 7 |
| `div.hero-3d` | `1440px` | — | 3 |
| `div.two-columns.w-dyn-items` | `407.812px 407.812px` | 41.616px | 4 |
| `div.testimonial-card` | `70.7344px 70.7344px 70.7344px 70.7344px 70.7344px ` | normal 41.616px | 4 |

## Structural Containers

### `<header>` (`header.header`)

```
display:          block
padding:          48.96px 0px
children:         1
```

### `<footer>` (`footer.footer`)

```
display:          block
padding:          66.672px 0px
children:         2
```

### `<section>` (`section#model-page.hero.dark-theme`)

```
display:          flex
flex-direction:   column
justify-content:  center
align-items:      center
padding:          100.8px 0px
children:         1
```

### `<section>` (`section.about.light-theme`)

```
display:          block
padding:          144px 0px 100.8px
children:         1
```

### `<section>` (`section.light-theme`)

```
display:          block
padding:          100.8px 0px
children:         1
```

### `<section>` (`section.light-theme`)

```
display:          block
padding:          100.8px 0px
children:         1
```

### `<section>` (`section.light-theme`)

```
display:          block
padding:          100.8px 0px
children:         1
```

### `<section>` (`section.light-theme`)

```
display:          block
padding:          100.8px 0px
children:         1
```

### `<section>` (`section.light-theme`)

```
display:          block
padding:          100.8px 0px
children:         1
```

### `<section>` (`section.light-theme`)

```
display:          block
padding:          100.8px 0px
children:         1
```

### `<section>` (`section.light-theme`)

```
display:          block
padding:          100.8px 0px
children:         1
```

### `<section>` (`section.dark-theme`)

```
display:          block
padding:          100.8px 0px
children:         1
```

## Layout Rules

- **Container max-width:** `1296px` — always center with `margin: auto`
- Primary layout system: **Flexbox**
- Secondary layout system: **CSS Grid** (used for card grids and multi-column layouts)
- Every spacing value must be a multiple of **4px**
- Never use arbitrary margin/padding values outside the spacing scale

## Component Patterns (COMPONENTS.md)

# Component Reference

> Repeated DOM patterns detected by structural analysis. Each component appeared 3+ times.

## Detected Components

| Component | Category | Instances | Key Classes |
|-----------|----------|-----------|-------------|
| **W Dyn List** | unknown | 19× | `.w-dyn-list` |
| **Link Box** | unknown | 18× | `.link-box`, `.w-inline-block` |
| **Column** | card | 14× | `.column`, `.w-dyn-item` |
| **Light Theme** | unknown | 7× | `.light-theme` |
| **W Inline Block** | unknown | 5× | `.w-inline-block` |
| **Indicator** | unknown | 5× | `.indicator` |
| **W Dyn Item** | card | 4× | `.w-dyn-item` |
| **Column** | unknown | 4× | `.column` |
| **Product Image** | card | 4× | `.product-image` |
| **Product Name** | card | 4× | `.product-name` |
| **Product Tags** | card | 4× | `.product-tags`, `.w-dyn-items` |
| **Tag** | card | 4× | `.tag`, `.w-dyn-item` |
| **Column** | card | 3× | `.column`, `.w-dyn-item` |
| **Link Box** | unknown | 3× | `.link-box` |
| **Box Name** | unknown | 3× | `.box-name` |
| **Box Background** | unknown | 3× | `.box-background` |
| **Arrow Left** | unknown | 3× | `.arrow-left` |
| **Arrow Right** | unknown | 3× | `.arrow-right` |
| **Approach Image** | unknown | 3× | `.approach-image` |
| **Underline Link** | unknown | 3× | `.underline-link` |

## Cards

### Column

**Instances found:** 14

**CSS classes:** `.column` `.w-dyn-item`

**HTML structure:**

```html
<div role="listitem" class="column w-dyn-item"> <div class="blog-box"><a href="/blog/beyond-mass-why-eep-is-the-ultimate-metric-in-coffee-roasting" class="link-box w-inline-block"></a> <div class="blog-image img-block"><img src="https://cdn.prod.website-files.com/6978cf5d8e122e23793db0d1/6a4f84fa36776fb25958d596_6a4f7d8e32147338e1ed2700_eep.jpg" loading="lazy" alt="" sizes="(max-width: 767px) 87vw, 91vw" srcset="https://cdn.prod.website-files.com/6978cf5d8e122e23793db0d1/6a4f84fa36776fb25958d596_6a4f7d8e32147338e1ed2700_eep-p-500.jpg 500w, https://cdn.prod.website-files.com/6978cf5d8e122e23793
```

**Base styles (from design tokens):**

```css
.column {
  border: 1px solid #67625e;
  border-radius: 3.6px;
  padding: 8px;
}```

### W Dyn Item

**Instances found:** 4

**CSS classes:** `.w-dyn-item`

**HTML structure:**

```html
<div role="listitem" class="w-dyn-item"> <div class="column"><a href="/products/fz94-evo" class="link-box w-inline-block"></a> <div class="product-image"><img src="https://cdn.prod.website-files.com/6978cf5d8e122e23793db0d1/6980673191af575b5eeae6fa_fz94_white_3_0002_converted.avif" loading="lazy" alt="FZ94 Evo"></div> <div class="product-name" data-wg-notranslate=""><span>FZ94 Evo</span></div> <div class="w-dyn-list"> <div role="list" class="product-tags w-dyn-items"> <div role="listitem" class="tag w-dyn-item"><span>All</span></div> <div role="listitem" class="tag w-dyn-item"><span>Specialty 
```

**Base styles (from design tokens):**

```css
.w-dyn-item {
  border: 1px solid #67625e;
  border-radius: 3.6px;
  padding: 8px;
}```

### Product Image

**Instances found:** 4

**CSS classes:** `.product-image`

**HTML structure:**

```html
<div class="product-image"><img src="https://cdn.prod.website-files.com/6978cf5d8e122e23793db0d1/6980673191af575b5eeae6fa_fz94_white_3_0002_converted.avif" loading="lazy" alt="FZ94 Evo"></div>
```

**Base styles (from design tokens):**

```css
.product-image {
  border: 1px solid #67625e;
  border-radius: 3.6px;
  padding: 8px;
}```

### Product Name

**Instances found:** 4

**CSS classes:** `.product-name`

**HTML structure:**

```html
<div class="product-name" data-wg-notranslate=""><span>FZ94 Evo</span></div>
```

**Base styles (from design tokens):**

```css
.product-name {
  border: 1px solid #67625e;
  border-radius: 3.6px;
  padding: 8px;
}```

### Product Tags

**Instances found:** 4

**CSS classes:** `.product-tags` `.w-dyn-items`

**HTML structure:**

```html
<div role="list" class="product-tags w-dyn-items"> <div role="listitem" class="tag w-dyn-item"><span>All</span></div> <div role="listitem" class="tag w-dyn-item"><span>Specialty Roasters</span></div> </div>
```

**Base styles (from design tokens):**

```css
.product-tags {
  border: 1px solid #67625e;
  border-radius: 3.6px;
  padding: 8px;
}```

### Tag

**Instances found:** 4

**CSS classes:** `.tag` `.w-dyn-item`

**HTML structure:**

```html
<div role="listitem" class="tag w-dyn-item"><span>Specialty Roasters</span></div>
```

**Base styles (from design tokens):**

```css
.tag {
  border: 1px solid #67625e;
  border-radius: 3.6px;
  padding: 8px;
}```

### Column

**Instances found:** 3

**CSS classes:** `.column` `.w-dyn-item`

**HTML structure:**

```html
<div role="listitem" class="column w-dyn-item"><a href="#" class="link-box"></a> <div class="box-name"> <h4>Coffee</h4> <div class="arrow-icon"><img src="https://cdn.prod.website-files.com/6978cf5d8e122e23793db0cd/6978cf5d8e122e23793db0f3_arrow-white-1.svg" loading="lazy" alt=""></div> </div> <div class="box-background"><img src="https://cdn.prod.website-files.com/6978cf5d8e122e23793db0d1/697a71c569462a8a637a7662_image-test-1.avif" loading="lazy" alt=""></div> <div class="box-info"> <p id="features-overlay-description" class="paragraph">Experience the art of coffee roasting wi…</p> </div> </di
```

**Base styles (from design tokens):**

```css
.column {
  border: 1px solid #67625e;
  border-radius: 3.6px;
  padding: 8px;
}```

## Other Components

### W Dyn List

**Instances found:** 19

**CSS classes:** `.w-dyn-list`

**HTML structure:**

```html
<div class="w-dyn-list"> <div role="list" class="product-tags w-dyn-items"> <div role="listitem" class="tag w-dyn-item"><span>All</span></div> <div role="listitem" class="tag w-dyn-item"><span>Specialty Roasters</span></div> </div> </div>
```

**Base styles (from design tokens):**

```css
.w-dyn-list {
  padding: 4px;
}```

### Link Box

**Instances found:** 18

**CSS classes:** `.link-box` `.w-inline-block`

**HTML structure:**

```html
<a href="/products/fz94-evo" class="link-box w-inline-block"></a>
```

**Base styles (from design tokens):**

```css
.link-box {
  padding: 4px;
}```

### Light Theme

**Instances found:** 7

**CSS classes:** `.light-theme`

**HTML structure:**

```html
<section class="light-theme"> <div class="marquee-wrap" data-wg-notranslate=""> <div class="marquee-scroll"> <div class="marquee-collection"> <div class="big-type"> <div>Beyond your expectations</div> </div> </div> </div> </div> </section>
```

**Base styles (from design tokens):**

```css
.light-theme {
  padding: 4px;
}```

### W Inline Block

**Instances found:** 5

**CSS classes:** `.w-inline-block`

**HTML structure:**

```html
<a href="/catalog" class="w-inline-block"><button class="filled"><span class="catalog-icon"></span><span>Products</span></button></a>
```

**Base styles (from design tokens):**

```css
.w-inline-block {
  padding: 4px;
}```

### Indicator

**Instances found:** 5

**CSS classes:** `.indicator`

**HTML structure:**

```html
<div class="indicator"><span>Our Products</span></div>
```

**Base styles (from design tokens):**

```css
.indicator {
  padding: 4px;
}```

### Column

**Instances found:** 4

**CSS classes:** `.column`

**HTML structure:**

```html
<div class="column"><a href="/products/fz94-evo" class="link-box w-inline-block"></a> <div class="product-image"><img src="https://cdn.prod.website-files.com/6978cf5d8e122e23793db0d1/6980673191af575b5eeae6fa_fz94_white_3_0002_converted.avif" loading="lazy" alt="FZ94 Evo"></div> <div class="product-name" data-wg-notranslate=""><span>FZ94 Evo</span></div> <div class="w-dyn-list"> <div role="list" class="product-tags w-dyn-items"> <div role="listitem" class="tag w-dyn-item"><span>All</span></div> <div role="listitem" class="tag w-dyn-item"><span>Specialty Roasters</span></div> </div> </div> </div
```

**Base styles (from design tokens):**

```css
.column {
  padding: 4px;
}```

### Link Box

**Instances found:** 3

**CSS classes:** `.link-box`

**HTML structure:**

```html
<a href="#" class="link-box"></a>
```

**Base styles (from design tokens):**

```css
.link-box {
  padding: 4px;
}```

### Box Name

**Instances found:** 3

**CSS classes:** `.box-name`

**HTML structure:**

```html
<div class="box-name"> <h4>Coffee</h4> <div class="arrow-icon"><img src="https://cdn.prod.website-files.com/6978cf5d8e122e23793db0cd/6978cf5d8e122e23793db0f3_arrow-white-1.svg" loading="lazy" alt=""></div> </div>
```

**Base styles (from design tokens):**

```css
.box-name {
  padding: 4px;
}```

### Box Background

**Instances found:** 3

**CSS classes:** `.box-background`

**HTML structure:**

```html
<div class="box-background"><img src="https://cdn.prod.website-files.com/6978cf5d8e122e23793db0d1/697a71c569462a8a637a7662_image-test-1.avif" loading="lazy" alt=""></div>
```

**Base styles (from design tokens):**

```css
.box-background {
  padding: 4px;
}```

### Arrow Left

**Instances found:** 3

**CSS classes:** `.arrow-left`

**HTML structure:**

```html
<div id="features-overlay-prev" class="arrow-left"><img loading="lazy" src="https://cdn.prod.website-files.com/6978cf5d8e122e23793db0cd/6978cf5d8e122e23793db0e3_arrow-left.svg" alt=""></div>
```

**Base styles (from design tokens):**

```css
.arrow-left {
  padding: 4px;
}```

### Arrow Right

**Instances found:** 3

**CSS classes:** `.arrow-right`

**HTML structure:**

```html
<div id="features-overlay-next" class="arrow-right"><img loading="lazy" src="https://cdn.prod.website-files.com/6978cf5d8e122e23793db0cd/6978cf5d8e122e23793db0e0_arrow-right.svg" alt=""></div>
```

**Base styles (from design tokens):**

```css
.arrow-right {
  padding: 4px;
}```

### Approach Image

**Instances found:** 3

**CSS classes:** `.approach-image`

**HTML structure:**

```html
<img src="https://cdn.prod.website-files.com/6978cf5d8e122e23793db0cd/6989e95c74175cfce9044d9b_silon_dof_shots_0004_converted.avif" loading="lazy" alt="" class="approach-image">
```

**Base styles (from design tokens):**

```css
.approach-image {
  padding: 4px;
}```

### Underline Link

**Instances found:** 3

**CSS classes:** `.underline-link`

**HTML structure:**

```html
<div href="technology" data-image-index="0" class="underline-link"> <h3>Technology</h3><span class="arrow-icon"><img src="https://cdn.prod.website-files.com/6978cf5d8e122e23793db0cd/6978cf5d8e122e23793db0dd_arrow-black.svg" loading="lazy" alt=""></span> <div class="underline-indicator"></div> </div>
```

**Base styles (from design tokens):**

```css
.underline-link {
  padding: 4px;
}```

## Component Rules

- Match class names exactly from the patterns above
- Each component instance must be visually identical to others of its type
- Do not add extra wrappers or change the DOM structure
- Use `#67625e` for all dividers within components
- Use `#0082f3` for all interactive/active states

## Interactions & States (INTERACTIONS.md)

# Interaction Reference

> Micro-interactions extracted from live DOM. Recreate these exactly for authentic feel.

## Coverage

| Component Type | Count | States Captured |
|----------------|-------|----------------|
| Button | 3 | default, hover, focus |
| Link | 3 | default, hover, focus |

## Transition System

These transition declarations were extracted from interactive elements:

```css
transition: color 0.6s cubic-bezier(0.6, 0.5, 0, 1), border-color 0.6s cubic-bezier(0.6, 0.5, 0, 1);
transition: color 0.5s, border-color 0.5s;
transition: all;
transition: opacity 0.3s;
```

Apply these to all interactive elements. Never invent new durations or easings.

## Button Interactions

### Button 1 — `Products`

**States:**

- Default: `../screens/states/button-1-default.png`
- Hover: `../screens/states/button-1-hover.png`
- Focus: `../screens/states/button-1-focus.png`

**On hover:**

```css
/* color: rgb(251, 248, 243) → */ color: rgb(205, 110, 77);
/* outline: rgb(251, 248, 243) none 3px → */ outline: rgb(205, 110, 77) none 3px;
/* outline-color: rgb(251, 248, 243) → */ outline-color: rgb(205, 110, 77);
```

**On focus:**

```css
/* color: rgb(251, 248, 243) → */ color: rgb(251, 247, 242);
/* outline: rgb(251, 248, 243) none 3px → */ outline: rgb(251, 247, 242) none 3px;
/* outline-color: rgb(251, 248, 243) → */ outline-color: rgb(251, 247, 242);
```

**Transition:** `color 0.6s cubic-bezier(0.6, 0.5, 0, 1), border-color 0.6s cubic-bezier(0.6, 0.5, 0, 1)`

### Button 2 — `Contact Us`

**States:**

- Default: `../screens/states/button-2-default.png`
- Hover: `../screens/states/button-2-hover.png`
- Focus: `../screens/states/button-2-focus.png`

**On hover:**

```css
/* color: rgb(251, 248, 243) → */ color: rgb(40, 41, 45);
/* outline: rgb(251, 248, 243) none 3px → */ outline: rgb(40, 41, 45) none 3px;
/* outline-color: rgb(251, 248, 243) → */ outline-color: rgb(40, 41, 45);
```

**Transition:** `color 0.5s, border-color 0.5s`

### Button 3 — `button`

**States:**

- Default: `../screens/states/button-3-default.png`
- Hover: `../screens/states/button-3-hover.png`
- Focus: `../screens/states/button-3-focus.png`

**Transition:** `color 0.6s cubic-bezier(0.6, 0.5, 0, 1), border-color 0.6s cubic-bezier(0.6, 0.5, 0, 1)`

_No visible style changes detected for this element._

## Link Interactions

### Link 1 — `a`

**States:**

- Default: `../screens/states/link-1-default.png`
- Hover: `../screens/states/link-1-hover.png`
- Focus: `../screens/states/link-1-focus.png`

**On hover:**

```css
/* outline: rgb(243, 237, 227) none 3px → */ outline: rgb(243, 237, 227) none 0px;
```

**On focus:**

```css
/* outline: rgb(243, 237, 227) none 3px → */ outline: rgb(243, 237, 227) none 0px;
```

**Transition:** `all`

### Link 2 — `About`

**States:**

- Default: `../screens/states/link-2-default.png`
- Hover: `../screens/states/link-2-hover.png`
- Focus: `../screens/states/link-2-focus.png`

**On hover:**

```css
/* opacity: 1 → */ opacity: 0.6;
/* outline: rgb(243, 237, 227) none 3px → */ outline: rgb(243, 237, 227) none 0px;
```

**On focus:**

```css
/* outline: rgb(243, 237, 227) none 3px → */ outline: rgb(243, 237, 227) none 0px;
```

**Transition:** `opacity 0.3s`

### Link 3 — `Technology`

**States:**

- Default: `../screens/states/link-3-default.png`
- Hover: `../screens/states/link-3-hover.png`
- Focus: `../screens/states/link-3-focus.png`

**On hover:**

```css
/* opacity: 1 → */ opacity: 0.6;
/* outline: rgb(243, 237, 227) none 3px → */ outline: rgb(243, 237, 227) none 0px;
```

**On focus:**

```css
/* outline: rgb(243, 237, 227) none 3px → */ outline: rgb(243, 237, 227) none 0px;
```

**Transition:** `opacity 0.3s`

## Interaction Rules

- Accent color `#0082f3` is used for focus rings, active states, and hover highlights
- Hover effects use **opacity** changes, not color shifts
- Hover effects include **color transitions** — use the extracted values, not approximations
- Focus states use **outline** (not box-shadow) — always match the extracted focus ring
- Transition durations in use: `0.6s`, `0.5s`, `0.3s`
- Always respect `prefers-reduced-motion` — set all transitions to `0s` when enabled

## Design Tokens — JSON Files

### tokens/colors.json
```json
{
  "$schema": "https://design-tokens.github.io/community-group/format/",
  "core": {
    "text-primary": {
      "value": "#0d0e13",
      "role": "text-primary"
    },
    "text-muted": {
      "value": "#6f6f73",
      "role": "text-muted"
    },
    "background": {
      "value": "#ffffff",
      "role": "background"
    },
    "border": {
      "value": "#67625e",
      "role": "border"
    },
    "accent": {
      "value": "#0082f3",
      "role": "accent"
    }
  },
  "status": {
    "warning": {
      "value": "#f3ede3",
      "role": "warning"
    },
    "danger": {
      "value": "#c8603d",
      "role": "danger"
    }
  },
  "extended": {
    "color-dddddd": {
      "value": "#dddddd",
      "role": "unknown"
    },
    "color-2f2f2f": {
      "value": "#2f2f2f",
      "role": "unknown"
    },
    "color-222222": {
      "value": "#222222",
      "role": "unknown"
    },
    "color-758696": {
      "value": "#758696",
      "role": "unknown"
    },
    "color-615048": {
      "value": "#615048",
      "role": "unknown"
    },
    "color-3898ec": {
      "value": "#3898ec",
      "role": "info"
    },
    "color-c8c8c8": {
      "value": "#c8c8c8",
      "role": "unknown"
    },
    "color-000000": {
      "value": "#000000",
      "role": "unknown"
    },
    "color-999999": {
      "value": "#999999",
      "role": "unknown"
    },
    "color-5d6c7b": {
      "value": "#5d6c7b",
      "role": "unknown"
    },
    "color-17171a": {
      "value": "#17171a",
      "role": "unknown"
    },
    "color-ffdede": {
      "value": "#ffdede",
      "role": "unknown"
    },
    "color-a85032": {
      "value": "#a85032",
      "role": "unknown"
    }
  },
  "meta": {
    "theme": "light",
    "extracted": "2026-07-18"
  }
}
```

### tokens/spacing.json
```json
{
  "base": {
    "value": "4px",
    "description": "Grid unit — all spacing must be multiples of this"
  },
  "unit": "px",
  "scale": {
    "xs": {
      "value": "2px",
      "px": 2
    },
    "sm": {
      "value": "4px",
      "px": 4
    },
    "md": {
      "value": "6px",
      "px": 6
    },
    "lg": {
      "value": "8px",
      "px": 8
    },
    "xl": {
      "value": "10px",
      "px": 10
    },
    "2xl": {
      "value": "12px",
      "px": 12
    },
    "3xl": {
      "value": "14px",
      "px": 14
    },
    "4xl": {
      "value": "16px",
      "px": 16
    },
    "5xl": {
      "value": "18px",
      "px": 18
    },
    "6xl": {
      "value": "20px",
      "px": 20
    }
  },
  "multipliers": {
    "1x": {
      "value": "4px",
      "raw": 4
    },
    "2x": {
      "value": "8px",
      "raw": 8
    },
    "3x": {
      "value": "12px",
      "raw": 12
    },
    "4x": {
      "value": "16px",
      "raw": 16
    },
    "5x": {
      "value": "20px",
      "raw": 20
    },
    "6x": {
      "value": "24px",
      "raw": 24
    },
    "7x": {
      "value": "28px",
      "raw": 28
    },
    "8x": {
      "value": "32px",
      "raw": 32
    },
    "9x": {
      "value": "36px",
      "raw": 36
    },
    "10x": {
      "value": "40px",
      "raw": 40
    },
    "11x": {
      "value": "44px",
      "raw": 44
    },
    "12x": {
      "value": "48px",
      "raw": 48
    },
    "13x": {
      "value": "52px",
      "raw": 52
    },
    "14x": {
      "value": "56px",
      "raw": 56
    },
    "15x": {
      "value": "60px",
      "raw": 60
    },
    "16x": {
      "value": "64px",
      "raw": 64
    }
  },
  "meta": {
    "totalValues": 15,
    "min": 2,
    "max": 42
  }
}
```

### tokens/typography.json
```json
{
  "families": [
    "Inter",
    "Google Sans"
  ],
  "scale": {
    "heading-1": {
      "fontFamily": "Inter",
      "fontSize": "40px",
      "fontWeight": "700",
      "lineHeight": null,
      "source": "css"
    },
    "heading-2": {
      "fontFamily": "Inter",
      "fontSize": "38px",
      "fontWeight": "700",
      "lineHeight": null,
      "source": "css"
    },
    "heading-3": {
      "fontFamily": "Inter",
      "fontSize": "32px",
      "fontWeight": "700",
      "lineHeight": null,
      "source": "css"
    },
    "body": {
      "fontFamily": "Google Sans",
      "fontSize": "14px",
      "fontWeight": "400",
      "lineHeight": null,
      "source": "css"
    },
    "caption": {
      "fontFamily": "Google Sans",
      "fontSize": "18px",
      "fontWeight": "400",
      "lineHeight": null,
      "source": "css"
    }
  },
  "fontFaces": [
    {
      "family": "Google Sans",
      "src": "https://fonts.gstatic.com/s/googlesans/v69/4Ua_rENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RFD48TE63OOYKtrwEIKli.ttf",
      "format": "truetype",
      "weight": "400"
    },
    {
      "family": "Google Sans",
      "src": "https://fonts.gstatic.com/s/googlesans/v69/4Ua_rENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RFD48TE63OOYKtrw2IKli.ttf",
      "format": "truetype",
      "weight": "500"
    },
    {
      "family": "Google Sans",
      "src": "https://fonts.gstatic.com/s/googlesans/v69/4Ua_rENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RFD48TE63OOYKtrzaJ6li.ttf",
      "format": "truetype",
      "weight": "600"
    },
    {
      "family": "Inter",
      "src": "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfMZg.ttf",
      "format": "truetype",
      "weight": "400"
    },
    {
      "family": "Inter",
      "src": "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuI6fMZg.ttf",
      "format": "truetype",
      "weight": "500"
    },
    {
      "family": "Inter",
      "src": "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuGKYMZg.ttf",
      "format": "truetype",
      "weight": "600"
    },
    {
      "family": "webflow-icons",
      "src": "data:application/x-font-ttf;charset=utf-8;base64,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",
      "format": "truetype",
      "weight": "400"
    }
  ],
  "rules": {
    "maxSizesPerScreen": 4,
    "headingWeightRange": "600-700",
    "bodyWeight": 400,
    "lineHeightBody": 1.5,
    "lineHeightHeading": 1.2
  }
}
```

## Bundled Fonts (fonts/)

The following font files are bundled in the `fonts/` directory:

- `fonts/GoogleSans-Bold.ttf`
- `fonts/GoogleSans-Medium.ttf`
- `fonts/GoogleSans-Regular.ttf`
- `fonts/GoogleSans-SemiBold.ttf`
- `fonts/Inter-Black.ttf`
- `fonts/Inter-Bold.ttf`
- `fonts/Inter-ExtraBold.ttf`
- `fonts/Inter-ExtraLight.ttf`
- `fonts/Inter-Light.ttf`
- `fonts/Inter-Medium.ttf`
- `fonts/Inter-Regular.ttf`
- `fonts/Inter-SemiBold.ttf`
- `fonts/Inter-Thin.ttf`

Use these local font files in `@font-face` declarations instead of fetching from Google Fonts.

## Screenshots Inventory (screens/)

> Study all screenshots carefully before implementing any UI. Match every visual detail exactly.

### Scroll Journey (screens/scroll/)

*Cinematic scroll states — page visual at each scroll depth*

![scroll-000.png](screens/scroll/scroll-000.png)

![scroll-017.png](screens/scroll/scroll-017.png)

![scroll-033.png](screens/scroll/scroll-033.png)

![scroll-050.png](screens/scroll/scroll-050.png)

![scroll-067.png](screens/scroll/scroll-067.png)

![scroll-083.png](screens/scroll/scroll-083.png)

![scroll-100.png](screens/scroll/scroll-100.png)

### Full Page Screenshots (screens/pages/)

*Full-page screenshots of each crawled URL*

![about.png](screens/pages/about.png)

![efficiency.png](screens/pages/efficiency.png)

![home.png](screens/pages/home.png)

![sustainability.png](screens/pages/sustainability.png)

![technology.png](screens/pages/technology.png)

### Section Clips (screens/sections/)

*Clipped individual sections and components*

![about-section-1.png](screens/sections/about-section-1.png)

![efficiency-section-1.png](screens/sections/efficiency-section-1.png)

![efficiency-section-6.png](screens/sections/efficiency-section-6.png)

![efficiency-section-7.png](screens/sections/efficiency-section-7.png)

![home-section-1.png](screens/sections/home-section-1.png)

![sustainability-section-1.png](screens/sections/sustainability-section-1.png)

![sustainability-section-6.png](screens/sections/sustainability-section-6.png)

![sustainability-section-7.png](screens/sections/sustainability-section-7.png)

![technology-section-1.png](screens/sections/technology-section-1.png)

![technology-section-6.png](screens/sections/technology-section-6.png)

### Interaction States (screens/states/)

*Hover, focus, and active state captures*

![button-1-default.png](screens/states/button-1-default.png)

![button-1-focus.png](screens/states/button-1-focus.png)

![button-1-hover.png](screens/states/button-1-hover.png)

![button-2-default.png](screens/states/button-2-default.png)

![button-2-focus.png](screens/states/button-2-focus.png)

![button-2-hover.png](screens/states/button-2-hover.png)

![link-1-default.png](screens/states/link-1-default.png)

![link-1-focus.png](screens/states/link-1-focus.png)

![link-1-hover.png](screens/states/link-1-hover.png)

![link-2-default.png](screens/states/link-2-default.png)

![link-2-focus.png](screens/states/link-2-focus.png)

![link-2-hover.png](screens/states/link-2-hover.png)

![link-3-default.png](screens/states/link-3-default.png)

![link-3-focus.png](screens/states/link-3-focus.png)

![link-3-hover.png](screens/states/link-3-hover.png)

### Screenshot Index (screens/INDEX.md)

# Screenshot Index

## Scroll Journey

> Shows the cinematic state at each point of the page

| Scroll | Y Position | File |
|--------|-----------|------|
| 0% | 0px | `screens/scroll/scroll-000.png` |
| 17% | 1271px | `screens/scroll/scroll-017.png` |
| 33% | 2466px | `screens/scroll/scroll-033.png` |
| 50% | 3737px | `screens/scroll/scroll-050.png` |
| 67% | 5008px | `screens/scroll/scroll-067.png` |
| 83% | 6203px | `screens/scroll/scroll-083.png` |
| 100% | 7474px | `screens/scroll/scroll-100.png` |

## Pages

| Page | URL | File |
|------|-----|------|
| CoffeeTech® - Advanced Commercial Coffee Roasters | `https://www.coffee-tech.com/` | `screens/pages/home.png` |
| CoffeeTech® - About coffee roasting equipment manufactures | `https://www.coffee-tech.com/about` | `screens/pages/about.png` |
| CoffeeTech® - Coffee Technology and Innovation | `https://www.coffee-tech.com/technology` | `screens/pages/technology.png` |
| CoffeeTech® - Efficiency Coffee Roasters Designed for Sustainability | `https://www.coffee-tech.com/efficiency` | `screens/pages/efficiency.png` |
| CoffeeTech® - Sustainability | `https://www.coffee-tech.com/sustainability` | `screens/pages/sustainability.png` |

## Sections

| Page | Section | File |
|------|---------|------|
| home | #1 (section) | `screens/sections/home-section-1.png` |
| about | #1 (section) | `screens/sections/about-section-1.png` |
| technology | #1 (section) | `screens/sections/technology-section-1.png` |
| technology | #6 ([class*="hero"]) | `screens/sections/technology-section-6.png` |
| efficiency | #1 (section) | `screens/sections/efficiency-section-1.png` |
| efficiency | #6 ([class*="hero"]) | `screens/sections/efficiency-section-6.png` |
| efficiency | #7 ([class*="hero"]) | `screens/sections/efficiency-section-7.png` |
| sustainability | #1 (section) | `screens/sections/sustainability-section-1.png` |
| sustainability | #6 ([class*="hero"]) | `screens/sections/sustainability-section-6.png` |
| sustainability | #7 ([class*="hero"]) | `screens/sections/sustainability-section-7.png` |

## Homepage Screenshots (screenshots/)

![homepage.png](screenshots/homepage.png)

