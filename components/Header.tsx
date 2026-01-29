'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-blue-100/50 bg-white/80 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black text-white text-xl transition-transform group-hover:rotate-12 shadow-lg shadow-blue-600/20">
              N
            </div>
            <div className="text-2xl font-black tracking-tighter text-slate-900">
              NASH369
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors">Accueil</Link>
            <Link href="/#services" className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors">Services</Link>
            <Link href="/a-propos" className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors">À propos</Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/devis"
              className="px-6 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-full transition-all hover:bg-blue-700 hover:scale-105 shadow-md shadow-blue-600/20"
            >
              Appel découverte gratuit
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
