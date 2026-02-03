import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-blue-100 bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 text-transparent bg-clip-text mb-4 animate-gradient">
              NASH369
            </h3>
            <p className="text-slate-500 text-lg max-w-sm mb-6">
              Nous construisons les systèmes de demain pour les entrepreneurs d'aujourd'hui. Rapide, efficace, sans frais cachés.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com/nash3691215" target="_blank" rel="noopener noreferrer" className="p-2 glass-blue border border-blue-100 rounded-lg hover:border-blue-300 hover:text-blue-600 text-slate-400 transition-all shadow-sm">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
              </a>
              <a href="mailto:contact@nash369.com" className="p-2 glass-blue border border-blue-100 rounded-lg hover:border-blue-300 hover:text-blue-600 text-slate-400 transition-all shadow-sm">
                <span className="sr-only">Email</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-slate-900 font-bold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-slate-500 hover:text-blue-600 transition-colors">Accueil</Link></li>
              <li><Link href="/#services" className="text-slate-500 hover:text-blue-600 transition-colors">Services</Link></li>
              <li><Link href="/reservation" className="text-slate-500 hover:text-blue-600 transition-colors">Appel gratuit</Link></li>
              <li><Link href="/a-propos" className="text-slate-500 hover:text-blue-600 transition-colors">À propos</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 font-bold mb-4">Légal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/mentions-legales" className="text-slate-500 hover:text-blue-600 transition-colors">Mentions légales</Link></li>
              <li><Link href="/devis" className="text-slate-500 hover:text-blue-600 transition-colors">Demander un devis</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-blue-100 text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} NASH369. Tous droits réservés. Build systems. Not noise.
        </div>
      </div>
    </footer>
  )
}
