import React, { Component } from 'react';
import Characters from './components/Characters';
import CharSelector from './components/CharSelector';
import Header from './components/Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
        <div className="Main-Body">
          <CharSelector/>
          <Characters/>
        </div>
      </div>
    );
  }
}

export default App;
