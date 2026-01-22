import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between" style={{ height: '60px' }}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl md:text-2xl font-black bg-gradient-to-r from-indigo-600 to-emerald-600 text-transparent bg-clip-text">
              NASH369
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/guide-sites-5min"
              className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-lg font-bold text-sm transition-all shadow-sm hover:shadow-md"
            >
              🎁 Guide gratuit
            </Link>
            <Link
              href="/"
              className="text-gray-600 hover:text-indigo-600 font-medium transition-colors text-sm"
            >
              Accueil
            </Link>
            <Link
              href="/#produits"
              className="text-gray-600 hover:text-indigo-600 font-medium transition-colors text-sm"
            >
              Produits
            </Link>
            <Link
              href="/a-propos"
              className="text-gray-600 hover:text-indigo-600 font-medium transition-colors text-sm"
            >
              À propos
            </Link>
            <Link
              href="/produits/site-cle-en-main"
              className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-emerald-600 hover:from-indigo-500 hover:to-emerald-500 text-white rounded-lg font-bold text-sm transition-all shadow-md hover:shadow-lg"
            >
              Site clé en main
            </Link>
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-2">
            <Link
              href="/guide-sites-5min"
              className="px-3 py-2 bg-yellow-400 text-gray-900 rounded-lg font-bold text-sm"
            >
              🎁
            </Link>
            <Link
              href="/produits/site-cle-en-main"
              className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-emerald-600 text-white rounded-lg font-bold text-sm"
            >
              Site
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
