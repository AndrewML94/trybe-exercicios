const valorCusto = 1;
const valorVenda = 2;
const volumeVenda = 1000;
let imposto;
let faturamento;
let valorCustoTotal;
let lucro;

if ( valorCusto >= 0 && valorVenda >= 0) {
  imposto = valorCusto * 0.20;
  valorCustoTotal = valorCusto + imposto;
  lucro = valorVenda - valorCustoTotal;
  faturamento = lucro * volumeVenda;
  console.log(faturamento.toFixed(2));
}
else {
  console.log("Não pode colocar valores negativos!!!");
}