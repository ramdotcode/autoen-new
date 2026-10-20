import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { AnimatePresence, m, useReducedMotion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { company } from '../data/content'
import { useI18n } from '../i18n'
import { Button } from './ui/Button'
import { LanguageToggle } from './ui/LanguageToggle'
import { Identity, IdentityStrip } from './ui/Identity'
import { contactHref } from '../lib/inquiry'

const MotionLink = m.create(Link)

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()
  const { t } = useI18n()
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <m.header
      initial={reduce ? false : { y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <AnimatePresence initial={false}>
        {!scrolled && (
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden overflow-hidden border-b border-line md:block"
          >
            <IdentityStrip />
          </m.div>
        )}
      </AnimatePresence>
      <div
        className={`transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled
            ? 'border-b border-line bg-bg/70 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-[72px] md:px-8">
          <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3" aria-label={`${company.name} ${t.a11y.home}`}>
            <img src="/img/logo.webp" alt="" width={36} height={36} className="h-9 w-9 rounded-md object-contain" />
            <span className="hidden text-sm font-medium tracking-tight text-fg sm:block">
              {company.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label={t.a11y.primaryNav}>
            {t.nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end
                className={({ isActive }) =>
                  `relative rounded-md px-3 py-2 text-sm transition-colors ${isActive ? 'text-fg' : 'text-muted hover:text-fg'}`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <span
                        className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-accent-red via-violet-500 to-accent"
                        aria-hidden
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
            <LanguageToggle className="ml-3" />
            <div className="ml-3">
              <Button to={contactHref()} className="px-4 py-2">
                {t.navCta}
              </Button>
            </div>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageToggle />
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-fg"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-line bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 pt-6" aria-label={t.a11y.mobileNav}>
              {t.nav.map((item, i) => (
                <MotionLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === item.to ? 'page' : undefined}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                  className={`flex items-center gap-3 rounded-md px-3 py-3 text-lg ${
                    pathname === item.to ? 'text-fg' : 'text-muted'
                  }`}
                >
                  {pathname === item.to && <span className="h-1.5 w-1.5 rounded-full bg-accent-red" aria-hidden />}
                  {item.label}
                </MotionLink>
              ))}
              <div className="mt-4 px-3">
                <Button to={contactHref()} onClick={() => setOpen(false)} arrow>
                  {t.navCta}
                </Button>
              </div>
            </nav>
            <m.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + t.nav.length * 0.05 }}
              className="mx-6 mt-8 mb-10 border-t border-line pt-6"
            >
              <Identity className="px-3" />
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </m.header>
  )
}
