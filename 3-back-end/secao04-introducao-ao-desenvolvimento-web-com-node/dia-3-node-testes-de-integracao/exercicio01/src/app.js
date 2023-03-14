const express = require('express');
const { getAllChocolates, getChocolatesById, getChocolatesByBrand, countChocolates, searchChocolate } = require('./cacauTrybe');

const app = express();

app.get('/chocolates/search', async (req, res) => {
  const { name } = req.query;
  const chocolate = await searchChocolate(name);

  if(chocolate.length === 0) return res.status(404).json([]);
  
  
  res.status(200).json({ chocolate });
});

app.get('/chocolates/total', async (_req, res) => {
  const totalChocolates = await countChocolates();

  res.status(200).json({ totalChocolates });
});

app.get('/chocolates', async (_req, res) => {
  const chocolates = await getAllChocolates();

  res.status(200).json({ chocolates });
});

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const chocolate = await getChocolatesById(Number(id));

  if (!chocolate) return res.status(404).json({ message: 'Chocolate not found' });

  res.status(200).json({ chocolate });
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;
  const chocolates = await getChocolatesByBrand(Number(brandId));

  res.status(200).json({ chocolates });
});

module.exports = app;