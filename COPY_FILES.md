# Instructions pour copier les fichiers depuis Lucas Le Plaquiste

## Fichiers à copier depuis `C:\dev\lucas-leplaquiste\` vers `C:\dev\abn-revetement-vercel\`

### 1. Structure des dossiers à créer :
```
abn-revetement-vercel/
├── src/
│   ├── app/
│   │   ├── m/
│   │   │   └── [job]/
│   │   │       ├── page.tsx
│   │   │       ├── [category]/
│   │   │       │   └── page.tsx
│   │   │       └── avis/
│   │   │           └── page.tsx
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── SafeImage.tsx
│   │   ├── QuickActions.tsx
│   │   ├── icons.tsx
│   │   └── LucasLikeTemplate.tsx
│   ├── lib/
│   │   ├── getPreset.ts
│   │   ├── images.ts
│   │   ├── i18n.ts
│   │   └── parseClientParams.ts
│   └── presets/
│       └── jobs/
│           └── abn-revetement.json
└── public/
    └── media/
        └── jobs/
            (toutes les images ABN)
```

### 2. Fichiers spécifiques à copier :

**Depuis `src/app/` :**
- `layout.tsx`
- `globals.css`
- `m/[job]/page.tsx`
- `m/[job]/[category]/page.tsx`
- `m/[job]/avis/page.tsx`

**Depuis `src/components/` :**
- `SafeImage.tsx`
- `QuickActions.tsx`
- `icons.tsx`
- `LucasLikeTemplate.tsx`

**Depuis `src/lib/` :**
- `getPreset.ts`
- `images.ts`
- `i18n.ts`
- `parseClientParams.ts`

**Depuis `src/presets/jobs/` :**
- `abn-revetement.json`

**Depuis `public/media/jobs/` :**
- Toutes les images ABN (abn-logo.jpg, ABN-Isolation-thermique-*.jpg, etc.)

### 3. Modifier `src/app/page.tsx` :

Créer un nouveau `src/app/page.tsx` qui redirige directement vers `/m/abn-revetement` :

```typescript
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/m/abn-revetement');
}
```

### 4. Adapter les routes dans les fichiers copiés :

Dans les fichiers copiés, les routes `/m/abn-revetement` fonctionneront déjà, donc pas besoin de modifier.

