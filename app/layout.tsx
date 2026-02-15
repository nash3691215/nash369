import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://nash369.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "NASH369 — Profite de l'IA en 2026 pour gagner du temps et de l'argent",
  description:
    "Guide gratuit : 5 systemes concrets pour automatiser ton business avec l'IA. Site pro en 5 min, reseaux sociaux en autopilot, lead gen, avis Google, CRM auto. Ebooks premium pour freelances, graphistes, vendeurs et solopreneurs.",
  keywords: [
    "indie hacker francais",
    "automatiser business ia",
    "creer site ia claude",
    "automatisation n8n make",
    "solopreneur france",
    "freelance automatisation",
    "business en ligne 2026",
    "site web hostinger ia",
    "lead generation automatique",
    "avis google automatises",
    "crm notion automatise",
    "ebook business ia",
    "no code france",
    "side project monetiser",
    "gagner argent ia 2026",
    "workflow automatisation make n8n",
    "graphiste freelance outils",
    "tiktok shop automatisation",
    "nash369"
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
    title: "NASH369 — Profite de l'IA en 2026 pour gagner du temps et de l'argent",
    description:
      "Guide gratuit + ebooks premium : 5 systemes concrets pour automatiser ton business. Site en 5 min, leads auto, avis Google, CRM. Pour freelances et solopreneurs.",
    url: siteUrl,
    siteName: "NASH369",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NASH369 — Profite de l'IA en 2026"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    creator: "@nash369_",
    site: "@nash369_",
    title: "NASH369 — Profite de l'IA en 2026",
    description:
      "Guide gratuit : 5 systemes pour automatiser ton business avec l'IA. Ebooks premium pour freelances et solopreneurs.",
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
    "Ressources et ebooks pour freelances, graphistes et solopreneurs : 5 automatisations business avec l'IA, N8N et Make.",
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
        name: "Trouve Tes Clients — Prospection, Closing, Marketing",
        description:
          "Ebook PDF : 50 prospects en 1h, scripts DM/email, methode de closing en 15 min, pricing, template Notion.",
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
        name: "Automatise Ton Business en 7 Jours",
        description:
          "Ebook PDF + templates : site pro J1, 10 workflows N8N/Make J2-J6, templates JSON importables, prompts Claude optimises. Support email 30 jours.",
        offers: {
          "@type": "Offer",
          price: "79.00",
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
        name: "Bundle : Trouve Tes Clients + Automatise Ton Business",
        description:
          "Les deux ebooks reunis. Trouve tes clients + automatise tout. Le combo complet pour partir de zero.",
        offers: {
          "@type": "Offer",
          price: "89.00",
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
      name: "C'est quoi exactement ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un guide gratuit de 5 pages qui te montre 5 automatisations concretes pour lancer ou optimiser ton business avec l'IA. Plus deux ebooks premium pour passer a l'action."
      }
    },
    {
      "@type": "Question",
      name: "C'est pour qui ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Graphistes, vendeurs TikTok/Insta, freelances, consultants, indie hackers, solopreneurs. Que tu debutes ou que t'aies deja un business."
      }
    },
    {
      "@type": "Question",
      name: "J'ai besoin de savoir coder ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non. Zero code requis. Tout est explique pas a pas. Si tu sais utiliser un navigateur web, tu peux suivre."
      }
    },
    {
      "@type": "Question",
      name: "Les prix vont augmenter ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. C'est une offre de lancement. Les prix augmentent dans 14 jours. Trouve Tes Clients passe a 39,90 EUR, Automatise passe a 149 EUR."
      }
    },
    {
      "@type": "Question",
      name: "Pourquoi prendre le bundle ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Parce que les deux guides sont complementaires. Tu trouves tes clients avec le premier, puis tu automatises tout avec le deuxieme. Et tu economises 100 EUR."
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
