const express = require('express');
const router = express.Router();

// Get all pokemons
// GET sur localhost:3000/api/pokemons
router.get('/', (req, res) => {
    res.send('Get All Pokemons');
})
// Create a Pokemon
// POST sur localhost:3000/api/pokemons
router.post('/', (req, res) => {
    res.send('Post Pokemon');
})
// Get ONE pokemon
// localhost:3000/api/pokemons/9230774h2203HDkdj
router.get('/:id', (req, res) => {
    res.send('Get one Pokemon');
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