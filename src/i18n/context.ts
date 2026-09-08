import { createContext, useContext } from 'react'
import { en } from './en'
import { id } from './id'
import type { Dictionary, Lang } from './types'

export type { Dictionary, Lang }

export const dictionaries: Record<Lang, Dictionary> = { en, id }

export const languages: { code: Lang; label: string; name: string }[] = [
  { code: 'en', label: 'EN', name: en.languageName },
  { code: 'id', label: 'ID', name: id.languageName },
]

export const STORAGE_KEY = 'autoen.lang'

export function isLang(value: unknown): value is Lang {
  return value === 'en' || value === 'id'
}

/** Stored preference wins, then the browser locale, then English. */
export function detectLang(): Lang {
  if (typeof window === 'undefined') return 'en'
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (isLang(stored)) return stored
  } catch {
    // localStorage can be unavailable (private mode, blocked storage)
  }
  return window.navigator.language?.toLowerCase().startsWith('id') ? 'id' : 'en'
}

export type I18nValue = { lang: Lang; setLang: (lang: Lang) => void; t: Dictionary }

export const I18nContext = createContext<I18nValue | null>(null)

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used inside <I18nProvider>')
  return ctx
}
