import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PersonalForm.css';
import logoTrybe from '../components/image/logoTrybe.png'

export default function PersonalForm() {
  const [ personalForm, setForm ] = useState({ fullName: '', age: 0, city: '', course: '' });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm({ ...personalForm, [name]: value });
  };

  const disable = personalForm.fullName && personalForm.age && personalForm.city && personalForm.course;

  return (
    <div>
      <div id="header">
        <img id="image" src={ logoTrybe } alt="Logo da Trybe" />
        <h1>Formulário para sorteio entre alunos</h1>
      </div>
      <form id='personalForm'>
        <div class="input-group input-group-sm mb-3 justify-content-center">
          <input
            class="form-control"
            type="text"
            placeholder="Nome Completo"
            name="fullName"
            onChange={ handleChange }
          />
        </div>
        <div class="input-group input-group-sm mb-3 justify-content-center">
          <input
            class="form-control"
            type="number"
            placeholder="Idade"
            name="age"
            onChange={ handleChange }
          />
        </div>
        <div class="input-group input-group-sm mb-3 justify-content-center">
          <input
            class="form-control"
            type="text"
            placeholder="Cidade"
            name="city"
            onChange={ handleChange }
          />
        </div>
        <div class="d-flex gap-1 justify-content-center mb-3">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              id="fundamentals"
              name="course"
              value="fundamentals"
              onChange={ handleChange }
            />
            <label class="form-check-label" htmlFor="fundamentals">Fundamentos</label>
          </div>
          <div class="form-check">
            <input 
              class="form-check-input"
              type="radio"
              id="frontend"
              name="course"
              value="frontend"
              onChange={ handleChange }
            />
            <label class="form-check-label" htmlFor="frontend">Front-end</label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              id="backend"
              name="course"
              value="backend"
              onChange={ handleChange }
            />
            <label class="form-check-label" htmlFor="backend">Back-end</label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              id="computerScience"
              name="course"
              value="computerScience"
              onChange={ handleChange }
            />
            <label class="form-check-label" htmlFor="computerScience">Ciência da computação</label>
          </div>
        </div>
        <div class="d-grid gap-2 col-12 mx-auto">
          <button
            class="btn btn-success"
            disabled={ !disable }
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}
