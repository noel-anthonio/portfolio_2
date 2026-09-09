import { useState } from 'react'
import { useNavScrolled } from '../hooks'

const navItems = [
  { label: 'Profil', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Réalisations', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export function Navigation() {
  const scrolled = useNavScrolled()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-night/95 backdrop-blur-xl border-b border-line-dark/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-3 group">
          <span className="grid place-items-center w-9 h-9 bg-copper text-obsidian text-[11px] font-bold tracking-tight transition-transform duration-300 group-hover:rotate-12">
            NA
          </span>
          <span className="text-sm font-semibold tracking-tight text-cream hidden sm:block">
            Noël Anthonio
          </span>
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="magnetic-link text-[13px] font-medium text-muted-on-dark hover:text-cream transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="border border-copper/60 text-copper px-4 py-2.5 text-[12px] font-semibold hover:bg-copper hover:text-obsidian transition-all duration-300 flex items-center gap-2"
          >
            Parlons-nous
            <span className="text-[10px]">↗</span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-px bg-ink transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-ink transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-ink transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-1 bg-night/95 backdrop-blur-xl border-t border-line-dark/30">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 text-base font-medium text-cream border-b border-line-dark/20 last:border-0"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 bg-copper text-obsidian px-4 py-3 text-sm font-semibold text-center"
          >
            Parlons-nous ↗
          </a>
        </div>
      </div>
    </nav>
  )
}