# Configuration de l'API Claude Vision

Ce guide explique comment configurer l'API Claude Vision pour activer l'analyse réelle des screenshots Vinted.

## Mode de fonctionnement actuel

Le Scanner Vinted fonctionne en deux modes:

1. **Mode Démo** (par défaut)
   - Utilise des données générées aléatoirement
   - Aucune clé API requise
   - Parfait pour tester l'interface

2. **Mode Production** (avec API)
   - Utilise Claude Vision pour analyser les vrais screenshots
   - Nécessite une clé API Anthropic
   - Analyse précise et réelle des données Vinted

## Étapes de configuration

### 1. Obtenir une clé API Anthropic

1. Va sur [console.anthropic.com](https://console.anthropic.com/)
2. Crée un compte ou connecte-toi
3. Va dans "API Keys"
4. Clique sur "Create Key"
5. Copie ta clé (elle commence par `sk-ant-`)

### 2. Configurer la clé API localement

1. Ouvre le fichier `.env.local` à la racine du projet
2. Remplace `your-api-key-here` par ta vraie clé API:

```env
ANTHROPIC_API_KEY=sk-ant-api03-xxxxxxxxxxxxxxxxxxxxx
```

3. Sauvegarde le fichier

### 3. Redémarrer le serveur

```bash
# Arrête le serveur (Ctrl+C)
# Puis relance-le
npm run dev
```

### 4. Tester l'API

1. Va sur [http://localhost:3000/vinted/scanner](http://localhost:3000/vinted/scanner)
2. Upload un screenshot de ton tableau Vinted
3. Clique sur "Analyser maintenant"
4. L'API va analyser l'image et extraire les données réelles

## Configuration pour Vercel (Production)

### Variables d'environnement Vercel

1. Va sur ton dashboard Vercel
2. Sélectionne ton projet
3. Va dans "Settings" > "Environment Variables"
4. Ajoute:
   - **Name**: `ANTHROPIC_API_KEY`
   - **Value**: `sk-ant-api03-xxxxxxxxxxxxxxxxxxxxx`
   - **Environment**: Production, Preview, Development (tous)
5. Sauvegarde
6. Redéploie ton application

## Vérification du mode actif

Quand tu lances le serveur, tu verras dans les logs:

**Mode Démo:**
```
⚠️ ANTHROPIC_API_KEY not found. Using mock data.
```

**Mode Production:**
```
✓ Claude Vision API configured
```

## Coûts de l'API

L'API Claude Vision facture par nombre de tokens:
- **Input tokens** (image + prompt): ~$3 per million tokens
- **Output tokens** (réponse JSON): ~$15 per million tokens

Pour un screenshot Vinted typique:
- Input: ~1000-2000 tokens (~$0.003-0.006)
- Output: ~500-1000 tokens (~$0.007-0.015)
- **Total par analyse**: ~$0.01-0.02 (1-2 centimes)

Avec les plans tarifaires du Scanner:
- **Gratuit**: 3 scans/mois = ~$0.03-0.06/mois
- **Starter**: 10 scans/mois = ~$0.10-0.20/mois
- **Pro**: 30 scans/mois = ~$0.30-0.60/mois
- **Business**: Illimité = variable selon utilisation

## Limites de l'API

- **Rate limits**: 50 requêtes/minute (tier 1)
- **Max image size**: 5 MB
- **Formats supportés**: JPEG, PNG, GIF, WebP

## Dépannage

### Erreur "API key invalid"
- Vérifie que ta clé commence bien par `sk-ant-`
- Assure-toi de ne pas avoir d'espaces avant/après
- Vérifie que la clé n'a pas expiré

### Erreur "Rate limit exceeded"
- Tu as dépassé 50 requêtes/minute
- Attends 1 minute avant de réessayer
- Considère un upgrade de ton tier API

### L'API ne s'active pas
- Vérifie que `.env.local` est bien à la racine
- Redémarre complètement le serveur (pas de hot reload)
- Vérifie les logs du terminal

### Réponse "Invalid data structure"
- Le screenshot n'est peut-être pas assez clair
- Essaie avec une meilleure qualité d'image
- Assure-toi que le tableau Vinted est bien visible

## Test de l'API

Pour tester si l'API fonctionne, tu peux créer un script de test:

```bash
# Test avec curl (remplace YOUR_KEY par ta clé)
curl https://api.anthropic.com/v1/messages \
  -H "x-api-key: YOUR_KEY" \
  -H "anthropic-version: 2023-06-01" \
  -H "content-type: application/json" \
  -d '{
    "model": "claude-3-5-sonnet-20241022",
    "max_tokens": 1024,
    "messages": [{"role": "user", "content": "Hello"}]
  }'
```

Si tu reçois une réponse, l'API fonctionne!

## Support

Pour toute question sur l'API:
- Documentation Anthropic: [docs.anthropic.com](https://docs.anthropic.com)
- Support Anthropic: support@anthropic.com
- GitHub Issues: [Créer une issue](https://github.com/nash369/...)

## Sécurité

⚠️ **Important:**
- Ne commit JAMAIS ton fichier `.env.local`
- Ne partage JAMAIS ta clé API publiquement
- Utilise des variables d'environnement sur Vercel
- Révoque immédiatement toute clé exposée sur [console.anthropic.com](https://console.anthropic.com/)
