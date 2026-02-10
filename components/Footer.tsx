'use client'

import Link from 'next/link'
import { Twitter, Mail, Linkedin } from 'lucide-react'

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-slate-950/50 border-t border-slate-700/30 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold font-display text-orange-500 mb-4">NASH369</h3>
            <p className="text-slate-400 text-sm">
              Automatise ton business. Libère ton temps. Scale tes revenus.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-slate-100 mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('services')} className="text-slate-400 hover:text-orange-500 transition text-sm">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('boutique')} className="text-slate-400 hover:text-orange-500 transition text-sm">
                  Formations
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('resultats')} className="text-slate-400 hover:text-orange-500 transition text-sm">
                  Résultats
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-slate-400 hover:text-orange-500 transition text-sm">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-slate-100 mb-4">Légal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/mentions-legales" className="text-slate-400 hover:text-orange-500 transition text-sm">
                  Mentions légales
                </Link>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-orange-500 transition text-sm">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-orange-500 transition text-sm">
                  CGV
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-slate-100 mb-4">Suivez-moi</h4>
            <div className="flex gap-4">
              <a href="https://twitter.com/nash369_" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:noureddine@nash369.com" className="text-slate-400 hover:text-orange-500 transition">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-600 transition">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-700/30 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-slate-500 text-sm">
            © 2026 NASH369. Tous droits réservés.
          </p>
          <p className="text-orange-500 font-semibold text-sm mt-4 sm:mt-0">
            Build systems. Not noise.
          </p>
        </div>
      </div>
    </footer>
  )
}
