# Portfolio — Steban Ruiz Benavides

Personal portfolio for a Data Engineer & ML Engineer. Built as a single-page application with tab-based navigation, WebGL animated backgrounds, and a bilingual (ES/EN) interface.

---

## What this is

A dark, glassmorphism-styled portfolio designed to communicate technical depth at a glance. It is organized into three sections:

- **Home** — Hero presentation, personal profile with photo, and a contact form
- **Solutions** — Tech stack carousel, architecture design showcase, and featured projects
- **About** — Work experience and education timeline

The visual identity leans into a Data/ML aesthetic: monospaced typography, fluid WebGL shaders as backgrounds, and a deep blue/emerald color palette that shifts per tab.

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19, Tailwind CSS v4 |
| WebGL | `ogl` (custom shaders) |
| Animations | CSS keyframes, GSAP |
| i18n | Custom React context (ES/EN) |
| Analytics | Vercel Analytics |
| Icons | Lucide React, Radix UI primitives |

---

## Visual features

- **LiquidChrome** — WebGL fluid shader used as the home and solutions backgrounds. Home renders in deep blue, solutions in dark emerald.
- **Silk** — WebGL noise animation for the about tab background.
- **GlassSurface** — SVG `feDisplacementMap` composited via `backdrop-filter` for frosted glass panels.
- **TechStack carousel** — Two-row opposing infinite marquee with category separators and hover micro-interactions.
- **FloatingLines** — CSS-animated decorative line overlay.

---

## Structure

```
app/
  page.tsx          # Tab state, background switching, section layout
  layout.tsx        # Root layout, I18nProvider, Analytics
  globals.css       # Design tokens, keyframe animations

components/
  hero-section.tsx          # Name, title, social links
  about-preview-section.tsx # Photo, bio, stats
  contact-section.tsx       # Email form with success state
  tech-stack.tsx            # Two-row marquee carousel
  projects-section.tsx      # Filterable project cards
  architecture-section.tsx  # Architecture diagrams and decisions
  experience-section.tsx    # Work history
  education-section.tsx     # Education and certifications
  navigation.tsx            # Tab navigation + language toggle
  LiquidChrome.tsx          # WebGL fluid shader
  Silk.tsx                  # WebGL noise shader
  GlassSurface.tsx          # SVG displacement glass effect
  LetterGlitch.tsx          # Canvas ASCII glitch effect
  FloatingLines.tsx         # CSS animated lines

lib/
  i18n-context.tsx  # Bilingual context, all translation strings
```

---

## Running locally

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # Production build
pnpm lint       # ESLint
```

> Requires Node 18+. The project uses `pnpm` but `npm` and `yarn` work too.

---

## Adding your photo

Place a photo at `public/profile.jpg`. The about section shows a placeholder with your initials until the file is present — no code changes needed.

---

## i18n

All user-facing strings live in `lib/i18n-context.tsx` as a flat key-value record for both `es` and `en`. The language toggle is in the navigation bar. Default language is Spanish.

---

## Built with Claude Code

This portfolio was designed and developed in collaboration with **[Claude Code](https://claude.ai/code)** — Anthropic's AI coding assistant. The entire implementation, from the WebGL shader integration and glassmorphism system to the bilingual context and animated carousels, was built through an iterative conversation between the developer and Claude Code, with specialized agents handling UX design, frontend engineering, and recruiter-perspective review in parallel.

---

## License

MIT — feel free to use this as a base for your own portfolio.
