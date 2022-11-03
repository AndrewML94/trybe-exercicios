import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class StrictAccess extends Component {
  render() {
    const { username, password } = this.props;
    if (!(username === 'joão' && password === '1234')) {
      alert('Access denied') 
      return <Redirect to="/" /> 
    } 
    return(
      <p>Welcome João!</p>
    );
  }
}

StrictAccess.propType = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
}

export default StrictAccess;
