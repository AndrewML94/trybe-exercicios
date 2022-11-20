import React from 'react';

class App extends React.Component {
  state = {
    joke: '',
  };

  componentDidMount() {
    this.fetchJoke();
  }
   
  fetchJoke() {
    const API_URL = 'https://icanhazdadjoke.com/';
    const REQUEST_CONFIG = { headers: { Accept: 'application/json' } };
    fetch(API_URL, REQUEST_CONFIG)
      .then((response) => response.json())
      .then(({ joke }) => this.setState({ joke }));
  }

  render() {
    const { joke } = this.state;

    return (
      <div>
        <p>{ joke }</p>
        <button
          type="button"
          onClick={ () => {this.fetchJoke()} }
        >
          New Joke
        </button>
      </div>
    );
  }
}

export default App;