let num = 10;
let fatorial;

for (let index = num-1; index >= 1; index-=1) {
  fatorial = num *= index;
}

console.log(fatorial);