import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h3>You are on the Home page</h3>
      </div>
    )
  }
}

export default Home;
