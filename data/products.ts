export interface Product {
  slug: string;
  name: string;
  shortDescription: string;
  problem: string;
  solution: string;
  inputs: string[];
  outputs: string[];
  priceLabel: string;
  gumroadUrl: string;
  tags: string[];
  screenshots: string[];
  whatItReplaces: string[];
  faq: { question: string; answer: string }[];
}

export const products: Product[] = [
  {
    slug: "whatsapp-excel",
    name: "WhatsApp → Excel (Dashboard)",
    shortDescription: "Transformez vos conversations WhatsApp Business en rapports Excel exploitables et dashboards automatisés.",
    problem: "Vos données clients et commandes sont éparpillées dans WhatsApp. Impossible d'analyser votre activité ou de prendre des décisions basées sur des chiffres fiables.",
    solution: "Exportez vos conversations WhatsApp et générez automatiquement des rapports Excel structurés avec analyse des tendances, statistiques clients et dashboards prêts à l'emploi.",
    inputs: [
      "Export WhatsApp (.txt ou .zip)",
      "Filtres par dates ou contacts",
      "Mots-clés à suivre (commandes, paiements, etc.)"
    ],
    outputs: [
      "Fichier Excel avec conversations structurées",
      "Dashboard avec graphiques (volume, tendances)",
      "Statistiques clients (fréquence, panier moyen)",
      "Export CSV pour intégrations tierces"
    ],
    priceLabel: "À partir de 29€",
    gumroadUrl: "https://gumroad.com/nash369/whatsapp-excel",
    tags: ["treso", "reporting", "automation", "ops"],
    screenshots: [
      "/screenshots/whatsapp-excel-1.jpg",
      "/screenshots/whatsapp-excel-2.jpg"
    ],
    whatItReplaces: [
      "Copier-coller manuel depuis WhatsApp",
      "Tableurs désorganisés",
      "Comptage à la main des commandes",
      "Outils d'analytics coûteux (200€+/mois)"
    ],
    faq: [
      {
        question: "Mes données WhatsApp sont-elles sécurisées ?",
        answer: "Oui, tout le traitement se fait en local sur votre machine. Aucune donnée n'est envoyée vers nos serveurs."
      },
      {
        question: "Ça fonctionne avec WhatsApp Business ?",
        answer: "Absolument. Compatible WhatsApp classique et WhatsApp Business."
      },
      {
        question: "Puis-je automatiser l'export régulier ?",
        answer: "La version Pro inclut un script d'automatisation pour export hebdomadaire ou mensuel."
      }
    ]
  },
  {
    slug: "delivery-excel",
    name: "Uber Eats/Deliveroo → Excel",
    shortDescription: "Consolidez vos rapports de livraison Uber Eats et Deliveroo dans un seul fichier Excel pour piloter votre restaurant.",
    problem: "Vous jonglez entre plusieurs plateformes de livraison. Chacune a son propre format de rapport. Impossible de comparer les performances ou de calculer vos marges réelles.",
    solution: "Importez vos rapports Uber Eats, Deliveroo et autres plateformes. Générez un tableau de bord unifié avec calcul automatique des commissions, marges nettes et analyses comparatives.",
    inputs: [
      "Rapports CSV d'Uber Eats",
      "Rapports CSV de Deliveroo",
      "Vos coûts (ingrédients, emballage, etc.)"
    ],
    outputs: [
      "Dashboard consolidé toutes plateformes",
      "Calcul automatique des commissions",
      "Marges nettes par plateforme",
      "Top produits et tendances",
      "Export comptable prêt pour votre expert"
    ],
    priceLabel: "À partir de 39€",
    gumroadUrl: "https://gumroad.com/nash369/delivery-excel",
    tags: ["treso", "reporting", "restauration", "ops"],
    screenshots: [
      "/screenshots/delivery-excel-1.jpg",
      "/screenshots/delivery-excel-2.jpg"
    ],
    whatItReplaces: [
      "Rapprochement manuel entre plateformes",
      "Calcul des commissions à la main",
      "Logiciels de gestion restauration (150€+/mois)",
      "Consultant externe pour analyses"
    ],
    faq: [
      {
        question: "Quelles plateformes sont supportées ?",
        answer: "Uber Eats, Deliveroo, Just Eat et la plupart des plateformes qui exportent en CSV."
      },
      {
        question: "Le calcul des marges est-il automatique ?",
        answer: "Vous saisissez vos coûts une fois, puis le calcul se fait automatiquement pour chaque commande."
      },
      {
        question: "Puis-je l'utiliser pour plusieurs restaurants ?",
        answer: "Oui, la licence permet de traiter plusieurs établissements."
      }
    ]
  },
  {
    slug: "json-excel",
    name: "JSON → Excel",
    shortDescription: "Convertissez n'importe quel fichier JSON en fichier Excel structuré et lisible, sans coder.",
    problem: "Vous recevez des exports JSON de vos APIs, outils ou bases de données. Impossible de les lire ou analyser sans compétences techniques.",
    solution: "Déposez votre fichier JSON, choisissez les champs à extraire, et obtenez un fichier Excel propre avec vos données structurées en colonnes.",
    inputs: [
      "Fichier JSON (export API, base de données, etc.)",
      "Sélection des champs à extraire",
      "Options de filtrage et tri"
    ],
    outputs: [
      "Fichier Excel (.xlsx) structuré",
      "Colonnes nommées et typées",
      "Données imbriquées aplaties",
      "Prêt pour analyse ou import"
    ],
    priceLabel: "À partir de 19€",
    gumroadUrl: "https://gumroad.com/nash369/json-excel",
    tags: ["automation", "ops"],
    screenshots: [
      "/screenshots/json-excel-1.jpg",
      "/screenshots/json-excel-2.jpg"
    ],
    whatItReplaces: [
      "Convertisseurs en ligne limités",
      "Demander au développeur à chaque fois",
      "Scripts Python ou Node.js custom",
      "Outils SaaS d'intégration (50€+/mois)"
    ],
    faq: [
      {
        question: "Ça marche avec des JSON complexes ?",
        answer: "Oui, l'outil gère les objets imbriqués et les tableaux. Il aplatit intelligemment la structure."
      },
      {
        question: "Y a-t-il une limite de taille ?",
        answer: "Jusqu'à 50 Mo pour la version standard, 500 Mo pour la version Pro."
      },
      {
        question: "Puis-je automatiser la conversion ?",
        answer: "La version Pro inclut une API pour automatiser vos conversions."
      }
    ]
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByTags(tags: string[]): Product[] {
  if (tags.length === 0) return products;
  return products.filter(p => p.tags.some(tag => tags.includes(tag)));
}

export const allTags = Array.from(
  new Set(products.flatMap(p => p.tags))
).sort();
