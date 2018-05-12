import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className='homeCont'>

      <h1>I am the home page with buttons </h1>
      <div className='linkCont'>
      <div className='loginLink'>
      <h3 className='Login'><Link to ='/login' style={{ textDecoration: 'none' }}> Login </Link></h3>
      </div>

      <div className='registerLink'>
      <h3 className='Register'><Link to='/register' style={{ textDecoration: 'none' }}> Register </Link></h3>
      </div>
      </div>

      </div>
      )

  }
}
