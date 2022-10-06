// #1 Crie um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos.


const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brasileira',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const info = {...user, ...jobInfos}
const { name, age, nationality, profession, squad, squadInitials } = info;
// #2 Imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals. 

console.log(`Olá!! Meu nome é ${name}, e possuo ${age} anos, sou ${nationality}. Eu trabalho como ${profession} e o meu squad é ${squadInitials} - ${squad}.`);
