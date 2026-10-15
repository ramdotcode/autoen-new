import type { Localized } from './content'

/**
 * Projects Autoen has finished or is working on. Every entry below is a sample
 * (`sample: true` shows a "Sample" badge) until real projects are supplied —
 * see CATATAN.md. Leave `client` empty to show "client name to be confirmed".
 */
export type Project = {
  title: Localized
  summary: Localized
  sector: Localized
  client: string
  year: string
  status: 'done' | 'ongoing'
  sample?: boolean
}

export const projects: Project[] = [
  {
    title: { en: 'Production line monitoring', id: 'Monitoring lini produksi' },
    summary: {
      en: 'Sensors on every machine and one dashboard showing output, downtime and energy use in real time.',
      id: 'Sensor di tiap mesin dan satu dasbor yang menampilkan output, downtime, dan pemakaian listrik secara langsung.',
    },
    sector: { en: 'Manufacturing', id: 'Manufaktur' },
    client: '',
    year: '2025',
    status: 'done',
    sample: true,
  },
  {
    title: { en: 'Packing machine retrofit', id: 'Retrofit mesin pengemas' },
    summary: {
      en: 'An old packing machine rebuilt with a new PLC and HMI so it runs faster with fewer stops.',
      id: 'Mesin pengemas lama dipasang PLC dan HMI baru supaya jalan lebih cepat dan jarang berhenti.',
    },
    sector: { en: 'Food & beverage', id: 'Makanan & minuman' },
    client: '',
    year: '2024',
    status: 'done',
    sample: true,
  },
  {
    title: { en: 'Palletizing robot cell', id: 'Sel robot palletizing' },
    summary: {
      en: 'A robot arm that stacks finished cartons onto pallets, replacing a manual end-of-line job.',
      id: 'Lengan robot yang menyusun karton jadi ke palet, menggantikan pekerjaan manual di ujung lini.',
    },
    sector: { en: 'Manufacturing', id: 'Manufaktur' },
    client: '',
    year: '2026',
    status: 'ongoing',
    sample: true,
  },
  {
    title: { en: 'Smart street lighting', id: 'Penerangan jalan pintar' },
    summary: {
      en: 'Street lights that report faults on their own and dim automatically late at night.',
      id: 'Lampu jalan yang melapor sendiri kalau rusak dan meredup otomatis saat larut malam.',
    },
    sector: { en: 'Smart city', id: 'Smart city' },
    client: '',
    year: '2026',
    status: 'ongoing',
    sample: true,
  },
  {
    title: { en: 'Water utility SCADA', id: 'SCADA utilitas air' },
    summary: {
      en: 'Pumps and reservoirs across several sites watched and controlled from one control room.',
      id: 'Pompa dan reservoir di beberapa lokasi dipantau dan dikendalikan dari satu ruang kontrol.',
    },
    sector: { en: 'Utilities', id: 'Utilitas' },
    client: '',
    year: '2024',
    status: 'done',
    sample: true,
  },
  {
    title: { en: 'Digital roadmap consulting', id: 'Konsultasi peta jalan digital' },
    summary: {
      en: 'An audit of existing systems and a step-by-step plan for what to automate first.',
      id: 'Audit sistem yang ada dan rencana bertahap: apa yang sebaiknya diotomasi lebih dulu.',
    },
    sector: { en: 'IT consulting', id: 'Konsultan IT' },
    client: '',
    year: '2025',
    status: 'done',
    sample: true,
  },
]

/**
 * Companies Autoen has worked with. Add `logo` as a path under public/
 * (e.g. '/img/clients/acme.svg'). While empty, the section shows blank slots.
 */
export const clients: { name: string; logo?: string }[] = [
  // TODO: add logo: '/img/clients/mayora.png' once the official file is supplied
  { name: 'Mayora' },
]
