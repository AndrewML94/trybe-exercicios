// #1 Crie um arquivo chamado Header.js que representará o componente Header:
// - Este arquivo precisa ser criado na pasta src;
// - Este componente deve renderizar uma tag h1 com o texto 'Conteúdos de Frontend'.

import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1 className="App">Conteúdos de Frontend</h1>
      </header>
    );
  }
}

export default Header;
