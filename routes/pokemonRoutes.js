const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');
const verifyToken = require('../middlewares/verifyToken');

// Get all pokemons
// GET sur localhost:3000/api/pokemons
router.get('/', verifyToken, pokemonController.getAllPokemons)
// Get ONE pokemon
// localhost:3000/api/pokemons/9230774h2203HDkdj
router.get('/:id', verifyToken, pokemonController.getOnePokemon)
// Create a Pokemon
// POST sur localhost:3000/api/pokemons
router.post('/', verifyToken, pokemonController.createPokemon)
// Edit a Pokemon
router.put('/:id', verifyToken, pokemonController.editPokemon)
// Delete a Pokemon
router.delete('/:id', verifyToken, pokemonController.deletePokemon)

module.exports = router