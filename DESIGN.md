# Autoen Website — Design System

Reference feel: pensieve.id (dark, editorial, scroll-driven). Adapted to Autoen
Industri Teknologi (AITEK): industrial automation, IoT, smart city.

## Colors
| Token          | Value                      | Use                                  |
|----------------|----------------------------|--------------------------------------|
| bg             | #0a0d14                    | page background                      |
| bg-deep        | #05070c                    | manifesto / contrast sections        |
| surface        | #11151f                    | cards                                |
| surface-2      | #171c29                    | hovered cards, inputs                |
| line           | rgba(255,255,255,.08)      | borders                              |
| fg             | #f3f4f6                    | headings, primary text               |
| muted          | #9aa3b2                    | body copy                            |
| dim            | #5f6879                    | labels, dimmed manifesto text        |
| accent         | #3b82f6 / #60a5fa (soft)   | CTA, links, eyebrow labels           |
| accent-red     | #e0413f                    | secondary highlight (from logo)      |

Logo gradient (red → violet → blue) is used sparingly: one headline word,
card hover border, progress lines.

## Typography
- Sans: Geist 400/500/600. Headlines weight 500, tight tracking (-0.02em to -0.04em).
- Mono: Geist Mono for eyebrows, step numbers, stat labels.
- Scale: hero 44/64/80px, h2 32/44/56px, h3 20/22px, body 16/18px, small 14px.

## Spacing & Layout
- Container: max-w-7xl, px-6 (md: px-8).
- Section padding: py-24 (md: py-32).
- Radius: 12px cards, 8px buttons, full for pills.
- Grid: 12-col mental model, 2-col split for text + visual sections.

## Motion (Motion for React)
- Entrance: opacity 0→1, y 24→0, 0.6s, ease [0.22,1,0.36,1]. Once, at -10% viewport margin.
- Stagger groups: 0.08s between children, max ~6 children.
- Hover: translateY(-2px) + border/glow change, 0.3s. No scale > 1.03.
- Scroll-driven: manifesto word reveal, process timeline progress, hero parallax.
- Reduced motion: entrance becomes instant, globe is static, marquee stops.

## Components
- Button: primary (accent bg, white text), ghost (border line, hover border-strong).
- Card: surface bg, 1px line border, 12px radius, card-glow gradient border on hover.
- Eyebrow: mono, 12px, uppercase, tracking .18em, accent-soft color.
