const { questionFloat } = require('readline-sync');

const questionWeight = () => {
  const weight = questionFloat('Qual o seu peso(kg)? ');
  return weight;
};

const questionHeight = () => {
  const height = questionFloat('Qual a sua altura(mt)? ');
  return height;
};

const imc = (weight, height) => {
  const result = weight / (height * height);
  switch (true) {
    case result < 18.5:
      console.log(`Seu IMC é de: ${result.toFixed(2)} - Abaixo do peso (magreza)`);
    break;
    case result >= 18.5 && result <= 24.9:
      console.log(`Seu IMC é de: ${result.toFixed(2)} - Peso normal`)
    break;
    case result >= 25 && result <= 29.9:
      console.log(`Seu IMC é de: ${result.toFixed(2)} - Acima do peso (sobrepeso)`)
    break;
    case result >= 30 && result <= 34.9:
      console.log(`Seu IMC é de: ${result.toFixed(2)} - Obesidade grau I`)
    break;
    case result >= 35 && result <= 39.9:
      console.log(`Seu IMC é de: ${result.toFixed(2)} - Obesidade grau II`)
    break;
    case result >= 40:
      console.log(`Seu IMC é de: ${result.toFixed(2)} - Obesidade graus III e IV`)
    break;
    default:
      console.log(`Seu IMC é de: ${result.toFixed(2)}`)
    break;
  }
}

imc(questionWeight(), questionHeight());