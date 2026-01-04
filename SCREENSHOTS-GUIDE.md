# Guide pour ajouter les screenshots

## Option 1 : Manuellement (Recommandé - Plus rapide)

### Étape 1 : Créer le dossier
```bash
mkdir -p public/screenshots
```

### Étape 2 : Prendre les captures d'écran

1. **DashAI** - Allez sur https://dashai-ochre.vercel.app/
   - Prenez une capture plein écran (Cmd + Shift + 3 sur Mac)
   - Sauvegardez comme `dashai-1.jpg` dans `public/screenshots/`

2. **DashAI Vinted** - Allez sur https://dashai-ochre.vercel.app/vinted
   - Prenez une capture plein écran
   - Sauvegardez comme `dashai-vinted-1.jpg` dans `public/screenshots/`

### Étape 3 : Mettre à jour les chemins dans products.ts

Ouvrez `data/products.ts` et remplacez les placeholders :

```typescript
// Pour DashAI
screenshots: [
  "/screenshots/dashai-1.jpg",
  "/screenshots/dashai-2.jpg"
],

// Pour DashAI Vinted
screenshots: [
  "/screenshots/dashai-vinted-1.jpg",
  "/screenshots/dashai-vinted-2.jpg"
],
```

### Étape 4 : Rebuild le projet
```bash
npm run build
npm run dev
```

---

## Option 2 : Script automatique avec Puppeteer

### Installation
```bash
npm install --save-dev puppeteer
```

### Exécution
```bash
node scripts/capture-screenshots.js
```

Le script va :
- Créer le dossier `public/screenshots/`
- Visiter vos applications
- Capturer des screenshots automatiquement
- Les sauvegarder au bon endroit

---

## Option 3 : Script Shell simple

```bash
chmod +x scripts/download-screenshots.sh
bash scripts/download-screenshots.sh
```

Utilise une API gratuite pour capturer les screenshots.

---

## Formats d'images supportés

- `.jpg` / `.jpeg` (recommandé - plus léger)
- `.png` (meilleure qualité)
- `.webp` (moderne, très optimisé)

## Dimensions recommandées

- **Largeur** : 1920px
- **Hauteur** : 1080px
- **Ratio** : 16:9 (aspect-video)

---

## Conseil Pro

Pour des screenshots de qualité professionnelle :
1. Utilisez vos applications avec des données de démo réalistes
2. Cachez les informations sensibles
3. Assurez-vous que l'interface est propre
4. Utilisez un grand écran (1920x1080 minimum)

Une fois les images en place, elles apparaîtront automatiquement sur :
- Page d'accueil
- Page /mini-saas
- Pages produit individuelles
