// #3 Renderize uma lista com as informações dos Pokémon dentro do componente <Pokedex />;
// - O componente <Pokedex/> deve receber a lista de Pokémon através de uma props chamada pokemonList.
// - Cada Pokémon da lista deverá ser renderizado por um componente Pokemon. Passe as informações do Pokémon através da props que já existe nesse componente.

import React from 'react';
import './App.css';

import Pokedex from './components/Pokedex';
import pokemonList from './data';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Pokedex pokemonList={ pokemonList } />
      </div>
    );
  }
}

export default App;
