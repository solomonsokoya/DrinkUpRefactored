import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import skyLine from './cssImages/newyorkskyline.jpg';

export default class Home extends Component {
  render() {
    return (
      <div className='homeCont'>

      <h1>Welcome to, DRINK UP </h1>

      <div className='homeImage'>
       <img className= 'skyLine' src = {skyLine} alt='skyLine'/>
      </div>
      <div className='linkCont'>
      <h3 className='loginLink'><Link to ='/login' style={{ textDecoration: 'none' }}> Login  </Link></h3>
      <div className='pipe'></div>
      <h2  className='registerLink'><Link to='/register' style={{ textDecoration: 'none' }}>  Register </Link></h2>
      </div>
      </div>
      )

  }
}
