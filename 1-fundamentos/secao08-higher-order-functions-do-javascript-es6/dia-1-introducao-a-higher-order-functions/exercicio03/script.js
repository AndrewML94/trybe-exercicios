//Corretor automático de exame utilizando o conceito de HOFs// 

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compare = (param1, param2) => {
  let hit = 0;
    for (let index = 0; index < param2.length; index += 1) {
      if (param2[index] === param1[index]) {
        hit += 1;
      }
      else if (param2[index] === 'N.A') {
        hit = hit;
      } else {
        hit -= 0.5
      }
    }
  return hit;
}

const result = (callback) =>  {
  return `A sua nota é: ${callback}`
};

console.log(result(compare(rightAnswers, studentAnswers)));
