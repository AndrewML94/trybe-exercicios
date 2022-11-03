import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h3>Você está na página Home</h3>
      </div>
    )
  }
}

export default Home;
