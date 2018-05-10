import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
      <h1>I am the home page with buttons </h1>
      <button className='Login'><Link to ='/login'>Login</Link></button>
      <button className='Register'><Link to='/register'>Register</Link></button>
      </div>
      )

  }
}
