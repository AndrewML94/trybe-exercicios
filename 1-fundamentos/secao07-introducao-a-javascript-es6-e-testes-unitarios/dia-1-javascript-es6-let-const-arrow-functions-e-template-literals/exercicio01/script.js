function testingScope(escopo) {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora do meu escopo (if)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);

// Função acima passada para ser alterada utilizando arrow function, template literals e ajuste de escopo//

const ifScope = 'ótimo, fui utilizada no escopo!';
const elseScope = 'Não devo ser utilizada fora do meu escopo (if)';
let testingScope = (escopo) => escopo === true ? `${ifScope}` : `${elseScope}`;

console.log(testingScope(true));
