//Criar uma função que retorne um objeto no formato {nome, email}, utilizando HOF//

const employeeGenerator = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return { fullName, email: `${email}@trybe.com` };
};
const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  };
  return employees;
};
console.log(newEmployees(employeeGenerator));
