# Projet : Gestion des tâches

## Installation

1. Téléchargez le fichier zip du projet à partir de GitHub.
2. Ouvrez un éditeur de code tel que **Visual Studio Code** ou un terminal à l'endroit où les fichiers sont extraits.

## Importation des données dans MongoDB Compass

Importer les données fournies au format JSON dans votre propre base de données MongoDB. Le fichier JSON se trouve dans le dossier **bd** du projet.

## Modification de l'URI dans le projet

Après avoir importé les données, il faut configurer correctement l'URI MongoDB dans le fichier `db_utils.js` pour que l'application puisse se connecter à la base de données.

###  pour MongoDB localement :
Modifiez l'URI dans le fichier `db_utils.js` :
```javascript
const uri = "mongodb://localhost:27017/nom_de_votre_base";
```

###  pour MongoDB Atlas, configurez URI en remplaçant les éléments nécessaires :
```bash
const uri = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/";
```

## Commandes

Exécutez les commandes suivantes dans le terminal pour démarrer le projet :

```bash
npm install
npm start
