const express = require('express');

const { readFile } = require('fs').promises;

const app = express();

app.use(express.json());

const readMovies = async () => {
  try {
    const data = await readFile('./src/movies.json', 'utf-8');
    console.log(data);
  } catch (error) {
    console.error(`Erro ao ler o arquivo ${error.path}`);
  }
};

readMovies();

module.exports = app;