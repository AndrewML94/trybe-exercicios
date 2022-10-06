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

//3.1 Criar uma função para adicionar um turno no obj lesson2//

const shift = (nameObj, keys, value) => nameObj[keys] = value;

shift(lesson2, 'turno', 'noite');

//3.2 Criar uma função que liste as keys de um objeto//

const keys = (nameObj) => Object.keys(nameObj);

keys(lesson1);

// 3.3 Cirar uma função que mostre o tamanho do objeto//

const size = (nameObj) => Object.keys(nameObj).length;

size(lesson1);

//3.4 Criar uma função que liste os valores de um objeto//

const values = (nameObj) => Object.values(nameObj);
values(lesson3);

//3.5 Criar uma função que agrupará todas as aulas em um novo objeto//

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

//3.6 Criar uma função para retornar a soma de todos os estudantes em todas as aulas//

const totalStudents = (nameObj) => {
  let count = 0;
  const value = Object.keys(nameObj);
  for (index in value) {
    count += nameObj[value[index]].numeroEstudantes;
  }
  return `O total de alunos é: ${count}.`; // a função retorna o total de alunos após as iterações do "for/in"
};
totalStudents(allLessons);

//3.7 Criar uma função para obter o valor de chave com base na sua posição//

const getValueByNumber = (nameObj ,param1) => Object.values(nameObj)[param1]; 

getValueByNumber(lesson1, 0);

//3.8 Criar uma função para verificar se chave/valor existe na função//

const verifyPair = (nameObj, param1, param2) => Object.keys(nameObj).includes(param1) && Object.values(nameObj).includes(param2) ? 'True' : 'False';
verifyPair(lesson3, 'materia', 'Maria Clara');

//4.1 Criar uma função para contar quantos alunos assistiram as aulas de matemática//

const contStudents = (nameObj) => {
  let count = 0;
  const value = Object.keys(nameObj);
  for (index in value) {
    if(nameObj[value[index]].materia === 'Matemática'){
    count += nameObj[value[index]].numeroEstudantes;
    }
  }
  return `${count} alunos assistiram as aulas de Matemática.`;
}
contStudents(allLessons);

//4.2 Criar uma função que retorna um relatório do professor//

const getInfo = (nameObj, name) => {
  const allLessons = [];
  let allStudent = 0;
  const value = Object.values(nameObj);
  for (index in value) {
    if (value[index].professor === name) {
      allLessons.push(value[index].materia)
      allStudent += value[index].numeroEstudantes;
    }
  }
  return {lessons: allLessons, estudantes: allStudent};
}

const createReport = (allLessons, name) => {
  const report = {};
  report.professor = name;
  Object.assign(report, getInfo(allLessons, name));
  return report;
}
console.log(createReport(allLessons, 'Maria Clara'));
