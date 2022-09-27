// #1 Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a, maiúscula ou minúscula. 

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  let totalOfLettersA = 0;
  names.forEach((name) => {
    const lettersFromName = name.split('');
    totalOfLettersA += lettersFromName.reduce((lettersAInName, currentLetter) => {
      if (currentLetter.toLocaleLowerCase() === 'a') {
        return lettersAInName + 1;
      }
      return lettersAInName;
    }, 0);
  });
  return totalOfLettersA;
}

console.log(containsA())