# NASH369 - Site E-commerce Produits Digitaux

Site Next.js 14 pour vendre des produits digitaux (eBooks, formations, SaaS).

## 🚀 Quick Start

```bash
# Installer les dépendances
npm install

# Lancer en dev
npm run dev

# Build production
npm run build
npm start
```

Le site sera accessible sur `http://localhost:3000`

## 📂 Structure

```
/
├── app/
│   ├── page.tsx                    # Homepage
│   ├── prompts/page.tsx            # Lead magnet gratuit
│   ├── produits/
│   │   ├── burnout/page.tsx        # LP Burnout (9€)
│   │   ├── zero-vivre/page.tsx     # LP Zero à Vivre (9€)
│   │   └── site-ia/page.tsx        # LP Site IA (49€)
│   └── layout.tsx
├── data/
│   └── products.json               # Config produits
├── public/
│   └── products/                   # Fichiers produits (PDFs, HTMLs)
└── .env.example
```

## ⚙️ Configuration

### 1. Variables d'environnement

Copier `.env.example` vers `.env.local` :

```bash
cp .env.example .env.local
```

Puis remplir les clés API :

```env
# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxx
STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx

# Resend
RESEND_API_KEY=re_xxx

# URLs
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 2. Stripe Setup

1. Créer compte sur [stripe.com](https://stripe.com)
2. Aller dans **Developers > API keys**
3. Copier la Publishable key et Secret key
4. Créer les produits dans Stripe Dashboard
5. Récupérer les `price_id` pour chaque produit
6. Mettre à jour `data/products.json` avec les `stripe_price_id`

### 3. Resend Setup

1. Créer compte sur [resend.com](https://resend.com)
2. Obtenir API key
3. Ajouter dans `.env.local`

## 📦 Produits

Éditer `data/products.json` pour gérer les produits :

```json
{
  "products": [
    {
      "id": "burnout",
      "name": "Le Burnout du Battant",
      "price": 9,
      "stripe_price_id": "price_xxx",
      ...
    }
  ]
}
```

## 🚧 TODO - Intégrations à faire

### Stripe Checkout
- [ ] Créer `/app/api/create-checkout-session/route.ts`
- [ ] Créer `/app/api/webhooks/stripe/route.ts`
- [ ] Créer `/app/success/page.tsx`

### Email Automation
- [ ] Créer `/app/api/send-email/route.ts`
- [ ] Templates email pour chaque produit
- [ ] Auto-delivery après paiement

### Lead Magnet
- [ ] Intégrer formulaire email dans `/prompts`
- [ ] Auto-send du fichier gratuit

## 🚀 Déploiement Vercel

```bash
# Push sur GitHub
git add .
git commit -m "Initial commit"
git push

# Déployer sur Vercel
npm i -g vercel
vercel

# Configurer les variables d'env sur Vercel Dashboard
```

## 📝 Notes

- Tous les fichiers produits sont dans `public/products/`
- Vinted Vision redirige vers https://dashai-ochre.vercel.app/vinted
- Le site build et compile sans erreur ✅

## 🔗 Links

- **Repo GitHub** : https://github.com/nash3691215/nash369
- **X/Twitter** : [@nash3691215](https://twitter.com/nash3691215)
- **Email** : contact@nash369.com
