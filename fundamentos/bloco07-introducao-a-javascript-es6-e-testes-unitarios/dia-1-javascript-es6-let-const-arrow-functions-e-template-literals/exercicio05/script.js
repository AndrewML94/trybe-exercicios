const button = document.getElementById('button');
const p = document.getElementById('p');
let span = document.getElementById('span');
let clickCount = 0;

button.addEventListener('click', () => {
  clickCount += 1;
  span.innerHTML = clickCount;
})