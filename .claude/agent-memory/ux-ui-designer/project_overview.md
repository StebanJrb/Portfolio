---
name: project_overview
description: Tab layout, background system, section card patterns, and key architectural constraints
type: project
---

Single-page app, no routes. Tab state lives in app/page.tsx (activeTab: "home" | "solutions" | "about").

Tab-to-background mapping (fixed inset-0 z-0):
- home: LiquidChrome, baseColor=[0, 0.1, 0.4] (deep blue), speed=0.3, amplitude=0.4, interactive=false
- solutions: LetterGlitch (green matrix). User wants to change this to LiquidChrome with green tones.
- about: Silk, color="#7B7481", speed=5, noiseIntensity=1.5

Section card patterns per tab:
- solutions: border border-white/10 bg-black/55 rounded-3xl — dark opaque panel, minimal glass
- about: border border-white/20 bg-white/5 backdrop-blur-md rounded-3xl — true glassmorphism, more transparent

Main layout: relative z-10 min-h-screen pt-20 pb-16 px-4 md:px-8, max-w-7xl mx-auto inside.
Tab content animates in with: animate-in fade-in slide-in-from-bottom-4 duration-700.
space-y-16 between sections within a tab.

LiquidChrome shader: The color formula is baseColor / max(abs(sin(t - uv.y - uv.x)), 0.1).
This means the color divides into highlights on the wave peaks. A low baseColor produces dark liquid
with bright streaks of that hue. High values produce a washed-out bright look.

Why: background context — needed to pick correct card overlays per background.
How to apply: When designing cards for any tab, always consider what the background "bleeds through" and pick bg opacity and border accordingly.
