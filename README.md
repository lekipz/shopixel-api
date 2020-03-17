# Shopixel API

## Sommaire

- [Installation](#installation)
- [Développement](#développement)
- [Liens](#liens)

## Installation

### Prérequis

- [Node.js >= 12.x.x](https://nodejs.org/en/download/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/)
- [AWS CLI v2](https://docs.aws.amazon.com/fr_fr/cli/latest/userguide/install-cliv2.html)
- [Serverless CLI 2.x](https://serverless.com/framework/docs/getting-started#installing-via-npm)

### Configuration de Serverless

Créer un compte sur [Serverless Dashboard](https://dashboard.serverless.com/) en utilisant
l'auth Github. Lancer ensuite la commande `serverless login` pour connecter la CLI à votre compte.
Contacter ensuite l'admin du projet pour appartenir à l'équipe du projet sur Serverless Dashboard.

### Configuration d'AWS

Contacter l'admin du project pour récupérer la clé d'accès et la clé secrète de l'utilisateur
AWS IAM de déploiement. Une fois récupérées, lancer la commande `aws configure`, et renseigner
les paramètres suivants :

```
AWS Access Key ID: <Clé d'accès AWS>
AWS Secret Access Key: <Clé secrète AWS>
Default region name: eu-west-1
Default output format: json
```

Vérifier ensuite que les fichiers *~/.aws/config* et *~/.aws/credentials* ont été créés et
correctement renseignés.

Tester la bonne configuration de votre CLI avec la commande suivante :

```shell script
aws cloudformation list-stacks
```

### Installation des dépendances

Depuis la racine du projet, lancer la commande suivante :

```shell script
yarn
```

## Développement

Pour lancer le projet, depuis la racine du projet, lancer la commande suivante :

```shell script
yarn start
```

## Liens

- Github : https://github.com/lekipz/shopixel-api
- Travis CI : https://travis-ci.org/github/lekipz/shopixel-api
- Serverless dashboard : https://dashboard.serverless.com/tenants/lekip/applications/shopixel-api/overview/service
- API Gateway : https://eu-west-1.console.aws.amazon.com/apigateway/home?region=eu-west-1#/apis/jje3ln2puc/resources/gibi5blc5l

