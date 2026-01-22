import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between" style={{ height: '15px' }}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 group">
            <span className="font-black bg-gradient-to-r from-indigo-600 to-emerald-600 text-transparent bg-clip-text" style={{ fontSize: '10px', lineHeight: '15px' }}>
              NASH369
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <Link
              href="/guide-sites-5min"
              className="px-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded font-bold transition-all"
              style={{ fontSize: '8px', lineHeight: '15px', paddingTop: '1px', paddingBottom: '1px' }}
            >
              🎁 Guide gratuit
            </Link>
            <Link
              href="/"
              className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
              style={{ fontSize: '8px', lineHeight: '15px' }}
            >
              Accueil
            </Link>
            <Link
              href="/#produits"
              className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
              style={{ fontSize: '8px', lineHeight: '15px' }}
            >
              Produits
            </Link>
            <Link
              href="/tarifs"
              className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
              style={{ fontSize: '8px', lineHeight: '15px' }}
            >
              Tarifs
            </Link>
            <Link
              href="/devis"
              className="px-2 bg-gradient-to-r from-indigo-600 to-emerald-600 hover:from-indigo-500 hover:to-emerald-500 text-white rounded font-bold transition-all"
              style={{ fontSize: '8px', lineHeight: '15px', paddingTop: '1px', paddingBottom: '1px' }}
            >
              Devis gratuit
            </Link>
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-1">
            <Link
              href="/guide-sites-5min"
              className="px-1 bg-yellow-400 text-gray-900 rounded font-bold"
              style={{ fontSize: '8px', lineHeight: '15px', paddingTop: '1px', paddingBottom: '1px' }}
            >
              🎁
            </Link>
            <Link
              href="/devis"
              className="px-2 bg-gradient-to-r from-indigo-600 to-emerald-600 text-white rounded font-bold"
              style={{ fontSize: '8px', lineHeight: '15px', paddingTop: '1px', paddingBottom: '1px' }}
            >
              Devis
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
