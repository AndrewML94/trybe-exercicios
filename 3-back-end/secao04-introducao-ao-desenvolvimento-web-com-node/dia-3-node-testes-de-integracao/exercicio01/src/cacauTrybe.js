const fs = require('fs').promises;
const { join } = require('path');

const readCacauTrybe = async () => {
  const path = '/files/cacauTrybeFile.json';
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  };
};

const getAllChocolates = async () => {
  const cacauTrybe = await readCacauTrybe();
  return cacauTrybe.chocolates;
};

const getChocolatesById = async (id) => {
  const cacauTrybe = await readCacauTrybe();
  return cacauTrybe.chocolates.find((chocolate) => chocolate.id === id);
};

const getChocolatesByBrand = async (brandId) => {
  const cacauTrybe = await readCacauTrybe();
  return cacauTrybe.chocolates.filter((chocolate) => chocolate.brandId === brandId);
};

const countChocolates = async () => {
  const cacauTrybe = await readCacauTrybe();
  return cacauTrybe.chocolates.length;
}

const searchChocolate = async (query) => {
  const cacauTrybe = await readCacauTrybe();
  return cacauTrybe.chocolates.filter((chocolate) => chocolate.name.includes(query));
};

module.exports = {
  getAllChocolates,
  getChocolatesById,
  getChocolatesByBrand,
  countChocolates,
  searchChocolate
}