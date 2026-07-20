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

