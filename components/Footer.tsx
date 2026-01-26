import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 via-amber-900 to-gray-800 text-transparent bg-clip-text mb-1">
              NASH369
            </h3>
            <p className="text-gray-600 text-sm">Build systems. Not noise.</p>
          </div>
          <div className="flex gap-8 text-sm flex-wrap justify-center">
            <Link href="/a-propos" className="text-gray-600 hover:text-gray-900 transition-colors">
              À propos
            </Link>
            <Link href="/mentions-legales" className="text-gray-600 hover:text-gray-900 transition-colors">
              Mentions légales
            </Link>
            <a href="https://twitter.com/nash3691215" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
              Twitter/X
            </a>
            <a href="mailto:contact@nash369.com" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          © 2026 NASH369. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}
