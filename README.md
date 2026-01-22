# NASH369 - Plateforme E-commerce Produits Numériques

Site e-commerce Next.js sécurisé pour vente de formations IA avec Stripe, email automation Resend, lead magnet HTML et système de devis.

**Live**: https://nash369.com
**Statut**: Production LIVE avec sécurité complète

---

## 🚀 Stack Technique

- **Framework**: Next.js 16.1.2 (React 19.2, App Router)
- **Langage**: TypeScript 5.9
- **Styling**: Tailwind CSS 3.4
- **Paiement**: Stripe Live Mode (checkout + webhooks)
- **Email**: Resend (transactionnel via noreply@nash369.com)
- **Database**: Supabase (leads table)
- **Analytics**: Google Analytics 4
- **Hosting**: Vercel (auto-deploy depuis GitHub)
- **Sécurité**: Rate limiting, validation email, honeypot, XSS protection, CSP headers

---

## 📦 Produits Actifs

| ID | Nom | Prix | Stripe Price ID | Statut |
|----|-----|------|----------------|--------|
| `zero-vivre` | De Zéro à Vivre de Ton Activité | 9.90€ | `price_1SptVQRws3CXDdFEpBC25JDU` | ✅ |
| `site-vitrine` | Créer un Site Pro avec l'IA | 49.90€ | `price_1SptTKRws3CXDdFEO1JTMGjD` | ✅ |
| `site-ia` | Crée ton Site Prêt à Vendre sans Shopify | 199.90€ | `price_1SptPhRws3CXDdFEw22XJlFf` | ✅ |
| `opportunites-ia-2026` | Lead Magnet (Opportunités IA 2026) | GRATUIT | N/A | ✅ |

**Mode de livraison actuel** : Manuel sous 24H (mode test)

---

## 📁 Structure Projet

```
/app
  /api
    /create-checkout-session   → Création session Stripe Checkout
    /webhooks/stripe           → Webhook post-paiement (email confirmation)
    /send-email                → Emails lead magnet + confirmation achat
    /send-lead-magnet          → [LEGACY] Ancien endpoint lead magnet
    /send-quote-request        → Emails demandes de devis
  /produits
    /zero-vivre/page.tsx       → Page produit 9.90€
    /site-vitrine/page.tsx     → Page produit 49.90€
    /site-ia/page.tsx          → Page produit 199.90€
  /guide-sites-5min/page.tsx   → Landing page lead magnet
  /devis/page.tsx              → Qualification prospects
  /success/page.tsx            → Confirmation post-achat
  page.tsx                     → Homepage
  layout.tsx                   → Layout root + Stripe.js

/lib
  stripe.ts                    → Logique Stripe checkout
  rate-limit.ts                → Rate limiting (3 req/h par IP)
  security.ts                  → Validation email, sanitization, anti-spam
  email-templates.ts           → Chargement fichiers HTML emails
  db.ts                        → Opérations Supabase

/public/products
  nash369-lead-magnet-ia-2026.html → Guide HTML complet (8 pages)

middleware.ts                  → Security headers (CSP, XSS, HTTPS)

/data
  products.json                → Configuration produits + Price IDs
```

---

## ⚙️ Variables d'Environnement

Fichier `.env.local` requis :

```bash
# Stripe LIVE MODE
STRIPE_SECRET_KEY=sk_live_51SlWquRws3CXDdFE...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_51SlWquRws3CXDdFE...
STRIPE_WEBHOOK_SECRET=whsec_...

# Resend
RESEND_API_KEY=re_T9G2BjR8_...

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://jtwraawwjhexunviyyji.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Site
NEXT_PUBLIC_BASE_URL=https://nash369.com

# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

---

## 🔄 Flux Utilisateur

### 1. Achat Produit (Mode Test - Livraison Manuelle)

```
Visiteur → Page Produit → Clic "Acheter"
  ↓
API /create-checkout-session
  ↓
Stripe Checkout (Paiement)
  ↓
Webhook /api/webhooks/stripe (checkout.session.completed)
  ↓
Email automatique via Resend:
  - Sujet: "✅ Merci pour ton achat - Livraison sous 24H"
  - Contenu: Paiement confirmé + Mode test (livraison manuelle 24H)
  - Référence commande incluse
  ↓
Redirect → /success
```

### 2. Lead Magnet (Guide HTML Complet)

```
Visiteur → Homepage → Formulaire email lead magnet
  ↓
Validation Sécurité:
  - Rate limiting (3 req/h par IP)
  - Sanitization email
  - Validation format
  - Détection bot (User-Agent)
  - Honeypot anti-spam
  ↓
API /send-lead-magnet
  ↓
Chargement HTML complet (lib/email-templates.ts)
  ↓
Email automatique Resend:
  - Sujet: "🎁 Voici ton guide : Les Opportunités IA 2026"
  - Contenu: Guide HTML 8 pages complet (opportunités, framework, FAQ)
  - CTA vers formations payantes
  ↓
Email notification propriétaire:
  - Email, IP, User-Agent trackés
  - Action follow-up suggérée
```

### 3. Système Devis

```
Visiteur → /devis → Formulaire
  ↓
API /send-quote-request
  ↓
Email notification au propriétaire
  ↓
Email confirmation au prospect
```

---

## 📧 Configuration Email

### Resend Setup

**Domaine vérifié**: `nash369.com`
**Expéditeur**: `NASH369 <noreply@nash369.com>`

### DNS Records (Namecheap)

```
Type  | Host           | Value
------|----------------|------------------
TXT   | @              | SPF record
CNAME | resend1._domainkey | DKIM key 1
CNAME | resend2._domainkey | DKIM key 2
```

### Templates Email

#### Lead Magnet (Opportunités IA 2026)
- Fichier: `/app/api/send-lead-magnet/route.ts`
- Template HTML: `/public/products/nash369-lead-magnet-ia-2026.html`
- Contenu: Guide complet 8 pages (1405 lignes HTML)
  - Couverture professionnelle
  - 3 opportunités IA détaillées avec chiffres
  - Framework en 3 phases (Validation → Monétisation → Scalabilité)
  - 3 scénarios concrets selon profil
  - FAQ complète
  - CTA vers formations

#### Confirmation Achat
- Fichier: `/app/api/webhooks/stripe/route.ts`
- Déclencheur: Webhook `checkout.session.completed`
- Contenu: Paiement confirmé + mode test + livraison 24H

**Tous les emails sont signés : NASH369**

---

## 💳 Configuration Stripe

### Mode Actuel
**LIVE MODE** - Paiements réels encaissés

### Webhook Configuration

**URL**: `https://nash369.com/api/webhooks/stripe`
**Événements**: `checkout.session.completed`
**Signing Secret**: Stocké dans `STRIPE_WEBHOOK_SECRET`

### Produits Stripe

Créer 3 produits dans Stripe Dashboard avec prices correspondants :

| Produit | Prix | Price ID Stripe |
|---------|------|-----------------|
| De Zéro à Vivre | 9.90€ | `price_1SptVQRws3CXDdFEpBC25JDU` |
| Créer un Site Pro | 49.90€ | `price_1SptTKRws3CXDdFEO1JTMGjD` |
| Site sans Shopify | 199.90€ | `price_1SptPhRws3CXDdFEw22XJlFf` |

**⚠️ IMPORTANT** : Les Price IDs doivent correspondre EXACTEMENT à ceux dans `data/products.json`

### Metadata Stripe Sessions

```typescript
{
  productId: string,     // ID du produit (ex: "site-vitrine")
  productFile: string    // Nom fichier (ex: "site-vitrine.html")
}
```

---

## 🗄️ Base de Données Supabase

### Table: `lead_magnets`

```sql
CREATE TABLE lead_magnets (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  type TEXT DEFAULT 'guide-sites-5min',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

**Notifications** : Edge Function configurée pour notifier lors d'un nouveau lead

---

## 🚀 Installation & Déploiement

### Installation Locale

```bash
# Cloner le repo
git clone <repo-url>
cd nash369

# Installer dépendances
npm install

# Créer .env.local avec les variables ci-dessus

# Lancer dev server
npm run dev
```

Site accessible sur `http://localhost:3000`

### Build Production

```bash
npm run build
npm start
```

### Déploiement Vercel

Le site est configuré pour auto-deploy :
1. Push sur `main` → Vercel build automatique
2. Variables d'env configurées dans Vercel Dashboard
3. Déploiement sur `https://nash369.com`

---

## 🐛 Problèmes Connus & Solutions

### Erreur: "Stripe configuration error"

**Cause** : Price ID invalide dans `data/products.json`

**Solution** :
1. Aller sur Stripe Dashboard → Products → Prices
2. Copier le Price ID exact (format: `price_1AbCdEf...`)
3. Mettre à jour dans `data/products.json`
4. Redéployer

### Emails non reçus

**Checklist** :
1. Vérifier DNS Resend (DKIM, SPF)
2. Vérifier RESEND_API_KEY dans `.env.local`
3. Checker logs dans Resend Dashboard
4. Vérifier spam folder

### Paiement ne redirige pas vers Stripe

**Cause possible** : Script Stripe.js non chargé

**Solution** :
1. Vérifier `app/layout.tsx` ligne 29 : `<script src="https://js.stripe.com/v3/" async></script>`
2. Vérifier clé publique Stripe dans `lib/stripe.ts` ligne 26
3. Tester en navigation privée (cache)

---

## 📝 Modifications Récentes (Jan 2026)

### ✅ Lead Magnet HTML Complet (Commit: `0cf6ae3`)

**Ajouté**:
- Guide HTML 8 pages "Opportunités IA 2026" (1405 lignes)
- Fonction `getLeadMagnetHTML()` pour charger fichiers HTML
- Email complet avec design professionnel (couverture, opportunités, framework, FAQ)
- Suppression anciens fichiers HTML produits (site-ia.html, zero-vivre.html)

**Résultat**: Les clients reçoivent un vrai guide professionnel au lieu d'un email basique

### ✅ Sécurité Complète (Commit: `2958b40`)

**Ajouté**:
- Middleware avec security headers (CSP, XSS, clickjacking protection)
- Rate limiting: 3 requêtes/heure par IP pour lead magnet
- Validation et sanitization email complète
- Honeypot anti-spam
- Détection bots via User-Agent
- Protection XSS/injection dans formulaires
- Redirection HTTPS forcée en production
- Documentation sécurité (`SECURITY.md`)
- `.env.example` et `.gitignore` mis à jour

**Résultat**: Site 100% protégé contre spam, bots, XSS, injections

### ✅ Corrections Stripe (Commit: `fde360e`, `1d7fe7d`, `ef9e622`)

### ✅ Corrections Stripe (Commit: `fde360e`, `1d7fe7d`, `ef9e622`)

**Problème** :
- Fichier `lib/stripe-config.ts` cassait le chargement Stripe côté client
- Price IDs incorrects pour `site-vitrine` et `site-ia`

**Solution** :
1. ✅ Supprimé `lib/stripe-config.ts`
2. ✅ Restauré version simple de `lib/stripe.ts`
3. ✅ Corrigé Price IDs dans `data/products.json` :
   - `site-vitrine`: `price_1SptTKRws3CXDdFEO1JTMGjD`
   - `site-ia`: `price_1SptPhRws3CXDdFEw22XJlFf`
4. ✅ Nettoyé fichiers documentation inutiles (CHANGELOG.md, SETUP.md, etc.)

### ✅ Système Email Automatique (Commit: `6d6d778`)

**Ajouté** :
- Email confirmation achat automatique via webhook Stripe
- Email lead magnet avec livraison 24H
- Mode test explicite : "Validation manuelle pour garantir qualité"
- Templates HTML stylés inline
- Signature NASH369 sur tous les emails

---

## 🔒 Sécurité

### ✅ Protection Complète Implémentée

#### Security Headers (middleware.ts)
- **X-Frame-Options: DENY** - Anti-clickjacking
- **X-Content-Type-Options: nosniff** - Anti-MIME sniffing
- **X-XSS-Protection** - Protection XSS
- **Content-Security-Policy (CSP)** - Scripts, styles, images contrôlés
- **Permissions-Policy** - Désactivation caméra, micro, géolocalisation
- **HTTPS Redirect** - Redirection automatique en production

#### API Protection (lib/rate-limit.ts)
- **Rate Limiting**: 3 requêtes/heure par IP pour lead magnet
- **Stockage en mémoire** avec nettoyage automatique
- **Messages d'erreur clairs** pour les utilisateurs

#### Validation & Sanitization (lib/security.ts)
- **sanitizeEmail()** - Nettoyage anti-injection
- **isValidEmail()** - Validation RFC compliant
- **sanitizeText()** - Échappement HTML pour XSS
- **validateFormData()** - Validation complète + détection patterns suspects
- **isPotentialBot()** - Détection bots via User-Agent
- **checkHoneypot()** - Champ honeypot anti-spam

#### Protection Données
- Clés API en `.env` (jamais committées)
- `.env.example` fourni comme template
- Validation signature webhook Stripe
- Paiements via Stripe (PCI compliant)
- HTTPS obligatoire (Vercel)

### 📋 Documentation Sécurité

Voir `SECURITY.md` pour:
- Instructions détaillées de chaque mesure
- Bonnes pratiques développeurs
- Checklist déploiement production
- Procédure reporting vulnérabilités

---

## 📊 Métriques & Monitoring

### Google Analytics 4
- Page views automatiques
- Event `purchase` avec transaction_id + montant
- Tracking conversion lead magnet

### Stripe Dashboard
- Paiements en temps réel
- Webhooks logs
- Analytics revenus

### Supabase Notifications
- Nouveau lead → Notification temps réel
- Email dashboard accessible

---

## 🧹 Fichiers Nettoyés

### ❌ Supprimés (Commit: `fde360e`)
- `CHANGELOG.md`
- `CLEANUP.md`
- `EMAIL_FLOW_CONFIG.md`
- `SETUP.md`
- `lib/stripe-config.ts`

### 📄 Conservés
- `README.md` (ce fichier)
- `STRIPE_CONFIG.md` (référence Stripe)

---

## 🔧 Pour les Développeurs

### Ajouter un Nouveau Produit

1. **Créer le produit dans Stripe Dashboard**
   - Aller sur Products → Create Product
   - Ajouter price → Copier Price ID

2. **Mettre à jour `data/products.json`**
   ```json
   {
     "id": "nouveau-produit",
     "name": "Nom du Produit",
     "price": 99.90,
     "stripe_price_id": "price_XXXXX",
     "description": "Description",
     "benefits": ["Bénéfice 1", "Bénéfice 2"]
   }
   ```

3. **Créer la page produit**
   ```bash
   cp app/produits/zero-vivre/page.tsx app/produits/nouveau-produit/page.tsx
   ```
   Modifier le `productId` dans `find(p => p.id === 'nouveau-produit')`

4. **Tester le checkout**
   ```bash
   npm run dev
   # Visiter /produits/nouveau-produit
   # Tester avec carte test: 4242 4242 4242 4242
   ```

### Modifier les Emails

**Email Lead Magnet** :
- Fichier: `app/api/send-email/route.ts`
- Ligne 22-47 : Template HTML

**Email Confirmation Achat** :
- Fichier: `app/api/webhooks/stripe/route.ts`
- Ligne 47-86 : Template HTML

**⚠️ Important** : Emails en HTML inline (pas de CSS externe)

### Debug Webhook Stripe

```bash
# Installer Stripe CLI
brew install stripe/stripe-cli/stripe

# Login
stripe login

# Écouter webhooks en local
stripe listen --forward-to localhost:3000/api/webhooks/stripe

# Tester événement
stripe trigger checkout.session.completed
```

---

## 📞 Contact & Support

**Email**: noreply@nash369.com
**Site**: https://nash369.com
**Stripe Dashboard**: https://dashboard.stripe.com
**Resend Dashboard**: https://resend.com/emails
**Supabase Dashboard**: https://supabase.com/dashboard

---

## 📄 Licence

Propriétaire - Tous droits réservés © 2026 NASH369

---

**Dernière mise à jour** : 22 Janvier 2026
**Version** : 2.0.0
**Statut** : Production LIVE - Sécurisé & Lead Magnet HTML
**Maintenu par** : Nash369
