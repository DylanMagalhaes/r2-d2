import { useEffect, useState } from 'react'
import { SECTION_NAV } from './navConfig'

const NAV_LINKS = SECTION_NAV.filter((l) => l.id !== 'accueil' && l.id !== 'contact')

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('accueil')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return
    const sections = SECTION_NAV.map(({ id }) => document.getElementById(id)).filter(
      (n): n is HTMLElement => Boolean(n),
    )
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActive(visible.target.id)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background,box-shadow,backdrop-filter,border-color] duration-300 ${
        scrolled
          ? 'border-white/10 bg-ink/85 shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-xl'
          : 'border-transparent bg-ink/30 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6 lg:px-8">
        <a
          href="#accueil"
          className="group flex min-w-0 items-center gap-2.5 leading-none"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-gold/30 bg-linear-to-br from-gold/20 to-transparent font-cinzel text-[11px] font-semibold tracking-wider text-gold-pale transition group-hover:border-gold/60">
            R2
          </span>
          <span className="flex flex-col">
            <span className="font-cinzel text-sm font-semibold tracking-[0.15em] text-parchment transition group-hover:text-gold sm:text-[15px]">
              R2-D2
            </span>
            <span className="mt-0.5 truncate font-raleway text-[9.5px] font-light uppercase tracking-[0.28em] text-cream/45">
              Coffee · Ice Cream
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Sections principales">
          {NAV_LINKS.map(({ id, label }) => {
            const isActive = active === id
            return (
              <a
                key={id}
                href={`#${id}`}
                className={`group relative rounded-lg px-3 py-2 font-raleway text-[13px] font-medium tracking-wide transition hover:text-parchment ${
                  isActive ? 'text-parchment' : 'text-cream/65'
                }`}
              >
                {label}
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-x-3 -bottom-px h-px origin-center bg-linear-to-r from-transparent via-gold to-transparent transition-transform duration-300 ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </a>
            )
          })}
          <a
            href="#contact"
            className="ml-3 inline-flex items-center gap-1.5 rounded-full bg-linear-to-r from-gold to-[#9a7328] px-5 py-2 font-cinzel text-[10px] font-semibold uppercase tracking-[0.22em] text-ink shadow-md shadow-gold/10 transition hover:brightness-110"
          >
            Contact
            <span aria-hidden="true" className="text-ink/80">
              →
            </span>
          </a>
        </nav>

        <button
          type="button"
          className="-mr-1 inline-flex flex-col gap-1.5 rounded-md p-2 lg:hidden"
          aria-expanded={open}
          aria-controls="nav-mobile-panel"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-0.5 w-6 origin-center rounded-full bg-gold transition ${open ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span className={`h-0.5 w-6 rounded-full bg-gold transition ${open ? 'opacity-0' : ''}`} />
          <span
            className={`h-0.5 w-6 origin-center rounded-full bg-gold transition ${open ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </div>

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 -bottom-px h-px bg-linear-to-r from-transparent via-gold/40 to-transparent transition-opacity duration-500 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div
        id="nav-mobile-panel"
        className={`border-t border-white/10 bg-ink/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? 'max-h-[min(75vh,520px)] opacity-100' : 'max-h-0 overflow-hidden opacity-0'
        }`}
      >
        <nav className="flex max-h-[min(75vh,520px)] flex-col gap-0.5 overflow-y-auto px-4 py-4" aria-label="Mobile">
          {SECTION_NAV.map(({ id, label }) => {
            const isActive = active === id
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between rounded-lg px-3 py-3 font-raleway text-sm font-medium transition ${
                  isActive
                    ? 'bg-gold/[0.08] text-parchment'
                    : 'text-cream/80 hover:bg-white/[0.04] hover:text-parchment'
                }`}
              >
                <span>{label}</span>
                {isActive && <span className="size-1.5 rounded-full bg-gold" />}
              </a>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
