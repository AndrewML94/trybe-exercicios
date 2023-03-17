const validName = 'Bruce Lane';
const validEmail = 'bruce.lane@acme.com';
const validPhone = '(77) 8179-0943';
const invalidValue = 'a';

const allPassengers = [
  {
    id: 1,
    name: validName,
    email: validEmail,
    phone: validPhone,
  },
];

module.exports = {
  allPassengers,
  invalidValue,
  validName,
  validEmail,
  validPhone,
};