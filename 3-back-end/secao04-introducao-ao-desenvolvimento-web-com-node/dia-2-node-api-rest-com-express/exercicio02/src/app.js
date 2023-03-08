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

app.get('/movies', async (_req, res) => {
  try {
    const movies = await readMovies();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.post('/movies', async (req, res) => {
  try {
    const newMovieList = await readMovies();
    newMovieList.push(req.body);
    res.status(201).json(newMovieList);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.put('/movies/:id', async (req, res) => {
  try {
    const idParams = req.params;
    const { movie, price } = req.body;
    const movies = await readMovies();
    const updateMovie = movies.find(({ id }) => id === Number(idParams.id));

    if (!updateMovie) res.status(404).json({ message: 'Filme não encontrado' });

    updateMovie.movie = movie;
    updateMovie.price = price;
    res.status(200).json(updateMovie);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.delete('/movies/:id', async (req, res) => {
  try {
    const idParams = req.params;
    const movies = await readMovies();
    const deleteMovie = movies.findIndex(({ id }) => id === Number(idParams.id));
    movies.splice(deleteMovie, 1);
    res.status(200).end();
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = app;