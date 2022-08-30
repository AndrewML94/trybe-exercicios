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
    if (dia2 === 24 || dia2 === 31) {
      dia3.className = 'day holiday';
      dia.appendChild(dia3)
    } else if (dia2 === 4 || dia2 === 11 || dia2 === 18) {
      dia3.className = 'day friday';
      dia.appendChild(dia3);
    } else if (dia2 === 25) {
      dia3.className = 'day holiday friday';
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
const finalDeSemana = document.getElementsByClassName('day holiday', 'day holiday friday');

function alteraCorDeFundo() {
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

/* #5 Criando uma função para alterar o texto dos dias referente a sexta-feira */

function alteraTexto(sextas) {
  const sexta = document.getElementsByClassName('day friday', 'day holiday friday');
  botao2[1].addEventListener('click', function() {
    for (let index = 0; index < sexta.length; index += 1) {
      if (sexta[index].innerText !== 'Sextou o/') {
        sexta[index].innerText = 'Sextou o/';
      } else {
        sexta[index].innerText = sextas[index];
      }
    }
  })
}

let sextasDeDezembro = [4, 11, 18, 25];
alteraTexto(sextasDeDezembro);

/* #6 Criando zoom in e zoom out nos dias em que o mouse passar */

const zoomDias = document.querySelector('#days')

zoomDias.addEventListener('mouseover', function(zoom1) {
  zoom1.target.style.fontSize = '23px';
})

zoomDias.addEventListener('mouseout', function(zoom1) {
  zoom1.target.style.fontSize = '';
})

/* #7 Criando uma função para adicionar uma tarefa personalizada ao calendário */

function descritivoDeTarefa (nomeTarefa) {
  const divTarefa = document.querySelector('.my-tasks');
  const span = document.createElement('span');
  const tarefa = span.innerText = nomeTarefa;
  divTarefa.appendChild(span, tarefa)
};

descritivoDeTarefa('Buscar o Tiri na creche')
