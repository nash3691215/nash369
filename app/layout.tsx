import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://nash369.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "NASH369 — Ebook gratuit : lance ton business avec l'IA en 2026 | Indie Hacker FR",
  description:
    "Guide gratuit pour micro-createurs et indie hackers francais : cree un site pro en 5 min avec l'IA, automatise ton business avec N8N et Make. Ebooks PDF actionnables, zero code requis.",
  keywords: [
    "indie hacker francais",
    "micro createur",
    "solopreneur france",
    "creer site ia",
    "creer site web intelligence artificielle",
    "automatiser business",
    "automatisation n8n",
    "automatisation make",
    "ebook business en ligne",
    "lancer business ia 2026",
    "site web hostinger",
    "claude ai site web",
    "no code france",
    "side project france",
    "gagner argent en ligne france",
    "vendre site web",
    "workflow automatisation",
    "business en ligne debutant",
    "ebook solopreneur",
    "monetiser ia"
  ],
  authors: [{ name: "NASH369" }],
  creator: "NASH369",
  publisher: "NASH369",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  alternates: {
    canonical: siteUrl
  },
  openGraph: {
    title: "NASH369 — Lance ton business avec l'IA en 2026",
    description:
      "Guide gratuit + ebooks pour indie hackers FR : cree ton site en 5 min avec l'IA, automatise ton business avec N8N. Zero code.",
    url: siteUrl,
    siteName: "NASH369",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NASH369 — Ebooks IA pour indie hackers francais"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    creator: "@nash369_",
    site: "@nash369_",
    title: "NASH369 — Lance ton business avec l'IA en 2026",
    description:
      "Guide gratuit pour micro-createurs FR. Cree ton site + automatise ton business. Zero code.",
    images: ["/og-image.png"]
  },
  category: "technology"
};

// JSON-LD Structured Data
const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "NASH369",
  url: siteUrl,
  description:
    "Ressources et ebooks pour indie hackers et micro-createurs francais : creation de sites web avec l'IA et automatisation business.",
  inLanguage: "fr",
  creator: {
    "@type": "Person",
    name: "NASH369",
    url: siteUrl
  }
};

const jsonLdProducts = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Ebooks NASH369",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "Sites Web Express — Cree un site pro en 5 min avec Claude AI",
        description:
          "Ebook PDF 22 pages : methode en 3 etapes pour creer un site professionnel avec l'IA Claude + hebergement Hostinger. 7 prompts prets a l'emploi.",
        offers: {
          "@type": "Offer",
          price: "19.90",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock"
        }
      }
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "Automatise Ton Business en 7 Jours — Guide N8N",
        description:
          "Ebook PDF 25 pages : plan jour par jour J0-J7 pour automatiser ton business avec N8N. 10 templates JSON inclus.",
        offers: {
          "@type": "Offer",
          price: "49.90",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock"
        }
      }
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Product",
        name: "Bundle : Sites Web Express + Automatise Ton Business",
        description:
          "Les deux ebooks reunis a prix reduit. Cree ton site et automatise ton business, le combo complet pour indie hackers.",
        offers: {
          "@type": "Offer",
          price: "59.90",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock"
        }
      }
    }
  ]
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Est-ce que je dois savoir coder ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non. Les deux ebooks sont concus pour les debutants complets. Tu suis les etapes, tu copies les prompts ou les templates, et tu obtiens un resultat pro sans ecrire une ligne de code."
      }
    },
    {
      "@type": "Question",
      name: "C'est quoi exactement le contenu des ebooks ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ebook 1 (22 pages) : methode en 3 etapes pour creer un site avec l'IA Claude + Hostinger, 7 prompts prets a l'emploi. Ebook 2 (25 pages) : plan J0-J7 pour automatiser ton business avec N8N, 10 workflows JSON."
      }
    },
    {
      "@type": "Question",
      name: "Pourquoi le prix va augmenter ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "C'est un tarif de lancement pour les premiers acheteurs. Dans 14 jours, les prix reviennent a leur valeur normale (39,90 EUR, 99,90 EUR, 119,90 EUR)."
      }
    },
    {
      "@type": "Question",
      name: "Je recois les ebooks comment ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Immediatement apres paiement, tu recois un email avec le lien de telechargement du PDF. Tu peux le lire sur n'importe quel appareil."
      }
    },
    {
      "@type": "Question",
      name: "Ca marche aussi pour un side-project ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Que tu lances un side-project, une micro-entreprise ou que tu optimises un business existant, les methodes s'adaptent a toutes les tailles."
      }
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="canonical" href={siteUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProducts) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
