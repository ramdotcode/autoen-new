import { PageIntro } from '../components/PageIntro'
import { Profile } from '../components/Profile'
import { Clients } from '../components/Clients'
import { CoreValues } from '../components/CoreValues'
import { useI18n } from '../i18n'
import { usePageMeta } from '../lib/usePageMeta'

export default function ProfilePage() {
  const { t } = useI18n()
  const intro = t.pages.intro.profile
  usePageMeta(intro.title)
  return (
    <>
      <PageIntro title={intro.title} text={intro.text} />
      <Profile />
      <Clients />
      <CoreValues />
    </>
  )
}
