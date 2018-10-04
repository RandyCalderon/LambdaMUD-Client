import React, { Component } from 'react';
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import { Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Route exact path="/" component={Login} />
      <Route path="/registration" component={Register} />
      </div>
    );
  }
}

export default App;
