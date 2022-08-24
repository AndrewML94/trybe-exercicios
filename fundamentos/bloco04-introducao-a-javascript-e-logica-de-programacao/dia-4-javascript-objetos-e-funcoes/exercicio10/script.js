//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let teste = [2, 4, 6, 7, 10, 0, -3];
let resultado = 0;

function maiorIndice() {
  for (let index = 0; index < teste.length; index+=1) {
    if (teste[index] <= teste.length) {
      resultado = index;
    }
  }
  return
}

maiorIndice();
console.log(resultado);