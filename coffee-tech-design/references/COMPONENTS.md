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

