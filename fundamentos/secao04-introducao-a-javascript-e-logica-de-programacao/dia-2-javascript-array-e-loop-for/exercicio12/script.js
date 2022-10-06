let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let mult = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (mult.length <= numbers.length-2) {
    mult.push(numbers[index]*numbers[index+1]);
  }
  else {
      mult.push(numbers[index]*2);
  }
  console.log(mult[index]);
}
