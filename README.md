# BIRODJIA — plateforme officielle

Ce dépôt contient le socle du site public bilingue et de son administration éditoriale Sanity.

## Ce qui est déjà préparé
- Site public français / anglais (`/fr`, `/en`).
- Présentation institutionnelle et rubriques projets / perspectives / contact.
- Cartes de projets alimentées par Sanity.
- Fiches projets.
- Schémas CMS pour projets et réglages du site.
- Administration Sanity intégrée sur `/studio`.
- Champs modifiables pour e-mail, téléphone, textes, logos, couvertures et galeries.
- Comptes individuels et permissions gérés par l'espace Sanity du propriétaire du projet.
- Logos officiels fournis intégrés comme médias initiaux : BIRODJIA (versions transparentes), SANIYA CLEAN, SAFETRAVEL, AAMYRO DIGITAL et GEOMIX COLOR.

## Important — ce qui nécessite encore une configuration
Ce projet n'est pas publié et aucune connexion externe n'a été créée à ta place.
Il faut créer le projet Sanity, ajouter son identifiant dans `.env.local`, installer les dépendances, tester, puis déployer sur Vercel et connecter le domaine.
Le dépôt ne contient aucun mot de passe ni clé secrète. Les dépendances doivent être installées sur ton ordinateur ou par Vercel avant le premier build. Le logo BIRODJIA est intégré en version blanche transparente pour les fonds sombres, en version bleu nuit transparente pour les fonds clairs, ainsi qu’en version principale sur fond bleu marine.

## Prérequis
- Node.js LTS
- Un compte GitHub contrôlé par BIRODJIA
- Un compte Sanity contrôlé par BIRODJIA
- Un compte Vercel contrôlé par BIRODJIA
- Accès aux DNS du domaine `birodjia.com`

## Installation locale
1. Copier `.env.example` vers `.env.local`.
2. Remplacer `NEXT_PUBLIC_SANITY_PROJECT_ID` par l'identifiant du projet Sanity.
3. Laisser `NEXT_PUBLIC_SANITY_DATASET=production`.
4. Dans un terminal, à la racine :
   ```bash
   npm install
   npm run dev
   ```
5. Ouvrir `http://localhost:3000/fr`.
6. L'administration est sur `http://localhost:3000/studio`.

## Initialiser Sanity
1. Créer un projet dans https://www.sanity.io/manage avec un compte BIRODJIA.
2. Copier le Project ID dans `.env.local`.
3. Lancer `npx sanity login` puis `npx sanity deploy` si tu souhaites aussi publier Sanity Studio séparément. Le studio intégré est accessible via `/studio` après configuration et déploiement du site.
4. Dans Sanity Manage, inviter chaque membre de l'équipe avec son propre compte et lui attribuer le rôle minimal nécessaire.
5. Créer un document « Réglages du site » et compléter les textes FR/EN, le téléphone et les liens.
6. Créer / publier les projets. Les contenus sans traduction anglaise doivent être complétés avant publication bilingue.

## Ajouter des projets et médias
Dans `/studio`, ouvrir « Projets » puis créer un document.
Renseigner les noms FR/EN, le slug, les résumés, les descriptions, le logo, l'image de couverture, la galerie, le statut et la visibilité.
- `Brouillon / privé` : non visible publiquement.
- `Projet en cours` : affiché dans la section projets.
- `Projet à venir` : affiché dans les perspectives.

Les fichiers images sont importés dans la bibliothèque Sanity depuis l'interface. Aucun changement de code n'est nécessaire.

## Déploiement
1. Pousser ce dépôt dans le GitHub de BIRODJIA.
2. Importer le dépôt dans Vercel.
3. Ajouter les variables d'environnement depuis `.env.local` dans Vercel.
4. Déployer et tester `/fr`, `/en` et `/studio`.
5. Ajouter `birodjia.com` et `www.birodjia.com` dans Vercel.
6. Configurer les DNS exactement selon les valeurs fournies par Vercel chez le registrar du domaine.
7. Vérifier HTTPS, formulaires, traductions et rôles d'accès avant annonce publique.

## Comptes et sécurité
- Ne jamais partager le compte propriétaire.
- Inviter chaque collaborateur individuellement dans Sanity.
- Ne jamais committer `.env.local`.
- Garder les clés et tokens uniquement dans les variables d'environnement.
- Tester les permissions avec un compte éditeur avant ouverture.
- Activer l'authentification multifacteur sur GitHub, Sanity et Vercel.

## À fournir / valider avant la mise en production
- Textes institutionnels définitifs en français et en anglais.
- Numéro de téléphone professionnel si souhaité.
- Liens des sites et réseaux sociaux des projets.
- Mentions légales, politique de confidentialité et paramètres de traitement des demandes.
- Adresse de l'hébergeur e-mail ou configuration d'envoi du formulaire.

## Note technique
La base actuelle utilise un lien `mailto:` pour la prise de contact. Pour collecter les messages dans l'administration et les transmettre automatiquement, un service d'envoi e-mail et une base de données/formulaire sécurisés devront être configurés avant la production.
