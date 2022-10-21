// #1 Crie o componente <Pokedex />;
// - Este componente deverá renderizar um título e uma ul;
//  - Este componente deverá:
//    - Ser criado dentro da pasta src/components.
//      - Conter uma tag h1 com o texto Pokédex.
//      - Conter uma tag ul. Por enquanto, essa lista estará vazia.
//  - Renderize esse componente dentro do App.js.

import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const { pokemonList } = this.props;
    return (
      <body>
        <h1> Pokédex </h1>
        <ul className="pokedex">
          {pokemonList
            .map((pokemon) => <Pokemon key={ pokemon.id } pokemon={ pokemon } />)}
        </ul>
      </body>
    );
  }
}

Pokedex.defaultProps = {
  pokemonList: [],
};

Pokedex.propTypes = {
  pokemonList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
    moreInfo: PropTypes.string,
  })),
};

export default Pokedex;
