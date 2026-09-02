import {
  Cpu,
  Radio,
  Building2,
  Network,
  ShieldCheck,
  Bot,
  type LucideIcon,
} from 'lucide-react'

export const company = {
  name: 'Autoen Industri Teknologi',
  short: 'AITEK',
  tagline: 'Automation & IoT solutions for Industry 4.0',
  address: [
    'Jl. Broadway Horizon Blok M1 No. 11, BSD Icon',
    'Sampora, Cisauk, Kabupaten Tangerang 15345',
    'Indonesia',
  ],
  phone: '+62 819-9973-7800',
  phoneHref: 'tel:+6281999737800',
  emails: ['admin@autoen.id', 'support@autoen.id'],
  hours: 'Monday – Friday, 09:00 – 17:00 WIB',
}

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Values', href: '#values' },
]

export const hero = {
  title: ["Let's realize", 'business transformation', 'through smart solutions.'],
  subtitle:
    'Automation, IoT and intelligent systems engineered for Indonesian industry — built by a team of experienced professionals.',
  primaryCta: { label: 'Start a project', href: '#contact' },
  secondaryCta: { label: 'Explore services', href: '#services' },
}

export const manifesto =
  'To become a leading technology company providing intelligent solutions based on automation and IoT, supporting digital transformation and industrial sustainability in the Industry 4.0 era.'

export const stats = [
  { value: 232, suffix: '+', label: 'Happy clients' },
  { value: 521, suffix: '+', label: 'Projects delivered' },
  { value: 1463, suffix: '+', label: 'Hours of support' },
  { value: 15, suffix: '', label: 'Engineers & specialists' },
]

export const approach = [
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
]

export type Service = {
  icon: LucideIcon
  title: string
  text: string
  tags: string[]
}

export const services: Service[] = [
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
]

export const process = [
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
    items: ['Robotic process automation', 'Improved automation system', 'Industrial IoT solutions', 'Custom software solutions'],
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
]

export const whyUs = [
  { title: 'Integrated tech solutions', text: 'Boosting efficiency, productivity and connectivity across industries.' },
  { title: 'Continuous innovation', text: 'Harnessing automation, AI and IoT to stay ahead.' },
  { title: 'Secure & reliable systems', text: 'Tailored, cyber-resilient technology you can depend on.' },
  { title: 'Digital transformation partner', text: 'Consulting, integration and long-term support.' },
  { title: 'Trusted collaboration', text: 'Built on integrity, transparency and client satisfaction.' },
]

export const coreValues = [
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
]

export const marqueeItems = [
  'Industrial IoT',
  'PLC & SCADA',
  'Smart City',
  'Robotics',
  'Edge Computing',
  'Predictive Maintenance',
  'Custom Software',
  'Cyber Resilience',
]
