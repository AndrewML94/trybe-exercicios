const buttonSubmit = document.getElementById('submit');
const divButton = document.getElementById('button');
const form = document.getElementById('my-form');

buttonSubmit.addEventListener('click', function(event) {
  event.preventDefault();
})

function createButtonClear() {
  const buttonClear = document.createElement('button');
  buttonClear.setAttribute('id', 'clear');
  buttonClear.innerText = 'Limpar';
  divButton.appendChild(buttonClear);
}

createButtonClear()

const buttonClear = document.getElementById('clear');
buttonClear.addEventListener('click', function(event) {
  event.preventDefault();
  event.target.form.reset();
})