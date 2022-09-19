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

const shift = (nameObj, keys, value) => nameObj[keys] = value;

shift(lesson2, 'turno', 'noite');

//Criar uma função que liste as keys de um objeto//

const keys = (nameObj) => Object.keys(nameObj);

keys(lesson1);

//Cirar uma função que mostre o tamanho do objeto//

const size = (nameObj) => Object.keys(nameObj).length;

size(lesson1);

//Criar uma função que liste os valores de um objeto//

const values = (nameObj) => Object.values(nameObj);
values(lesson3);

//Criar uma função que agrupará todas as aulas em um novo objeto//

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

//Criar uma função para retornar a soma de todos os estudantes em todas as aulas//

const totalStudents = () => `O total de alunos nas aulas é de: ${allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes}`;
totalStudents();

// Criar uma função para obter o valor de chave com base na sua posição//

const getValueByNumber = (nameObj ,param1) => Object.values(nameObj)[param1]; 

getValueByNumber(lesson1, 0);

//Criar uma função para verificar se chave/valor existe na função//

const verifyPair = (nameObj, param1, param2) => Object.keys(nameObj).includes(param1) && Object.values(nameObj).includes(param2) ? 'True' : 'False';
verifyPair(lesson3, 'materia', 'Maria Clara');
