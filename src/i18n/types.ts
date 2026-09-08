import type { LucideIcon } from 'lucide-react'

export type Lang = 'en' | 'id'

export type Dictionary = {
  meta: { title: string; description: string }
  skipToContent: string
  languageName: string

  a11y: {
    home: string
    primaryNav: string
    mobileNav: string
    openMenu: string
    closeMenu: string
    languageSwitcher: string
    vision: string
    statistics: string
    capabilities: string
    process: string
    coreValues: string
  }

  nav: { label: string; href: string }[]
  navCta: string

  hero: {
    eyebrow: string
    titleLines: string[]
    highlight: string
    subtitle: string
    primaryCta: string
    secondaryCta: string
    scroll: string
  }

  manifesto: { eyebrow: string; text: string }

  stats: { value: number; suffix: string; label: string }[]

  approach: {
    eyebrow: string
    title: string
    text: string
    imageAlt: string
    items: { image: string; title: string; text: string }[]
  }

  services: {
    eyebrow: string
    title: string
    text: string
    items: { icon: LucideIcon; title: string; text: string; tags: string[] }[]
    marquee: string[]
  }

  process: {
    eyebrow: string
    title: string
    text: string
    steps: { step: string; title: string; text: string; items: string[] }[]
  }

  whyUs: {
    eyebrow: string
    title: string
    imageAlt: string
    items: { title: string; text: string }[]
  }

  coreValues: {
    eyebrow: string
    title: string
    text: string
    valuePrefix: string
    items: { title: string; text: string }[]
  }

  contact: {
    eyebrow: string
    title: string
    text: string
    hours: string
    labels: { address: string; phone: string; email: string; hours: string }
    form: {
      name: string
      namePlaceholder: string
      email: string
      emailPlaceholder: string
      company: string
      companyPlaceholder: string
      message: string
      messagePlaceholder: string
      submit: string
      hint: string
      sentHint: string
    }
    mailSubject: (name: string, company: string) => string
  }

  footer: {
    workWithUs: { title: string; text: string }
    demo: { title: string; text: string }
    navigate: string
    reachUs: string
    contact: string
    rights: string
    tagline: string
  }
}
