// Foi solicitado a criação de uma arrow function para ordenar os números da variável oddsAndEvens e apresentação do resultado utilizando template literals//

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (array) => array.sort((a, b) => a - b);

console.log(`Os números ${sortOddsAndEvens(oddsAndEvens)} se encontram em ordenados de forma crescente!`);
