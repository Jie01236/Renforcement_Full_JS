import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://fanjie:e9WjQHNlRHs7urjH@cluster0.lh09h.mongodb.net/";

export function connectToMongo(dbName, collectionName) {
  const client = new MongoClient(uri);
  return client.connect()
    .then(() => {
      console.log("Connecté à MongoDB");
      return client.db(dbName).collection(collectionName);
    })
    .catch(error => {
      console.error('Erreur de connexion à MongoDB:', error);
    });
}


function findAllTasks(collection) {
  return collection.find({}).toArray();
}

function main() {
  connectToMongo('renforcement', 'tasks')
    .then(collection => {
      return findAllTasks(collection);
    })
    .then(tasks => {
      console.log("Tâches trouvées :");
    })
    .catch(error => {
      console.error("Une erreur est survenue :", error);
    });
}

main()