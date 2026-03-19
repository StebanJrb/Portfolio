---
name: pattern_marquee_animation
description: Two-row infinite marquee pattern with left/right scroll directions and edge fade masks
type: project
---

Two keyframes defined in `app/globals.css`:
- `marquee-left` (0% → -50% translateX): class `animate-marquee` — scrolls left
- `marquee-reverse` (-50% → 0% translateX): class `animate-marquee-reverse` — scrolls right

Pattern for two-row marquee in TechStack:
- Split `allTechnologies` array at midpoint; each row gets one half duplicated (`[...half, ...half]`)
- Duration: `Math.ceil(allTechnologies.length / 2) * 2.5` seconds per row
- Wrapper: `overflow-hidden relative w-full space-y-4`
- Edge fade masks: absolute divs with `from-black/80 to-transparent` gradients, `w-16`, `pointer-events-none z-10`

**How to apply:** Reuse this pattern for any infinite scroll row. Always duplicate the array (`[...items, ...items]`) so the animation loops seamlessly.
