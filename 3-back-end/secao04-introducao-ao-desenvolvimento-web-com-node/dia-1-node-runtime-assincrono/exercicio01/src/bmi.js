const imc = (weight, height) => {
  const result = weight / (height * height);
  return `Seu IMC é de: ${result.toFixed(2)}`;
}

console.log(imc(80, 1.80));