# NASH369 - Site E-commerce & Formations

Site e-commerce professionnel pour vendre formations et services d'automatisation. Architecture moderne avec Next.js 16, Stripe, et automatisation email complète.

## 🚀 Stack Technique

- **Framework**: Next.js 16.1.2 (App Router)
- **Language**: TypeScript 5.9
- **Styling**: Tailwind CSS 3.4
- **Paiements**: Stripe (Live Mode)
- **Email**: Resend
- **Déploiement**: Vercel
- **Coût mensuel**: 0€

## 📦 Produits Actifs

### Formations (Produits Numériques)
1. **Zéro Vivre** - 9.90€
   - E-book: Trouve ton modèle rentable en 7 jours
   - Price ID: `price_1SptVQRws3CXDdFEpBC25JDU`

2. **Site Vitrine** - 49.90€ (BEST SELLER)
   - Formation: Construis ton site pro en 5h
   - Price ID: `price_1SptTKRws3CXDdFEO1JTMGjD`

3. **Site IA** - 199.90€ (PREMIUM)
   - Formation: Système de vente automatique en 24h
   - Price ID: `price_1SptPhRws3CXDdFEw22XJlFf`

### Services (Sur Devis)
- Site Vitrine: à partir de 299€
- Site E-commerce: à partir de 999€
- Automatisations: sur devis

## 🎨 Design

**Thème**: Minimaliste blanc avec accents dorés (amber)
**Philosophy**: "Build systems. Not noise."

### Couleurs
- Principal: Noir/Gris (gray-900, gray-700)
- Accent: Doré (amber-500 → amber-800)
- Fond: Blanc avec dégradés subtils

### Composants Clés
- Header sticky avec backdrop blur
- Hero animé avec orbes pulsants
- Stats cards avec gradients dorés
- CTAs avec effet scale au hover

## 📁 Structure du Projet

```
/app
  /api
    /create-checkout-session  → Créer session Stripe
    /webhooks/stripe          → Webhooks paiement
    /send-quote-request       → Envoyer demande devis
  /produits
    /zero-vivre              → Landing page formation 1
    /site-vitrine            → Landing page formation 2
    /site-ia                 → Landing page formation 3
  /devis                     → Formulaire de devis
  /a-propos                  → Page à propos
  /success                   → Page confirmation paiement
  page.tsx                   → Homepage

/data
  products.json              → Configuration produits

/emails
  email-sequences.ts         → Séquences email auto
```

## 🔧 Installation

```bash
# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env.local

# Lancer en dev
npm run dev

# Build production
npm run build
```

## 🔐 Variables d'Environnement

```env
# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Resend (Email)
RESEND_API_KEY=re_...

# URLs
NEXT_PUBLIC_BASE_URL=https://nash369.com
```

## 🎯 Fonctionnalités

### Paiement Stripe
- Checkout sessions sécurisées
- Webhooks pour confirmer paiements
- Livraison automatique par email
- Support 3D Secure

### Email Automation
- Email de bienvenue immédiat
- Livraison produit après paiement
- Séquence de suivi automatique
- Email de confirmation devis

### Landing Pages
- Design conversion-optimisé
- Social proof (5 étoiles, témoignages)
- Trust badges (garantie 30j)
- CTAs sticky avec gradients dorés
- Stats en temps réel

### Formulaire Devis
- 2 colonnes responsive
- Value propositions
- CTA alternative vers formations
- Success state avec next steps

## 📊 Analytics & Tracking

- Middleware pour tracking visiteurs
- Headers de sécurité (CSP, HSTS)
- Protection CSRF
- Rate limiting sur APIs

## 🚀 Déploiement

```bash
# Deploy automatique via Vercel
git push origin main

# Deploy manuel
vercel --prod
```

## 📈 Performance

- **Lighthouse Score**: 95+
- **First Paint**: < 1s
- **TTI**: < 2s
- **Bundle Size**: Optimisé avec Turbopack

## 🔒 Sécurité

- HTTPS obligatoire
- Validation Stripe webhooks
- Protection contre injection
- Rate limiting APIs
- Headers de sécurité

## 📝 Maintenance

### Mise à jour produits
Éditer `/data/products.json` avec les nouveaux prix/IDs Stripe

### Ajout nouvelle formation
1. Ajouter entrée dans `products.json`
2. Créer page dans `/app/produits/[slug]/page.tsx`
3. Créer fichier HTML dans `/public/products/`
4. Configurer webhook Stripe

### Modifier emails
Éditer `/emails/email-sequences.ts`

## 🎓 Support

- **Email**: contact@nash369.com
- **Twitter**: @nash3691215
- **Site**: https://nash369.com

## 📄 Licence

© 2026 NASH369. Tous droits réservés.

---

**Build systems. Not noise.**
