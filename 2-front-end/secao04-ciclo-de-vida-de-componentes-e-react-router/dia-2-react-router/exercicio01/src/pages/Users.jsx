import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import PropTypes from 'prop-types';

class Users extends Component {
  render() {
    const { greetingsMessage } = this.props;
    const { id } = this.props.match.params;
    return (
      <div>
        <Navbar />
        <h3>You are on the Users page</h3>
        <p> { greetingsMessage }, My awesome Users component.</p>
        <p>O id da URL é: <strong>{ id }</strong>.</p>
      </div>
    )
  }
}

Users.propType = {
  greetingsMessage: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

export default Users;
