import React from 'react'

export default function PersonalForm() {
  return (
    <form>
      <input
        type="text"
        placeholder="Nome Completo"
        name="name"
      />
      <input
        type="number"
        placeholder="Idade"
        name="age"
      />
      <input
        type="text"
        placeholder="Cidade"
        name="city"
      />
      <label for="fundamentals">Fundamentos</label>
      <input
        type="radio"
        id="fundamentals"
        name="course"
        value="fundamentals"
      />
      <label for="frontend">Front-end</label>
      <input 
        type="radio"
        id="frontend"
        name="course"
        value="frontend"
      />
      <label for="backend">Back-end</label>
      <input
        type="radio"
        id="backend"
        name="course"
        value="backend"
      />
      <label for="computerScience">Ciência da computação</label>
      <input
        type="radio"
        id="computerScience"
        name="course"
        value="computerScience"
      />
      <button>
        Enviar
      </button>
    </form>
  )
}
