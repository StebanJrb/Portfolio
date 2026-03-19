---
name: pattern_photo_placeholder
description: Layered image/placeholder pattern where placeholder shows on 404, image covers it on success
type: project
---

Used in `AboutPreviewSection` for the profile photo. Stack order:
1. Placeholder div (position static, always visible in background): icon + label
2. `<img>` with `className="absolute inset-0 w-full h-full object-cover z-10"` + `onError={(e) => e.currentTarget.style.display = "none"}`

The container must be `relative overflow-hidden`. When the image loads, it sits on top covering the placeholder. When it 404s, `onError` hides it and the placeholder shows through.

**How to apply:** Use this pattern for any optional profile or user-uploaded image where a fallback icon is desired without flash-of-broken-image.
