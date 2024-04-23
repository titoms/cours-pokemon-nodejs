const Pokemon = require("../models/pokemonModel");

exports.getAllPokemons = async (req, res) => {
  try {
    const pokemons = await Pokemon.find();
    res.status(200).json(pokemons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getOnePokemon = async (req, res) => {
  try {
    const pokemon = await Pokemon.findById(req.params.id);
    if (!pokemon) return res.status(404).json("Pokemon not found.");
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createPokemon = async (req, res) => {};

exports.editPokemon = async (req, res) => {};

exports.deletePokemon = async (req, res) => {};
