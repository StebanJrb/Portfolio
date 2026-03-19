---
name: project_architecture
description: Core page architecture, tab-to-background mapping, and home tab section composition
type: project
---

Tab backgrounds (rendered as `fixed inset-0 z-0`):
- `home` → LiquidChrome `baseColor={[0, 0.1, 0.4]}` (blue)
- `solutions` → LiquidChrome `baseColor={[0.0, 0.35, 0.15]}` (green)
- `about` → Silk `color="#7B7481"`

**Why:** solutions tab previously used LetterGlitch; changed to LiquidChrome green for visual consistency with WebGL approach.

Home tab sections (in order, inside `space-y-16`):
1. `HeroSection` — wrapped in `<section id="inicio" className="p-8 md:p-12">`
2. `AboutPreviewSection` — glassmorphism card with photo, bio, stats
3. `ContactSection` — client-side form with simulated send

Solutions tab cards: `border border-white/10 bg-black/65 rounded-3xl` (upgraded from bg-black/55 for contrast against green background).

CTASection was removed from the global position (was rendered below all tabs). ContactSection now handles the home tab CTA.

**How to apply:** When adding new home tab sections, place them inside the `space-y-16` div in the `activeTab === "home"` block. When adding solutions sections, use `bg-black/65` cards.
