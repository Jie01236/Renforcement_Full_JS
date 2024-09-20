import express from "express";
import {connectToMongo} from "./db_utils.js";
import cors from 'cors';
import { ObjectId } from 'mongodb';

const app = express()
const port = 3000

app.use(cors());
app.use(express.json());

function findAllTasks(collection) {
    return collection.find({}).toArray();
  }

app.get('/tasks', (req,res) => {
    connectToMongo('renforcement', 'tasks')
    .then(collection => findAllTasks(collection))
    .then(tasks => res.json(tasks))
    .catch(error => {
        console.error("Une erreur est survenue :", error);
      });
});

app.post("/new", (req, res) => {
  const data = req.body;
    const { name, description } = data;
    connectToMongo('renforcement', 'tasks')
      .then(collection => collection.insertOne({ name, description }))
      .then(() => res.json({ message: "Tâche ajoutée avec succès" }))
      .catch(error => {
        console.error("Une erreur est survenue :", error);
      });
});

app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  connectToMongo('renforcement', 'tasks')
    .then(collection => collection.deleteOne({ _id: new ObjectId(id) }))
    .then(() => {res.json( {message: 'Tâche supprimée avec succès' }) })    
    .catch(error => {
      console.error("Une erreur est survenue :", error);
    });
});

app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});
