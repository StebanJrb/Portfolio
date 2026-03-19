# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev       # Start dev server (Next.js)
pnpm build     # Production build
pnpm start     # Start production server
pnpm lint      # Run ESLint
```

> Note: `next.config.mjs` has `typescript.ignoreBuildErrors: true`, so TypeScript errors won't fail builds.

## Architecture

This is a **single-page portfolio** (Next.js 16, React 19, Tailwind CSS v4) for a Data/ML Engineer. There are no routes beyond `/` — navigation is entirely tab-based state managed in `app/page.tsx`.

### Tab-based layout

`app/page.tsx` holds `activeTab` state (`"home" | "solutions" | "about"`) and conditionally renders sections:
- `home` — `HeroSection`
- `solutions` — `TechStack`, `ArchitectureSection`, `ProjectsSection`
- `about` — `ExperienceSection`, `EducationSection`

A different animated background renders per tab (WebGL-based), mounted as `fixed inset-0 z-0`.

### i18n

Bilingual (ES/EN) via a custom React context in `lib/i18n-context.tsx`. All translations are hardcoded in that file as a flat key-value `Record`. Components consume it via `useI18n()` → `t("key")`. Default language is Spanish (`"es"`).

### Visual/animation components (`components/`)

Custom WebGL and SVG-based effect components sourced from animation libraries:

- **`LiquidChrome`** — WebGL shader via `ogl`. Renders a fluid chromatic distortion; used as the "home" tab background. Renders at 0.5x resolution for performance.
- **`LetterGlitch`** — Canvas-based ASCII glitch; used as "solutions" background.
- **`Silk`** — WebGL noise animation; used as "about" background.
- **`GlassSurface`** — SVG `feDisplacementMap` filter composited via `backdrop-filter`. Used for frosted-glass UI panels (nav bar, language selector). Falls back gracefully on Safari/Firefox (SVG filters unsupported).
- **`FloatingLines`** — CSS-animated decorative lines.

### Styling

- Tailwind CSS v4 with `@import "tailwindcss"` (no `tailwind.config.js`).
- CSS variables defined in `app/globals.css` for the design system (primary: `#00abe4`, secondary: `#1e375a`).
- Path alias `@/*` maps to the project root.

### Key dependencies

- `ogl` — minimal WebGL library used by `LiquidChrome` and `Silk`
- `gsap` — available for animations
- `next-themes` — installed but layout uses `I18nProvider`, not a theme provider
- `@vercel/analytics` — analytics injected in `app/layout.tsx`
- `lucide-react`, `@radix-ui/*` — icon and primitive UI components in `components/ui/`
