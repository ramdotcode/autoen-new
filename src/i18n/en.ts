import { Bot, Building2, Cog, Cpu, MonitorCog, Radio } from 'lucide-react'
import type { Dictionary } from './types'

export const en: Dictionary = {
  meta: {
    title: 'Autoen Industri Teknologi | Automation & IoT Solutions',
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
    team: 'Company structure',
    clients: 'Companies we have worked with',
    portfolioFilter: 'Filter projects',
  },

  nav: [
    { label: 'Home', to: '/' },
    { label: 'Profile', to: '/profile' },
    { label: 'Products', to: '/products' },
    { label: 'Portfolio', to: '/portfolio' },
  ],
  navCta: 'Contact us',

  pages: {
    home: 'Home',
    intro: {
      profile: {
        title: 'Company profile',
        text: 'Who we are, what we are working towards, and the people who do the work.',
      },
      products: {
        title: 'Products & services',
        text: 'IT consulting, machines, robotics, IoT and automation, plus how we take a project from start to finish.',
      },
      portfolio: {
        title: 'Portfolio',
        text: "Projects we've finished, projects in progress, and the companies we've worked with.",
      },
      contact: {
        title: 'Contact us',
        text: "Leave your name, contact and question. We'll reply during working hours.",
      },
    },
    explore: {
      eyebrow: 'Explore',
      title: 'Get to know Autoen.',
      items: [
        { to: '/profile', title: 'Profile', text: 'Our vision, mission and team structure.' },
        { to: '/products', title: 'Products', text: 'IT consulting, machines, robotics, IoT and more.' },
        { to: '/portfolio', title: 'Portfolio', text: "Projects we've finished and are working on." },
      ],
    },
    notFound: {
      title: 'Page not found.',
      text: 'The address may be mistyped, or the page has moved.',
      back: 'Back to home',
    },
  },
  menuContact: 'Office & contact',

  hero: {
    eyebrow: 'Automation · IoT · Smart Industry',
    titleLines: ['Less manual work,', 'production keeps running.', "That's our job."],
    highlight: "That's our job.",
    subtitle:
      'We help factories cut downtime and monitor production from anywhere, through automation, robotics and IoT.',
    primaryCta: 'Start a project',
    secondaryCta: 'See products',
    scroll: 'Scroll',
  },

  manifesto: {
    eyebrow: 'Our vision',
    text: 'We want to be the team people call first when a factory, a building or a city in Indonesia needs its systems to work smarter.',
  },

  profile: {
    eyebrow: 'Company profile',
    title: 'Engineers from BSD, working for Indonesian industry.',
    paragraphs: [
      'Autoen Industri Teknologi (AITEK) is an engineering company based in BSD, Tangerang. What we do is simple to explain: we make the machines, robots and systems where you work run cleaner, faster and break down less.',
      "We don't sell everyone the same package. Usually we visit first, walk your production line or facility, talk to the operators, and only then put a proposal together. The people who design the system also install and test it on site.",
    ],
    facts: [
      { label: 'Office', value: 'BSD Icon, Tangerang' },
      { label: 'Focus', value: 'Automation · Machines · Robotics · IoT' },
      { label: 'Clients', value: 'Industry & city operators' },
    ],
    missionTitle: 'Our mission',
    mission: [
      'See the problem on site with our own eyes before offering any solution.',
      'Pick the technology that fits the need and the budget, not the most expensive one.',
      'Keep working until the system actually runs, then teach your team how to use it.',
      "Stay reachable after the project ends. If something goes wrong, we're the ones who show up.",
    ],
  },

  team: {
    eyebrow: 'Company structure',
    title: 'The people behind every project.',
    text: 'The team you meet in the first meeting is the same team that comes to your site later.',
    namePending: 'Name to be confirmed',
  },

  portfolio: {
    eyebrow: 'Portfolio',
    title: "Projects we've finished and are working on.",
    text: 'Some of our work for factories, utilities and cities. Want the details, or have a similar need? Just ask.',
    filters: { all: 'All', done: 'Completed', ongoing: 'In progress' },
    status: { done: 'Completed', ongoing: 'In progress' },
    clientPending: 'Client name to be confirmed',
    sample: 'Sample',
    clientsTitle: 'Companies that have worked with us',
    clientSlot: 'Client logo',
    cta: 'Discuss a similar project',
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
    text: 'We are a team of experienced professionals who design, integrate and support automation and IoT systems, from the first assessment to years after go-live.',
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
        text: 'We focus on the most significant outcome with the least effort, time and cost. Efficiency is designed in from the start.',
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
    eyebrow: 'Products',
    title: 'What we can build for you.',
    text: 'From advice across the table to machines and robots standing on your factory floor. All handled by one team.',
    items: [
      {
        icon: MonitorCog,
        title: 'IT Consulting',
        text: "We map the systems you already have, find what's slowing you down, and draw up a digitalisation plan that fits your budget.",
        tags: ['System audit', 'Architecture', 'Roadmap'],
      },
      {
        icon: Cog,
        title: 'Industrial Machines',
        text: 'Custom machines designed and built for your process, or old machines rebuilt to run faster, safer and easier to maintain.',
        tags: ['Custom machines', 'Retrofit', 'Control panels'],
      },
      {
        icon: Bot,
        title: 'Robotics',
        text: 'Robot arms for repetitive, heavy work like pick-and-place, palletizing and welding. Plus process automation on the software side.',
        tags: ['Robot arms', 'Palletizing', 'RPA'],
      },
      {
        icon: Radio,
        title: 'IoT',
        text: 'Sensors, gateways and dashboards that show the state of your machines and assets live, from anywhere, with security built in.',
        tags: ['Sensors', 'Dashboards', 'Data security'],
      },
      {
        icon: Cpu,
        title: 'PLC & SCADA Automation',
        text: 'PLC, HMI and SCADA programming so production runs consistently and can be watched from a single control room.',
        tags: ['PLC', 'HMI', 'SCADA'],
      },
      {
        icon: Building2,
        title: 'Smart City',
        text: 'Street lighting, water utilities and environmental monitoring, connected and managed from one platform.',
        tags: ['Smart lighting', 'Utilities', 'Monitoring'],
      },
    ],
    marquee: [
      'IT Consulting',
      'Industrial Machines',
      'Robotics',
      'IoT',
      'PLC & SCADA',
      'Smart City',
      'Retrofit',
      'Predictive Maintenance',
    ],
    ask: 'Ask about this',
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
    title: 'Why clients choose Autoen.',
    imageAlt: 'Illustration of secure, connected industrial systems',
    items: [
      {
        title: 'One team from start to finish.',
        text: "The people who survey, design and install are the same team, so you never have to explain things again to someone new.",
      },
      {
        title: 'Solutions that fit the need.',
        text: "If your old machine is still worth repairing, we'll tell you. Not every problem needs a new system.",
      },
      {
        title: 'Support after handover.',
        text: "You can still reach us after the project ends, and our team comes out if something goes wrong.",
      },
      {
        title: 'Results you can see.',
        text: "Projects we've finished and are working on are on the Portfolio page.",
      },
    ],
  },

  coreValues: {
    eyebrow: 'Core values',
    title: 'What we stand for in every project.',
    text: 'These values empower us to deliver technology that drives real growth for clients and partners.',
    valuePrefix: 'Value',
    items: [
      { title: 'Innovation', text: 'We adopt new technology when it proves better, not just because it is new.' },
      { title: 'Reliability', text: 'Systems are tested until stable before handover.' },
      { title: 'Security', text: 'Access to your machines and data is limited to authorised people.' },
      { title: 'Efficiency', text: 'Enough, never excessive. One sensor if one is all it takes.' },
      { title: 'Integrity', text: 'We tell you about issues and delays first.' },
    ],
  },

  contact: {
    hours: 'Monday – Friday, 09:00 – 17:00 WIB',
    labels: { address: 'Address', phone: 'Call us', email: 'Email us', hours: 'Open hours' },
    form: {
      name: 'Name',
      namePlaceholder: 'Your name',
      contact: 'Contact',
      contactPlaceholder: 'WhatsApp number or email',
      topic: 'Topic',
      clearTopic: 'Clear topic',
      message: 'Comment or question',
      messagePlaceholder: 'Tell us a little about what you need',
      submit: 'Send message',
      hint: 'Opens your email client. No data is stored on this site.',
      sentHint: 'Your email client should open with the message prepared.',
    },
    mailSubject: (name, topic) => `Message from ${name}${topic ? ` (${topic})` : ''}`,
  },

  footer: {
    workWithUs: {
      title: 'Work with us',
      text: 'We partner with manufacturers, utilities and city operators to build automation and IoT systems that last.',
    },
    demo: {
      title: 'Request a demo',
      text: 'See how an IoT dashboard, PLC retrofit or RPA workflow would look on your own process.',
      topic: 'Demo request',
    },
    navigate: 'Navigate',
    reachUs: 'Reach us',
    contact: 'Contact',
    rights: 'All rights reserved.',
    tagline: 'Automation & IoT solutions for Industry 4.0',
  },
}
