//Utilizado um for/in para mostrar todas as chaves do objeto

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};

for (const key in info) {
  console.log(key);
}
