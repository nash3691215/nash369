'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 glass-dark border-b border-amber-500/10 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo futuriste */}
          <Link href="/" className="group flex items-center gap-2">
            <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 text-transparent bg-clip-text transition-all group-hover:scale-105 animate-gradient">
              NASH369
            </div>
            <span className="hidden md:inline-block px-2 py-1 glass-dark border border-amber-500/30 rounded text-xs font-bold text-amber-400">
              AGENCE
            </span>
          </Link>

          {/* Navigation futuriste */}
          <nav className="flex items-center gap-2 md:gap-4">
            <Link
              href="/"
              className="px-3 md:px-4 py-2 text-sm font-medium glass-dark text-amber-400 border border-amber-500/30 rounded-lg transition-all hover:border-amber-500/50 hover:glow-amber"
            >
              Accueil
            </Link>
            <Link
              href="/#services"
              className="px-3 md:px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
            >
              Services
            </Link>
            <Link
              href="/ebooks"
              className="px-3 md:px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
            >
              eBooks
            </Link>
            <Link
              href="/a-propos"
              className="hidden md:block px-3 md:px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
            >
              À propos
            </Link>
            <Link
              href="/devis"
              className="px-4 md:px-6 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-gray-900 text-sm font-bold rounded-lg transition-all transform hover:scale-105 glow-amber-strong"
            >
              Devis gratuit
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
