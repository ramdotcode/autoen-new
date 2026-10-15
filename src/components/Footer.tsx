import { ArrowUpRight } from 'lucide-react'
import { company } from '../data/content'
import { useI18n } from '../i18n'
import { Link } from 'react-router'
import { contactHref } from '../lib/inquiry'
import { Reveal } from './ui/Reveal'

export function Footer() {
  const year = new Date().getFullYear()
  const { t } = useI18n()

  return (
    <footer className="border-t border-line bg-bg-deep">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <Reveal>
            <Link
              to={contactHref()}
              className="group flex h-full flex-col justify-between rounded-2xl border border-line bg-surface p-7 transition-colors hover:border-line-strong hover:bg-surface-2 md:p-9"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-2xl font-medium tracking-[-0.02em] text-fg">{t.footer.workWithUs.title}</h3>
                <ArrowUpRight size={20} className="text-dim transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" aria-hidden />
              </div>
              <p className="mt-6 text-sm leading-relaxed text-muted">{t.footer.workWithUs.text}</p>
            </Link>
          </Reveal>
          <Reveal delay={0.08}>
            <Link
              to={contactHref(t.footer.demo.topic)}
              className="group flex h-full flex-col justify-between rounded-2xl border border-line bg-surface p-7 transition-colors hover:border-line-strong hover:bg-surface-2 md:p-9"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-2xl font-medium tracking-[-0.02em] text-fg">{t.footer.demo.title}</h3>
                <ArrowUpRight size={20} className="text-dim transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" aria-hidden />
              </div>
              <p className="mt-6 text-sm leading-relaxed text-muted">{t.footer.demo.text}</p>
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col gap-10 border-t border-line pt-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link to="/" className="flex items-center gap-3">
              <img src="/img/logo.png" alt="" width={32} height={32} className="h-8 w-8 rounded-md object-contain" />
              <span className="text-sm font-medium text-fg">{company.name}</span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              {company.address.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 md:gap-16">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-dim">{t.footer.navigate}</p>
              <ul className="mt-4 space-y-2.5">
                {t.nav.map((n) => (
                  <li key={n.to}>
                    <Link to={n.to} className="text-sm text-muted transition-colors hover:text-fg">
                      {n.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to={contactHref()} className="text-sm text-muted transition-colors hover:text-fg">
                    {t.footer.contact}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-dim">{t.footer.reachUs}</p>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a href={company.phoneHref} className="text-sm text-muted transition-colors hover:text-fg">
                    {company.phone}
                  </a>
                </li>
                {company.emails.map((e) => (
                  <li key={e}>
                    <a href={`mailto:${e}`} className="text-sm text-muted transition-colors hover:text-fg">
                      {e}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-dim sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} PT {company.name}. {t.footer.rights}
          </p>
          <p>{company.short} · {t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
