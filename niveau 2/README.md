## Niveau 2
Comme la base de données `renforcement` et la collection `tasks` ont déjà été créées lors du niveau 0, il n'a pas besoin de recréer ou de réinitialiser la base de données pour le niveau 1.
### Fonctionnalités de Niveau 2 :
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
