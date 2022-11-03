import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Página para testar conhecimentos aprendidos referente React Router</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/about" component={ About } />
          <Route exact path="/users" render={(greetingsMessage) => <Users {...greetingsMessage} greetingsMessage='Good Morning'/> } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
