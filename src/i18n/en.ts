import { Bot, Building2, Cpu, Network, Radio, ShieldCheck } from 'lucide-react'
import type { Dictionary } from './types'

export const en: Dictionary = {
  meta: {
    title: 'Autoen Industri Teknologi — Automation & IoT Solutions',
    description:
      'Autoen Industri Teknologi (AITEK) delivers industrial automation, IoT and smart-city solutions that help businesses transform for Industry 4.0.',
  },
  skipToContent: 'Skip to content',
  languageName: 'English',

  a11y: {
    home: 'home',
    primaryNav: 'Primary',
    mobileNav: 'Mobile',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    languageSwitcher: 'Language',
    vision: 'Our vision',
    statistics: 'Company statistics',
    capabilities: 'Capabilities',
    process: 'Our process',
    coreValues: 'Core values',
  },

  nav: [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Values', href: '#values' },
  ],
  navCta: 'Contact us',

  hero: {
    eyebrow: 'Automation · IoT · Smart Industry',
    titleLines: ["Let's realize", 'business transformation', 'through smart solutions.'],
    highlight: 'smart solutions.',
    subtitle:
      'Automation, IoT and intelligent systems engineered for Indonesian industry — built by a team of experienced professionals.',
    primaryCta: 'Start a project',
    secondaryCta: 'Explore services',
    scroll: 'Scroll',
  },

  manifesto: {
    eyebrow: 'Our vision',
    text: 'To become a leading technology company providing intelligent solutions based on automation and IoT, supporting digital transformation and industrial sustainability in the Industry 4.0 era.',
  },

  stats: [
    { value: 232, suffix: '+', label: 'Happy clients' },
    { value: 521, suffix: '+', label: 'Projects delivered' },
    { value: 1463, suffix: '+', label: 'Hours of support' },
    { value: 15, suffix: '', label: 'Engineers & specialists' },
  ],

  approach: {
    eyebrow: 'What we value most',
    title: 'Smart solutions for a connected future.',
    text: 'We are a team of experienced professionals who design, integrate and support automation and IoT systems — from the first assessment to years after go-live.',
    imageAlt: 'Autoen engineers discussing an IoT and automation workflow',
    items: [
      {
        image: '/img/values-5.png',
        title: 'Customer-centric approach',
        text: 'We believe quality begins and ends with the customer. Every system we build starts from your operational reality.',
      },
      {
        image: '/img/values-6.png',
        title: 'Smart solutions, big results',
        text: 'We focus on the most significant outcome with the least effort, time and cost — streamlined efficiency by design.',
      },
      {
        image: '/img/values-4.png',
        title: 'Innovation & latest technology',
        text: 'We leverage advanced automation, AI and IoT to drive speed, accuracy and efficiency across your operations.',
      },
      {
        image: '/img/values-7.png',
        title: 'After-sales support',
        text: 'Our support is designed with one goal: the long-term satisfaction and success of every customer we serve.',
      },
    ],
  },

  services: {
    eyebrow: 'Services',
    title: 'Everything needed to run a smarter operation.',
    text: 'Six capabilities, one accountable partner — from sensors on the floor to the software that turns their data into decisions.',
    items: [
      {
        icon: Radio,
        title: 'IoT Solutions for Industry',
        text: 'Sensor networks, edge gateways and dashboards that turn machine data into real-time visibility across plants and assets.',
        tags: ['Sensors', 'Edge gateway', 'Dashboards'],
      },
      {
        icon: Cpu,
        title: 'Industrial Automation',
        text: 'PLC, SCADA and control-system engineering that keeps production reliable, consistent and running without disruption.',
        tags: ['PLC / SCADA', 'Control panels', 'Retrofit'],
      },
      {
        icon: Building2,
        title: 'Smart City Solutions',
        text: 'Connected infrastructure for lighting, utilities, traffic and environmental monitoring — integrated into one operational platform.',
        tags: ['Smart lighting', 'Utilities', 'Monitoring'],
      },
      {
        icon: Network,
        title: 'IoT Integration & Consulting',
        text: 'From assessment to architecture, we integrate legacy equipment with modern platforms and design a roadmap that fits your budget.',
        tags: ['Assessment', 'Architecture', 'Roadmap'],
      },
      {
        icon: ShieldCheck,
        title: 'IoT Security & Reliability',
        text: 'Cyber-resilient system design, secure device provisioning and redundancy so your data and operations stay protected.',
        tags: ['Hardening', 'Provisioning', 'Redundancy'],
      },
      {
        icon: Bot,
        title: 'Machines & Robotics Services',
        text: 'Robotic process automation, machine integration and custom software that remove repetitive work and raise throughput.',
        tags: ['RPA', 'Machine integration', 'Custom software'],
      },
    ],
    marquee: [
      'Industrial IoT',
      'PLC & SCADA',
      'Smart City',
      'Robotics',
      'Edge Computing',
      'Predictive Maintenance',
      'Custom Software',
      'Cyber Resilience',
    ],
  },

  process: {
    eyebrow: 'How we work',
    title: 'A clear path from problem to running system.',
    text: 'Every engagement follows five steps, so you always know what happens next and who is responsible.',
    steps: [
      {
        step: '01',
        title: 'Identify problems',
        text: 'We map the pain points that hold operations back.',
        items: ['Inefficient processes', 'High labor costs', 'Inconsistent quality', 'Data management challenges'],
      },
      {
        step: '02',
        title: 'Our approach',
        text: 'A structured assessment turns problems into a clear solution design.',
        items: ['Problem assessment', 'Solution design'],
      },
      {
        step: '03',
        title: 'Proposed solution',
        text: 'We propose the technology mix that delivers the biggest result with the least cost.',
        items: [
          'Robotic process automation',
          'Improved automation system',
          'Industrial IoT solutions',
          'Custom software solutions',
        ],
      },
      {
        step: '04',
        title: 'Implementation',
        text: 'Our engineers install, integrate and commission the system on site.',
        items: ['Installation & integration', 'Commissioning', 'Testing & handover'],
      },
      {
        step: '05',
        title: 'After-sales support',
        text: 'We stay with you after go-live to keep the system performing.',
        items: ['Technical support', 'Maintenance service', 'Training & resources', 'Warranty coverage'],
      },
    ],
  },

  whyUs: {
    eyebrow: 'Why Autoen',
    title: 'A partner for the whole transformation, not just the install.',
    imageAlt: 'Illustration of secure, connected industrial systems',
    items: [
      {
        title: 'Integrated tech solutions',
        text: 'Boosting efficiency, productivity and connectivity across industries.',
      },
      { title: 'Continuous innovation', text: 'Harnessing automation, AI and IoT to stay ahead.' },
      { title: 'Secure & reliable systems', text: 'Tailored, cyber-resilient technology you can depend on.' },
      { title: 'Digital transformation partner', text: 'Consulting, integration and long-term support.' },
      { title: 'Trusted collaboration', text: 'Built on integrity, transparency and client satisfaction.' },
    ],
  },

  coreValues: {
    eyebrow: 'Core values',
    title: 'What we stand for in every project.',
    text: 'These values empower us to deliver technology that drives real growth for clients and partners.',
    valuePrefix: 'Value',
    items: [
      {
        title: 'Innovation',
        text: 'We continuously create new solutions and apply the latest technology in every product and service, evolving with an ever-changing market.',
      },
      {
        title: 'Reliability',
        text: 'We build dependable systems so clients reach maximum operational efficiency without disruption.',
      },
      {
        title: 'Security',
        text: 'Data and operations matter. We prioritise security in every layer and protect infrastructure from cyber threats.',
      },
      {
        title: 'Efficiency',
        text: 'We raise productivity and cut waste through automation and cutting-edge technology that optimises every process.',
      },
      {
        title: 'Integrity',
        text: 'We act with honesty, transparency and responsibility in every relationship with clients and partners.',
      },
    ],
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Ready to solve your challenges with Autoen?',
    text: "Tell us about your operation. We'll come back with a first assessment and the next step.",
    hours: 'Monday – Friday, 09:00 – 17:00 WIB',
    labels: { address: 'Address', phone: 'Call us', email: 'Email us', hours: 'Open hours' },
    form: {
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Business email',
      emailPlaceholder: 'you@company.com',
      company: 'Company',
      companyPlaceholder: 'Company or institution',
      message: 'Message',
      messagePlaceholder: 'What are you trying to improve?',
      submit: 'Send message',
      hint: 'Opens your email client — no data is stored on this site.',
      sentHint: 'Your email client should open with the message prepared.',
    },
    mailSubject: (name, company) => `Project inquiry from ${name}${company ? ` — ${company}` : ''}`,
  },

  footer: {
    workWithUs: {
      title: 'Work with us',
      text: 'We partner with manufacturers, utilities and city operators to build automation and IoT systems that last.',
    },
    demo: {
      title: 'Request a demo',
      text: 'See how an IoT dashboard, PLC retrofit or RPA workflow would look on your own process.',
    },
    navigate: 'Navigate',
    reachUs: 'Reach us',
    contact: 'Contact',
    rights: 'All rights reserved.',
    tagline: 'Automation & IoT solutions for Industry 4.0',
  },
}
