import { PageIntro } from '../components/PageIntro'
import { Services } from '../components/Services'
import { Process } from '../components/Process'
import { useI18n } from '../i18n'
import { usePageMeta } from '../lib/usePageMeta'

export default function ProductsPage() {
  const { t } = useI18n()
  const intro = t.pages.intro.products
  usePageMeta(intro.title)
  return (
    <>
      <PageIntro title={intro.title} text={intro.text} />
      <Services />
      <Process />
    </>
  )
}
