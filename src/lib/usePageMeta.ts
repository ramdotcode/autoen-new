import { useEffect } from 'react'
import { company } from '../data/content'
import { useI18n } from '../i18n'

/** Sets the tab title for the current page; the home page uses the full site title. */
export function usePageMeta(title?: string) {
  const { t } = useI18n()
  useEffect(() => {
    document.title = title ? `${title} | ${company.name}` : t.meta.title
  }, [title, t])
}
