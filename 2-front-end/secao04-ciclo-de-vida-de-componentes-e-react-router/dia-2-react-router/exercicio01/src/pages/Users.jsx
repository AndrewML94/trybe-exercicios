import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class Users extends Component {
  render() {
    const { greetingsMessage } = this.props;
    return (
      <div>
        <Navbar />
        <h3>Você está na página Usuários</h3>
        <p> { greetingsMessage }, My awesome Users component </p>
      </div>
    )
  }
}

export default Users;
