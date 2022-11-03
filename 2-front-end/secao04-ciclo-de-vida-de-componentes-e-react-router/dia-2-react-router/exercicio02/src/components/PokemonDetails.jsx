import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import { pokemonType } from '../types';
import Pokemon from './Pokemon';
import '../styles/pokedex.css';

class PokemonDetails extends Component {
  render() {
    const { pokemonList, match: { params: { id } } } = this.props;
    const pokemonFound = pokemonList.find((e) => e.id === Number(id));
    return (
      <section className="pokemon-details">
        <Navbar />
        <h1>
          {`${pokemonFound.name} details`}
        </h1>
        <Pokemon pokemon={ pokemonFound } />
        <h2>Sumário:</h2>
        <p>{pokemonFound.summary}</p>
        <h2>Hábitat:</h2>
        <section className="pokemon-habitat">
          { pokemonFound.foundAt.map((location) => (
            <section className="pokemon-section" key={ location.location }>
              <span className="pokemon-span">{ location.location }</span>
              <img src={ location.map } alt="mapa do pokemon" />
            </section>
          )) }
        </section>
      </section>
    );
  }
}

PokemonDetails.propTypes = {
  pokemonList: PropTypes.arrayOf(pokemonType.isRequired).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default PokemonDetails;
