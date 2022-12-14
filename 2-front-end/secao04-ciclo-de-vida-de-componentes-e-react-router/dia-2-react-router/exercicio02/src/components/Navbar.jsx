import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul className="navbar">
            <li><Link className="navbar-link" to="/">Pokedex</Link></li>
            <li><Link className="navbar-link" to="/about">About</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
