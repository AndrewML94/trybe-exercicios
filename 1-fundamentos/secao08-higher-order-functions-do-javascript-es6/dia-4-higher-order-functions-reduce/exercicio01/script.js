// #1 Utilize o reduce para transformar uma matriz em um array. 

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((element, acc) => element.concat(acc));
}
