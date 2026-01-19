# Configuration Stripe - NASH369

Documentation de référence pour la configuration Stripe en production.

**Dernière vérification**: 19 Janvier 2026 ✅

---

## 🔑 Clés API

```bash
# .env.local (Production)
STRIPE_SECRET_KEY=sk_live_xxxxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx
```

**Attention**: Ne jamais commit ces clés dans Git!

---

## 💳 Products & Price IDs

### Produits Actifs

| Produit | Prix | Stripe Product ID | Stripe Price ID | Statut |
|---------|------|-------------------|-----------------|--------|
| **De Zéro à Vivre de Ton Activité** | 9.90€ | `prod_xxxxx` | `price_1SptVQRws3CXDdFEpBC25JDU` | ✅ Actif |
| **Créer un Site Pro avec l'IA** | 49.90€ | `prod_TnUSMoIEZVxHe5` | `price_15ptTKRws3CXDdFE01JTMGjD` | ✅ Actif |
| **Crée ton Site Prêt à Vendre sans Shopify** | 199.90€ | `prod_TnUOSYSsbiwQS2` | `price_15ptPhRws3CXDdFEw22XJIff` | ✅ Actif |

### ⚠️ Anciennes configurations (INVALIDES)

| Produit | Ancien Price ID (INVALIDE) | Raison |
|---------|---------------------------|---------|
| Site Vitrine | `price_1SptTKRws3CXDdFE01JTMGjD` | Typo: manque "5" → price_1**5**pt |
| Site Prêt à Vendre | `price_1SptPhRws3CXDdFEw22XJIff` | Typo: manque "5" → price_1**5**pt |

**Date correction**: 19 Janvier 2026
**Commit**: `0467c22`

---

## 🔔 Webhooks

### Endpoint Production

```
URL: https://nash369.com/api/webhooks/stripe
Events: checkout.session.completed
Signing Secret: whsec_xxxxx (dans .env.local)
```

### Configuration dans Stripe Dashboard

1. Aller sur: https://dashboard.stripe.com/webhooks
2. Ajouter endpoint: `https://nash369.com/api/webhooks/stripe`
3. Sélectionner événement: `checkout.session.completed`
4. Copier le Signing Secret → `.env.local`

### Test Webhook

```bash
# Tester localement avec Stripe CLI
stripe listen --forward-to localhost:3000/api/webhooks/stripe
stripe trigger checkout.session.completed
```

---

## 🛒 Checkout Session

### Création Session

```typescript
// app/api/create-checkout-session/route.ts
const session = await stripe.checkout.sessions.create({
  payment_method_types: ['card'],
  line_items: [{
    price: product.stripe_price_id,  // Price ID depuis products.json
    quantity: 1,
  }],
  mode: 'payment',
  success_url: `${BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
  cancel_url: `${BASE_URL}/produits/${productId}`,
  metadata: {
    productId: product.id,
    productFile: product.file || '',
  },
})
```

### Metadata utilisée

```typescript
{
  productId: 'zero-vivre' | 'site-vitrine' | 'site-ia',
  productFile: 'zero-vivre.html' | 'site-vitrine.html' | 'site-ia.html'
}
```

Cette metadata est récupérée dans le webhook pour envoyer le bon produit par email.

---

## 📧 Flux Post-Paiement

```
1. Client paie via Stripe Checkout
   ↓
2. Stripe envoie event "checkout.session.completed" au webhook
   ↓
3. Webhook vérifie signature (sécurité)
   ↓
4. Récupère metadata (productId, productFile)
   ↓
5. Envoie email Resend avec lien produit
   ↓
6. Track event GA4 'purchase'
   ↓
7. Redirect client vers /success
```

---

## 🧪 Tests

### Test Mode vs Live Mode

**Test Mode** (pour développement):
```bash
STRIPE_SECRET_KEY=sk_test_xxxxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
```

**Live Mode** (production actuelle):
```bash
STRIPE_SECRET_KEY=sk_live_xxxxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxxxx
```

### Cartes de test Stripe

En mode test uniquement:
- **Succès**: `4242 4242 4242 4242`
- **Décliné**: `4000 0000 0000 0002`
- **3D Secure**: `4000 0027 6000 3184`

**⚠️ Ne JAMAIS utiliser de vraies cartes en mode test!**

---

## 🔍 Vérification Configuration

### Checklist Production

- [x] Stripe en Live Mode
- [x] Price IDs corrects dans `data/products.json`
- [x] Webhook configuré et fonctionnel
- [x] Signing secret dans `.env.local`
- [x] Emails de livraison fonctionnels (Resend)
- [x] Redirect `/success` configurée
- [x] Cancel URL vers pages produits
- [x] Metadata productId + productFile

### Comment vérifier un Price ID

1. Aller sur: https://dashboard.stripe.com/prices
2. Chercher le prix (ex: 49.90€)
3. Cliquer sur le prix
4. Copier l'ID affiché (ex: `price_15ptTKRws3CXDdFE01JTMGjD`)
5. Vérifier dans `data/products.json` ligne correspondante

### Logs Stripe

- **Paiements**: https://dashboard.stripe.com/payments
- **Webhooks**: https://dashboard.stripe.com/webhooks
- **Événements**: https://dashboard.stripe.com/events
- **Logs**: https://dashboard.stripe.com/logs

---

## 🚨 Dépannage

### Erreur: "Erreur de configuration du paiement"

**Cause possible**:
- Price ID invalide dans `data/products.json`
- Clé Stripe expirée ou invalide
- Mode test/live incohérent

**Solution**:
1. Vérifier Price ID dans Stripe Dashboard
2. Copier exactement l'ID (attention aux typos!)
3. Mettre à jour `data/products.json`
4. Redéployer sur Vercel

### Erreur: "Webhook signature verification failed"

**Cause possible**:
- Signing secret incorrect
- Webhook désactivé dans Stripe

**Solution**:
1. Aller sur: https://dashboard.stripe.com/webhooks
2. Copier le Signing Secret
3. Mettre à jour `STRIPE_WEBHOOK_SECRET` dans `.env.local`
4. Redéployer

### Produit non livré après paiement

**Cause possible**:
- Webhook pas reçu
- Erreur dans envoi email Resend
- Metadata manquante

**Solution**:
1. Vérifier logs webhook: https://dashboard.stripe.com/webhooks
2. Vérifier logs Resend: https://resend.com/emails
3. Vérifier metadata dans session Stripe
4. Tester manuellement le webhook

---

## 📊 Monitoring

### KPIs à surveiller

- **Taux de conversion checkout**: Initiations vs Paiements réussis
- **Taux d'abandon panier**: Cancel vs Success
- **Erreurs webhook**: Events failed vs Success
- **Délai livraison**: Timestamp paiement → Email reçu

### Alertes recommandées

- [ ] Email si webhook échoue 3x de suite
- [ ] Email si aucun paiement pendant 7 jours
- [ ] Email si taux d'abandon > 50%

---

## 🔐 Sécurité

### Bonnes pratiques

✅ **À FAIRE**:
- Toujours valider signature webhook
- Stocker clés dans `.env.local` (jamais dans Git)
- Utiliser HTTPS en production
- Logger les événements importants
- Limiter les tentatives de paiement (rate limiting)

❌ **À NE PAS FAIRE**:
- Exposer les clés API dans le code frontend
- Ignorer la validation de signature webhook
- Utiliser mode test en production
- Stocker les cartes bancaires (PCI compliance)

---

## 📞 Support Stripe

- **Documentation**: https://stripe.com/docs
- **Dashboard**: https://dashboard.stripe.com
- **Support**: https://support.stripe.com
- **Status**: https://status.stripe.com

---

**Document maintenu par**: Nash369
**Dernière mise à jour**: 19 Janvier 2026
**Version Stripe API**: 2024-11-20.acacia
