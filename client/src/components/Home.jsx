import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import skyLine from './cssImages/newyorkskyline.jpg';

export default class Home extends Component {
  render() {
    return (
      <div className='homeCont'>
      <div className='homeTxt'>
      <h1>Welcome to, DRINK UP </h1>
      </div>
      <div className='homeImage'>
       <img src = {skyLine} />
      </div>
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
