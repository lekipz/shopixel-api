# Shopixel API

Ce dépôt contient les sources de la partie API du projet Shopixel. Il s'agit d'un
serveur [express](https://www.npmjs.com/package/express) qui expose les différents endpoints qu'un
utilisateur peut utiliser pour obtenir des informations sur les produits, ajouter une transaction en
fin de courses, obtenir des recommendations personnalisées, etc.

## Sommaire

- [Installation](#installation)
  - [Prérequis](#prérequis)
  - [Installation des dépendances](#installation-des-dépendances)
- [Développement](#développement)
  - [Lancement de la base de données locale](#lancement-de-la-base-de-données-locale)
  - [Configuration](#configuration)
  - [Démarrage du projet](#édmarrage-du-projet)
  - [Nettoyage](#nettoyage)
- [Importation des données produits](#importation-des-données-produits)
- [Build](#build)
- [Déploiement](#déploiement)
- [Liens](#liens)

## Installation

### Prérequis

- [Node.js >= 12.x.x](https://nodejs.org/en/download/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/)
- [Docker >= 1.13.0](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Installation des dépendances

Depuis la racine du projet, lancer la commande suivante :

```shell script
yarn
```

## Développement

### Lancement de la base de données locale

Ce projet utilise une base de données MongoDB conteneurisée pour le développement local. Un fichier
`docker-compose.yml` décrit déjà le conteneur devant être lancé. Il suffit donc de se placer à la
racine du projet et de lancer la commande suivante :

```shell script
docker-compose up -d
```

### Configuration

Puis, il faut renseigner quelques variables d'environnement pour configurer l'API. Dupliquer le fichier
`.env.template` en un nouveau fichier `.env`. Ce fichier ne doit **jamais** être ajouté dans le gestionnaire
de contrôle de version : une ligne lui est donc dédiée dans le fichier `.gitignore`.

Seules les variables `SHOPIXEL_DB_URL` et `SHOPIXEL_JWT_SECRET` sont nécessaires pour le développement
local, car le client Kafka n'est actif que sur l'environnement de production.

Si vous utilisez la base de données MongoDB locale comme recommandé [précedemment](#lancement-de-la-base-de-donnes-locale),
l'URL de connection est donc `mongodb://localhost:27017` ; sinon, renseignez l'URL de connexion à
votre base de données.

Pour la variable `SHOPIXEL_JWT_SECRET`, renseignez n'importe quelle chaîne de caractère alphanumérique.

### Démarrage du projet

Pour lancer le projet, depuis la racine du projet, lancer la commande suivante :

```shell script
yarn dev
```

Cette commande lancera un agent `nodemon` qui observera en temps réel les changements sur les fichiers
du projet et redémarrera le serveur local en conséquence.

### Nettoyage

Lorsque vous voulez arrêtez le serveur local, appuyez simplement sur `Ctrl + C`, ce qui coupera l'agent
`nodemon`. Puis, nettoyez la base de données locale avec la commande suivante :

```shell script
docker-compose down
```

## Importation des données produits

Si vous utilisez la base locale (celle du docker-compose), vous pouvez éxécuter la commande suivante
à la racine du projet pour initialiser les données produits :

```shell script
docker run \
      --rm \
      --network shopixel-api_default \
      -v $(pwd)/misc/products.json:/tmp/products.json \
      mongo:4 mongoimport --uri="mongodb://mongodb:27017/test" --collection=products --file=/tmp/products.json --jsonArray
```

## Build

Pour construire le projet en mode production, lancer la commande suivante dans un terminal à la
racine du projet :

```shell script
yarn build
```

Le code est ainsi minifié est optimisé dans un fichier `dist/main.js`.

## Déploiement

Le projet est hébergé sur un dépôt privée GitHub, qui est directement lié à un job [Travis CI](https://travis-ci.com/).
A chaque fois qu'un changement est observé sur la branche `master`, Travis CI effectue automatiquement
un nouveau déploiement. L'applcation est packagée est déployée sur un dyno [Heroku](https://heroku.com).

## Liens

- API Base path : https://https://shopixel-api.herokuapp.com
- Github : https://github.com/lekipz/shopixel-api
- Travis CI : https://travis-ci.com/github/lekipz/shopixel-api
- MongoDB Cluster : https://cloud.mongodb.com/v2/5e7e07cf1c8cdb4d6fa8edb7#clusters
