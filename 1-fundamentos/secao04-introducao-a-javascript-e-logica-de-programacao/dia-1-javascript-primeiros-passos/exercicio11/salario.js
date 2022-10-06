const salario = 3000;
let inss;
let ir
let salarioBruto
let salarioLiquido;

if (salario > 0 && salario <= 1556.94) {
  inss = salario *0.08;
  salarioBruto = salario - inss;
}
else if (salario >= 1556.95 && salario <= 2594.92) {
  inss = salario *0.09;
  salarioBruto = salario - inss;
}
else if (salario >= 2594.93 && salario <= 5189.92) {
  inss = salario *0.11;
  salarioBruto = salario - inss;
}
else {
  inss = salario - 570.88
  salarioBruto = salario - inss;
}

if (salarioBruto > 0 && salarioBruto <= 1903.98) {
  ir = 0;
}
else if (salarioBruto >= 1903.99  && salarioBruto <= 2826.65) {
  ir = salarioBruto *0.075 - 142.80;
}
else if (salarioBruto >= 2826.66 && salarioBruto <= 3751.05) {
  ir = salarioBruto *0.15 - 354.80;
}
else if (salarioBruto >= 3751.06 && salarioBruto <= 4664.68) {
  ir = salarioBruto *0.225 - 636.13;
}
else {
  (salarioBruto > 4664.68);
  ir = salarioBruto *0.27 - 869.36;
}

salarioLiquido = salarioBruto - ir;
console.log('Seu salário líquido é de R$',(salarioLiquido).toFixed(2));
