# Portfolio Matéo — Next.js

Portfolio sombre et moderne pour Matéo, vidéaste & photographe.
Créé par [Mattéo Dev](https://matteo-dev.fr).

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **CSS Modules** (zéro dépendance CSS externe)
- Police : Bebas Neue + DM Sans (Google Fonts)

## Démarrage

```bash
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000) dans ton navigateur.

## Build production

```bash
npm run build
npm start
```

## Personnalisation

### 1. Photo de profil
Dans `src/app/components/About.tsx`, remplace le bloc `photoPlaceholder` par :
```tsx
import Image from 'next/image'
// ...
<Image src="/photo.jpg" alt="Matéo" fill style={{ objectFit: 'cover' }} />
```
Place ta photo dans le dossier `public/`.

### 2. Projets
Dans `src/app/components/Projects.tsx`, modifie le tableau `projects` :
- Remplace les titres, descriptions et types
- Pour ajouter une vraie image de miniature, remplace `thumbIcon` par un `<Image>` Next.js

### 3. Statistiques
Dans `src/app/components/About.tsx`, modifie les valeurs des stats (projets, années, etc.)

### 4. Formulaire de contact
Le formulaire est actuellement en mode "demo". Pour l'activer :
- Utilise [Resend](https://resend.com) ou [Formspree](https://formspree.io)
- Crée une route API dans `src/app/api/contact/route.ts`

### 5. Couleurs
Toutes les couleurs sont dans `src/app/globals.css` sous `:root` :
```css
--accent: #00856F;       /* Vert Aston Martin principal */
--accent-light: #00a688; /* Vert plus clair (hover) */
--accent-dim: #00594C;   /* Vert plus sombre */
```

## Déploiement

Le plus simple : [Vercel](https://vercel.com)
```bash
npx vercel
```

## Structure

```
src/
└── app/
    ├── globals.css         # Variables CSS + reset
    ├── layout.tsx          # Layout racine + metadata
    ├── page.tsx            # Page principale
    └── components/
        ├── Navbar.tsx / .module.css
        ├── Hero.tsx / .module.css
        ├── About.tsx / .module.css
        ├── Projects.tsx / .module.css
        ├── Skills.tsx / .module.css
        ├── Contact.tsx / .module.css
        └── Footer.tsx / .module.css
```
