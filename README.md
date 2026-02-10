# NASH369 - Automatise ton business

Site officiel de NASH369, plateforme d'automatisation pour entrepreneurs.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel
- **Payment:** Stripe

## 📁 Structure

```
app/
├── layout.tsx          # Layout principal avec metadata
├── page.tsx            # Page d'accueil (une seule page scrollable)
├── globals.css         # Styles globaux et effects (glassmorphism)
├── merci/
│   └── page.tsx        # Page de confirmation post-achat Stripe
└── mentions-legales/
    └── page.tsx        # Mentions légales et CGV

components/
├── Header.tsx          # Navigation sticky avec scroll detection
├── Hero.tsx            # Section hero avec CTAs et stats animées
├── ProblemSolution.tsx # Problème vs Solution (3 colonnes)
├── Services.tsx        # 3 services (Audit, Setup, Premium)
├── Boutique.tsx        # 2 produits (Sites Web Express, N8N Course)
├── Resultats.tsx       # Compteurs animés et témoignages
├── About.tsx           # À propos avec stack tech
├── Newsletter.tsx      # Lead magnet - formulaire email
├── Contact.tsx         # Formulaire de contact complet
└── Footer.tsx          # Navigation, réseaux sociaux, légal
```

## 🎨 Design

- **Couleurs:**
  - Fond: `#0F172A` (slate-900)
  - Accent primaire: `#F97316` (orange-500)
  - Accent bleu: `#2563EB` (blue-600)
  - Accent violet: `#7C3AED` (violet-600)

- **Typo:**
  - Corps: Inter (Google Fonts)
  - Titres: Poppins (Google Fonts)

- **Dark mode:** Activé par défaut

## 🔧 Configuration

### Stripe Payment Links

Les liens d'achat des produits sont des **placeholders** à remplacer:
- `[STRIPE_LINK_1]` → Sites Web Express (9.90€)
- `[STRIPE_LINK_2]` → N8N Course (29€)

À remplir après création des Payment Links dans Stripe Dashboard.

### Webhook URLs

Les formulaires utilisent des **placeholders** pour les webhooks:
- Contact form: `[WEBHOOK_URL]` → N8N ou Formspree
- Newsletter: `[WEBHOOK_URL]` → N8N ou Formspree

À configurer après création des workflows N8N.

### Success URL (Post-Achat Stripe)

Dans Stripe Payment Link settings, définir:
```
https://nash369.com/merci
```

## 💻 Développement

```bash
# Installation
npm install

# Dev server
npm run dev
# → http://localhost:3000

# Build production
npm run build

# Start production
npm start

# Lint
npm run lint
```

## 📱 Pages

### `/` - Accueil (One-page scrollable)

Sections dans l'ordre:
1. **Hero** - Headline + sous-titre + 2 CTAs + stats
2. **Problem/Solution** - 3 colonnes comparatives
3. **Services** - 3 cartes (Audit, Setup, Premium)
4. **Boutique** - 2 produits digitaux avec Stripe
5. **Résultats** - Compteurs animés + 3 témoignages
6. **À propos** - Bio + stack tech
7. **Newsletter** - Lead magnet email
8. **Contact** - Formulaire complet + infos
9. **Footer** - Navigation, réseaux, légal

### `/merci` - Page de confirmation

Affichée après achat Stripe. Message de remerciement + instructions pour télécharger l'ebook.

### `/mentions-legales` - Cadre légal

Mentions légales, conditions de vente, politique de confidentialité, RGPD, etc.

## 🎯 Objectifs

1. **Capturer des contacts** - Services d'automatisation (audit gratuit, setup N8N, coaching)
2. **Vendre des produits** - 2 ebooks/formations via Stripe

## 📊 Performance

- Lighthouse Score: > 90
- First Load JS: ~140 KB
- Optimized images avec lazy loading
- CSS-in-JS avec Tailwind (minified)

## 🚀 Déploiement

Le site est automatiquement déployé sur Vercel à chaque push sur `main`.

```bash
git add .
git commit -m "Your message"
git push origin main
```

## 📝 Notes

- **Tous les formulaires** utilisent des webhooks configurables (N8N par défaut)
- **Stripe Payment Links** = simple redirection (pas d'SDK JS lourd)
- **Dark mode by default** (pas de toggle utilisateur)
- **Responsive** - mobile-first design
- **Animations** subtiles avec Framer Motion
- **SEO ready** - metadata complète, Open Graph, Twitter Card

## ✨ Tagline

**"Build systems. Not noise."**

---

**Auteur:** Noureddine
**Localisation:** Montpellier, France
**Email:** noureddine@nash369.com
**Twitter:** @nash369_
