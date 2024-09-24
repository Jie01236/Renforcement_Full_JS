import express from "express";
import {connectToMongo} from "./db_utils.js";
import cors from 'cors';
import { ObjectId } from 'mongodb';
import session from "express-session";
import bcrypt from "bcrypt";

const app = express()
const port = 3000

app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true 
}));
app.use(express.json());
app.use(session({
  secret: 'cle_secrete', 
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } 
}));

function findAllTasks(collection, req) {
    return collection.find({ userId: req.session.userId }).toArray();
  }

app.get('/tasks', (req,res) => {
  if (!req.session.userId) {
    return res.json({ message: "Non autorisé. Veuillez vous connecter." });
  }
  console.log("User ID:", req.session.userId); 

    connectToMongo('renforcement', 'tasks')
    .then(collection => findAllTasks(collection, req))
    .then(tasks => 
      {console.log("Tasks:", tasks);
    res.json(tasks)})
    .catch(error => {
        console.error("Une erreur est survenue :", error);
      });
});

app.post("/new", (req, res) => {
  const { name, description } = req.body;

  if (!req.session.userId) {
    return res.json({ message: "Non autorisé" });
  }

  connectToMongo('renforcement', 'tasks')
    .then(collection => {
      console.log('MongoDB connected and collection selected');
      return collection.insertOne({
        name, 
        description, 
        userId: req.session.userId 
      });
    })
    .then(() => {
      console.log("Task added:", { name, description, userId: req.session.userId });
    })
    .catch(error => {
      console.error("Erreur lors de l'ajout de la tâche :", error);
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

//niveau 1

app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  bcrypt.hash(password, 10)
    .then(hashedPassword => {
      const user = { username, password: hashedPassword };
      return connectToMongo('renforcement', 'users')
        .then(collection => collection.insertOne(user));
    })
    .then(() => {
      res.json({ message: "Utilisateur enregistré avec succès" });
    })
    .catch(error => {
      console.error("Erreur lors de l'enregistrement de l'utilisateur :", error);
    });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  connectToMongo('renforcement', 'users')
    .then(collection => collection.findOne({ username }))
    .then(user => {
      if (!user) {
        return res.json({ message: "Nom d'utilisateur ou mot de passe incorrect" });
      }

      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (!isMatch) {
            return res.json({ message: "Nom d'utilisateur ou mot de passe incorrect" });
          }
          req.session.userId = user._id;
          res.json({ message: "Connexion réussie" });
        });
    })
    .catch(error => {
      console.error("Erreur lors de la connexion :", error);
    });
});

app.get('/check-session', (req, res) => {
  if (req.session.userId) {
    res.json({ message: 'Session valide' });
  } else {
    res.json({ message: 'Non autorisé. Veuillez vous connecter.' });
  }
});

app.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('connect.sid');
    res.json({ message: "Déconnexion réussie." });
  });
});

app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});

export default app;
