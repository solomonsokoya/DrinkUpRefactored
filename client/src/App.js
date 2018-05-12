import React, { Component } from 'react';
import {Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import jwt from 'jwt-js';
import Register from './components/RegisterForm';
import Profile from './components/Profile';
import Home from './components/Home';
import Drinks from './components/Drinks';

import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentUser: null,
      drinkFromApi:''
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.fetchDrinks = this.fetchDrinks.bind(this);
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
        localStorage.setItem('authToken', respBody.token)
        this.setState({
          currentUser: jwt.decodeToken(respBody.token).payload
        })
      })
    }

  registerRequest(attempt) {
    console.log('attempting to REGISTER');
    fetch('/auth/register', {
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
      localStorage.setItem('authToken', respBody.token)
      this.setState({
        currentUser: jwt.decodeToken(respBody.token).payload
      })
    })
  }

  fetchDrinks(){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
    .then(resp =>{
      return resp.json()
    })
    .then(respBody =>{
      this.setState({
        drinkFromApi: respBody
      })
    })
    .catch(err=>{
      console.log(err);
    })
  }

  handleLogin(attempt){
    this.loginRequest(attempt)
  }

  handleRegister(attempt) {
    this.registerRequest(attempt);
  }

  componentDidMount(){
    this.checkToken();
    this.fetchDrinks();
  }

  render() {
    let View;
    if(this.state.currentUser === null){
        View = (
          <div>
            <main>
            <Switch>
              <Route exact path= "/" component= {Home} />
              <Route path='/drinks' component={() =>(<Drinks drinks= {this.state.drinkFromApi}/>)}/>
              <Route path="/login" component={() => (<Login onLogin = {this.handleLogin}/>)}/>
              <Route path="/register" component={() => (<Register onSubmit = {this.handleRegister}/>)}/>
            </Switch>
            </main>
          </div>
          )
      } else {

      View = (
        <div>
        <Profile user={this.state}/>
        </div>
      )
    };

    return (View);

  }
}

export default App;
 // <button className='Login'><Link to ='/login'>Login</Link></button>
 // <button className='Register'><Link to='/register'>Register</Link></button>
