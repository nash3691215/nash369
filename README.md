# NASH369 - Site Web

Site personnel de Nash369 avec Scanner Vinted - Un outil d'analyse IA pour les ventes Vinted.

## Stack Technique

- **Framework:** Next.js 14+ (App Router)
- **Langage:** TypeScript
- **Styling:** TailwindCSS
- **IA:** Claude Vision API (pour l'analyse de screenshots)
- **Déploiement:** Vercel-ready

## Architecture du site

### Pages principales

- `/` - Homepage Nash369 (présentation personnelle + mise en avant du Scanner Vinted)
- `/vinted` - Landing page Scanner Vinted (marketing, features, pricing)
- `/vinted/scanner` - Outil Scanner Vinted (fonctionnel, analyse IA)

### Anciennes pages (à nettoyer)

- `/outils-pme` - Page business principale
- `/mini-saas` - Catalogue de produits
- `/boutique` - Page boutique
- `/contact` - Formulaire de contact
- `/saas` - Accès anticipé MaTréso
- `/formations` - Waitlist formations
- `/indie` - Espace builders
- `/indie/json-to-excel` - Page produit niche
- `/legal/*` - Pages légales

### Structure des fichiers

```
nash369/
├── app/                      # Pages Next.js (App Router)
│   ├── page.tsx             # Homepage Nash369
│   ├── layout.tsx           # Layout principal
│   ├── globals.css          # Styles globaux
│   ├── vinted/              # Scanner Vinted
│   │   ├── page.tsx         # Landing page marketing
│   │   └── scanner/
│   │       └── page.tsx     # Outil fonctionnel
│   ├── api/                 # API Routes
│   │   └── parse-vinted-screenshot/
│   │       └── route.ts     # Endpoint d'analyse IA
│   └── ... (autres pages)
├── components/              # Composants réutilisables
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Button.tsx
│   ├── Card.tsx
│   └── FAQ.tsx
├── public/                  # Assets statiques
│   └── screenshots/         # Screenshots des outils
└── README.md
```

## Scanner Vinted - Architecture

### Flux de l'application

1. **Upload** (`/vinted/scanner`)
   - L'utilisateur upload un screenshot de son tableau Vinted
   - Le fichier est envoyé à l'API `/api/parse-vinted-screenshot`

2. **Analyse IA**
   - L'API utilise Claude Vision pour analyser le screenshot
   - Extraction automatique des données: prix, frais, dates, etc.
   - Calcul des KPIs: revenus, gains nets, commission, etc.

3. **Dashboard**
   - Affichage de 7 KPIs essentiels
   - Tableau détaillé des transactions
   - Export Excel automatique

### KPIs calculés

- **Revenus totaux** - Somme de tous les prix de vente
- **Frais Vinted** - Total des commissions prélevées
- **Gains nets** - Revenus - Frais
- **Prix moyen** - Moyenne des prix de vente
- **Nombre de ventes** - Compteur de transactions
- **Taux de commission** - % moyen de commission Vinted
- **Évolution** - Tracking dans le temps

## Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## Configuration API

Le Scanner Vinted fonctionne en deux modes:
- **Mode Démo** (par défaut): Données générées aléatoirement - aucune clé API requise
- **Mode Production**: Analyse réelle avec Claude Vision - nécessite une clé API

Pour activer l'analyse IA avec Claude Vision:

1. Créer un fichier `.env.local` à la racine
2. Ajouter votre clé API Anthropic:

```env
ANTHROPIC_API_KEY=sk-ant-api03-xxxxxxxxxxxxxxxxxxxxx
```

3. Redémarrer le serveur: `npm run dev`

**📖 Guide complet:** Voir [SETUP_API.md](./SETUP_API.md) pour les instructions détaillées.

**Note:** Sans clé API, l'application utilise des données de démonstration.

## Développement

### Personnaliser les couleurs

Les couleurs sont définies dans `tailwind.config.ts`. Le Scanner Vinted utilise une palette cyan/teal:

```typescript
colors: {
  electric: {
    DEFAULT: '#0066FF',
    light: '#3385FF',
    dark: '#0052CC',
  },
}
```

### Ajouter des screenshots

1. Placer les images dans `public/screenshots/`
2. Utiliser le composant Next.js Image:

```tsx
import Image from 'next/image';

<Image
  src="/screenshots/vinted-dashboard.jpg"
  alt="Dashboard"
  width={800}
  height={600}
/>
```

## Build & Déploiement

### Build local

```bash
npm run build
npm start
```

### Déploiement Vercel

1. Push ton code sur GitHub
2. Connecte ton repo à Vercel
3. Ajoute les variables d'environnement (si nécessaire)
4. Deploy!

Vercel détectera automatiquement Next.js et configurera le build.

### Variables d'environnement (Vercel)

Si tu utilises l'API Claude Vision:
- `ANTHROPIC_API_KEY` - Clé API Anthropic

## Roadmap

### Scanner Vinted
- [x] Upload de screenshot
- [x] Analyse IA basique (mock data)
- [x] Dashboard avec KPIs
- [x] Export Excel
- [ ] Intégration Claude Vision API
- [ ] Système de crédits/abonnements
- [ ] Historique des analyses
- [ ] Comparaison période à période

### Autres outils à venir
- [ ] Analyseur Leboncoin
- [ ] Assistant IA Personnel
- [ ] Tracker Multi-Plateformes

## Performance

- Images optimisées avec `next/image`
- Génération statique des pages (SSG)
- Code splitting automatique par Next.js
- TailwindCSS optimisé en production
- Lazy loading des composants

## SEO

Les métadonnées sont configurées dans:
- `app/layout.tsx` - Métadonnées globales
- Chaque page définit ses propres métadonnées via `export const metadata`

Exemple:

```tsx
export const metadata = {
  title: 'Scanner Vinted - Analyse tes ventes en 1 clic',
  description: 'Transforme tes screenshots Vinted en dashboard avec IA',
}
```

## Design System

### Palette de couleurs
- **Cyan/Teal** - Couleurs principales (Scanner Vinted)
- **Emerald** - Gains positifs
- **Red** - Frais et pertes
- **Gray** - Texte et backgrounds

### Typography
- **Headings** - Bold, grandes tailles (4xl-7xl)
- **Body** - Regular, tailles moyennes (base-xl)
- **UI** - Semibold, petites tailles (sm-base)

### Composants clés
- **Gradient backgrounds** - `from-cyan-50 via-white to-teal-50`
- **Cards** - Rounded corners (`rounded-2xl`), shadow (`shadow-xl`)
- **Buttons** - Gradient (`from-cyan-500 to-teal-500`), hover effects

## Support

Pour toute question:
- Email: contact@nash369.com
- GitHub Issues: [Créer une issue](https://github.com/nash369/...)

## Licence

© 2026 NASH369. Tous droits réservés.
