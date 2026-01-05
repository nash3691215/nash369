import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "NASH369 — Outils & Mini-SaaS pour PME",
  description: "Outils et mini-SaaS pour piloter votre PME sans friction. Automatisation, reporting et dashboards sur mesure.",
  openGraph: {
    title: "NASH369 — Outils & Mini-SaaS pour PME",
    description: "Outils et mini-SaaS pour piloter votre PME sans friction.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
