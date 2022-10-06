let world = 'go Trybe';
let dlrow = [];

for (let index = 0; index < world.length; index+=1) {
  if (index === ' ') {
    dlrow.push(world[index]);
  }
}

console.log(dlrow);