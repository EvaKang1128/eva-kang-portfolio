import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navigation } from '../../data/profile'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { Container } from './Container'

const sectionIds = navigation.map((item) => item.id)

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useScrollSpy(sectionIds)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled || menuOpen
          ? 'border-b border-black/5 bg-canvas/90 shadow-[0_8px_24px_rgba(48,45,78,0.06)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <Container className="flex h-[72px] items-center justify-between">
        <a
          href="#home"
          className="group flex items-center gap-2 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          aria-label="Eva Kang 首页"
          onClick={() => setMenuOpen(false)}
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-sm font-extrabold text-cream transition group-hover:-rotate-3">
            E
          </span>
          <span className="text-sm font-extrabold text-ink">EVA KANG</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="主导航">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`rounded-full px-3 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${
                activeId === item.id
                  ? 'bg-lavender-light text-primary-dark'
                  : 'text-muted hover:bg-white/70 hover:text-ink'
              }`}
              aria-current={activeId === item.id ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white/80 text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:hidden"
          aria-label={menuOpen ? '关闭导航菜单' : '打开导航菜单'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <div
        id="mobile-navigation"
        className={`fixed inset-x-0 bottom-0 top-[72px] overflow-y-auto border-t border-black/5 bg-canvas transition-[opacity,visibility] duration-200 lg:hidden ${
          menuOpen
            ? 'visible opacity-100'
            : 'invisible pointer-events-none opacity-0'
        }`}
      >
        <Container className="min-h-full">
          <nav className="grid grid-cols-2 content-start gap-3 py-6" aria-label="移动端主导航">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`flex min-h-16 items-center rounded-lg border px-4 text-base font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${
                  activeId === item.id
                    ? 'border-lavender bg-lavender-light text-primary-dark'
                    : 'border-black/5 bg-white text-muted'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </Container>
      </div>
    </header>
  )
}
