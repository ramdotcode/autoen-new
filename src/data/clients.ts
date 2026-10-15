/**
 * Companies Autoen has worked with, shown as a logo row on the profile page.
 * Logos live in public/img/clients/. Use a white or light version so it reads
 * on the dark background; `name` is the alt text and hover tooltip. Set `tall`
 * for stacked logos that would look small at the default height.
 */
export const clients: { name: string; logo: string; tall?: boolean }[] = [
  // white logo from mayora.com
  { name: 'Mayora', logo: '/img/clients/mayora.svg' },
  // supplied by the user, recoloured white with a transparent background
  { name: 'PT Indolakto', logo: '/img/clients/indolakto.png' },
  // ABB_logo.svg from Wikimedia Commons, fill changed to white
  { name: 'ABB', logo: '/img/clients/abb.svg' },
  // supplied by the user, recoloured white (already had a transparent background)
  { name: 'BWI Aviation', logo: '/img/clients/bwi-aviation.png', tall: true },
]
