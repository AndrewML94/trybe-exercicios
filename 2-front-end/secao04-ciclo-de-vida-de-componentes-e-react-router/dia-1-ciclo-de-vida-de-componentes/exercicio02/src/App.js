import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    imageURL: [],
    isLoading: true,
  };

  async componentDidMount() {
    const promisse = await fetch('https://dog.ceo/api/breeds/image/random');
    const json = await promisse.json();
    this.setState({
      imageURL: json,
      isLoading: false,
    });
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const { imageURL } = nextState;
    if (!imageURL.message.includes('terrier')) return true;
  }

  componentDidUpdate() {
    const { imageURL } = this.state;
    const { message } = imageURL;
    localStorage.setItem('dogImage', JSON.stringify(message));
    const dog = message.split('/');
    alert(dog[4]);
  }

  showImageUpdate = async () => {
    const promisse = await fetch('https://dog.ceo/api/breeds/image/random');
    const json = await promisse.json();
    this.setState({ imageURL: json });
  };

  render() {
    const { isLoading, imageURL } = this.state;
    const { message } = imageURL;
    return (
      <div className="App">
        <h1 className="App-header">Dog Image - Imagens de doguinhos</h1>
        { isLoading ? <p className="App-logo App-link">Loading...</p> : (
          <div className="App-body">
            <img
              className="Image-dog"
              key={ Math.random() }
              src={ message }
              alt="Doguinho aleatório"
            />
            <button
              className="Button"
              type="button"
              onClick={ this.showImageUpdate }
            >
              Novo doguinho!
            </button>
          </div>)}
      </div>
    );
  }
}

export default App;
