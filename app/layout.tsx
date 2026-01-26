import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NASH369 - Sites & Automatisations pour Créateurs & Micro-Entrepreneurs',
  description: 'Tu es créateur de contenu, micro-influenceur ou petit entrepreneur ? Transforme ton audience en revenus avec des sites e-commerce automatisés. Formation + services clés en main. Stack moderne gratuite (Next.js, Stripe). 0€/mois, livré en 24h.',
  keywords: 'micro-influenceur, créateur contenu, entrepreneur digital, site e-commerce, automatisation vente, formation en ligne, monétiser audience, revenus passifs, Next.js, Stripe, sans code, business en ligne',
  openGraph: {
    title: 'NASH369 - Sites & Automatisations pour Créateurs & Micro-Entrepreneurs',
    description: 'Transforme ton audience en revenus avec des sites automatisés. 0€/mois, livré en 24h.',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NASH369 - Sites & Automatisations pour Créateurs',
    description: 'Transforme ton audience en revenus. Sites e-commerce automatisés. 0€/mois.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        {/* Google Analytics */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
            `,
          }}
        />
        <script src="https://js.stripe.com/v3/" async></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
