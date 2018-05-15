import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//todo add drink iconography into nav bar
export default class Nav extends Component {
  render() {
    return (
      <div className='navBarCont'>
      <nav>
        <div className='navBarList'>
        <ul>
          <li><Link to="/user/favs">MY DRINKS</Link></li>
          <li><Link to="/drinks">FIND DRINKS</Link></li>
          <li><Link to="/drinks/new">MAKE A DRINK</Link></li>
          <li><Link to="">HAPPY HOUR</Link></li>
          <li><Link to="/">LOGOUT</Link></li>
        </ul>
        </div>
      </nav>
      </div>
      )
  }
}
