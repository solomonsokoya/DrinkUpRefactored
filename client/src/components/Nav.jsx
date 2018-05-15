import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//todo add drink iconography into nav bar
export default class Nav extends Component {

    logoutRequest() {
    localStorage.removeItem('authToken');
    window.location.href = '/';
  }


  render() {
    return (
      <nav>
        <ul>
          <li><Link to="/">MY DRINKS</Link></li>
          <li><Link to="/drinks">FIND DRINKS</Link></li>
          <li><Link to="/drinks/new">MAKE A DRINK</Link></li>
          <li><Link to="">HAPPY HOUR</Link></li>
          <li><Link to="/" onClick={this.logoutRequest.bind(this)}>LOGOUT</Link></li>
        </ul>
      </nav>
      )
  }
}
