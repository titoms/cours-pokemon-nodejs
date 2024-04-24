// Import des dépendances
const express = require('express');
// Le router est le composant qui va définir ce qu'on fait pour
// chaque chemin qu'on emprunte
// Un GET sur http://localhost:3000/users/
// Va nous ramener sur usersController.getAllusers()
const router = express.Router();
const pokemonRoutes = require('./routes/pokemonRoutes');
const userRoutes = require('./routes/userRoutes');

// Message de bienvenue sur mon API sur localhost:3000/api
router.get('/', (req, res) => {
    res.send('Welcome to the API');
})

// Si l'utilisateur va sur localhost:3000/api/pokemons, on utilise
// pokemonRoutes pour gérer les routes
router.use('/pokemons', pokemonRoutes);
router.use('/users', userRoutes);

module.exports = router;