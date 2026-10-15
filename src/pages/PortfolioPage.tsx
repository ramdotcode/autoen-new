import { PageIntro } from '../components/PageIntro'
import { Portfolio } from '../components/Portfolio'
import { useI18n } from '../i18n'
import { usePageMeta } from '../lib/usePageMeta'

export default function PortfolioPage() {
  const { t } = useI18n()
  const intro = t.pages.intro.portfolio
  usePageMeta(intro.title)
  return (
    <>
      <PageIntro title={intro.title} text={intro.text} />
      <Portfolio />
    </>
  )
}
