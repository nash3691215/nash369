import Link from 'next/link';
import { useTranslations } from 'next-intl';
import products from '@/data/products.json';
import LanguageSelector from '@/components/LanguageSelector';

export default function Home() {
  const t = useTranslations();

  const coreProduct = products.products.find(p => p.priority === 'core');
  const secondaryProduct = products.products.find(p => p.priority === 'secondary');
  const leadMagnet = products.products.find(p => p.priority === 'lead');

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-white">
        <div className="absolute top-4 right-4 z-50">
          <LanguageSelector />
        </div>

        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-indigo-100 border border-indigo-200 rounded-full text-indigo-700 text-sm font-semibold">
              {t('hero.badge')}
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight text-gray-900">
              {t('hero.title')}
              <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                {t('hero.titleGradient')}
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>

            <Link
              href={`/produits/${coreProduct?.id}`}
              className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-12 md:px-16 py-5 md:py-6 rounded-xl font-black text-lg md:text-xl transition-all transform hover:scale-105 shadow-2xl"
            >
              {t('hero.cta')}
            </Link>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto mt-16">
              <div className="text-center p-4 md:p-6 bg-white rounded-xl shadow-sm">
                <div className="text-2xl md:text-4xl font-bold text-indigo-600 mb-1 md:mb-2">+500</div>
                <div className="text-gray-600 text-xs md:text-sm">{t('hero.stats.entrepreneurs')}</div>
              </div>
              <div className="text-center p-4 md:p-6 bg-white rounded-xl shadow-sm">
                <div className="text-2xl md:text-4xl font-bold text-purple-600 mb-1 md:mb-2">24/7</div>
                <div className="text-gray-600 text-xs md:text-sm">{t('hero.stats.systems')}</div>
              </div>
              <div className="text-center p-4 md:p-6 bg-white rounded-xl shadow-sm">
                <div className="text-2xl md:text-4xl font-bold text-pink-600 mb-1 md:mb-2">ROI x10</div>
                <div className="text-gray-600 text-xs md:text-sm">{t('hero.stats.roi')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problème → Solution */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-4 md:space-y-6 bg-red-50 border border-red-200 rounded-2xl p-6 md:p-8">
                <div className="text-red-600 text-xs md:text-sm font-bold uppercase tracking-wider">{t('problem.badge')}</div>
                <h2 className="text-2xl md:text-4xl font-bold leading-tight text-gray-900">
                  {t('problem.title')}
                </h2>
                <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-lg md:text-xl mt-1 flex-shrink-0">✗</span>
                    <span>{t('problem.items.time')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-lg md:text-xl mt-1 flex-shrink-0">✗</span>
                    <span>{t('problem.items.operational')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-lg md:text-xl mt-1 flex-shrink-0">✗</span>
                    <span>{t('problem.items.start')}</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 md:space-y-6 bg-green-50 border border-green-200 rounded-2xl p-6 md:p-8">
                <div className="text-green-600 text-xs md:text-sm font-bold uppercase tracking-wider">{t('solution.badge')}</div>
                <h2 className="text-2xl md:text-4xl font-bold leading-tight text-gray-900">
                  {t('solution.title')}
                </h2>
                <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-lg md:text-xl mt-1 flex-shrink-0">✓</span>
                    <span>{t('solution.items.automate')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-lg md:text-xl mt-1 flex-shrink-0">✓</span>
                    <span>{t('solution.items.scale')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-lg md:text-xl mt-1 flex-shrink-0">✓</span>
                    <span>{t('solution.items.frameworks')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Product - Hero Section */}
      {coreProduct && (
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block mb-4 px-4 py-2 bg-indigo-100 border border-indigo-200 rounded-full text-indigo-700 text-sm font-semibold">
                  {t('products.badge')}
                </div>
                <h2 className="text-3xl md:text-5xl font-black mb-4 text-gray-900">
                  {t('products.title')} <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">{t('products.titleGradient')}</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-2">
                  {t('products.subtitle')}
                </p>
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-bold text-indigo-600">
                  {t('products.subtitleBold')}
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-indigo-200 shadow-2xl">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black mb-4 text-gray-900">
                      {coreProduct.name}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {coreProduct.description}
                    </p>
                    <div className="space-y-3 mb-8">
                      {coreProduct.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="text-green-500 text-xl mt-1 flex-shrink-0">✓</span>
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
                    <div className="text-center mb-6">
                      <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text mb-2">
                        {t('products.price')}
                      </div>
                      <p className="text-sm text-gray-600">{t('products.features.secure')}</p>
                    </div>

                    <Link
                      href={`/produits/${coreProduct.id}`}
                      className="block w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-center py-5 px-8 rounded-xl font-black text-xl transition-all transform hover:scale-105 shadow-lg"
                    >
                      {t('products.cta')}
                    </Link>

                    <div className="mt-6 p-4 bg-white rounded-xl border border-green-200">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">🛡️</span>
                        <span className="font-bold text-gray-900">{t('guarantee.days')}</span>
                      </div>
                      <p className="text-sm text-gray-600">{t('guarantee.simple')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Témoignages */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-gray-900">
              {t('testimonials.title')} <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">{t('testimonials.titleGradient')}</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              {t('testimonials.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg md:text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed italic">
                &quot;{t('testimonials.items.marc.quote')}&quot;
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div>
                  <div className="font-bold text-gray-900 text-sm md:text-base">{t('testimonials.items.marc.name')}</div>
                  <div className="text-gray-600 text-xs md:text-sm">{t('testimonials.items.marc.role')}</div>
                </div>
                <div className="text-green-600 font-black text-sm md:text-base">{t('testimonials.items.marc.result')}</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg md:text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed italic">
                &quot;{t('testimonials.items.sarah.quote')}&quot;
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div>
                  <div className="font-bold text-gray-900 text-sm md:text-base">{t('testimonials.items.sarah.name')}</div>
                  <div className="text-gray-600 text-xs md:text-sm">{t('testimonials.items.sarah.role')}</div>
                </div>
                <div className="text-green-600 font-black text-sm md:text-base">{t('testimonials.items.sarah.result')}</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg md:text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed italic">
                &quot;{t('testimonials.items.thomas.quote')}&quot;
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div>
                  <div className="font-bold text-gray-900 text-sm md:text-base">{t('testimonials.items.thomas.name')}</div>
                  <div className="text-gray-600 text-xs md:text-sm">{t('testimonials.items.thomas.role')}</div>
                </div>
                <div className="text-green-600 font-black text-sm md:text-base">{t('testimonials.items.thomas.result')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Product - Subtle */}
      {secondaryProduct && (
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="inline-block mb-2 px-3 py-1 bg-purple-100 rounded-full text-purple-700 text-xs font-semibold">
                      {t('products.secondary.badge')}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900">
                      {secondaryProduct.name}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      {secondaryProduct.description}
                    </p>
                  </div>
                  <Link
                    href={`/produits/${secondaryProduct.id}`}
                    className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-xl font-bold transition-all flex-shrink-0"
                  >
                    {coreProduct?.price}{t('common.currency')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Garantie */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-3xl p-8 md:p-12 text-center shadow-xl">
              <div className="text-5xl md:text-6xl mb-6">🛡️</div>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
                {t('guarantee.title')}
              </h2>
              <div className="text-4xl md:text-6xl font-black text-green-600 mb-6">
                {t('guarantee.days')}
              </div>
              <p className="text-lg md:text-2xl text-gray-700 mb-4 leading-relaxed max-w-2xl mx-auto">
                {t('guarantee.description')}
              </p>
              <p className="text-xl md:text-2xl font-bold text-green-600 mb-8">
                {t('guarantee.simple')}
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-left max-w-2xl mx-auto">
                <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-green-200">
                  <span className="text-green-500 text-xl mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm md:text-base font-semibold">{t('guarantee.features.refund')}</span>
                </div>
                <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-green-200">
                  <span className="text-green-500 text-xl mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm md:text-base font-semibold">{t('guarantee.features.noQuestions')}</span>
                </div>
                <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-green-200">
                  <span className="text-green-500 text-xl mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm md:text-base font-semibold">{t('guarantee.features.keepBonus')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              {t('finalCta.title')}
            </h2>
            <p className="text-lg md:text-2xl mb-10 opacity-90 leading-relaxed">
              {t('finalCta.subtitle')}
            </p>
            <Link
              href={`/produits/${coreProduct?.id}`}
              className="inline-block bg-white text-indigo-600 px-12 md:px-16 py-5 md:py-7 rounded-xl font-black text-lg md:text-2xl hover:bg-gray-50 transition-all transform hover:scale-105 shadow-2xl"
            >
              {t('finalCta.cta')}
            </Link>
          </div>
        </div>
      </section>

      {/* Lead Magnet - End of page */}
      {leadMagnet && (
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-black mb-4 text-gray-900">
                {t('leadMagnet.title')} <span className="text-indigo-600">{t('leadMagnet.titleGradient')}</span>
              </h3>
              <p className="text-gray-600 mb-6">
                {t('leadMagnet.subtitle')}
              </p>
              <Link
                href="/prompts"
                className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-10 py-4 rounded-xl font-bold transition-all"
              >
                {t('leadMagnet.cta')}
              </Link>
              <p className="text-gray-500 text-sm mt-4 flex items-center justify-center gap-6 flex-wrap">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                  <span className="font-semibold">{t('leadMagnet.features.noCard')}</span>
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                  <span className="font-semibold">{t('leadMagnet.features.instant')}</span>
                </span>
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center md:text-left mb-8">
              <h3 className="text-2xl md:text-3xl font-black mb-3">NASH369</h3>
              <p className="text-gray-400 text-sm md:text-base">{t('footer.tagline')}</p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800 gap-4">
              <p className="text-gray-400 text-xs md:text-sm">{t('footer.copyright')}</p>
              <div className="flex gap-6 text-xs md:text-sm">
                <a href="https://x.com/nash369_" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.links.twitter')}
                </a>
                <a href="mailto:nash369@proton.me" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.links.contact')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
