const express = require('express');
const pokemons = express.Router();

const {
  getAllPokemons,
  getSinglePokemon
} = require('../controllers/pokemons');

pokemons.route("/pokemon").get(getAllPokemons);

pokemons.route("/pokemon/:id").get(getSinglePokemon);

module.exports = pokemons;