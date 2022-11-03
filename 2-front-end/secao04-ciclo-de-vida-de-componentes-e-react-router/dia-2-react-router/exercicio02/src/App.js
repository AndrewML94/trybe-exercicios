import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import pokemonList from './data';
import Pokedex from './components/Pokedex';
import About from './components/About';
import './App.css';
import PokemonDetails from './components/PokemonDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ (props) => <Pokedex { ...props } pokemonList={ pokemonList } /> }
          />
          <Route
            exact
            path="/pokemon/:id"
            render={ (props) => (
              <PokemonDetails { ...props } pokemonList={ pokemonList } />) }
          />
          <Route
            exact
            path="/about"
            component={ About }
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
