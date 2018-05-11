import React, { Component } from 'react';
import FavDrinks from './FavDrinks';

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
    console.log(this.state);
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
    console.log(username)
    if (this.props.user) {
      this.setState({
        id: id,
        username: username,
        pic_url: pic_url
      })
    }

    this.fetchFavDrinks();
  }
  render() {
    console.log(this.state.drinks);
    if(this.state.id) {
    return (
      <div>
      hello
        <h2>Profile Name: {this.state.username}</h2>
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

        // <FavDrinks drinks={this.state.drinks.data} />
