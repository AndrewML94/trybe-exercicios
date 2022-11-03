import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';
import './App.css';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Trybe</h1>
        <BrowserRouter>
          <Switch>
            <Route exact path="/users/:id" render={(props) => <Users {...props} greetingsMessage='Good Morning'/> } />
            <Route exact path="/about" component={ About } />
            <Route exact path="/" component={ Home } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
