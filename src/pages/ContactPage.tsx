import { PageIntro } from '../components/PageIntro'
import { Contact } from '../components/Contact'
import { useI18n } from '../i18n'
import { usePageMeta } from '../lib/usePageMeta'

export default function ContactPage() {
  const { t } = useI18n()
  const intro = t.pages.intro.contact
  usePageMeta(intro.title)
  return (
    <>
      <PageIntro title={intro.title} text={intro.text} />
      <Contact />
    </>
  )
}
