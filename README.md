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
  data/content.ts        all copy, contact details, services, process steps
  lib/motion.ts          shared variants / easing
  components/
    Navbar, Hero (+ NetworkGlobe canvas), Manifesto (scroll word reveal),
    Stats (count-up), Approach, Services (+ marquee), Process (timeline),
    WhyUs, CoreValues (tabs), Contact, Footer
    ui/  Button, Reveal, SectionHeading
public/img/              logo, favicon and illustrations from the previous site
```

## Editing content
Everything textual lives in `src/data/content.ts`. Change a service, a step or
the phone number there and every section updates.

## Deploy
`npm run build` produces a static `dist/` folder. It works on Firebase Hosting
(where the previous site lived), Netlify, Vercel or any static host. Configure
the host to serve `index.html` for unknown paths if you later add routes.
