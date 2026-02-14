# Ebooks NASH369 — landing simple

## Installation
- `npm install` (ou `pnpm install`)
- `npm run dev` puis ouvre http://localhost:3000

## Configurer les URLs
Édite `lib/config.ts` :
- `EBOOK_BUSINESS_URL` → lien Stripe pour “Automatise ton business en 7 jours”
- `EBOOK_HOSTINGER_URL` → lien Stripe pour “Création de site avec Hostinger et IA”

## Déploiement
- Vercel : `vercel` à la racine, détecte Next.js App Router.
- Pas de variables d’environnement requises (config en fichier).

## Notes
- Couleurs : fond blanc, texte noir, accent or (`#d4af37`) défini dans `tailwind.config.js`.
- SEO/OG/Twitter dans `app/layout.tsx`.
- Build vérifié avec `npm run build`.
