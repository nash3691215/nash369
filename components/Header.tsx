'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo avec dégradé doré */}
          <Link href="/" className="group flex items-center gap-2">
            <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-gray-900 via-amber-900 to-gray-800 text-transparent bg-clip-text transition-all group-hover:scale-105">
              NASH369
            </div>
            <span className="hidden md:inline-block px-2 py-1 bg-amber-50 border border-amber-200 rounded text-xs font-bold text-amber-800">
              AGENCE
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-2 md:gap-4">
            <Link
              href="/"
              className="px-3 md:px-4 py-2 text-sm font-medium bg-amber-50 text-amber-700 border border-amber-200 rounded-lg transition-all"
            >
              Accueil
            </Link>
            <Link
              href="/#services"
              className="px-3 md:px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all"
            >
              Services
            </Link>
            <Link
              href="/ebooks"
              className="px-3 md:px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all"
            >
              Ebooks
            </Link>
            <Link
              href="/a-propos"
              className="hidden md:block px-3 md:px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all"
            >
              À propos
            </Link>
            <Link
              href="/devis"
              className="px-4 md:px-6 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-sm font-bold rounded-lg transition-all transform hover:scale-105 shadow-sm hover:shadow-md"
            >
              Devis gratuit
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
