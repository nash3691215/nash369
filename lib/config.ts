export const CTA_LINKS = {
  EBOOK_HOSTINGER_URL: "https://buy.stripe.com/aFabJ33WCevCgSearGcV200",
  EBOOK_BUSINESS_URL: "https://buy.stripe.com/28E14pgJoafm1XkczOcV201",
  EBOOK_BUNDLE_URL: "https://buy.stripe.com/00wcN79gW4V231oeHWcV202"
};

export const AFFILIATE_LINKS = {
  HOSTINGER: "https://hostinger.fr?REFERRALCODE=MGPTOOLSBMYZ",
  N8N: "#", // lien affilie N8N a venir
  MAKE: "https://www.make.com/en/register?pc=nash369"
};

export const leadMagnet = {
  badge: "Guide gratuit 2026",
  title: "Profite de l'IA en 2026 pour optimiser ou lancer ton business",
  subtitle: "Recois un ebook gratuit avec les strategies concretes pour creer ton site et automatiser ton business. Zero bullshit, que de l'actionnable.",
  emailPlaceholder: "ton@email.com",
  emailCta: "Recevoir l'ebook gratuit",
  emailSuccess: "C'est envoye ! Verifie ta boite mail.",
  pillars: [
    {
      icon: "🌐",
      title: "Cree ton site — ta vitrine business",
      badge: "Pilier 1 — Site web",
      points: [
        "En 2026, ne pas avoir de site = ne pas exister. 81% des clients recherchent en ligne avant d'acheter.",
        "Avec l'IA (Claude) + Hostinger, tu crees un site pro en 5 minutes. Zero code, zero agence, zero attente.",
        "Un site = credibilite, leads 24/7, et une base pour vendre tes services ou produits en automatique.",
        "Tu peux meme creer des sites pour d'autres et facturer 500-2000EUR par site. Le cout reel : moins de 3EUR/mois d'hebergement."
      ],
      cta: {
        label: "Commencer avec Hostinger",
        link: "HOSTINGER" as const
      }
    },
    {
      icon: "🤖",
      title: "Automatise — ton business tourne sans toi",
      badge: "Pilier 2 — Automatisation",
      points: [
        "L'automatisation n'est plus un luxe, c'est la norme. Les entrepreneurs qui n'automatisent pas perdent 15h/semaine en taches repetitives.",
        "N8N (gratuit et open-source) connecte +400 apps : reseaux sociaux, emails, CRM, factures, leads — tout en autopilot.",
        "L'IA genere ton contenu, qualifie tes leads, repond a tes clients. Tu configures une fois, ca tourne 24/7.",
        "Alternative : Make (Integromat) pour ceux qui preferent une interface encore plus visuelle."
      ],
      cta: {
        label: "Decouvrir N8N",
        link: "N8N" as const
      },
      ctaSecondary: {
        label: "Ou essayer Make",
        link: "MAKE" as const
      }
    }
  ],
  bottom: "Envie d'aller plus loin ? Nos ebooks payants te donnent la methode complete, pas a pas, pour tout mettre en place en 7 jours."
};

export const hero = {
  title: "Lance ton business en ligne. Sans code. Sans agence.",
  subtitle:
    "Deux ebooks pour creer ton site pro en 5 minutes et automatiser ton business en 7 jours avec l'IA et N8N."
};

export const bullets = [
  "Creer un site professionnel en 5 minutes avec Claude AI + Hostinger, sans une ligne de code.",
  "Automatiser tes reseaux sociaux, emails, CRM, factures et leads avec N8N — jour par jour.",
  "7 prompts prets a l'emploi + 10 templates N8N JSON importables en un clic."
];

export const ebookDetails = [
  {
    title: "Sites Web Express",
    subtitle: "Cree ton site pro en 5 minutes",
    pages: "22 pages",
    chapters: [
      "La methode en 3 etapes : Brief, Generation, Deploy",
      "Briefer Claude AI comme un pro (template ultime)",
      "Deployer sur Hostinger pas a pas",
      "7 prompts prets a l'emploi (landing, restaurant, portfolio...)",
      "Optimisation mobile, SEO et formulaires",
      "Bonus : automatiser avec N8N"
    ]
  },
  {
    title: "Automatise Ton Business en 7 Jours",
    subtitle: "Le guide N8N pour bosser moins et gagner plus",
    pages: "25 pages",
    chapters: [
      "Jour 0 : Installer N8N (cloud ou self-hosted gratuit)",
      "Jour 1 : Reseaux sociaux en autopilot (contenu IA)",
      "Jour 2 : Generation de leads (capture + qualification IA)",
      "Jour 3 : Avis Google automatiques (200+ avis)",
      "Jour 4 : Email marketing automatise (sequences + relances)",
      "Jour 5 : CRM et suivi client sans effort",
      "Jour 6 : Facturation et comptabilite en autopilot",
      "Jour 7 : Dashboard de monitoring complet",
      "Bonus : 10 templates JSON importables"
    ]
  }
];

export const pricing = [
  {
    name: "Sites Web Express",
    price: 19.9,
    originalPrice: 39.9,
    description: "Le guide complet pour creer un site pro en 5 minutes avec Claude AI + Hostinger. Zero code.",
    features: [
      "22 pages — methode en 3 etapes",
      "7 prompts prets a copier-coller",
      "Guide Hostinger pas a pas avec captures",
      "Optimisation mobile + SEO incluse",
      "Bonus : automatisation N8N"
    ],
    cta: "EBOOK_HOSTINGER_URL",
    badge: null
  },
  {
    name: "Automatise Ton Business",
    price: 49.9,
    originalPrice: 99.9,
    description: "Plan jour par jour pour automatiser tout ton business avec N8N. Reseaux, leads, emails, CRM, factures.",
    features: [
      "25 pages — roadmap J0 a J7",
      "10 templates N8N JSON importables",
      "Workflows complets : social, leads, avis, emails, CRM",
      "Prompts IA pour contenu et qualification",
      "Dashboard de monitoring inclus"
    ],
    cta: "EBOOK_BUSINESS_URL",
    badge: "Best-seller"
  },
  {
    name: "Bundle (2 ebooks)",
    price: 59.9,
    originalPrice: 119.9,
    description: "Les deux guides au prix d'un. Cree ton site, automatise ton business. Tout est la.",
    features: [
      "Sites Web Express (valeur 39,90EUR)",
      "Automatise Ton Business (valeur 99,90EUR)",
      "47 pages de contenu actionnable",
      "17 templates et prompts inclus",
      "Mises a jour incluses"
    ],
    cta: "EBOOK_BUNDLE_URL",
    badge: "Meilleure offre"
  }
];

export const comparison = [
  { label: "Methode creation site en 5 min", hostinger: true, bundle: true, business: false },
  { label: "7 prompts Claude AI prets a l'emploi", hostinger: true, bundle: true, business: false },
  { label: "Guide deploiement Hostinger", hostinger: true, bundle: true, business: false },
  { label: "Plan automatisation J0-J7", hostinger: false, bundle: true, business: true },
  { label: "10 templates N8N JSON", hostinger: false, bundle: true, business: true },
  { label: "Workflows reseaux sociaux IA", hostinger: false, bundle: true, business: true },
  { label: "Systeme avis Google auto", hostinger: false, bundle: true, business: true },
  { label: "Email marketing automatise", hostinger: false, bundle: true, business: true },
  { label: "CRM + facturation autopilot", hostinger: false, bundle: true, business: true },
  { label: "Dashboard monitoring", hostinger: false, bundle: true, business: true }
];

export const faq = [
  {
    q: "C'est quoi exactement ?",
    a: "Deux ebooks PDF pratiques. Le premier t'apprend a creer un site web pro en 5 minutes avec Claude AI et Hostinger. Le deuxieme te montre comment automatiser tout ton business avec N8N en 7 jours."
  },
  {
    q: "J'ai besoin de savoir coder ?",
    a: "Non. Zero code requis. Tout est explique pas a pas avec des captures d'ecran. Si tu sais utiliser un navigateur web, tu peux suivre."
  },
  {
    q: "C'est quoi le format ?",
    a: "PDF telechargeable immediatement apres paiement. Le guide N8N inclut aussi 10 templates JSON importables directement dans N8N."
  },
  {
    q: "Les prix vont augmenter ?",
    a: "Oui. C'est une offre de lancement. Les prix doublent dans 14 jours : Sites Web Express passe a 39,90EUR, Automatise passe a 99,90EUR."
  },
  {
    q: "Remboursement possible ?",
    a: "Produits numeriques : pas de remboursement. Lis bien le detail de chaque ebook avant d'acheter."
  },
  {
    q: "Paiement securise ?",
    a: "Oui, 100%. Le paiement passe par Stripe. Aucune donnee bancaire n'est stockee sur ce site."
  },
  {
    q: "Mises a jour incluses ?",
    a: "Oui. Les mises a jour mineures sont incluses et envoyees par email."
  },
  {
    q: "Pourquoi prendre le bundle ?",
    a: "Parce que les deux guides sont complementaires. Tu crees ton site avec le premier, puis tu automatises l'acquisition et la vente avec le deuxieme. Et tu economises 80EUR."
  }
];
