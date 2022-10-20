// #2 Crie um arquivo chamado Content.js que representará o componente Content:
// - Este arquivo precisa ser criado na pasta src;
// - Dentro do arquivo Content.js, crie uma classe React chamada Content;
// - Ainda no arquivo Content.js, adicione o array Conteúdos.

import React from 'react';

const conteudos = [
  {
    nome: 'JavaScript assíncrono',
    bloco: 9,
    status: 'já aprendi',
  },
  {
    nome: 'Composição de Componentes',
    bloco: 10,
    status: 'estou aprendendo',
  },
  {
    nome: 'Composição de Estados',
    bloco: 11,
    status: 'aprenderei',
  },
  {
    nome: 'Redux',
    bloco: 15,
    status: 'aprenderei',
  },
];

class Content extends React.Component {
  render() {
    return (
      <main>
        <ul className="content">
          {conteudos.map(({ nome, bloco, status }) => (
            <li key={ nome } className="card">
              <p>{`Eu ${status} o conteúdo ${nome} no bloco ${bloco}`}</p>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default Content;
