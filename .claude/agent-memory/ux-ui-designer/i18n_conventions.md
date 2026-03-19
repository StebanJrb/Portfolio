---
name: i18n_conventions
description: Translation key naming patterns and existing categories in lib/i18n-context.tsx
type: project
---

All translations live in lib/i18n-context.tsx as a flat Record<Language, Record<string, string>>.
Languages: "es" (default) and "en".

Key naming convention: "category.subcategory" dot notation (all lowercase).

Existing categories:
- nav.*       — navigation tab labels
- hero.*      — hero section content (title1, title2, badge, description, contact, stat1/2/3)
- exp.*       — experience section
- tech.*      — tech stack (title, subtitle, cat.cloud, cat.version, cat.deml, cat.streaming, cat.mlops, cat.databases, cat.os, cat.ides, cat.backend, cat.design)
- projects.*  — projects section
- arch.*      — architecture section (includes arch.system1/2/3)
- edu.*       — education section
- footer.*    — footer content

New keys needed for upcoming sections (to be added when implementing):
- profile.*   — about/profile section on home tab (name, title, bio, stat.years, stat.projects, stat.data)
- contact.*   — contact form section on home tab (title, subtitle, name, email, message, submit, success, successMsg)

Important: Both ES and EN keys must always be added simultaneously. Never add one without the other.
