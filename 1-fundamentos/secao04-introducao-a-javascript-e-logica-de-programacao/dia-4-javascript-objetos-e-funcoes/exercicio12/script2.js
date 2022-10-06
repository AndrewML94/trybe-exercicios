let numeros = [2, 3, 2, 5, 8, 2, 3];
let resultado = 0;

numeros.sort();

  for (let index = 0; index < numeros.length; index+=1) {
    if (numeros[index] === numeros[index].length) {
      resultado = numeros[index];
    }
  }

console.log(resultado);
