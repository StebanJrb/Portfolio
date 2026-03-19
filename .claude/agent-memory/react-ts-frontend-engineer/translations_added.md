---
name: translations_added
description: Translation keys added beyond the original set in lib/i18n-context.tsx
type: project
---

Added in both `es` and `en` locales:

**About preview section:**
- `about.badge` — "Sobre mí" / "About me"
- `about.title` — "Steban Ruiz Benavides" (same in both)
- `about.description` — full bio paragraph
- `about.stat1` — "Años exp." / "Yrs exp."
- `about.stat2` — "Proyectos" / "Projects"
- `about.stat3` — "Datos proc." / "Data proc."

**Contact section:**
- `contact.title` — "Hablemos" / "Let's Talk"
- `contact.subtitle` — email + response time
- `contact.name`, `contact.email`, `contact.message` — form placeholders
- `contact.send` — submit button label
- `contact.sending` — loading state label
- `contact.success.title`, `contact.success.message`, `contact.success.again` — success state

**How to apply:** When adding new sections that need translations, add keys to BOTH locale objects in `lib/i18n-context.tsx`. The fallback for a missing key is the key string itself (`return translations[language][key] || key`).
