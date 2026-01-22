# Configuration des Emails Automatiques

## 🎯 Objectif
Valider la demande et la capacité à encaisser en **mode test** avant d'automatiser complètement la livraison.

## 📧 Flux d'emails configurés

### 1. Lead Magnet Gratuit (Guide Sites 5min)
**Déclencheur** : Clic sur "Recevoir Gratuit"
**Email envoyé** : Confirmation de demande
**Contenu** :
- ✅ Paiement confirmé (gratuit)
- ⏱️ Livraison sous 24H max
- 🎁 Cross-sell vers formations payantes
- ✉️ Signature : **NASH369**

**Template** : `/app/api/send-email/route.ts` (type: `lead_magnet`)

---

### 2. Achat Formation/Produit Payant
**Déclencheur** : Paiement Stripe complété (`checkout.session.completed`)
**Email envoyé** : Merci pour ton achat - Livraison sous 24H
**Contenu** :
- ✅ Paiement confirmé
- 📦 Livraison sous 24H maximum
- ⚠️ **Mode test** : Validation manuelle pour garantir la qualité
- 📧 Référence de commande incluse
- ✉️ Signature : **NASH369**

**Template** : `/app/api/webhooks/stripe/route.ts`

---

## 🔄 Flux Technique

### Lead Magnet
```
Utilisateur remplit formulaire
    ↓
API /api/send-email (type: 'lead_magnet')
    ↓
Email envoyé via Resend
    ↓
Email sauvegardé en BDD (Supabase)
```

### Achat Payant
```
Utilisateur clique "Acheter"
    ↓
Redirection vers Stripe Checkout
    ↓
Paiement complété
    ↓
Webhook Stripe → /api/webhooks/stripe
    ↓
Email automatique envoyé via Resend
    ↓
Log de la commande dans la console
```

---

## 📋 Produits configurés

| Produit | Prix | Email auto | Status |
|---------|------|-----------|--------|
| **Guide Sites 5min** | Gratuit | ✅ Lead magnet | Actif |
| **De Zéro à Vivre** | 9.90€ | ✅ Confirmation achat | Actif |
| **Créer un Site Pro** | 49.90€ | ✅ Confirmation achat | Actif |
| **Site sans Shopify** | 199.90€ | ✅ Confirmation achat | Actif |
| **Site Clé en Main** | 2500€ | ✅ Confirmation achat | Actif |

---

## ⚙️ Configuration requise

### Variables d'environnement (.env.local)
```bash
# Resend (envoi emails)
RESEND_API_KEY=re_T9G2BjR8_JT6KhtQW1i2V4HdEguQg

# Stripe
STRIPE_SECRET_KEY=sk_live_51SlWquRws3CXDdFE...
STRIPE_WEBHOOK_SECRET=whsec_xxx...

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://jtwraawwjhexunviyyji.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Webhook Stripe à configurer
**URL** : `https://nash369.com/api/webhooks/stripe`
**Événements** : `checkout.session.completed`

---

## 🚀 Phase suivante (Automatisation)

Quand tu es prêt à automatiser la livraison :

1. **Créer les fichiers produits**
   - Uploader les formations sur Supabase Storage
   - Créer des liens de téléchargement sécurisés

2. **Modifier le webhook**
   - Remplacer "Livraison sous 24H" par lien de téléchargement immédiat
   - Envoyer l'accès direct au produit

3. **Retirer le mode test**
   - Supprimer le message "⚠️ Mode test"
   - Activer la livraison instantanée

---

## 📊 Tests recommandés

### Test Lead Magnet
1. Aller sur `/guide-sites-5min`
2. Entrer un email de test
3. Vérifier la réception de l'email

### Test Achat
1. Utiliser une carte de test Stripe : `4242 4242 4242 4242`
2. Compléter l'achat
3. Vérifier la réception de l'email de confirmation
4. Vérifier les logs dans Stripe Dashboard

---

## ✅ Status actuel
- ✅ Templates emails créés et stylés
- ✅ Webhook Stripe configuré
- ✅ Mode test activé avec message clair
- ✅ Signature NASH369 sur tous les emails
- ✅ Cross-sell dans email lead magnet
- ✅ Référence de commande dans emails d'achat

**Prêt pour les premiers tests ! 🎉**
