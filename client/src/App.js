import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import jwt from 'jwt-js';
import Register from './components/RegisterForm';
import Profile from './components/Profile';
import Home from './components/Home';
import DrinksApi from './components/DrinksApi';
import EditDrink from './components/EditDrink';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
      drinks: false,
      drinkFromApi: []
    }
    this.handleCreate = this.handleCreate.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.fetchDrinks = this.fetchDrinks.bind(this);
    this.fetchFavDrinks = this.fetchFavDrinks.bind(this)
    this.handleEditDrink = this.handleEditDrink.bind(this); //sends props to editDrink form
    this.updateDrink = this.updateDrink.bind(this) // takes new values on Submit
    this.deleteDrink = this.deleteDrink.bind(this)
  }

  checkToken() {

    const authToken = localStorage.getItem('authToken');
    fetch('/auth', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      }
    }).then(resp => {
      if (!resp.ok)
        throw new Error(resp.message);
      return resp.json()
    }).then(respBody => {
      this.setState({currentUser: respBody.user})
    }).catch(err => {
      localStorage.removeItem('authToken');
      this.setState({currentUser: null});
    })
  }

  async loginRequest(attempt) {
    try {
      const authToken = localStorage.getItem('authToken');
      let promise = await fetch('/auth/login', {
        method: 'POST',
        body: JSON.stringify(attempt),
        headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        }
      });
      let json = await promise.json();
      localStorage.setItem('authToken', json.token);
      this.setState({
        currentUser: jwt.decodeToken(json.token).payload
      })
      window.location.href = '/';
    } catch (err) {
      console.log(err)
    }
  }
  async registerRequest(attempt) {
    try {
      const authToken = localStorage.getItem('authToken');
      let promise = await fetch('/auth/register', {
        method: 'POST',
        body: JSON.stringify(attempt),
        headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        }
      });
      let json = await promise.json();
      localStorage.setItem('authToken', json.token)
      this.setState({
        currentUser: jwt.decodeToken(json.token).payload
      })
      window.location.href = '/';
    } catch (err) {
      console.log(err)
    }
  }

  async fetchDrinks() {
    try {
      let promise = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
      let json = await promise.json();
      this.setState({drinkFromApi: json.drinks})
    } catch (err) {
      console.log(err)
    }
  }

  handleLogin(attempt) {
    this.loginRequest(attempt)
  }

  handleCreate(drink) {
    this.appCreateDrinks(drink)
  }

  handleRegister(attempt) {
    this.registerRequest(attempt);
  }

  appCreateDrinks(drink) {
    const authToken = localStorage.getItem('authToken');
    fetch(`/drinks/user/${this.state.currentUser.id}`, {
      method: 'POST',
      body: JSON.stringify(drink),
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      }
    }).then(resp => {
      if (!resp.ok)
        throw new Error(resp.statusMessage);
      return resp.json();
    }).then(() => this.fetchFavDrinks())
  }

  fetchFavDrinks() {
    const authToken = localStorage.getItem('authToken')
    fetch(`/drinks/user/${this.state.currentUser.id}`, {
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    }).then(resp => {
      if (!resp.ok)
        throw new Error(resp.statusMessage)
      return resp.json()
    }).then(respBody => this.setState({drinks: respBody.data})).catch(err => {
      console.log('not fetching drinks');
    })
  }

  handleEditDrink(drink) {
    this.setState({drink: drink})
  }

  updateDrink(drink) {
    const authToken = localStorage.getItem('authToken');
    return fetch(`/drinks/drink/${drink.drink_id}`, {
      method: 'PUT',
      body: JSON.stringify(drink),
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      }
    }).then(resp => {
      if (!resp.ok)
        throw new Error(resp.statusMessage);
      return resp.json();
    }).then(() => this.fetchFavDrinks())
  }

  deleteDrink(drink) {
    return fetch(`/drinks/drink/${drink.drink_id}`, {method: 'DELETE'}).then(resp => {
      if (!resp.ok)
        throw new Error(resp.statusMessage);
      return resp.json();
    }).then(() => this.fetchFavDrinks())
  }

  componentDidMount() {
    this.checkToken();
    this.fetchDrinks();
  }

  render() {
    let View;
    if (this.state.currentUser === null) {
      View = (<div>
        <main>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={() => (<Login onLogin={this.handleLogin}/>)}/>
            <Route path="/register" component={() => (<Register onSubmit={this.handleRegister}/>)}/>
          </Switch>
        </main>
      </div>)
    } else {

      View = (<div>
        <Switch>
          <Route exact path="/" render={props => (<Profile user={this.state} handleEditDrink={this.handleEditDrink} fetchFavDrinks={this.fetchFavDrinks} userDrinks={this.state.drinks} deleteDrink={this.deleteDrink}/>)}/>
          <Route path='/drinks' component={() => (<DrinksApi create={this.handleCreate} drinks={this.state.drinkFromApi}/>)}/>
          <Route path="/edit/:id" component={() => (<EditDrink initialValue={this.state.drink} onSubmit={this.updateDrink}/>)}/>
        </Switch>
      </div>)
    };
    return (View);
  }
}

export default App;
