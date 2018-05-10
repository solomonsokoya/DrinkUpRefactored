import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentUser: null
    }
  }
  render() {
    const View;
    if(this.state.currentUser === null){
        View = (
          <div>
            <main>
              <Route path="/login" component={Login}/>
              <Route path="/register" component={Register}/>
            </main>
            <button className='Login'><Link to ='/login'>Login</Link></button>
            <button className='Register'><Link to='/register'>Register</Link></button>
          </div>
          )
      } else {

      View = ( <div className="App">
        <Profile/>
      </div>
      )
    };

    return ({View});

  }
}

export default App;
