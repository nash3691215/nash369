# Sécurité du Site NASH369

## Mesures de Sécurité Implémentées

### 1. Headers de Sécurité HTTP (middleware.ts)

- **X-Frame-Options: DENY** - Protection contre les attaques clickjacking
- **X-Content-Type-Options: nosniff** - Prévention du MIME type sniffing
- **X-XSS-Protection** - Protection contre les attaques XSS
- **Referrer-Policy** - Contrôle des informations de référence
- **Permissions-Policy** - Limitation des fonctionnalités du navigateur
- **Content-Security-Policy (CSP)** - Protection contre XSS et injection de code
- **HTTPS Redirect** - Redirection automatique vers HTTPS en production

### 2. Rate Limiting (lib/rate-limit.ts)

- Limite de **3 requêtes par heure** par IP pour le lead magnet
- Protection contre les abus et le spam
- Stockage en mémoire avec nettoyage automatique

### 3. Validation et Sanitization (lib/security.ts)

- **sanitizeEmail()** - Nettoyage des emails pour prévenir les injections
- **isValidEmail()** - Validation du format email
- **sanitizeText()** - Échappement des caractères HTML pour prévenir XSS
- **validateFormData()** - Validation complète des données de formulaire
- **isPotentialBot()** - Détection basique de bots
- **checkHoneypot()** - Champ honeypot anti-spam

### 4. Protection API (app/api/send-lead-magnet/route.ts)

- Rate limiting par IP
- Validation et sanitization des emails
- Détection de bots via User-Agent
- Champ honeypot pour détecter les spambots
- Logging des tentatives suspectes

### 5. Variables d'Environnement

- Fichier `.env` ignoré par Git (voir `.gitignore`)
- Fichier `.env.example` fourni comme template
- **JAMAIS** commiter les clés API réelles

### 6. Stripe Sécurité

- Clés publiques et secrètes séparées
- Webhook secret pour vérifier l'authenticité des événements Stripe
- Validation côté serveur uniquement

## Bonnes Pratiques

### Pour les Développeurs

1. **Ne jamais commiter les fichiers .env**
   ```bash
   git status  # Vérifier avant de commit
   ```

2. **Utiliser HTTPS en production**
   - Le middleware force la redirection HTTPS

3. **Tester les formulaires**
   - Essayer d'injecter du HTML/JavaScript
   - Vérifier le rate limiting
   - Tester avec différents User-Agents

4. **Monitorer les logs**
   ```bash
   # Chercher les activités suspectes
   grep "Potential bot" logs.txt
   grep "Rate limit exceeded" logs.txt
   ```

### Pour la Production

1. **Variables d'environnement Vercel**
   - Configurer toutes les variables dans le dashboard Vercel
   - Ne jamais exposer les clés dans le code

2. **Monitoring**
   - Surveiller les tentatives de rate limiting
   - Vérifier les emails de notification pour détecter les patterns suspects

3. **Mises à jour**
   - Garder les dépendances à jour
   ```bash
   npm audit
   npm update
   ```

## Amélirations Futures Recommandées

1. **Redis pour Rate Limiting**
   - Actuellement en mémoire (se réinitialise au redémarrage)
   - Passer à Redis pour une persistance cross-server

2. **reCAPTCHA v3**
   - Ajouter Google reCAPTCHA pour une meilleure protection anti-bot

3. **Email Verification**
   - Double opt-in pour confirmer les emails

4. **Database Logging**
   - Logger toutes les tentatives (succès et échecs) dans une DB

5. **CORS Strict**
   - Configurer CORS pour limiter les domaines autorisés

6. **Webhooks Security**
   - Vérifier les signatures Stripe webhook
   - Implémenter un système de replay protection

## Reporting de Sécurité

Si vous découvrez une vulnérabilité de sécurité, merci de contacter:
- Email: nash3691215@gmail.com
- Ne pas publier les vulnérabilités publiquement

## Checklist de Déploiement

- [ ] Variables d'environnement configurées sur Vercel
- [ ] HTTPS activé
- [ ] Headers de sécurité vérifiés (utiliser securityheaders.com)
- [ ] Rate limiting testé
- [ ] Formulaires testés contre XSS/injection
- [ ] Logs configurés
- [ ] Monitoring en place
- [ ] Backup des données configuré

## Ressources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security](https://nextjs.org/docs/advanced-features/security-headers)
- [Stripe Security](https://stripe.com/docs/security)
- [Vercel Security](https://vercel.com/docs/security)
