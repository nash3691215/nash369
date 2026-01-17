import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NASH369 - Produits Digitaux pour Entrepreneurs',
  description: 'Formations, eBooks et outils pour développer ton business en ligne.',
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
