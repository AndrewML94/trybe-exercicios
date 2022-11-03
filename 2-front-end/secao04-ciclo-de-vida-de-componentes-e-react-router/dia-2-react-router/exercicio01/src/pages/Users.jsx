import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class Users extends Component {
  render() {
    const { greetingsMessage } = this.props;
    const { id } = this.props.match.params;
    return (
      <div>
        <Navbar />
        <h3>Você está na página Usuários</h3>
        <p> { greetingsMessage }, My awesome Users component.</p>
        <p>O id da URL é: <strong>{ id }</strong>.</p>
      </div>
    )
  }
}

export default Users;
