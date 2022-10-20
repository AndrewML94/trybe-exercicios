// #3 Crie um arquivo chamado Footer.js que representará o componente Footer:
// - Este arquivo precisa ser criado na pasta src;
// - Este componente deve renderizar uma tag footer e, dentro dela, renderizar um h3 com o texto 'E isso é só o começo...';
// - A tag footer precisa do atributo data-testid="footer".

import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <h3 className="App" data-testid="footer">E isso é só o começo...</h3>
      </footer>
    );
  }
}

export default Footer;
