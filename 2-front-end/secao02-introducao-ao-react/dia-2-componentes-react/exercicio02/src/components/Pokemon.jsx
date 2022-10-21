// #2 Crie o componente <Pokemon />;
// - Este componente deverá renderizar as seguintes informações (que estão dentro do objeto recebido via props chamada pokemon):
//  - O nome do Pokémon;
//  - O tipo do Pokémon;
//  - O peso médio do Pokémon, acompanhado da unidade de medida usada. Por exemplo: "20 kg";
//  - A imagem do Pokémon.

import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    const { name, type, averageWeight, image } = pokemon;

    return (
      <li className="pokemon">
        <div>
          <p>{ name }</p>
          <p>{ type }</p>
          <p>
            Average weight:
            <span>
              {` ${averageWeight.value} ${averageWeight.measurementUnit}`}
            </span>
          </p>
        </div>
        <img src={ image } alt={ `${name}` } />
      </li>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
    moreInfo: PropTypes.string,
  }).isRequired,
};

export default Pokemon;
