# Changelog - NASH369

Toutes les modifications notables du projet sont documentées dans ce fichier.

Format basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/).

---

## [1.1.0] - 2026-01-19

### ✅ Ajouté
- **Page produit site-vitrine** (`/app/produits/site-vitrine/page.tsx`)
  - Formation "Crée ton Site Vitrine Simple avec l'IA" à 49.90€
  - Design cohérent avec les autres pages produits
  - Badge "BEST SELLER" affiché
  - Testimonials et social proof intégrés
  - Intégration checkout Stripe fonctionnelle

### 🔧 Corrigé
- **Stripe Price IDs** dans `data/products.json`
  - `site-vitrine`: `price_1SptTKRws3CXDdFE01JTMGjD` → `price_15ptTKRws3CXDdFE01JTMGjD`
  - `site-ia`: `price_1SptPhRws3CXDdFEw22XJIff` → `price_15ptPhRws3CXDdFEw22XJIff`
  - Correction typo: ajout du "5" manquant dans les Price IDs

### 🐛 Bugs résolus
- Erreur 404 sur `/produits/site-vitrine` (page manquante)
- Erreur Stripe "Erreur de configuration du paiement" sur les deux produits
- Redirection checkout échouait avec Price IDs invalides

### 📦 Commits
- `5c34e15` - feat: Add missing site-vitrine product page
- `0467c22` - fix: Correct Stripe Price IDs for site-vitrine and site-ia

### 🔍 Détails techniques
**Problème identifié:**
- Architecture correcte mais page `/app/produits/site-vitrine/page.tsx` manquante
- Price IDs Stripe contenaient une typo: `price_1Spt...` au lieu de `price_15pt...`

**Solution appliquée:**
1. Création de la page manquante avec design et fonctionnalités complètes
2. Correction des Price IDs dans le fichier de configuration produits
3. Mise à jour documentation (README.md + CHANGELOG.md)

**Validation:**
- ✅ Page site-vitrine accessible et fonctionnelle
- ✅ Price IDs validés dans Stripe Dashboard
- ✅ Checkout redirige correctement vers Stripe
- ✅ Déploiement automatique Vercel en cours

---

## [1.0.0] - 2026-01-18

### 🚀 Refonte complète
- **Lead magnet "Sites en 5min"**
  - Landing page dédiée `/guide-sites-5min`
  - Formulaire capture email
  - Envoi automatique guide complet via Resend
  - Notification email propriétaire

- **Système de devis qualifié**
  - Page `/devis` avec 2 chemins (projet validé / curieux)
  - Formulaire complet avec budget, timeline, description
  - Email détaillé au propriétaire
  - Confirmation prospect sous 24h
  - Page `/tarifs` transparente

- **Optimisation homepage**
  - Hero section repositionné
  - 3 produits en grid avec badges
  - Lead magnet pleine largeur
  - Section problème/solution
  - Témoignages clients
  - CTA final vers lead magnet

- **Infrastructure**
  - Migration Vercel production
  - Stripe live mode activé
  - Email Resend configuré
  - Google Analytics 4 intégré
  - DNS Namecheap + Amazon SES

### 📦 Commits principaux
- `132006e` - feat: Update Stripe Price IDs for site-vitrine and site-ia
- `75eacf0` - docs: Mise à jour README avec nouvelles fonctionnalités
- `005e111` - feat: Refonte complète - Lead magnet sites 5min + système devis
- `63aff80` - feat: Update hero section with refined positioning
- `e926676` - feat: Optimize sales copy and testimonials for conversion

---

## [0.9.0] - 2025-12-XX

### Version initiale
- Configuration Next.js 16.1 + TypeScript
- 3 produits numériques (eBooks + formations)
- Paiement Stripe basique
- Email automation Resend
- Base de données Supabase

---

## 🔮 À venir

### Version 1.2.0 (Prévue)
- [ ] Dashboard admin pour visualiser leads
- [ ] Rate limiting sur APIs (Upstash Redis)
- [ ] Configuration Supabase RLS
- [ ] Tests E2E Playwright
- [ ] Nettoyage fichiers i18n morts
- [ ] Optimisation composants homepage

### Version 2.0.0 (Idées)
- [ ] A/B testing sur CTAs
- [ ] Programme affiliation
- [ ] Nouveaux produits numériques
- [ ] Espace membre client
- [ ] Analytics avancés (Mixpanel/Amplitude)

---

**Légende:**
- ✅ Ajouté: Nouvelles fonctionnalités
- 🔧 Corrigé: Modifications de fonctionnalités existantes
- 🐛 Bugs: Corrections de bugs
- 🔒 Sécurité: Correctifs de sécurité
- 📦 Commits: Hash des commits Git
- 🔍 Détails: Informations techniques détaillées
- 🚀 Refonte: Changements majeurs
- 🔮 À venir: Fonctionnalités planifiées
