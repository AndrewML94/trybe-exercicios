//Utilizando arrow finction, .sort() mostrar a menor palavra na frase//

const result = (phrase) => phrase.split(' ').sort(function (a, b) {return b.length - a.length})[0];

console.log (`A maior palavra na frase é: ${result('Antônio foi ao banheiro e não sabemos o que aconteceu')}`)
