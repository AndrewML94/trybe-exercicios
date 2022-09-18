const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//Criar uma função para adicionar um turno no obj lesson2//

const turno = (nameObj, chave, valor) => nameObj[chave] = valor;

turno(lesson2, 'turno', 'noite');

//Criar uma função que liste as keys de um objeto//

const chaves = (nameObj) => Object.keys(nameObj);

chaves(lesson1);

//Cirar uma função que mostre o tamanho do objeto//

const tamanho = (nameObj) => Object.keys(nameObj).length;

tamanho(lesson1);

//Criar uma função que liste os valores de um objeto//

const valores = (nameObj) => Object.values(nameObj);
valores(lesson3);
