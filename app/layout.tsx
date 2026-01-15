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
      <body>{children}</body>
    </html>
  )
}
