const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    hp: Number,
    cp: Number,
    picture: String,
    types: {
      type: [String],
      enum: ["Feu", "Eau", "Plante", "Acier", "Combat"],
    },
  },
  { timestamps: true }
);

const Pokemon = mongoose.model("Pokemon", pokemonSchema);
module.exports = Pokemon;
