// Utilize o sort para ordenar o array pela idade das pessoas em ordem crescente e depois decrescente. 

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const org1 = () => {
  return people.sort((a, b) => a.age - b.age)
}

const org2 = () => {
  return people.sort((a, b) => b.age - a.age)
}

console.log(org1());
console.log(org2());
