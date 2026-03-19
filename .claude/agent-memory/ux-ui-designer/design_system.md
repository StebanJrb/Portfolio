---
name: design_system
description: Established colors, typography, spacing, glass patterns, animation durations, and interactive state conventions
type: project
---

## Colors (CSS variables in globals.css)
- --primary: #00abe4 (electric blue — accent color, interactive elements, pulse glows)
- --secondary: #1e375a (deep navy — structural color)
- --foreground: #e2e8f0 (light slate — body text)
- Body forced to color: #ffffff via globals.css base layer
- Muted text: text-white/70 or text-white/90

## Typography
- Font family: ABeeZee (loaded as var(--font-abeezee)), applied to both --font-sans and --font-mono
- Heading scale used: text-5xl/7xl/8xl for h1, text-3xl/4xl/5xl for h2, text-3xl/5xl for section titles
- font-black for primary headings, font-bold for section titles, font-medium for subtitles
- font-mono applied to: tech labels, badge text, button labels, category labels
- mix-blend-plus-lighter used on some headings over WebGL backgrounds

## Spacing
- Section padding: p-8 md:p-12 (lg:p-16 for hero)
- Gap between sections: space-y-16
- Card corner radius: rounded-3xl for section containers, rounded-2xl for inner cards, rounded-full for badges/pills

## Glass / Card Patterns
Two established patterns:
1. DARK PANEL (solutions tab): border border-white/10 bg-black/55 rounded-3xl hover:border-white/20
   — Use when background is high-contrast (bright/colorful WebGL). Opaque enough to ensure readability.
2. TRUE GLASS (about tab): border border-white/20 bg-white/5 backdrop-blur-md rounded-3xl hover:border-white/40
   — Use when background is muted/neutral (Silk). More transparent, real blur.

GlassSurface component: SVG feDisplacementMap + backdrop-filter. Used for nav bar and language selector.
Not used for section cards — those use raw Tailwind utility classes instead.

## Interactive States
- Hover border lift: hover:border-white/40 (from /20) or hover:border-white/20 (from /10)
- Hover bg lift: hover:bg-white/10 (from /5)
- Transition: transition-all (no explicit duration — inherits 150ms default)
- Buttons: rounded-full pills with border border-white/20 bg-white/5 backdrop-blur-md
- Button hover: hover:bg-white/10 hover:border-white/40
- Icon color change on hover: group + group-hover:text-primary transition-colors

## Accent / Status
- Primary glow pulse: bg-primary animate-pulse shadow-[0_0_10px_rgba(0,171,228,0.8)]
- Badge pill: inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 rounded-full

## Animations
- Tab entrance: animate-in fade-in slide-in-from-bottom-4 duration-700 (tw-animate-css library)
- Staggered: delay-150 on secondary elements in hero
- Marquee: @keyframes marquee-left (translateX 0 -> -50%), class .animate-marquee, duration calculated dynamically
- prefers-reduced-motion: NOT currently handled — flag this in future work
