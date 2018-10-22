import React, { Component } from 'react';
import Characters from './components/Characters';
import CharSelector from './components/CharSelector';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Main-Body">
          <CharSelector/>
          <Characters/>
        </div>
      </div>
    );
  }
}

export default App;
