const jsonData = require('../view/pokedex.json')

const getAllPokemons = (req, res) => {
    try {
        res.status(200)
        res.json(jsonData);
    }
    catch(err) {
        console.log(err);
    }
}

const getSinglePokemon = (req, res) => {
    const { id } = req.params;

    console.log(typeof id);
    try {
        const singlePokemon = jsonData.find(p => p.id === parseInt(id));
        //console.log(typeof jsonData);

        // const pokemon_with_id = jsonData[id];
        res.status(200);
        res.json(singlePokemon);
    }
    catch(err) {
        console.log(err);
    }
}

module.exports = {
    getAllPokemons,
    getSinglePokemon
};