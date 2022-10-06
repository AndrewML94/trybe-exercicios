const buttonSubmit = document.getElementById('btnSubmit');
const divButton = document.getElementById('button');
const form = document.getElementById('my-form');
const option2 = document.getElementById('option02');

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

buttonSubmit.addEventListener('click', function() {
  if (option2.checked) {
    form.submit();
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
  }
})