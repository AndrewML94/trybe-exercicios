//Foi criado uma função para retornar o nome com maior quantidade de caracteres

let nomes = ['josé', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let resultado = [];

function maiorNome() {
  for (let index = 0; index < nomes.length; index+=1) {
    if (nomes[index].length >= nomes.length) {
      resultado = nomes[index];
    }
  }
  return
}

maiorNome();
console.log(resultado);