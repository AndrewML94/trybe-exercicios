//Foi criado uma função que percorre o array e apresenta o que mais aparece

let numeros = [2, 3, 2, 5, 8, 2, 3];
let resultado = 0;

numeros.sort();

function numeroQueMaisAparece() {
  for (let index = 0; index < numeros.length; index+=1) {
    if (numeros[index-2] === numeros[index]) {
      resultado = numeros[index];
    }
  }
  return
}

numeroQueMaisAparece();
console.log(resultado);