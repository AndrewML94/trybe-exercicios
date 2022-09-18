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

//Criar uma função que agrupará todas as aulas em um novo objeto//

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

//Criar uma função para retornar a soma de todos os estudantes em todas as aulas//

const totalAlunos = () => `O total de alunos nas aulas é de: ${lesson1.numeroEstudantes + lesson2.numeroEstudantes + lesson3.numeroEstudantes}`;
console.log(totalAlunos())

