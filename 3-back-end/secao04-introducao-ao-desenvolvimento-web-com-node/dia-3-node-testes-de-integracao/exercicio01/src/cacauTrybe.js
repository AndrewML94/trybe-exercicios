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

module.exports = {
  getAllChocolates,
  getChocolatesById,
  getChocolatesByBrand
}