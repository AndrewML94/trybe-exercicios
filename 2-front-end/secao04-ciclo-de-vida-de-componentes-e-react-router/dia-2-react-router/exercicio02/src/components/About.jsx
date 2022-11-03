import React, { Component } from 'react';
import Navbar from './Navbar';
import '../styles/pokedex.css';

class About extends Component {
  render() {
    return (
      <div className="pokedex">
        <Navbar />
        <h1>About Pokédex</h1>
      </div>
    );
  }
}

export default About;
