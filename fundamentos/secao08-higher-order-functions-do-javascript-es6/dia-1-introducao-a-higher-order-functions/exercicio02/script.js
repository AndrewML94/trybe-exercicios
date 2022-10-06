//Criar uma HOF para conferir o resultado de um sorteio e informar se a pessoa ganhou ou não//

const number = () => Math.ceil(Math.random() * 5);

const result = (number, callback) => number === callback ? 'Parabéns, você ganhou' : 'Infelizmente você não ganhou, tente novamente!';

console.log(result(4, number()))