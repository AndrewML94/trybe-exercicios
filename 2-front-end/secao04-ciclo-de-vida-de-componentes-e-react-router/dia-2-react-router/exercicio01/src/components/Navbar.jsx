import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Navbar;
