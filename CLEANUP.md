# 🧹 Plan de Nettoyage du Code

Guide pour nettoyer les fichiers inutilisés et simplifier l'architecture.

---

## ❌ FICHIERS À SUPPRIMER IMMÉDIATEMENT

### 1. Système i18n mort (Commit `1f4b1ea`)

**Contexte**: Le système i18n a été retiré pour revenir à une architecture simple.

```bash
# Supprimer ces fichiers :
rm -rf messages/
rm i18n/request.ts
rm -rf i18n/
rm components/LanguageSelector.tsx
```

**Fichiers concernés** :
- `/messages/en.json` (120 lignes)
- `/messages/fr.json` (120 lignes)
- `/messages/products-en.json` (30 lignes)
- `/messages/products-fr.json` (30 lignes)
- `/i18n/request.ts` (25 lignes)
- `/components/LanguageSelector.tsx` (50 lignes)

**Impact** :
- ✅ -375 lignes de code mort
- ✅ Bundle JS plus léger (~15KB)
- ✅ Dossiers inutiles supprimés

---

### 2. API Routes inutilisées/dangereuses

#### `/app/api/emails/route.ts` 🚨 SÉCURITÉ

**Problème** : Endpoint GET sans authentification qui expose tous les emails de la DB.

```typescript
// app/api/emails/route.ts - ACTUEL (DANGEREUX)
export async function GET() {
  const emails = await getAllLeadMagnetEmails()
  return NextResponse.json({ emails })
}
```

**Action** : SUPPRIMER

```bash
rm app/api/emails/route.ts
```

**Alternative** : Si besoin d'un dashboard admin, créer un endpoint protégé avec auth.

---

#### `/app/api/init-db/route.ts`

**Utilité** : One-shot pour initialiser Supabase (déjà fait).

```bash
rm app/api/init-db/route.ts
```

**Impact** : Endpoint qui ne sert plus à rien.

---

### 3. Simplifier `next.config.js`

**Actuel** :
```javascript
const withNextIntl = require('next-intl/plugin')('./i18n/request.ts');
const nextConfig = {};
module.exports = withNextIntl(nextConfig);
```

**Après suppression i18n** :
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;
```

**Action** :
```bash
# Éditer next.config.js
# Retirer import next-intl
```

---

### 4. Dépendance NPM inutilisée

**À désinstaller** :
```bash
npm uninstall next-intl
```

**Impact** :
- ✅ -2.5MB dans `node_modules`
- ✅ Dépendance retirée de `package.json`

---

## 📦 RÉSUMÉ DES SUPPRESSIONS

### Commandes à exécuter

```bash
# 1. Supprimer fichiers i18n
rm -rf messages/
rm -rf i18n/
rm components/LanguageSelector.tsx

# 2. Supprimer API routes inutiles
rm app/api/emails/route.ts
rm app/api/init-db/route.ts

# 3. Désinstaller dépendance
npm uninstall next-intl

# 4. Éditer next.config.js manuellement (voir ci-dessus)
```

### Gains attendus

| Métrique | Avant | Après | Gain |
|----------|-------|-------|------|
| Lignes de code | ~3,500 | ~3,050 | -450 lignes |
| Fichiers sources | 28 | 22 | -6 fichiers |
| node_modules size | ~320MB | ~317MB | -3MB |
| Bundle JS client | ~180KB | ~165KB | -15KB |
| Composants | 1 | 0 | N/A |
| Dossiers vides | 2 (`messages/`, `i18n/`) | 0 | -2 |

---

## 🔧 REFACTORING OPTIONNEL

### Priorité Moyenne (2-3h)

#### 1. Extraire composants de `/app/page.tsx`

**Problème** : Homepage monolithique (450 lignes).

**Solution** : Créer composants réutilisables.

```
/components
  /home
    Hero.tsx              (80 lignes)
    ProductGrid.tsx       (120 lignes)
    Testimonials.tsx      (60 lignes)
    Guarantee.tsx         (40 lignes)
    Newsletter.tsx        (50 lignes)
```

**Bénéfices** :
- Meilleure lisibilité
- Réutilisation possible
- Tests unitaires plus faciles

---

#### 2. Unifier templates email

**Problème** : Duplication HTML email dans 2 fichiers.

**Fichiers concernés** :
- `/app/api/send-email/route.ts` (template lead magnet)
- `/lib/stripe.ts` (template produits)

**Solution** : Créer `/lib/email-templates.ts`

```typescript
// lib/email-templates.ts
export const leadMagnetTemplate = (downloadUrl: string) => `...`
export const productTemplate = (productName: string, url: string) => `...`
```

**Impact** :
- Code DRY
- Maintenance simplifiée
- Templates centralisés

---

### Priorité Basse (optionnel)

#### 3. Composant `<ProductCard />`

**Utilité** : Réutiliser le même design pour afficher produits.

```typescript
// components/ProductCard.tsx
interface ProductCardProps {
  id: string
  name: string
  price: number
  description: string
  image?: string
}

export function ProductCard({ id, name, price, description }: ProductCardProps) {
  // ...
}
```

**Utilisation** :
- Homepage product grid
- Page `/success` (related products)
- Futures landing pages

---

#### 4. Rate Limiting sur `/api/send-email`

**Problème** : Pas de protection spam sur lead magnet.

**Solution** : Ajouter Upstash Redis ou Vercel Edge Config.

```typescript
// lib/rate-limit.ts
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(3, '60 s'),
})
```

**Impact** :
- Protection contre spam
- Meilleure sécurité
- Coût Upstash : Gratuit (<10K req/mois)

---

#### 5. Sécuriser Supabase avec RLS

**Action** : Activer Row Level Security sur `lead_magnets`.

```sql
-- Supabase SQL Editor
ALTER TABLE lead_magnets ENABLE ROW LEVEL SECURITY;

-- Policy : Lecture admin seulement
CREATE POLICY "Admin read access"
ON lead_magnets FOR SELECT
USING (auth.uid() IN (
  SELECT id FROM admin_users
));

-- Policy : Insertion publique (pour formulaire)
CREATE POLICY "Public insert access"
ON lead_magnets FOR INSERT
WITH CHECK (true);
```

---

## ✅ CHECKLIST DE NETTOYAGE

### Phase 1 : Suppression fichiers morts (30 min)

- [ ] Supprimer `/messages/` (4 fichiers)
- [ ] Supprimer `/i18n/request.ts`
- [ ] Supprimer `/components/LanguageSelector.tsx`
- [ ] Supprimer `/app/api/emails/route.ts`
- [ ] Supprimer `/app/api/init-db/route.ts`
- [ ] Désinstaller `next-intl`
- [ ] Simplifier `next.config.js`
- [ ] Tester build : `npm run build`
- [ ] Vérifier site dev : `npm run dev`
- [ ] Commit : `chore: Nettoyage code mort (i18n, API inutiles)`

### Phase 2 : Refactoring homepage (2h) - OPTIONNEL

- [ ] Créer `/components/home/Hero.tsx`
- [ ] Créer `/components/home/ProductGrid.tsx`
- [ ] Créer `/components/home/Testimonials.tsx`
- [ ] Créer `/components/home/Guarantee.tsx`
- [ ] Créer `/components/home/Newsletter.tsx`
- [ ] Refactoriser `/app/page.tsx`
- [ ] Tester UI complète
- [ ] Commit : `refactor: Extraction composants homepage`

### Phase 3 : Sécurité & Performance (1h) - OPTIONNEL

- [ ] Ajouter rate limiting (Upstash)
- [ ] Configurer Supabase RLS
- [ ] Créer `/lib/email-templates.ts`
- [ ] Refactoriser emails
- [ ] Tests E2E basiques
- [ ] Commit : `feat: Rate limiting + RLS + Email templates`

---

## 🚀 APRÈS NETTOYAGE

### Commandes de vérification

```bash
# 1. Build production OK
npm run build

# 2. Pas d'erreurs ESLint
npm run lint

# 3. Test local
npm run dev
# Vérifier :
# - Homepage s'affiche
# - Pages produits OK
# - Lead magnet fonctionne
# - Checkout Stripe OK
```

### Déploiement Vercel

```bash
git add .
git commit -m "chore: Nettoyage code mort (i18n, API inutiles, composants)"
git push origin main
```

Vercel redéploie automatiquement.

---

## 📊 MÉTRIQUES POST-CLEANUP

### Avant
- **28 fichiers** sources
- **3,500 lignes** de code
- **6 dossiers** racine
- **320MB** node_modules
- **1 composant** (inutilisé)

### Après (Phase 1)
- **22 fichiers** sources (-21%)
- **3,050 lignes** de code (-13%)
- **4 dossiers** racine
- **317MB** node_modules (-1%)
- **0 composants** inutilisés

### Après (Phase 2+3) - OPTIONNEL
- **27 fichiers** sources
- **3,100 lignes** de code (mieux organisé)
- **5 composants** réutilisables
- Code DRY + sécurisé

---

## ⚠️ AVERTISSEMENTS

### À NE PAS supprimer

```bash
# GARDER ces fichiers critiques :
/lib/stripe.ts          # Logique paiement
/lib/db.ts              # Supabase operations
/lib/analytics.ts       # GA4 tracking
/data/products.json     # Config produits
/public/products/*      # Fichiers vendus
.env.local              # Variables d'environnement
```

### Backups

Avant nettoyage :
```bash
# Créer une branche backup
git checkout -b backup-before-cleanup
git push origin backup-before-cleanup

# Revenir sur main
git checkout main
```

En cas de problème :
```bash
git checkout backup-before-cleanup
```

---

**Dernière mise à jour** : Janvier 2026
**Temps estimé cleanup complet** : 30 min (Phase 1) + 3h (Phases 2-3 optionnelles)
