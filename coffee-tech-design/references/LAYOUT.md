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

