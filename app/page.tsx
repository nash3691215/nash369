import Link from 'next/link'
import products from '@/data/products.json'

export default function Home() {
  const paidProducts = products.products.filter(p => p.id !== 'prompts')
  const leadMagnet = products.products.find(p => p.id === 'prompts')

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Transforme Ton Trafic X<br />
          <span className="text-indigo-600">En Revenue</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Formations, eBooks et outils pour entrepreneurs qui veulent passer à l'action.
        </p>

        {/* CTA Lead Magnet */}
        {leadMagnet && (
          <div className="bg-indigo-600 text-white rounded-2xl p-8 max-w-xl mx-auto mb-12 shadow-xl">
            <h3 className="text-2xl font-bold mb-3">🎁 {leadMagnet.name}</h3>
            <p className="mb-6">{leadMagnet.description}</p>
            <Link
              href="/prompts"
              className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Télécharger Gratuitement
            </Link>
          </div>
        )}
      </section>

      {/* Produits */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Mes Produits</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {paidProducts.map((product) => (
            <Link
              key={product.id}
              href={product.type === 'saas' ? product.external_url || '#' : `/produits/${product.id}`}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition border border-gray-100"
            >
              <div className="text-3xl mb-4">
                {product.type === 'ebook' && '📚'}
                {product.type === 'formation' && '🎓'}
                {product.type === 'saas' && '⚡'}
              </div>
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
              <ul className="text-sm text-gray-500 mb-4 space-y-1">
                {product.benefits.map((benefit, i) => (
                  <li key={i}>✓ {benefit}</li>
                ))}
              </ul>
              <div className="text-2xl font-bold text-indigo-600">
                {product.price_premium ? (
                  <span>{product.price}€ - {product.price_premium}€/mois</span>
                ) : (
                  <span>{product.price}€</span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-2">NASH<span className="text-indigo-400">369</span></h3>
          <p className="text-gray-400 mb-4">Produits digitaux pour entrepreneurs</p>
          <div className="flex justify-center gap-4">
            <a href="https://twitter.com/nash3691215" target="_blank" className="text-gray-400 hover:text-white">
              Twitter/X
            </a>
            <a href="mailto:contact@nash369.com" className="text-gray-400 hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
