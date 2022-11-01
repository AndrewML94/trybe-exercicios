import React, { Component } from 'react';
import PersonInformation from './components/PersonInformation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <PersonInformation />
      </div>
    );
  }
}

export default App;
