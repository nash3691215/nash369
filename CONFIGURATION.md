# Configuration NASH369

Ce fichier liste toutes les placeholders à configurer avant le lancement complet.

## 🔴 URGENT - Placeholders à remplacer

### 1. Stripe Payment Links

**Fichier:** `components/Boutique.tsx`

Remplacer:
```
- [STRIPE_LINK_1]  → "Sites Web Express" (9.90€)
- [STRIPE_LINK_2]  → "Automatise Ton Business en 7 Jours" (29€)
```

Par tes vrais Stripe Payment Links:
```
https://buy.stripe.com/test_... (ou pay.stripe.com pour live)
```

### 2. Webhook URLs (Formulaires)

**Fichiers:**
- `components/Contact.tsx` - Formulaire contact complet
- `components/Newsletter.tsx` - Newsletter signup

Remplacer:
```
[WEBHOOK_URL]
```

Par **l'une de ces options:**

**Option A: N8N (Recommandé)**
```
https://nash369.webhook.n8n.cloud/webhook/form-submission
```
(À créer dans N8N)

**Option B: Formspree**
```
https://formspree.io/f/YOUR_FORM_ID
```
(À générer sur formspree.io)

### 3. Stripe Redirect URL (Success)

**Stripe Payment Link Settings:**
```
Success URL: https://nash369.com/merci
```

(À configurer manuellement dans Stripe Dashboard)

## 🟡 À Vérifier

### Contact Info

**Fichier:** `components/Contact.tsx` et `components/Footer.tsx`

Vérifier:
- ✅ Email: `noureddine@nash369.com`
- ✅ Téléphone: `+33 6 12 34 56 78`
- ✅ Twitter: `@nash369_`
- ✅ Localisation: Montpellier, France

### About Section

**Fichier:** `components/About.tsx`

- Avatar placeholder: `🚀` emoji (peut être remplacé par photo)
- Bio: À personnaliser avec ta vraie histoire
- Stack: À adapter à tes outils réels

## 🟢 Déjà configuré

- ✅ Google Fonts (Inter + Poppins) - auto-chargées
- ✅ Tailwind CSS - avec couleurs personnalisées
- ✅ Framer Motion - animations prêtes à l'emploi
- ✅ Responsive design - mobile-first
- ✅ Dark mode - par défaut
- ✅ SEO metadata - complète
- ✅ Vercel deployment - auto-build

## 📋 Checklist Avant Launch

- [ ] Créer Payment Links Stripe et remplacer les placeholders
- [ ] Configurer N8N webhooks pour les formulaires
- [ ] Ajouter success_url dans Stripe
- [ ] Tester achat (en test mode Stripe d'abord)
- [ ] Vérifier infos contact (email, téléphone, Twitter)
- [ ] Remplacer avatar placeholder par ta photo
- [ ] Tester formulaire contact (vérifier réception des données)
- [ ] Tester newsletter signup
- [ ] Tester lien /merci après achat
- [ ] Audit Lighthouse (Score > 90)
- [ ] Test mobile (tous les breakpoints)
- [ ] Vérifier Analytics (si applicable)

## 🔗 Liens Externes à Créer

1. **N8N Webhooks** (si choisi)
   - Webhook pour formulaire contact
   - Webhook pour newsletter
   - Intégration avec email service (Resend, SendGrid, etc.)

2. **Stripe Payment Links**
   - Product 1: Sites Web Express (9.90€)
   - Product 2: N8N Course (29€)

3. **Email Service**
   - Pour recevoir les soumissions de formulaires
   - Pour envoyer les ebooks après achat

## 💡 Améliorations Optionnelles

- [ ] Ajouter Google Analytics
- [ ] Ajouter chatbot (Typeform, Intercom)
- [ ] Ajouter cookies consent banner
- [ ] Ajouter FAQ section
- [ ] Ajouter case studies/portfolio
- [ ] Ajouter video hero
- [ ] Ajouter countdown timer (pour promotions)
- [ ] Ajouter live chat

## 📞 Support

Pour des questions ou problèmes:
- Email: noureddine@nash369.com
- Twitter: @nash369_

---

**Version:** 1.0
**Dernière mise à jour:** Février 2026
