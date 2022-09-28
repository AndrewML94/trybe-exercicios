// Faça uma lista com as suas frutas favoritas
const specialFruit = ['maçã', 'banana', 'kiwi', 'uva', 'melancia'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['pêra', 'laranja', 'pêssego'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));
