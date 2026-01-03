# NASH369 - Site Web

Site vitrine pour NASH369, plateforme d'outils et mini-SaaS pour PME.

## Stack Technique

- **Framework:** Next.js 14+ (App Router)
- **Langage:** TypeScript
- **Styling:** TailwindCSS
- **Déploiement:** Vercel-ready

## Architecture

### Pages principales

- `/` - Page d'accueil
- `/outils-pme` - Page business principale (conversion)
- `/mini-saas` - Catalogue de produits
- `/p/[slug]` - Pages produits dynamiques
- `/contact` - Formulaire de contact
- `/saas` - Accès anticipé MaTréso
- `/formations` - Waitlist formations
- `/indie` - Espace builders
- `/indie/json-to-excel` - Page produit niche
- `/legal/mentions-legales` - Mentions légales
- `/legal/cgv` - Conditions générales de vente
- `/legal/confidentialite` - Politique de confidentialité

### Structure des fichiers

```
nash369/
├── app/                      # Pages Next.js (App Router)
│   ├── page.tsx             # Page d'accueil
│   ├── layout.tsx           # Layout principal
│   ├── globals.css          # Styles globaux
│   ├── outils-pme/          # Page Outils PME
│   ├── mini-saas/           # Catalogue mini-SaaS
│   ├── p/[slug]/            # Pages produits dynamiques
│   ├── contact/             # Page contact
│   ├── saas/                # Accès anticipé SaaS
│   ├── formations/          # Waitlist formations
│   ├── indie/               # Espace indie builders
│   ├── legal/               # Pages légales
│   └── not-found.tsx        # Page 404
├── components/              # Composants réutilisables
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Button.tsx
│   ├── Card.tsx
│   └── FAQ.tsx
├── data/                    # Données locales
│   ├── products.ts          # Produits mini-SaaS
│   ├── offers.ts            # Offres Outils PME
│   └── faq.ts               # FAQ
├── public/                  # Assets statiques
└── README.md
```

## Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## Développement

### Ajouter un nouveau produit mini-SaaS

Éditez le fichier `data/products.ts` et ajoutez un objet au tableau `products` :

```typescript
{
  slug: "mon-produit",
  name: "Mon Produit",
  shortDescription: "Description courte",
  problem: "Le problème résolu",
  solution: "La solution apportée",
  inputs: ["Input 1", "Input 2"],
  outputs: ["Output 1", "Output 2"],
  priceLabel: "À partir de 29€",
  gumroadUrl: "https://gumroad.com/...",
  tags: ["tag1", "tag2"],
  screenshots: ["/screenshots/..."],
  whatItReplaces: ["Alternative 1"],
  faq: [{ question: "Q?", answer: "R." }]
}
```

### Modifier les offres Outils PME

Éditez `data/offers.ts` pour ajouter ou modifier les offres.

### Personnaliser les couleurs

Les couleurs sont définies dans `tailwind.config.ts`. La couleur principale "bleu électrique" est configurée sous `colors.electric`.

### Ajouter des pages légales

Les pages légales se trouvent dans `app/legal/`. Modifiez les informations placeholders (adresse, SIRET, etc.) avec vos vraies données.

## Build & Déploiement

### Build local

```bash
npm run build
npm start
```

### Déploiement Vercel

1. Créez un compte sur [Vercel](https://vercel.com)
2. Connectez votre repository GitHub
3. Vercel détectera automatiquement Next.js et configurera le build
4. Cliquez sur "Deploy"

Le site sera automatiquement déployé à chaque push sur la branche principale.

### Variables d'environnement

Aucune variable d'environnement n'est requise pour le moment. Toutes les données sont locales.

## Maintenance

### Mettre à jour les produits

Les produits sont stockés localement dans `data/products.ts`. Éditez ce fichier pour ajouter, modifier ou supprimer des produits.

### Mettre à jour la FAQ

Éditez `data/faq.ts` pour la FAQ de la page Outils PME, ou `data/products.ts` pour les FAQs spécifiques à chaque produit.

### Ajouter des screenshots

Placez vos images dans le dossier `public/screenshots/` et référencez-les dans les données produits.

## Performance

- Images optimisées avec `next/image`
- Génération statique des pages produits (SSG)
- Code splitting automatique par Next.js
- TailwindCSS optimisé en production

## SEO

Les métadonnées sont configurées dans :
- `app/layout.tsx` pour les métadonnées globales
- Chaque page peut définir ses propres métadonnées via `export const metadata`

## Support

Pour toute question ou problème :
- Email: contact@nash369.com
- Consultez la documentation Next.js : [nextjs.org/docs](https://nextjs.org/docs)

## Licence

© 2026 NASH369. Tous droits réservés.
