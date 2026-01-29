'use client'

import Link from 'next/link'
import products from '@/data/products.json'
import Footer from '@/components/Footer'

export default function EbooksPage() {
    const formations = products.products.filter(p => p.id !== 'guide-sites-5min' && p.priority !== 'hidden')

    return (
        <main className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="text-center mb-16">
                    <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-amber-100 to-amber-50 border border-amber-200 rounded-full">
                        <span className="text-sm font-bold bg-gradient-to-r from-amber-600 to-amber-800 text-transparent bg-clip-text">
                            EBOOKS & FORMATIONS
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 via-amber-900 to-gray-800 text-transparent bg-clip-text">
                        Le savoir pour réussir
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Les méthodes exactes pour monétiser ton audience et automatiser ton business sans coder.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {formations.map((product) => (
                        <Link
                            key={product.id}
                            href={`/produits/${product.id}`}
                            className="group bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-amber-300 transition-all hover:shadow-xl"
                        >
                            <div className="text-4xl mb-4">
                                {product.type === 'ebook' && '💰'}
                                {product.type === 'formation' && '🚀'}
                            </div>

                            <h3 className="text-xl font-bold mb-3 text-gray-900">
                                {product.name}
                            </h3>

                            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                                {product.description}
                            </p>

                            <div className="space-y-2 mb-6 text-sm text-gray-700">
                                {product.benefits.slice(0, 3).map((benefit, i) => (
                                    <div key={i} className="flex items-start gap-2">
                                        <span className="text-amber-600">✓</span>
                                        <span>{benefit}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-6 border-t border-gray-200">
                                {product.originalPrice && (
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-lg text-gray-400 line-through">{product.originalPrice.toFixed(2).replace('.', ',')}€</span>
                                        <span className="px-2 py-0.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold rounded shadow-sm">-50%</span>
                                    </div>
                                )}
                                <p className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 text-transparent bg-clip-text mb-4">
                                    {product.price.toFixed(2).replace('.', ',')}€
                                </p>
                                <div className="bg-gradient-to-r from-amber-500 to-amber-600 group-hover:from-amber-600 group-hover:to-amber-700 text-white text-center py-3 rounded-lg font-bold transition-all shadow-md hover:shadow-lg">
                                    Accéder maintenant →
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    )
}
