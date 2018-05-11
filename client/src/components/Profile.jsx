import React, { Component } from 'react';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      username: '',
      pic_url: ''
    }
  }

  componentDidMount() {
    console.log(this.state);
    if (this.props.user) {
      this.setState((prevState, props) =>({
        id: this.props.user.currentUser.id,
        username: this.props.user.currentUser.username,
        pic_url: this.props.user.currentUser.pic_url
      }))
    }
  }
  render() {
    console.log("this is state--->" + this.state.username)
    if(this.state) {
    return (
      <div>
      hello
        <h2>Profile Name: {this.state.username}</h2>
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
