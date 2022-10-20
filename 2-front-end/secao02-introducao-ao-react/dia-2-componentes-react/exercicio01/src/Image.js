// #1 Chame o componente Image dentro do componente App, de forma que seja mostrada a imagem ou o texto: Cute cat staring, caso a imagem não consiga ser carregada. 

import React from 'react';

class Image extends React.Component {
  render() {
    const { source, alternativeText } = this.props;
    return <img src={ source } alt={ alternativeText } />;
  }
}

export default Image;
