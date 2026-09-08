# Autoen Industri Teknologi — Website

Remake of the AITEK company site as a single-page React app with scroll-driven
animation, inspired by the dark editorial feel of pensieve.id but built around
Autoen's own content: industrial automation, IoT and smart-city solutions.

## Stack
- Vite + React 19 + TypeScript
- Tailwind CSS v4 (design tokens in `src/index.css`, documented in `DESIGN.md`)
- Motion for React (`motion/react`) for entrance, hover and scroll-linked animation
- lucide-react icons
- No backend. The contact form opens the visitor's email client via `mailto:`.

## Run
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve dist/ locally
npm run lint
```

## QA scripts (need Google Chrome installed, dev server running)
```bash
npm run qa:shots        # screenshots of every section at 1440 / 768 / 360 → qa-shots/
npm run qa:overflow     # lists elements that cause horizontal overflow
npm run qa:interactions # mobile menu, value tabs, reduced-motion, tab order
```

## Structure
```
src/
  i18n/
    en.ts, id.ts         all copy, per language (English / Bahasa Indonesia)
    types.ts             the Dictionary shape both languages must satisfy
    context.ts           language state, detection, persistence, useI18n()
    provider.tsx         <I18nProvider> — wraps the app in main.tsx
  data/content.ts        language-independent company data (address, phone, email)
  lib/motion.ts          shared variants / easing
  components/
    Navbar, Hero (+ NetworkGlobe canvas), Manifesto (scroll word reveal),
    Stats (count-up), Approach, Services (+ marquee), Process (timeline),
    WhyUs, CoreValues (tabs), Contact, Footer
    ui/  Button, Reveal, SectionHeading, LanguageToggle
public/img/              logo, favicon and illustrations from the previous site
```

## Editing content
The site is bilingual (English / Bahasa Indonesia). Every visible string lives in
`src/i18n/en.ts` and `src/i18n/id.ts` — edit a service, a step or a heading there
and the matching section updates. Both files are typed against `Dictionary` in
`src/i18n/types.ts`, so adding a key to one language and forgetting the other is
a build error.

Contact details that do not change with language (address, phone, email) live in
`src/data/content.ts`.

## Language switching
`<I18nProvider>` in `src/main.tsx` holds the active language and exposes it via
`useI18n()`. On first visit it reads the browser locale (`id-*` → Indonesian,
everything else → English); after that the choice is remembered in
`localStorage` under `autoen.lang`. Switching also updates `<html lang>`, the
document title and the meta description. The EN / ID toggle sits in the navbar
on desktop and next to the menu button on mobile.

## Deploy
`npm run build` produces a static `dist/` folder. It works on Firebase Hosting
(where the previous site lived), Netlify, Vercel or any static host. Configure
the host to serve `index.html` for unknown paths if you later add routes.
