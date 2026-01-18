# NASH369 - Plateforme de Vente de Produits Numériques

Plateforme e-commerce Next.js pour la vente d'eBooks, formations et SaaS avec paiement Stripe, email automation et capture de leads.

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
    /send-email                → Resend email pour lead magnet
    /emails                    → [INUTILISÉ] GET emails database
    /init-db                   → [INUTILISÉ] Init Supabase
  /produits
    /[id]/page.tsx             → Pages produits dynamiques
  /guide-sites-5min/page.tsx   → Lead magnet (Guide création sites 5min)
  /devis                       → Système de qualification prospects
  /tarifs                      → Page tarifs transparents
  /success/page.tsx            → Confirmation post-achat
  page.tsx                     → Homepage (450 lignes)
  layout.tsx                   → Root layout + GA4

/lib
  stripe.ts                    → Logique Stripe + emails
  db.ts                        → Opérations Supabase
  analytics.ts                 → Events GA4

/components
  LanguageSelector.tsx         → [NON UTILISÉ] Sélecteur FR/EN

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

| Produit | Type | Prix | Stripe Price ID |
|---------|------|------|-----------------|
| **De Zéro à Vivre de Ton Activité** | eBook HTML | 9.90€ | `price_1SptVQRws3CXDdFEpBC25JDU` |
| **Crée ton Site Vitrine Simple avec l'IA** | Formation HTML | 49.90€ | `price_XXXXXX_VITRINE` |
| **Crée ton Site Prêt à Vendre sans Shopify** | Formation HTML | 199.90€ | `price_1QlWmKD32lTEYcOuSvSsPgXy` |
| **Comment je crée des sites en 5 min** | Lead Magnet | Gratuit | N/A |

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

### 2. Lead Magnet
```
Visiteur → /guide-sites-5min → Formulaire email
  → API /send-lead-magnet
  → Supabase insert (table lead_magnets)
  → Email Resend avec guide complet (méthode Claude + Hostinger)
  → Message confirmation + CTA vers formations
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

## 🧹 FICHIERS À NETTOYER

### ❌ À SUPPRIMER (Code mort)

```bash
# Système i18n inutilisé (commit 1f4b1ea: "Suppression i18n")
/messages/en.json
/messages/fr.json
/messages/products-en.json
/messages/products-fr.json
/i18n/request.ts

# Composant non utilisé
/components/LanguageSelector.tsx

# API routes inutiles
/app/api/emails/route.ts       # Pas d'auth, exposé
/app/api/init-db/route.ts      # Utilitaire one-shot
```

**Voir CLEANUP.md pour le plan détaillé**

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

**Dernière mise à jour**: Janvier 2026
**Version**: 1.0.0
**Statut**: Production (LIVE)
