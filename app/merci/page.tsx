import Link from 'next/link'
import { CheckCircle, Download } from 'lucide-react'

export const metadata = {
  title: 'Merci pour ton achat - NASH369',
  description: 'Tu vas recevoir ton ebook par email.',
}

export default function MerciPage() {
  return (
    <div className="min-h-screen bg-slate-900 gradient-mesh flex items-center justify-center px-6 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <CheckCircle className="w-24 h-24 text-green-400 mx-auto mb-8" />

        <h1 className="text-4xl font-bold font-display text-slate-100 mb-4">
          Merci pour ton achat ! 🎉
        </h1>

        <p className="text-xl text-slate-400 mb-8">
          Tu vas recevoir ton ebook par email dans quelques minutes.
        </p>

        <div className="glass p-8 rounded-xl mb-8 border border-green-500/30">
          <Download className="w-12 h-12 text-orange-500 mx-auto mb-4" />
          <h2 className="text-lg font-bold text-slate-100 mb-2">Téléchargement en cours</h2>
          <p className="text-slate-400 mb-4">
            Si tu ne reçois rien dans 5 minutes, vérifie tes spams ou contacte-moi.
          </p>
          <a href="mailto:noureddine@nash369.com" className="text-orange-500 hover:text-orange-600 font-semibold">
            noureddine@nash369.com
          </a>
        </div>

        <div className="space-y-4">
          <p className="text-slate-400">
            En attendant, voici quelques prochaines étapes :
          </p>
          <ul className="text-left max-w-md mx-auto space-y-2 text-slate-400 text-sm">
            <li className="flex items-center gap-2">
              <span className="text-orange-500">✓</span>
              Lis le guide du début à la fin
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange-500">✓</span>
              Applique les workflows N8N
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange-500">✓</span>
              Rejoins le groupe privé Slack
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange-500">✓</span>
              Contacte-moi si tu as besoin d'aide
            </li>
          </ul>
        </div>

        <Link
          href="/"
          className="mt-12 inline-block bg-orange-500 hover:bg-orange-600 text-slate-900 px-8 py-3 rounded-lg font-semibold transition"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  )
}
