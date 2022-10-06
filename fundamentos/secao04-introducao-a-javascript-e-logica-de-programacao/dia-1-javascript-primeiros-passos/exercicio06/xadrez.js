let peca = prompt("Digite o nome de uma peça: ");

switch (peca.toLowerCase()) {
 case "peão":
  console.log("Frente, linha reta");
  break;
 case "bispo":
  console.log("Frente, na diagonal");
  break;
 case "dama":
  console.log("Frente, na diagonal");
  break;
 case "torre":
  console.log("Frente, linha reta horizontal ou vertical");
  break;
 case "cavalo":
  console.log("Anda duas casas horizontal ou vertical");
  break;
 case "rainha":
  console.log("Anda em qualquer direção");
  break;
 case "rei":
  console.log("Anda em qualquer direção");
  break;
 default:
  console.log("Isso não é uma peça de xadrez!!!");
}