import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { company } from '../../data/content'
import { useI18n } from '../../i18n'

/** Address, phone, email and hours — shown inside the mobile menu. */
export function Identity({ className = '' }: { className?: string }) {
  const { t } = useI18n()
  const rows = [
    { icon: MapPin, lines: company.address },
    { icon: Phone, lines: [company.phone], href: () => company.phoneHref },
    { icon: Mail, lines: company.emails, href: (line: string) => `mailto:${line}` },
    { icon: Clock, lines: [t.contact.hours] },
  ]

  return (
    <div className={className}>
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-dim">{t.menuContact}</p>
      <ul className="mt-4 space-y-3">
        {rows.map(({ icon: Icon, lines, href }) => (
          <li key={lines[0]} className="flex gap-3 text-sm leading-relaxed text-muted">
            <Icon size={16} strokeWidth={1.75} className="mt-0.5 shrink-0 text-accent-soft" aria-hidden />
            <div>
              {lines.map((line) =>
                href ? (
                  <a key={line} href={href(line)} className="block text-fg hover:text-accent-soft">
                    {line}
                  </a>
                ) : (
                  <span key={line} className="block">
                    {line}
                  </span>
                ),
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

/** One-line identity strip that sits above the navbar on larger screens. */
export function IdentityStrip() {
  const { t } = useI18n()
  return (
    <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-6 px-6 font-mono text-[11px] tracking-[0.06em] text-dim md:px-8">
      <span className="flex min-w-0 items-center gap-2">
        <MapPin size={12} className="shrink-0 text-accent-soft" aria-hidden />
        <span className="truncate">{company.address.slice(0, 2).join(', ')}</span>
      </span>
      <span className="flex shrink-0 items-center gap-5">
        <a href={company.phoneHref} className="flex items-center gap-2 transition-colors hover:text-fg">
          <Phone size={12} className="text-accent-soft" aria-hidden />
          {company.phone}
        </a>
        <a href={`mailto:${company.emails[0]}`} className="flex items-center gap-2 transition-colors hover:text-fg">
          <Mail size={12} className="text-accent-soft" aria-hidden />
          {company.emails[0]}
        </a>
        <span className="hidden items-center gap-2 xl:flex">
          <Clock size={12} className="text-accent-soft" aria-hidden />
          {t.contact.hours}
        </span>
      </span>
    </div>
  )
}
