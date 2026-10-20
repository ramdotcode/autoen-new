import { Bot, Building2, Cog, Cpu, MonitorCog, Radio } from 'lucide-react'
import type { Dictionary } from './types'

export const en: Dictionary = {
  meta: {
    title: 'Autoen Industri Teknologi | Automation & IoT Solutions',
    description:
      'Automation, robotics and IoT for factories in Indonesia. We help cut downtime and monitor production from anywhere.',
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
  },

  nav: [
    { label: 'Home', to: '/' },
    { label: 'Profile', to: '/profile' },
    { label: 'Products', to: '/products' },
  ],
  navCta: 'Contact us',

  pages: {
    home: 'Home',
    intro: {
      profile: {
        title: 'Company profile',
        text: 'Who we are, what we are working towards, and the companies we have worked with.',
      },
      products: {
        title: 'Products & services',
        text: 'IT consulting, machines, robotics, IoT and automation, plus how we take a project from start to finish.',
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
        { to: '/profile', title: 'Profile', text: 'Our vision, mission, values and clients.' },
        { to: '/products', title: 'Products', text: 'IT consulting, machines, robotics, IoT and more.' },
        { to: '/contact', title: 'Contact', text: 'Address, phone and a message form.' },
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
    robotHint: { mouse: 'Move your cursor, the robot follows', touch: 'Touch, the robot follows' },
  },

  manifesto: {
    eyebrow: 'Our vision',
    text: 'To be the automation company factories and cities in Indonesia trust for systems that are reliable and easy to maintain.',
  },

  profile: {
    eyebrow: 'Company profile',
    title: 'An engineering partner for Indonesian industry.',
    paragraphs: [
      'Autoen Industri Teknologi (AITEK) is an engineering company handling industrial automation, machines, robotics and IoT for factories and cities in Indonesia.',
    ],
    facts: [
      { label: 'Office', value: 'North Bekasi, Bekasi City' },
      { label: 'Focus', value: 'Automation · Machines · Robotics · IoT' },
      { label: 'Clients', value: 'Industry & city operators' },
    ],
    missionTitle: 'Our mission',
    mission: [
      'Understand the problem on site before offering a solution.',
      "Choose technology that fits the client's needs and budget.",
      "Finish the work until the system runs reliably and the client's team can operate it.",
      'Support clients after the project ends, not just until handover.',
    ],
  },

  team: {
    eyebrow: 'Company structure',
    title: 'The people behind every project.',
    text: 'The team you meet in the first meeting is the same team that comes to your site later.',
    namePending: 'Name to be confirmed',
  },

  clients: {
    eyebrow: 'Clients',
    title: 'Companies that have worked with us.',
  },

  stats: [
    { value: 232, suffix: '+', label: 'Happy clients' },
    { value: 521, suffix: '+', label: 'Projects delivered' },
    { value: 1463, suffix: '+', label: 'Hours of support' },
    { value: 15, suffix: '', label: 'Engineers & specialists' },
  ],

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
        title: 'Site survey & design',
        text: 'Our team visits your site, sees the process first-hand, then drafts the solution design with you.',
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
    cycle: {
      label: "Autoen's work cycle: survey, design, install, support, handled by one team.",
      center: 'One team',
      caption: 'from survey to ongoing support',
      steps: ['Survey', 'Design', 'Install', 'Support'],
    },
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
        title: 'Trusted by major companies.',
        text: 'Mayora and Indolakto are among the companies we have worked with.',
      },
    ],
  },

  coreValues: {
    eyebrow: 'Core values',
    title: 'What we stand for in every project.',
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
      text: 'We work with factories, utility operators and city governments.',
    },
    demo: {
      title: 'Request a demo',
      text: 'See a working IoT dashboard or automation system before you decide.',
      topic: 'Demo request',
    },
    navigate: 'Navigate',
    reachUs: 'Reach us',
    contact: 'Contact',
    rights: 'All rights reserved.',
    tagline: 'Automation, machines, robotics and IoT for industry',
  },
}
