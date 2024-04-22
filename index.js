// Import des différentes dépendances
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// Initialisation de l'appli express, on définis le numéor de prot
let app = express();
let port = 3000;

// Ici on va se connecter a la base de donnée grâce a Mongoose
// MONGO_URI='mongodb://localhost:27017/pokemondb/'
mongoose
    .connect(process.env.MONGO_URI, {})
    .then(() => {
        console.log("Connectés a la BDD");
    })
    .catch((err) => {
        console.log('Erreur de connexion', err)
    })

// Ici on lance l'application sur le numéro de port en question.
app.listen(port, () => {
    console.log("Server en ligne sur le port 3000");
});