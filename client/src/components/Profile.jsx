import React, { Component } from 'react';
import FavDrinks from './FavDrinks';
import Nav from './Nav.jsx'
import marg from './cssImages/margarita.jpg'


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

  addDefaultSrc(ev){
  ev.target.src = 'https://awodev.com/images/default-forum-user.png'
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
    console.log(this.state.pic_url)
    if(this.state.id){
      return (
        <div className='parentProfile'>
          <Nav/>
          <div className = 'userInfoContainer'>
            <div className = 'userInfoChild'>
              <div className='userPicCont'>
                <img  className='userPic' src={this.state.pic_url} alt="profile-pic" onError={this.addDefaultSrc}/>
              </div>
              <h1> {this.state.username} </h1>
              <div className='detailPic'>
                <img className='detailImg' src= {marg} alt=''/>
              </div>
            </div>
            <div className = 'favContent'>
              <h2> Favorite Drinks </h2>
              <div className='apiDrink' >
                {this.props.userDrinks ? <FavDrinks drinks={this.props.userDrinks} handleEditDrink={this.props.handleEditDrink} deleteDrink={this.props.deleteDrink}/> : <p>Loading</p> }
              </div>
            </div>
          </div>
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
