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
    if (this.props.user) {
      this.setState({
        id: this.props.user.id,
        username: this.props.user.username,
        pic_url: this.props.user.pic_url
      })
    }
  }
  render() {
    return (
      <div>
        <h2>Profile Name: {this.props.user.username}</h2>
      </div>
      )

  }
}
