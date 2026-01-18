# 🚀 SETUP NASH369 - Configuration des API

## 📋 CE QUI EST FAIT

✅ Architecture Next.js complète
✅ Design Tailwind responsive
✅ 8 pages créées (/, /guide-sites-5min, /produits/..., /devis, /tarifs)
✅ 3 APIs créées (checkout, webhook, lead-magnet, quote-request)
✅ Page /success
✅ Boutons "Acheter" connectés à Stripe
✅ Lead magnet email configuré

## ⚙️ CE QU'IL RESTE À FAIRE

Pour rendre le site **100% fonctionnel**, il faut ajouter les clés API Stripe et Resend.

---

## 1️⃣ CONFIGURER STRIPE

### Étape 1 : Créer/Se connecter au compte Stripe

1. Va sur https://dashboard.stripe.com/register
2. Crée un compte ou connecte-toi

### Étape 2 : Récupérer les clés API

1. Va sur https://dashboard.stripe.com/test/apikeys
2. Tu vas voir 2 clés :
   - **Publishable key** : `pk_test_...`
   - **Secret key** : `sk_test_...` (clique "Reveal" pour la voir)

### Étape 3 : Créer les produits dans Stripe

1. Va sur https://dashboard.stripe.com/test/products
2. Clique "Add product" pour chaque produit :

**Produit 1 : De Zéro à Vivre de Ton Activité**
- Name: `De Zéro à Vivre de Ton Activité`
- Description: `Le système complet pour construire une activité rentable`
- Pricing: One-time payment
- Price: `9.90 EUR`

**Produit 2 : Crée ton Site Vitrine Simple avec l'IA**
- Name: `Crée ton Site Vitrine Simple avec l'IA`
- Price: `49.90 EUR`

**Produit 3 : Crée ton Site Prêt à Vendre sans Shopify**
- Name: `Crée ton Site Prêt à Vendre sans Shopify`
- Price: `199.90 EUR`

### Étape 4 : Configurer le Webhook

1. Va sur https://dashboard.stripe.com/test/webhooks
2. Clique "Add endpoint"
3. URL: `https://nash369.com/api/webhooks/stripe`
4. Events: Sélectionne `checkout.session.completed`
5. Clique "Add endpoint"
6. Copie le **Signing secret** : `whsec_...`

---

## 2️⃣ CONFIGURER RESEND

### Étape 1 : Créer un compte Resend

1. Va sur https://resend.com/signup
2. Crée un compte avec ton email

### Étape 2 : Vérifier ton domaine (optionnel mais recommandé)

**Option A : Utiliser un domaine custom (nash369.com)**
1. Va sur https://resend.com/domains
2. Clique "Add Domain"
3. Entre `nash369.com`
4. Suis les instructions pour ajouter les DNS records sur Hostinger
5. Une fois vérifié, tu pourras envoyer des emails depuis `noreply@nash369.com`

**Option B : Utiliser le domaine Resend par défaut**
- Tu peux utiliser `onboarding@resend.dev` (limité à 100 emails/jour)

### Étape 3 : Récupérer la clé API

1. Va sur https://resend.com/api-keys
2. Clique "Create API Key"
3. Name: `Nash369 Production`
4. Permission: `Full Access`
5. Copie la clé : `re_...`

---

## 3️⃣ AJOUTER LES CLÉS DANS LE PROJET

### En local (développement)

1. Copie le fichier `.env.example` :
```bash
cp .env.example .env.local
```

2. Ouvre `.env.local` et remplis les clés :
```env
# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxxxx
STRIPE_SECRET_KEY=sk_test_xxxxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxx

# Resend
RESEND_API_KEY=re_xxxxxxx

# URLs
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### En production (Vercel)

1. Va sur https://vercel.com/nash369s-projects/nash369/settings/environment-variables
2. Ajoute chaque variable :
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` = `pk_test_...`
   - `STRIPE_SECRET_KEY` = `sk_test_...`
   - `STRIPE_WEBHOOK_SECRET` = `whsec_...`
   - `RESEND_API_KEY` = `re_...`
   - `NEXT_PUBLIC_BASE_URL` = `https://nash369.com`

3. **IMPORTANT** : Sélectionne "Production" pour chaque variable

4. Redéploie le site :
```bash
vercel --prod
```

---

## 4️⃣ TESTER LE FLOW COMPLET

### Test 1 : Lead Magnet (Gratuit)

1. Va sur https://nash369.com/guide-sites-5min
2. Entre ton email
3. Clique "Recevoir le guide gratuit"
4. Vérifie ton email (peut être dans spam)
5. Tu devrais recevoir le guide "Comment je crée des sites en 5 min"

### Test 2 : Achat produit

1. Va sur https://nash369.com/produits/burnout
2. Clique "Acheter Maintenant"
3. Tu seras redirigé vers Stripe Checkout
4. Utilise une carte test : `4242 4242 4242 4242`
5. Date : N'importe quelle date future
6. CVC : N'importe quel 3 chiffres
7. Valide le paiement
8. Tu seras redirigé vers /success
9. Vérifie ton email pour recevoir le produit

---

## 5️⃣ PASSER EN MODE PRODUCTION

Une fois que tout fonctionne en test :

### Sur Stripe

1. Active ton compte (ajoute infos bancaires)
2. Va sur https://dashboard.stripe.com/apikeys (SANS /test/)
3. Récupère les **vraies clés** (commence par `pk_live_...` et `sk_live_...`)
4. Remplace dans Vercel

### Sur Resend

1. Vérifie que ton domaine nash369.com est bien configuré
2. Change l'email "from" dans le code si besoin

---

## 📊 MONITORING

### Stripe Dashboard
- Voir les paiements : https://dashboard.stripe.com/payments
- Voir les clients : https://dashboard.stripe.com/customers

### Resend Dashboard
- Voir les emails envoyés : https://resend.com/emails

---

## 🆘 TROUBLESHOOTING

### "Email pas reçu"
- Check les spams
- Vérifie que Resend API key est correcte
- Regarde les logs Resend : https://resend.com/emails

### "Paiement ne fonctionne pas"
- Vérifie que Stripe keys sont correctes
- Check que le webhook est configuré
- Regarde les logs Stripe : https://dashboard.stripe.com/test/logs

### "Site ne build pas"
- Vérifie que toutes les dépendances sont installées : `npm install`
- Check les erreurs TypeScript : `npm run build`

---

## 📞 BESOIN D'AIDE ?

Si tu bloques, contacte-moi :
- Twitter : [@nash3691215](https://twitter.com/nash3691215)
- Email : contact@nash369.com

---

**C'est prêt ! Une fois les clés configurées, le site est 100% fonctionnel** 🚀
