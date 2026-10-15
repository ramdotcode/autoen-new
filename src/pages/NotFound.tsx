import { Button } from '../components/ui/Button'
import { useI18n } from '../i18n'
import { usePageMeta } from '../lib/usePageMeta'

export default function NotFound() {
  const { t } = useI18n()
  usePageMeta('404')
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden bg-bg pt-24">
      <div className="bg-grid bg-grid-fade absolute inset-0" aria-hidden />
      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-8">
        <p className="text-gradient font-mono text-sm">404</p>
        <h1 className="mt-4 text-4xl font-medium tracking-[-0.03em] text-fg md:text-6xl">{t.pages.notFound.title}</h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">{t.pages.notFound.text}</p>
        <div className="mt-9">
          <Button to="/" arrow>
            {t.pages.notFound.back}
          </Button>
        </div>
      </div>
    </section>
  )
}
