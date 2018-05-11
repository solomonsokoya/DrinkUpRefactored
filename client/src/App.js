import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import jwt from 'jwt-js';
import Register from './components/Register';
import Profile from './components/Profile';
import Home from './components/Home';

import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentUser: null
    }
  }

checkToken() {
    const authToken = localStorage.getItem('authToken');
    fetch('/auth', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      }
    })
      .then(resp => {
        if (!resp.ok) throw new Error(resp.message);
        return resp.json()
      })
      .then(respBody => {
        this.setState({
          currentUser: respBody.user
        })
      })
      .catch(err => {
        console.log('not logged in');
        localStorage.removeItem('authToken');
        this.setState({
          currentUser: null
        });
      })
  }

  loginRequest(attempt) {
    console.log('attempting to log in with attempt:');
    console.log(attempt);
    fetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify(attempt),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(resp => {
        if (!resp.ok) throw new Error(resp.statusMessage);
        return resp.json();
      })
      .then(respBody => {
        console.log(respBody);
        localStorage.setItem('authToken', respBody.token)
        this.setState({
          currentUser: jwt.decodeToken(respBody.token).payload
        })
      })
  }

handleLogin(attempt){
  this.loginRequest(attempt)
}
componentDidMount(){
  this.checkToken();
}

  render() {
    let View;
    if(this.state.currentUser === null){
        View = (
          <div>
            <main>
            <Switch>
              <Route exact path= "/" component= {Home} />
              <Route path="/login" component={() => (<Login onLogin = {this.handleLogin}/>)}/>
              <Route path="/register" component={() => (<Register onLogin = {this.handleRegister}/>)}/>
            </Switch>
            </main>
          </div>
          )
      } else {

      View = ( <div className="App">
        <Profile/>
      </div>
      )
    };

    return (View);

  }
}

export default App;
 // <button className='Login'><Link to ='/login'>Login</Link></button>
 // <button className='Register'><Link to='/register'>Register</Link></button>
