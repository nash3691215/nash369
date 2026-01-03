export interface Offer {
  id: string;
  name: string;
  description: string;
  features: string[];
  priceLabel: string;
  ctaText: string;
  highlighted?: boolean;
}

export const offers: Offer[] = [
  {
    id: "audit",
    name: "Audit & Recommandations",
    description: "Analyse de vos process actuels et recommandations d'outils adaptés à votre activité.",
    features: [
      "Audit des process métier (1-2h)",
      "Identification des points de friction",
      "Recommandations d'outils sur mesure",
      "Roadmap de mise en place",
      "Support email 1 mois"
    ],
    priceLabel: "À partir de 490€",
    ctaText: "Demander un devis"
  },
  {
    id: "tooling",
    name: "Pack Outils PME",
    description: "Dashboard Excel ou Google Sheets sur mesure pour piloter votre activité en temps réel.",
    features: [
      "Dashboard sur mesure (Excel/Sheets)",
      "Connexion à vos sources de données",
      "Automatisation des rapports",
      "Formation à l'utilisation (1h)",
      "Support 3 mois + MAJ incluses"
    ],
    priceLabel: "À partir de 990€",
    ctaText: "Voir les détails",
    highlighted: true
  },
  {
    id: "custom",
    name: "Développement Custom",
    description: "Automatisation ou mini-outil développé sur mesure pour répondre à un besoin spécifique de votre PME.",
    features: [
      "Analyse du besoin",
      "Développement sur mesure",
      "Tests et livraison",
      "Documentation complète",
      "Support 6 mois"
    ],
    priceLabel: "Sur devis",
    ctaText: "Discutons-en"
  }
];
