# ABN Revêtement - Site Standalone

Site web indépendant pour ABN Revêtement, prêt pour déploiement sur Vercel.

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000) dans ton navigateur.

## Déploiement sur Vercel

1. Pousser ce repo sur GitHub
2. Aller sur Vercel et **importer le projet**
3. Ajouter le domaine `abn-revetement.com` dans Settings → Domains
4. Vercel détecte automatiquement Next.js 14 et configure le build

## Structure

- `/` - Page d'accueil (redirige vers ABN Revêtement)
- `/[category]` - Pages catégories (isolation-thermique-exterieure, etc.)
- `/avis` - Page avis clients

