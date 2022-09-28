const express = require('express')
const cors = require('cors');
const app = express()
const PORT = process.env.PORT || 8080;

const pokemonsRouter = require("./routes/pokemons");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/", pokemonsRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})