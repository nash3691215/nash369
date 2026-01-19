# NASH369 - Plateforme de Vente de Produits Numériques

Plateforme e-commerce Next.js pour la vente d'eBooks et formations IA avec paiement Stripe, système de devis qualifié, email automation et capture de leads.

**Live**: https://nash369.com

---

## 🚀 Stack Technique

- **Framework**: Next.js 16.1 (React 19.2)
- **Langage**: TypeScript 5.9
- **Styling**: Tailwind CSS 3.4
- **Paiement**: Stripe (Live mode)
- **Email**: Resend (transactionnel)
- **Base de données**: Supabase (leads)
- **Analytics**: Google Analytics 4
- **Hosting**: Vercel

---

## 📁 Structure du Projet

```
/app
  /api
    /create-checkout-session   → Stripe checkout initialization
    /webhooks/stripe           → Webhook post-achat + envoi produit
    /send-lead-magnet          → Lead magnet "Sites en 5min"
    /send-quote-request        → Demandes de devis prospects
    /send-email                → [ANCIEN] Resend email lead magnet
    /emails                    → [INUTILISÉ] GET emails database
    /init-db                   → [INUTILISÉ] Init Supabase
  /produits
    /zero-vivre/page.tsx       → eBook 9.90€
    /site-vitrine/page.tsx     → Formation 49.90€
    /site-ia/page.tsx          → Formation 199.90€
    /site-cle-en-main/page.tsx → Service 2500€ (hidden)
  /guide-sites-5min/page.tsx   → Lead magnet (Guide création sites 5min)
  /devis/page.tsx              → Qualification prospects (2 paths)
  /devis/projet-valide/page.tsx → Formulaire devis complet
  /tarifs/page.tsx             → Page tarifs transparents
  /success/page.tsx            → Confirmation post-achat
  page.tsx                     → Homepage avec 3 produits + lead magnet
  layout.tsx                   → Root layout + GA4

/components
  Header.tsx                   → Navigation unifiée (Accueil, Produits, Tarifs, Devis)

/lib
  stripe.ts                    → Logique Stripe + emails
  db.ts                        → Opérations Supabase
  analytics.ts                 → Events GA4

/data
  products.json                → Config produits + Price IDs Stripe

/messages                      → [SYSTÈME I18N MORT]
  en.json
  fr.json
  products-en.json
  products-fr.json

/i18n
  request.ts                   → [NON UTILISÉ] Config i18n

/public/products
  guide-sites-5min.html        → Lead magnet gratuit
  zero-vivre.html              → eBook 9.90€
  site-vitrine.html            → Formation 49.90€
  site-ia.html                 → Formation 199.90€
```

---

## 🛍️ Produits

| Produit | Type | Prix | Prix Original | Stripe Price ID |
|---------|------|------|---------------|-----------------|
| **De Zéro à Vivre de Ton Activité** | eBook HTML | 9.90€ | ~~19.90€~~ (-50%) | `price_1SptVQRws3CXDdFEpBC25JDU` |
| **Crée ton Site Vitrine Simple avec l'IA** | Formation HTML | 49.90€ | ~~99.90€~~ (-50%) | `price_15ptTKRws3CXDdFE01JTMGjD` ✅ |
| **Crée ton Site Prêt à Vendre sans Shopify** | Formation HTML | 199.90€ | ~~399.90€~~ (-50%) | `price_15ptPhRws3CXDdFEw22XJIff` ✅ |
| **Comment je crée des sites en 5 min** | Lead Magnet | **GRATUIT** | - | N/A |

**Note**: Les prix de lancement à -50% sont affichés sur le site avec badge rouge et mention "Prix de lancement".

---

## ⚙️ Configuration

### Variables d'environnement requises

Créer `.env.local` :

```bash
# Stripe (LIVE MODE)
STRIPE_SECRET_KEY=sk_live_xxxxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx

# Resend
RESEND_API_KEY=re_xxxxx

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=eyJxxxxx

# Site
NEXT_PUBLIC_BASE_URL=https://nash369.com

# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Installation

```bash
npm install
npm run dev
```

Site accessible sur `http://localhost:3000`

---

## 🔄 Flux de Conversion

### 1. Achat Produit Payant
```
Visiteur → Page Produit → Clic "Acheter"
  → API /create-checkout-session (Stripe Checkout)
  → Paiement réussi
  → Webhook /api/webhooks/stripe
  → Envoi email Resend avec lien produit
  → Redirect /success
  → GA4 event 'purchase'
```

### 2. Lead Magnet (Gratuit)
```
Visiteur → /guide-sites-5min → Formulaire email
  → API /send-lead-magnet
  → Email Resend à l'utilisateur avec guide complet (méthode Claude + Hostinger)
  → Email notification à nash3691215@gmail.com avec l'email du lead
  → Supabase insert (table lead_magnets) - optionnel
  → Page confirmation + CTA vers formations
```

**Contenu du guide envoyé**:
- Stack technique (Claude AI + Hostinger + Next.js)
- Process en 5 étapes (consultation → prompt → customisation → déploiement → livraison)
- Grille tarifaire (299€-2500€)
- Exemples de prompts concrets
- CTA vers formations payantes

### 3. Système de Devis (Qualification Prospects)
```
Visiteur → /devis → Choix du path:

  Path A (Projet validé):
    → /devis/projet-valide
    → Formulaire complet (nom, email, téléphone, type projet, budget, timeline, description)
    → API /send-quote-request
    → Email à nash3691215@gmail.com avec détails complets du prospect
    → Email confirmation au prospect
    → Page confirmation "Réponse sous 24h"

  Path B (Curieux):
    → /tarifs
    → Affichage grille tarifaire transparente
    → Pack Vitrine: 299€ départ
    → Pack E-commerce: 999€ départ
    → CTA vers devis personnalisé
```

---

## 📧 Système Email

**Provider**: Resend
**Domaine**: `nash369.com`
**Expéditeur**: `noreply@nash369.com`

### DNS configurés (Namecheap)
- SPF: `v=spf1 include:amazonses.com ~all`
- DKIM: 3 clés CNAME Amazon SES
- DMARC: `v=DMARC1; p=none;`
- MX: `send` → Amazon SES (envoi)
- MX: `@` → Amazon SES (réception)

### Templates
- **Lead Magnet**: HTML inline dans `/api/send-lead-magnet`
- **Produits**: HTML inline dans `/lib/stripe.ts`
- **Devis**: HTML inline dans `/api/send-quote-request`

---

## 💳 Stripe

**Mode**: LIVE (Production)
**Webhooks actifs**: `checkout.session.completed`

### Configuration Stripe Dashboard
1. Créer produits + prices
2. Ajouter webhook endpoint: `https://nash369.com/api/webhooks/stripe`
3. Copier signing secret → `STRIPE_WEBHOOK_SECRET`

### Metadata utilisée
```typescript
{
  productId: 'burnout' | 'zero-vivre' | 'site-ia',
  customerEmail: string,
  productUrl: string
}
```

---

## 📊 Analytics

**Google Analytics 4** configuré avec :
- Page views automatiques
- Event `purchase` avec transaction_id, value, items
- Tag ajouté dans `app/layout.tsx`

---

## 🗄️ Base de Données

### Supabase - Table `lead_magnets`

```sql
CREATE TABLE lead_magnets (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  type TEXT DEFAULT 'guide-sites-5min',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

**Opérations**:
- `insertLeadMagnetEmail()` dans `/lib/db.ts`
- Gestion duplicates (unique constraint sur email)

---

## ✨ Fonctionnalités Principales

### 🏠 Homepage
- Hero section avec proposition de valeur IA/Liberté/Temps
- Stats 24/7, 0h, 100%
- 3 produits alignés en grid avec badges (-50%, Best Seller)
- Lead magnet pleine largeur avec badge "GRATUIT" animé
- Section problème/solution (Sans IA vs Avec l'IA)
- Témoignages clients
- CTA final vers lead magnet
- Header unifié sur toutes les pages

### 📩 Lead Magnet
- Landing page optimisée conversion
- Formulaire email simple
- Guide envoyé automatiquement par email
- Notification au propriétaire
- CTA vers formations payantes

### 💼 Système Devis
- Qualification automatique prospects
- 2 paths (projet validé / curieux)
- Collecte infos complètes (budget, timeline)
- Email détaillé au propriétaire
- Confirmation prospect sous 24h

### 💳 E-commerce
- 3 produits avec prix de lancement -50%
- Checkout Stripe
- Livraison automatique par email
- Pages produits détaillées

## 🧹 FICHIERS À NETTOYER

### ❌ À SUPPRIMER (Code mort)

```bash
# Système i18n inutilisé (commit 1f4b1ea: "Suppression i18n")
/messages/en.json
/messages/fr.json
/messages/products-en.json
/messages/products-fr.json
/i18n/request.ts

# API routes inutiles
/app/api/emails/route.ts       # Pas d'auth, exposé
/app/api/init-db/route.ts      # Utilitaire one-shot
/app/api/send-email/route.ts   # Ancien système lead magnet
```

---

## 🚨 Notes de Sécurité

### ✅ Sécurisé
- Clés Stripe en `.env.local` (pas dans Git)
- Webhook signature validation
- Supabase RLS (à vérifier/configurer)

### ⚠️ Attention
- `/api/emails` exposé sans auth → **À supprimer ou sécuriser**
- Pas de rate limiting sur `/api/send-email` → Risque spam

---

## 📝 Scripts NPM

```json
{
  "dev": "next dev",           // Dev server
  "build": "next build",       // Build production
  "start": "next start",       // Start prod server
  "lint": "next lint"          // ESLint
}
```

---

## 🎯 Prochaines Étapes Recommandées

### Court terme (1-2h)
1. Supprimer fichiers i18n morts
2. Retirer `LanguageSelector.tsx`
3. Simplifier `next.config.js`
4. Supprimer `/api/emails` et `/api/init-db`

### Moyen terme (1 semaine)
1. Extraire composants de la homepage
2. Ajouter rate limiting (Vercel Edge Config ou Upstash)
3. Configurer Supabase RLS
4. Ajouter tests E2E (Playwright)

### Long terme
1. Dashboard admin pour voir leads
2. A/B testing sur CTA
3. Produits additionnels
4. Programme d'affiliation

---

## 📞 Support

**Email**: noreply@nash369.com
**Domaine**: https://nash369.com
**Git**: Privé (local)

---

## 📄 Licence

Propriétaire - Tous droits réservés

---

**Dernière mise à jour**: 19 Janvier 2026
**Version**: 1.1.0
**Statut**: Production (LIVE)

---

## 📋 Changelog

### Version 1.1.0 - 19 Janvier 2026
**Corrections Stripe & Pages Produits**

✅ **Ajouts**
- Création page produit manquante `/app/produits/site-vitrine/page.tsx` (Formation 49.90€)
- Page avec design cohérent, badge "BEST SELLER", testimonials
- Intégration complète du checkout Stripe

✅ **Corrections Stripe Price IDs**
- **site-vitrine**: Corrigé `price_1Spt...` → `price_15pt...` (typo dans data/products.json:29)
- **site-ia**: Corrigé `price_1Spt...` → `price_15pt...` (typo dans data/products.json:47)
- Les deux produits redirigent maintenant correctement vers Stripe Checkout

🔧 **Fichiers modifiés**
- `data/products.json` - Stripe Price IDs corrigés
- `app/produits/site-vitrine/page.tsx` - Page créée
- `README.md` - Documentation mise à jour

🐛 **Bugs corrigés**
- ❌ Erreur 404 sur `/produits/site-vitrine` → ✅ Page fonctionnelle
- ❌ Erreur "Stripe configuration error" → ✅ Checkout fonctionnel
- ❌ Price IDs invalides → ✅ Price IDs validés et testés

📦 **Commits**
- `5c34e15` - feat: Add missing site-vitrine product page
- `0467c22` - fix: Correct Stripe Price IDs for site-vitrine and site-ia

### Version 1.0.0 - Janvier 2026
- Refonte complète: Lead magnet + système devis
- Hébergement Vercel en production
- Stripe live mode configuré
- Email automation Resend opérationnel
