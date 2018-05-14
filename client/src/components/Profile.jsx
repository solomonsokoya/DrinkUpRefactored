import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import FavDrinks from './FavDrinks';
import Nav from './Nav.jsx'
import EditDrink from './EditDrink';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      username: '',
      pic_url: '',
      drinks: ''
    }
  }

  componentDidMount() {
    const {id, username, pic_url} = this.props.user.currentUser
    if(this.props.user) {
      this.setState({
        id: id,
        username: username,
        pic_url: pic_url
      })
    }
    this.props.fetchFavDrinks();
  }

  render() {
    console.log(this.props.userDrinks)
    if(this.state.id){
      return (
        <div>
        <Nav/>
        <h1>Welcome {this.state.username}</h1>
        <img src={this.state.pic_url} alt="profile-pic" style={{width:"15%"}}/>
        <h2>Your Favorite Drinks are....</h2>
        {this.props.userDrinks ? <FavDrinks drinks={this.props.userDrinks} handleEditDrink={this.props.handleEditDrink}/> : <p>Loading</p> }

      </div>
      )
    } else {
     return(
      <div>
      LOADING...
      </div>
      )
    }
  }
}
        // <Route path="/edit/:id" component={() => (<EditDrink initialValue={this.state.drink} onSubmit={this.updateDrink}/>)}/>
