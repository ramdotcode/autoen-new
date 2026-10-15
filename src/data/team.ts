import type { Localized } from './content'

/**
 * Company structure, top to bottom. Each inner array is one tier of the chart.
 * Names and roles are placeholders until Autoen confirms them — see CATATAN.md.
 * Leave `name` empty to show "name to be confirmed"; add `photo` as a path under
 * public/ (e.g. '/img/team/budi.jpg') to replace the initials avatar.
 */
export type TeamMember = { name: string; role: Localized; photo?: string }

export const team: TeamMember[][] = [
  [{ name: '', role: { en: 'President Director', id: 'Direktur Utama' } }],
  [
    { name: '', role: { en: 'Technical Director', id: 'Direktur Teknik' } },
    { name: '', role: { en: 'Finance & Admin Manager', id: 'Manajer Keuangan & Admin' } },
  ],
  [
    { name: '', role: { en: 'Automation Lead', id: 'Lead Otomasi' } },
    { name: '', role: { en: 'IoT Lead', id: 'Lead IoT' } },
    { name: '', role: { en: 'Software Engineer', id: 'Software Engineer' } },
    { name: '', role: { en: 'Field Technician', id: 'Teknisi Lapangan' } },
  ],
]
