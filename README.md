# Renforcement_Full_JS
Devoir pour le cours Renforcement JS

## Projet : Gestion des tâches

### Outils obligatoires :
1. **Node.js** : Installez Node.js à partir de [nodejs.org](https://nodejs.org/).
2. **MongoDB** :
   - **MongoDB Server** : Téléchargez et installez MongoDB Server à partir de [mongodb.com](https://www.mongodb.com/try/download/community) si vous prévoyez d'exécuter MongoDB localement.
   - **MongoDB Compass** : Utilisez MongoDB Compass pour interagir graphiquement avec la base de données, téléchargeable [ici](https://www.mongodb.com/products/compass).
   - Selon la version de votre ordinateur, utilisez la commande appropriée pour démarrer MongoDB. Par exemple, sur macOS, vous pouvez utiliser la commande suivante pour démarrer MongoDB après l'installation avec Homebrew :
     ```bash
     brew services start mongodb/brew/mongodb-community@6.0
     ```

## Niveau 0
### Fonctionnalités de Niveau 0:
1. Lorsque vous exécutez le programme, une base de données nommée `renforcement` ainsi qu'une collection `tasks` seront automatiquement créées dans MongoDB.
2. Vous verrez un tableau de planification où la colonne de gauche affiche les dates et la colonne de droite les tâches associées. Vous pouvez ajouter ou supprimer des tâches et des dates directement depuis ce tableau interactif.
### Commandes pour Niveau 1 
Exécutez les commandes suivantes dans le terminal pour démarrer le projet :
```bash
npm install
npm install express
npm install mongodb
npm start
```
   
## Niveau 1
Comme la base de données `renforcement` et la collection `tasks` ont déjà été créées lors du niveau 0, il n'a pas besoin de recréer ou de réinitialiser la base de données pour le niveau 1.
### Fonctionnalités de Niveau:
1. Inscription et connexion utilisateur :
  - Vous pouvez créer un compte, vous connecter et gérer des tâches une fois connecté.
2. Gestion des tâches :
  - Une fois connecté, vous pouvez ajouter, consulter et supprimer des tâches associées à votre utilisateur.

### Commandes pour Niveau 1 &2 :
Exécutez les commandes suivantes dans le terminal pour démarrer le projet :
```bash
npm install
npm install express
npm install mongodb
npm start
```

## Niveau 2
Comme la base de données `renforcement` et la collection `tasks` ont déjà été créées lors du niveau 0, il n'a pas besoin de recréer ou de réinitialiser la base de données pour le niveau 1.
### Fonctionnalités de Niveau:
1. Inscription et connexion utilisateur :
  - Vous pouvez créer un compte, vous connecter et gérer des tâches une fois connecté.
2. Gestion des tâches :
  - Une fois connecté, vous pouvez ajouter, consulter et supprimer des tâches associées à votre utilisateur.
3. Test unitaite :
  - Vous pouvez faire des tests unitaires pour le backend et frontend ainsi que des tests end-to-end (e2e) avec Cypress.

### Commandes pour Niveau 2 :
Exécutez les commandes suivantes dans le terminal pour démarrer le projet :
```bash
npm install
npm install express
npm install mongodb
npm start
```

#### Commandes pour les test :
Exécutez les commandes suivantes dans le terminal:

1. Pour fermer le serveur en cours d'exécution
   ```bash
   Ctrl + C
   ```
2. installez les dépendances
   ```bash
   npm install vitest @testing-library/vue
   npm install --save-dev jsdom
   npm install cypress --save-dev
   ```
3. Tests unitaires backend
    ```bash
    npm run test:backend
   ```
4. Tests unitaires frontend
 ```bash
   npm run test:frontend
   ```
5. Tests end-to-end avec Cypress 
   - Il faut assurer que le serveur est en cours d'exécution
    ```bash
    npm start
   ```
   - Exécutez les tests end-to-end
   ```bash
   npm run test:e2e
   ```

