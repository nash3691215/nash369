'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/30' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold font-display text-orange-500">
          NASH369
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('services')} className="text-slate-300 hover:text-orange-500 transition">Services</button>
          <button onClick={() => scrollToSection('boutique')} className="text-slate-300 hover:text-orange-500 transition">Formations</button>
          <button onClick={() => scrollToSection('resultats')} className="text-slate-300 hover:text-orange-500 transition">Résultats</button>
          <button onClick={() => scrollToSection('contact')} className="text-slate-300 hover:text-orange-500 transition">Contact</button>
        </nav>

        <button
          onClick={() => scrollToSection('services')}
          className="bg-orange-500 hover:bg-orange-600 text-slate-900 px-6 py-2 rounded-lg font-semibold transition"
        >
          Audit gratuit
        </button>
      </div>
    </header>
  )
}
