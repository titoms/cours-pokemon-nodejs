const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

// Get all pokemons
// GET sur localhost:3000/api/pokemons
router.get('/', pokemonController.getAllPokemons)
// Get ONE pokemon
// localhost:3000/api/pokemons/9230774h2203HDkdj
router.get('/:id', pokemonController.getOnePokemon)

// Create a Pokemon
// POST sur localhost:3000/api/pokemons
router.post('/', (req, res) => {
    res.send('Post Pokemon');
})
// Edit a Pokemon
router.put('/:id', (req, res) => {
    res.send('Edit a Pokemon');
})
// Delete a Pokemon
router.delete('/:id', (req, res) => {
    res.send('Delete a Pokemon');
})

module.exports = router