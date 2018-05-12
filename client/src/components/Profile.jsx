import React, { Component } from 'react';
import FavDrinks from './FavDrinks';
import Nav from './Nav.jsx'

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      username: '',
      pic_url: '',
      drinks:false
    }
    this.fetchFavDrinks= this.fetchFavDrinks.bind(this)
  }

  fetchFavDrinks() {
    fetch(`/drinks/user/${this.props.user.currentUser.id}`)
    .then(resp => {
      if(!resp.ok) throw new Error(resp.statusMessage)
        return resp.json()
    })
    .then(respBody =>
      this.setState ({
        drinks: respBody
      }))
    .catch(err => {
      console.log('no drinks fetch');
    })
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
    this.fetchFavDrinks();
  }

  render() {
    if(this.state.id){
      return (
        <div>
        <Nav/>

        <h1>Welcome {this.state.username}</h1>
        <img src={this.state.pic_url} alt="profile-pic" style={{width:"15%"}}/>
        <h2>Your Favorite Drinks are....</h2>
        {this.state.drinks ? <FavDrinks drinks={this.state.drinks.data} /> : <p>Loading</p> }
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
