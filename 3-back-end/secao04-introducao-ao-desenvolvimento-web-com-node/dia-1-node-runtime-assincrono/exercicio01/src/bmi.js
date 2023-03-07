const { questionFloat } = require('readline-sync');

const questionWeight = () => {
  const weight = questionFloat('What is your weight? (KG) ');
  return weight;
};

const questionHeight = () => {
  const height = questionFloat('What is your height? (MT) ');
  return height;
};

const imc = (weight, height) => {
  const result = weight / (height * height);
  return `Seu IMC é de: ${result.toFixed(2)}`;
}

console.log(imc(questionHeight(), questionWeight()));