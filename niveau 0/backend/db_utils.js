import { MongoClient } from 'mongodb';

const uri = "mongodb://localhost:27017";

const dbName = 'renforcement';
const collectionName = 'tasks';

const initialTasks = [
  {
    _id: "66e983a5d9f729c080d54ba0",
    name: "16/09/2024",
    description: "renforcement JS"
  },
  {
    _id: "66e983dbd9f729c080d54ba2",
    name: "17/09/2024",
    description: "renforcement JS"
  },
  {
    _id: "66ecd33479c9de4e11e781be",
    name: "18/09/2024",
    description: "renforcement JS"
  },
  {
    _id: "66ecd39279c9de4e11e781bf",
    name: "19/09/2024",
    description: "renforcement JS"
  }
];

export function connectToMongo() {
  const client = new MongoClient(uri);
  return client.connect()
    .then(() => {
      console.log("Connecté à MongoDB local");
      const db = client.db(dbName);

      return db;
    })
    .catch(error => {
      console.error('Erreur de connexion à MongoDB:', error);
      throw error; 
    });
}

export function initializeDatabase() {
  return connectToMongo()
    .then(db => {
      return db.listCollections({ name: collectionName }).toArray()
        .then(collections => {
          if (collections.length === 0) {
            console.log("Collection n'existe pas, création de la collection...");
            return db.createCollection(collectionName)
              .then(() => {
                console.log("Collection créée avec succès");
                return db.collection(collectionName).insertMany(initialTasks);
              })
              .then(() => {
                console.log("Tâches initiales insérées avec succès");
              });
          } else {
            console.log("Collection déjà existante");
          }
        });
    })
    .catch(error => {
      console.error("Erreur lors de l'initialisation de la base de données :", error);
    });
}

export function main() {
  initializeDatabase()
    .then(() => {
      console.log("Base de données initialisée");
    })
    .catch(error => {
      console.error("Erreur lors de l'exécution de main :", error);
    });
}
