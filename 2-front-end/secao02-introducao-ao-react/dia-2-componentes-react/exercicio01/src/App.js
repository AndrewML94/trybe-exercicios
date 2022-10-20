import React, { Component } from 'react';
import staringCat from './staringCat.jpg'
import Image from './Image';

class App extends Component {
  render() {
    return (<Image source= { staringCat } alternativeText='Cute cat staring' />);
  }
}

export default App;
