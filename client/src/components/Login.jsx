import React, { Component } from 'react';

export default class Login extends Component {
constructor(props) {
  super(props);
  this.state = {
    username:'',
    password: ''

  };
}

handleInputChange(e) {
  const { username, value } = e.target;
  this.setState({
    [username]: value,
  });
}

handleSubmit(e) {
  e.preventDefault();
  this.props.onLogin(this.state);
  this.setState({
    username: '',
    password: ''
  });
}


  render() {
    return (

      <form onSubmit={this.handleSubmit}>
      <label>
      Username:
      <input
      type='text'
      onChange={this.handleInputChange}
      value={this.state.username}
      name='username'
      />
      </label>

      <label>
      Password:
      <input
      type='password'
      onChange={this.handleInputChange}
      value= {this.state.password}
      name='password'
      />
      </label>
      <button type='submit'> LOGIN </button>

      <div>
      <h1>I am the login page</h1>
      </div>
      </form>
       );
  }
}
