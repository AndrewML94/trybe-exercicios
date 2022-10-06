//Foi definido um segundo objeto acrescido de informações, e após a impressão dos valores de cada objeto com suas respectivas chaves

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
  info2: {
    personagem2: 'Tio Patinhas',
    versão: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota2: 'O último MacPatinhas',
    recorrente2: 'Sim',
  }
};

console.log(info.personagem + ' ' + 'e' + ' ' + info.info2.personagem2);
console.log(info.origem + ' ' + 'e' + ' ' + info.info2.versão);
console.log(info.nota + ' ' + 'e' + ' ' + info.info2.nota2);

if (info.recorrente === info.info2.recorrente2)
console.log('Ambos recorrentes');
