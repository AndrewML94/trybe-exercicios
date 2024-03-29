const snakeize = require('snakeize');
const camelize = require('camelize');
const connection = require('./connection');

const insert = async (travel) => {
  const columns = Object.keys(snakeize(travel)).join(', ');

  const placeholders = Object.keys(travel).map((_key) => '?').join(', ');

  const [{ insertId }] = await connection.execute(
    `INSERT INTO travels (${columns}) VALUE (${placeholders})`, [...Object.values(travel)],
  );

  return insertId;
};

const findById = async (travelId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM travels WHERE id = ?', [travelId],
  );

  return camelize(result);
};

const findByTravelStatusId = async (travelStatusId) => {
  const [result] = await connection.execute(
    'SELECT * FROM travels WHERE travel_status_id = ?', [travelStatusId],
  );

  return camelize(result);
};

module.exports = {
  insert,
  findById,
  findByTravelStatusId,
};