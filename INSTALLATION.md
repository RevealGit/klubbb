# Klubbb — Guide d'installation

## Prérequis

Installer Node.js (version 18+) depuis https://nodejs.org

## Lancer le projet

```bash
# 1. Aller dans le dossier
cd C:/Users/nancy/klubbb

# 2. Installer les dépendances
npm install

# 3. Lancer en mode développement
npm run dev
```

Le site sera disponible sur http://localhost:3000

## Build pour la production

```bash
npm run build
npm start
```

## Pages disponibles

| URL | Description |
|-----|-------------|
| / | Page d'accueil |
| /comment-ca-marche | Comment ça marche |
| /avis | Avis & Témoignages |
| /faq | FAQ & Support |
| /publier-demande | Formulaire de demande |
| /espace-transporteur | Page transporteur |

## À personnaliser (logo + numéro client)

- **Logo** : remplacer le texte `klubbb` dans `components/Navbar.tsx` (ligne ~35) et `components/Footer.tsx` (ligne ~68) par un `<Image>` avec le logo du client
- **Numéro de téléphone** : dans `components/Footer.tsx` (ligne ~75), remplacer `+33 X XX XX XX XX`
- **Email** : dans `components/Footer.tsx` (ligne ~80), remplacer `contact@klubbb.fr`
