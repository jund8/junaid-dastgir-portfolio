'use client'

import { useState, useEffect } from 'react'

const links = ['About', 'Projects', 'Experience', 'Skills', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0f1e]/95 backdrop-blur-md border-b border-blue-500/10 py-3'
          : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 group"
        >
          <span className="text-blue-400 font-mono text-sm opacity-60">&lt;</span>
          <span className="font-semibold text-white tracking-wide">JD</span>
          <span className="text-blue-400 font-mono text-sm opacity-60">/&gt;</span>
          <span className="hidden sm:block text-slate-400 text-sm ml-1 group-hover:text-slate-200 transition-colors">
            Mechanical Engineer
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="nav-link text-slate-400 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {link}
            </button>
          ))}
          <a
            href="mailto:junaiddastgir888@gmail.com"
            className="ml-2 px-4 py-2 text-sm font-medium border border-blue-500/40 text-blue-400 rounded hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-200"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-slate-400 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-slate-400 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-slate-400 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0f1e]/98 backdrop-blur-md border-b border-blue-500/10 py-4 px-6 flex flex-col gap-4">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-left text-slate-300 hover:text-white text-base font-medium transition-colors"
            >
              {link}
            </button>
          ))}
          <a
            href="mailto:junaiddastgir888@gmail.com"
            className="mt-2 px-4 py-2 text-sm font-medium border border-blue-500/40 text-blue-400 rounded text-center hover:bg-blue-500/10 transition-all"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  )
}
