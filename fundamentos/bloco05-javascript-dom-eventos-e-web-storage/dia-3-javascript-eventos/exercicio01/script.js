function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

/* Função(ões) para automatizar processos*/

function criadorDeFuncoes (tag, elementoPai) {
  const variavel = document.createElement(tag);
  elementoPai.appendChild(variavel);
};

/* #1 Criação de função para criar dinamicamente cada dia no calendário e acrescentar dentro de um tag <ul>, bem como criação de algumas classes, respeitando determinados parâmetros previamente estipulados pela Trybe */

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const dia = document.getElementById('days');
let dia2;
let dia3;

function criaLi() {
  for (let index = 0; index < decemberDaysList.length; index += 1) {
    dia2 = decemberDaysList[index];
    dia3 = document.createElement('li');
    dia3.innerHTML = dia2;
    dia.appendChild(dia3);
    if (dia2 === 24 || dia2 === 25 || dia2 === 31) {
      dia3.className = 'day holiday';
      dia.appendChild(dia3)
    } else if (dia2 === 4 || dia2 === 11 || dia2 === 18 || dia2 === 25) {
      dia3.className = 'day friday';
      dia.appendChild(dia3);
    } else {
      dia3.className = 'day';
      dia.appendChild(dia3);
    }
  }
}

criaLi()

/* #2 Criando um botão dinamicamente para marcar os feriados no calendário*/

const divBotao = document.querySelector('.buttons-container');
criadorDeFuncoes('button', divBotao);
const botao1 = document.querySelector('button');
botao1.setAttribute('id', 'btn-holiday');
botao1.innerText = 'Feriados';

/* #3 Criando uma função para alterar a cor de fundo de determinados dias */

function alteraCorDeFundo() {
  const finalDeSemana = document.getElementsByClassName('day holiday');
  botao1.addEventListener('click', function() {
    for (let index = 0; index < finalDeSemana.length; index += 1) {
      if (finalDeSemana[index].style.backgroundColor === 'lightgreen') {
        finalDeSemana[index].style.backgroundColor = 'rgb(238,238,238)';
      } else {
        finalDeSemana[index].style.backgroundColor = 'lightgreen';
      }
    }
  })
}

alteraCorDeFundo()

/* #4 Criando um novo botão dinamicamente para marcar todas as sextas-feiras no calendário*/

criadorDeFuncoes('button', divBotao);
const botao2 = document.querySelectorAll('button');
botao2[1].setAttribute('id', 'btn-friday');
botao2[1].innerText = 'Sexta-feira';