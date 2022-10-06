//Criação de uma arrow function que acrescenta um nome dentro de uma string//

const substituaX = (nome) => {
  const frase = 'Tryber x aqui!';
  const fraseArray = frase.split(' ');
  for (let index = 0; index < fraseArray.length; index += 1) {
    if (fraseArray[index] === 'x') {
      fraseArray[index] = nome;
    }
  }  
  return fraseArray.join(' ');
};

const minhasSkills = (func) => {
  const skills = ['JavaScript', 'HTML', 'CSS'];
  let resultado = `
  ${func}
  Minhas três principais habilidades são:`;
  skills.forEach((skill) => { // estrutura de repetição para iterar sobre o array de skills
  resultado = `${resultado}
  - ${skill}`;
  }); // reatribui e adiciona a skill atual a variável resultado
  return resultado;
};

console.log(minhasSkills(substituaX('Andrew')));
