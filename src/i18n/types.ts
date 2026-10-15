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
    team: string
    clients: string
  }

  nav: { label: string; to: string }[]
  navCta: string

  pages: {
    home: string
    intro: Record<'profile' | 'products' | 'contact', { title: string; text: string }>
    explore: { eyebrow: string; title: string; items: { to: string; title: string; text: string }[] }
    notFound: { title: string; text: string; back: string }
  }
  menuContact: string

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

  profile: {
    eyebrow: string
    title: string
    paragraphs: string[]
    facts: { label: string; value: string }[]
    missionTitle: string
    mission: string[]
  }

  team: {
    eyebrow: string
    title: string
    text: string
    namePending: string
  }

  clients: { eyebrow: string; title: string }

  stats: { value: number; suffix: string; label: string }[]

  services: {
    eyebrow: string
    title: string
    text: string
    items: { icon: LucideIcon; title: string; text: string; tags: string[] }[]
    marquee: string[]
    ask: string
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
    cycle: { label: string; center: string; caption: string; steps: string[] }
    items: { title: string; text: string }[]
  }

  coreValues: {
    eyebrow: string
    title: string
    valuePrefix: string
    items: { title: string; text: string }[]
  }

  contact: {
    hours: string
    labels: { address: string; phone: string; email: string; hours: string }
    form: {
      name: string
      namePlaceholder: string
      contact: string
      contactPlaceholder: string
      topic: string
      clearTopic: string
      message: string
      messagePlaceholder: string
      submit: string
      hint: string
      sentHint: string
    }
    mailSubject: (name: string, topic: string) => string
  }

  footer: {
    workWithUs: { title: string; text: string }
    demo: { title: string; text: string; topic: string }
    navigate: string
    reachUs: string
    contact: string
    rights: string
    tagline: string
  }
}
