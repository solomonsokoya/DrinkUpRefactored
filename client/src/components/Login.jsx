import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

export default class Login extends Component {
constructor(props) {
  super(props);
  this.state = {
    email:'',
    password: ''
  };
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleInputChange = this.handleInputChange.bind(this);
}

handleInputChange(e) {
  const { name, value } = e.target;
  this.setState({
    [name]: value
  });
}

handleSubmit(e) {
  e.preventDefault();
  this.props.onLogin(this.state);
  this.setState({
    email: '',
    password: ''
  });
}


  render() {
    return (
      <div className='loginContainer'>

      <div className='loginText'>
      <h1>I am the login page</h1>
      </div>

      <form className='loginForm'onSubmit={this.handleSubmit}>

      <div>
      <label className='loginLabelOne'>
      Email:
      <input className='inputLogin'
      type='text'
      onChange={this.handleInputChange}
      value={this.state.email}
      name='email'
      />
      </label>

      </div>
      <div className='loginLabelTwo'>
      <label>
      Password:
      <input className='inputLoginTwo'
      type='password'
      onChange={this.handleInputChange}
      value= {this.state.password}
      name='password'
      />
      </label>
      </div>

      <div className='formButton'>
      <button type='submit'>LOGIN</button>
      </div>

      <div>

      </div>


      </form>
      </div>

       );
  }
}
