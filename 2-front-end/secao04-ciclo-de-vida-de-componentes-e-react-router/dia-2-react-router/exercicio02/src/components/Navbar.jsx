import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul className="navbar">
            <li><Link to="/">Pokedex</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
