'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from '@/hooks/useTheme'

export default function Navbar() {
  const pathname = usePathname() || '/'
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Início' },
    { href: '/about', label: 'Sobre' },
    { href: '/softwares', label: 'Softwares' },
    { href: '/academia', label: 'Academia' },
    { href: '/blog', label: 'Blog' },
    { href: '/carreiras', label: 'Carreiras' },
    { href: '/contactos', label: 'Contactos' },
    { href: '/equipe', label: 'Equipe' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href.replace('/#', '/'))
  }

  const { theme, toggle } = useTheme()

  function ThemeToggle() {
    return (
      <button
        onClick={toggle}
        aria-label="Alternar tema claro/escuro"
        className="p-2 rounded-full text-teal hover:bg-teal/20 focus:outline-none focus:ring-2 focus:ring-teal"
      >
        {theme === 'dark' ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 2a.75.75 0 01.75.75V4a.75.75 0 01-1.5 0V2.75A.75.75 0 0110 2zm0 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm6-2.25a.75.75 0 010 1.5H14a.75.75 0 010-1.5h2zm-12 0a.75.75 0 010 1.5H2a.75.75 0 010-1.5h2zm9.03-4.78a.75.75 0 011.06 1.06l-1.06 1.06a.75.75 0 11-1.06-1.06l1.06-1.06zM5.97 13.78a.75.75 0 011.06 0l1.06 1.06a.75.75 0 11-1.06 1.06L5.97 14.84a.75.75 0 010-1.06zM14 14a.75.75 0 01.75.75V16a.75.75 0 01-1.5 0v-1.25A.75.75 0 0114 14zM10 18a.75.75 0 01.75.75V20a.75.75 0 01-1.5 0v-1.25A.75.75 0 0110 18zm-4-4a.75.75 0 01.75.75V16a.75.75 0 01-1.5 0v-1.25A.75.75 0 016 14zm9.03-8.97a.75.75 0 010 1.06l-1.06 1.06a.75.75 0 11-1.06-1.06l1.06-1.06a.75.75 0 011.06 0z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.293 13.293a8 8 0 11-10.586-10.586A7 7 0 0010 17a7 7 0 007-7 7.002 7.002 0 00-1.707-4.707z" />
          </svg>
        )}
      </button>
    )
  }

  return (
    <nav
      className="sticky top-0 z-50 flex justify-between items-center px-4 md:px-8 py-4 bg-deep-blue/85 backdrop-blur-xl border-b border-teal/20"
      role="navigation"
      aria-label="Navegação principal"
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 group hover:opacity-90 transition-opacity duration-300">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-teal/30 to-transparent rounded-lg blur-md group-hover:blur-lg transition-all duration-300"></div>
          <img
            src="/images/Kweto logo.svg"
            alt="Kwetu Tecnologias logo"
            className="h-14 w-auto object-contain relative z-10 drop-shadow-lg transition-all duration-300 filter brightness-110"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex items-baseline gap-0.5">
            <span className="text-lg md:text-xl lg:text-2xl font-black leading-none tracking-tight">
              KWETU
            </span>
            <span className="text-lg md:text-xl lg:text-2xl font-black leading-none bg-gradient-to-r from-teal to-cyan-400 bg-clip-text text-transparent">
              
            </span>
          </div>
          <span className="text-xs md:text-sm font-light tracking-widest text-gray-400 group-hover:text-teal transition-colors duration-300 uppercase">
            Inovação & Excelência
          </span>
        </div>
      </Link>

      {/* Nav Links */}
      <div className={`hidden md:flex gap-6 lg:gap-8 font-medium`} role="menubar">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`relative text-sm lg:text-base transition-colors py-2 ${
              isActive(link.href)
                ? 'text-teal'
                : 'text-white hover:text-teal'
            } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-gradient-to-r after:from-teal after:to-transparent after:transition-all after:duration-200 ${
              isActive(link.href) ? 'after:w-full' : 'after:w-0 hover:after:w-full'
            }`}
            aria-current={isActive(link.href) ? 'page' : undefined}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* theme toggle & mobile menu button */}
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <button
          className="md:hidden text-teal hover:text-white transition-colors p-2 focus:outline-2 focus:outline-offset-2 focus:outline-teal"
          aria-label="Menu mobile"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-deep-blue bg-opacity-95 flex flex-col items-center justify-center md:hidden z-50">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl text-white py-2 hover:text-teal transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
