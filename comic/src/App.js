import React, { Component } from 'react';
import Characters from './components/Characters';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Characters/>
      </div>
    );
  }
}

export default App;
