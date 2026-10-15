/**
 * Language-independent company data.
 * All translated copy lives in `src/i18n/en.ts` and `src/i18n/id.ts`.
 */
export const company = {
  name: 'Autoen Industri Teknologi',
  short: 'AITEK',
  address: [
    'Jl. KH. Muchtar Tabrani No. 53',
    'Bekasi Utara, Kota Bekasi, Jawa Barat',
    'Indonesia',
  ],
  phone: '+62 817-9999-390',
  phoneHref: 'tel:+628179999390',
  emails: ['admin@autoen.id', 'support@autoen.id'],
}

/** A string that has an English and an Indonesian version. */
export type Localized = { en: string; id: string }
