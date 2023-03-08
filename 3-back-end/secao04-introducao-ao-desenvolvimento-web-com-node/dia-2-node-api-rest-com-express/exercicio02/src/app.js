const express = require('express');

const { readFile } = require('fs').promises;

const app = express();

app.use(express.json());

const readMovies = async () => {
  try {
    const data = await readFile('./src/movies.json');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Erro ao ler o arquivo ${error.path}`);
  }
};

app.get('/movies/:id', async (req, res) => {
  try {
    const idParams = req.params;
    const movies = await readMovies();
    const filterMovieId = movies.find(({ id }) => id === Number(idParams.id));
    res.status(200).json(filterMovieId);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = app;