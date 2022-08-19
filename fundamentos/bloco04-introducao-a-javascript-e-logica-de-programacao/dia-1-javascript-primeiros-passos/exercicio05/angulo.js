const angulo1 = 45, angulo2 = 30, angulo3 = 15;
const resultado = angulo1 + angulo2 + angulo3;

if (resultado >= 0 && resultado <= 180) {
 console.log("True");
}
else if (resultado < 0) {
 console.log("Não é um ângulo de triângulo válido");
}
else {
 console.log("False");
}