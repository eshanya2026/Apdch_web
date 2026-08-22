# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing/informational website for Adhiparasakthi Dental College and Hospitals (APDCH) — a multi-page React SPA (about, admissions, academics, departments, faculty, hospital, research, careers, etc.), no backend.

## Commands

```bash
npm run dev       # local dev server (Vite)
npm run build     # production build -> dist/
npm run preview   # preview production build
npm run lint      # oxlint
```

There is no test suite configured. Deployed on Vercel (`vercel.json` rewrites all paths to `index.html` for client-side routing).

## Architecture

- **Routing**: all routes are declared in `src/App.jsx` (`react-router-dom` `BrowserRouter`). Most pages are static content assembled from section components; a few (`/departments/:departmentId`, `/news-events/:eventId`, `/careers/:jobId`) are data-driven by an id param.
- **Content vs. components**: page copy/data lives in `src/lib/*Constants.js` files (one per section, e.g. `homeConstants.js`, `admissionsConstants.js`, `facultyConstants.js`), separate from the presentational components in `src/components/`. When changing on-page text, look in the matching `*Constants.js` file first rather than the component.
- **Component layout**: `src/components/<domain>/` mirrors the page/domain it belongs to (`about/`, `academics/`, `admissions/`, `campus-life/`, `departments/`, `faculty/`, `governance/`, `hospital/`, `research/`). `src/components/sections/` holds the home page's section blocks. `src/components/shared/` and `src/components/layout/` (Navbar/Footer) are cross-page. `src/components/ui/` holds shadcn-style primitives (Radix-based `button.jsx`, `accordion.jsx`) built with `class-variance-authority` + `cn()` (`src/lib/utils.js`, a `clsx` + `tailwind-merge` wrapper).
- **Departments detail pages**: `src/lib/departmentDetails.js` is a large lookup keyed by department id, consumed by `src/pages/DepartmentDetail.jsx`, which renders a fixed sequence of `src/components/departments/detail/Detail*.jsx` block components against that data.
- **Careers module has no backend** — it's a client-only CMS backed by `localStorage` (`src/lib/careersStore.js`, keys `apdch_careers_jobs_v2` / `apdch_careers_applications_v2`). `INITIAL_JOB_POSTINGS` seeds storage on first load. `src/pages/CareerCms.jsx` (routed at both `/careers/admin` and `/admin/careers`) is an unauthenticated admin UI for CRUD on postings and applications, with JSON export/import/reset helpers in the same file. `src/data/careers.json` separately holds static dropdown option lists (positions, departments) used by the application form, not the postings themselves.
- **Styling**: Tailwind CSS v4 via the `@tailwindcss/vite` plugin (no `tailwind.config.js` — theme is defined inline in `src/index.css` using `@theme inline` and CSS custom properties). The brand palette is driven by four variables at the top of `src/index.css` (`--apdch-100/300/500/700`); all semantic color tokens (`--color-primary`, `--color-accent`, etc.) derive from those — change the palette there, not per-component. Fonts are Lato (body) and Outfit (display/hero), referenced via `--font-sans`/`--font-display`/`--font-hero`.
- **Path alias**: `@/*` resolves to `src/*` (configured in both `vite.config.js` and `jsconfig.json`).
- **Design reference**: `coffee-tech-design/` at the repo root is a design-system reference package (`SKILL.md`, `references/DESIGN.md`, animation/layout/component specs, scroll screenshots) that documents this site's exact colors, fonts, spacing, and motion patterns. Consult it before building or restyling UI so new work matches the existing design language.
