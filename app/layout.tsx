import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NASH369 - Automatise ton business',
  description: 'Crée des systèmes d\'automatisation IA + N8N pour entrepreneurs. Scale tes revenus. Libère ton temps.',
  keywords: 'automatisation, N8N, IA, business, entrepreneurs, systems',
  openGraph: {
    title: 'NASH369 - Automatise ton business',
    description: 'Crée des systèmes d\'automatisation IA + N8N pour entrepreneurs',
    type: 'website',
    url: 'https://nash369.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NASH369 - Automatise ton business',
    description: 'Crée des systèmes d\'automatisation IA + N8N pour entrepreneurs',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' font-weight='bold' fill='%23F97316'>N</text></svg>" />
      </head>
      <body className="bg-slate-900 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  )
}
