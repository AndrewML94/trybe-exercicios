let primo = 0;

for (let index = 2; index <= 50; index += 1) {
  let validador = true;
  for (let index2 = 2; index2 < index; index2 += 1) {
    if (index % index2 === 0) {
      validador = false;
    }
  }
  if (validador) {
    primo = index;
  }
}

console.log(primo);