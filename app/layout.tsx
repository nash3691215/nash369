import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'NASH369 - Agence Digitale pour Micro-Entrepreneurs & PME',
  description: 'Agence digitale spécialisée pour micro-entrepreneurs, PME et micro-influenceurs. Sites web sur mesure, outils personnalisés, automatisations intelligentes. On aide les petits à capter leur vraie valeur. Devis gratuit.',
  keywords: 'agence digitale, micro-entrepreneur, PME, micro-influenceur, site web sur mesure, automatisation business, outils digitaux, développement web, agence web petites entreprises, Next.js, création site internet',
  openGraph: {
    title: 'NASH369 - Agence Digitale pour Micro-Entrepreneurs & PME',
    description: 'Solutions digitales sur mesure pour petits entrepreneurs. Sites web, automatisations, outils personnalisés. Devis gratuit.',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NASH369 - Agence Digitale',
    description: 'On aide les petits à capter leur vraie valeur. Solutions digitales sur mesure.',
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
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
