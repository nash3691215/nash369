import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl md:text-3xl font-black bg-gradient-to-r from-indigo-600 to-emerald-600 text-transparent bg-clip-text">
              NASH369
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
            >
              Accueil
            </Link>
            <Link
              href="/#produits"
              className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
            >
              Produits
            </Link>
            <Link
              href="/tarifs"
              className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
            >
              Tarifs
            </Link>
            <Link
              href="/devis"
              className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-emerald-600 hover:from-indigo-500 hover:to-emerald-500 text-white rounded-lg font-bold transition-all shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Devis gratuit
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Link
              href="/devis"
              className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-emerald-600 text-white rounded-lg font-bold text-sm"
            >
              Devis
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
