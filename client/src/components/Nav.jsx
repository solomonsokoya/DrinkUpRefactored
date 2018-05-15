import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Nav.css'

//todo add drink iconography into nav bar
export default class Nav extends Component {

    logoutRequest() {
    localStorage.removeItem('authToken');
    window.location.href = '/';
  }


  render() {
    return (


      <nav className = 'navContainer'>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous"/>

        <ul>
          <li><Link style={{ textDecoration: 'none', color: 'black' }} to="/"><i class="fas fa-glass-martini"></i></Link></li>
          <li><Link style={{ textDecoration: 'none', color: 'black' }} to="/drinks">FIND DRINKS</Link></li>
          <li><Link style={{ textDecoration: 'none', color: 'black' }} to="/" onClick={this.logoutRequest.bind(this)}>LOGOUT</Link></li>
        </ul>
      </nav>
      )
  }
}

