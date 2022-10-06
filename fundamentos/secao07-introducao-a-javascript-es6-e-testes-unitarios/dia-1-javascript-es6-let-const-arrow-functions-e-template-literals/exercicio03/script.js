//Utilização de arrow functions para tirar o fatorial de um n° e apresentar o resultado utilizando template literals//

const number = 5;

const factorial = () => {
  let result = number;
  for (let index = 1; index < number; index += 1) {
    result *= index;
  }
  return result
}

console.log(`O fatorial do n° ${number} é ${factorial()}.`);
