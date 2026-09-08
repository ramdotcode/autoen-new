import { useI18n, languages } from '../../i18n'

type Props = { className?: string; size?: 'sm' | 'md' }

export function LanguageToggle({ className = '', size = 'sm' }: Props) {
  const { lang, setLang, t } = useI18n()
  const pad = size === 'sm' ? 'px-2.5 py-1 text-[11px]' : 'px-3.5 py-2 text-xs'

  return (
    <div
      className={`inline-flex items-center rounded-lg border border-line p-0.5 ${className}`}
      role="group"
      aria-label={t.a11y.languageSwitcher}
    >
      {languages.map((l) => {
        const active = l.code === lang
        return (
          <button
            key={l.code}
            type="button"
            onClick={() => setLang(l.code)}
            aria-pressed={active}
            aria-label={l.name}
            className={`rounded-md font-mono uppercase tracking-[0.14em] transition-colors ${pad} ${
              active ? 'bg-white/[0.08] text-fg' : 'text-dim hover:text-muted'
            }`}
          >
            {l.label}
          </button>
        )
      })}
    </div>
  )
}
