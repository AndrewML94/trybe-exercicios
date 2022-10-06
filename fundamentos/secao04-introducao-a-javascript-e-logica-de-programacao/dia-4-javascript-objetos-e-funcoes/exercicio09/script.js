//Foi criado uma função que recebeu um array de inteiros e retornado o índice de maior valor.

let teste = [2, 3, 6, 7, 10, 1];
let resultado = 0;

function maiorIndice() {
  for (let index = 0; index < teste.length; index+=1) {
    if (teste[index] >= teste.length) {
      resultado = index;
    }
  }
  return
}

maiorIndice();
console.log(resultado);
