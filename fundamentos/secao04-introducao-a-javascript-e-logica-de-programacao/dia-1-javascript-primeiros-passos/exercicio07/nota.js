const porcentagem = 90;

if (porcentagem >= 90 && porcentagem < 100) {
  console.log("A");
} 
else if (porcentagem >= 80 && porcentagem < 100) {
  console.log("B");
}
else if (porcentagem >= 70 && porcentagem < 100) {
  console.log("C");
}
else if (porcentagem >= 60 && porcentagem < 100) { 
  console.log("D");
}
else if (porcentagem >= 50 && porcentagem < 100) {
  console.log("E");
}
else if (porcentagem < 50 && porcentagem > 0) {
  console.log("F");
} 
else {
  console.log("Nota inválida"); 
}