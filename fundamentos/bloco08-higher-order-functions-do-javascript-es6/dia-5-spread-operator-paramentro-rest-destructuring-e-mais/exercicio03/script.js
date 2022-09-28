// #1 Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação. 

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [saudacoes0] = saudacoes;

// #2 A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis. 

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

const all = [comida, animal, bebida];
const [animal1, bebida1, comida1] = all;
