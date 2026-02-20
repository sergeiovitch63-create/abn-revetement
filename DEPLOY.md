# 🚀 Guide de déploiement - ABN Revêtement sur Vercel

## ✅ Projet créé et prêt

Le projet est dans `C:\dev\abn-revetement-vercel\` et est déjà commité en Git.

## 📋 Étapes pour déployer sur Vercel

### 1. Créer un repo GitHub

1. Aller sur GitHub.com
2. Créer un nouveau repository (ex: `abn-revetement`)
3. **Ne pas** initialiser avec README (le projet est déjà initialisé)

### 2. Connecter le projet local à GitHub

```bash
cd C:\dev\abn-revetement-vercel

# Ajouter le remote GitHub (remplace par ton URL)
git remote add origin https://github.com/TON-USERNAME/abn-revetement.git

# Pousser le code
git branch -M main
git push -u origin main
```

### 3. Déployer sur Vercel

1. Aller sur [vercel.com](https://vercel.com)
2. Cliquer sur **"Add New..."** → **"Project"**
3. Importer le repo GitHub `abn-revetement`
4. Vercel détecte automatiquement Next.js
5. Cliquer sur **"Deploy"**

### 4. Ajouter le domaine personnalisé

1. Dans Vercel → **Settings** → **Domains**
2. Cliquer sur **"Add Domain"**
3. Entrer `abn-revetement.com`
4. Vercel affiche les instructions DNS :
   - **CNAME** : `bf27731da827310a.vercel-dns-017.com.` (ou similaire)
   - Ou utiliser les **serveurs de noms** Vercel

### 5. Configurer les DNS dans OVH

**Option A : CNAME (pour www)**
- Sous-domaine : `www`
- Type : CNAME
- Cible : `bf27731da827310a.vercel-dns-017.com.` (avec le point final)

**Option B : Serveurs de noms (recommandé pour la racine)**
- Dans OVH → Serveurs DNS
- Remplacer par les serveurs Vercel (affichés dans Vercel)

## 🎯 Résultat

Une fois configuré :
- **https://abn-revetement.com** → Affiche le site ABN Revêtement
- **https://www.abn-revetement.com** → Affiche le site ABN Revêtement

## 📝 Notes

- Le site redirige automatiquement `/` vers `/m/abn-revetement`
- Toutes les pages fonctionnent : catégories, avis, etc.
- Le projet est complètement indépendant de Lucas Le Plaquiste

