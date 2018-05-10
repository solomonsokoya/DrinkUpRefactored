import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Home from './components/Home';

import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentUser: null
    }
  }
  render() {
    let View;
    if(this.state.currentUser === null){
        View = (
          <div>
            <main>
            <Switch>
              <Route exact path= "/" component= {Home} />
              <Route path="/login" component={Login}/>
              <Route path="/register" component={Register}/>
            </Switch>
            </main>
          </div>
          )
      } else {

      View = ( <div className="App">
        <Profile/>
      </div>
      )
    };

    return (View);

  }
}

export default App;
 // <button className='Login'><Link to ='/login'>Login</Link></button>
 // <button className='Register'><Link to='/register'>Register</Link></button>
