import React, { Component } from 'react';

import Characters from './components/Characters/Characters';
import CharSelector from './components/CharSelector/CharSelector';
import Header from './components/Header/Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="LayoutHeader">
          <Header/>
        </header>
          <section className="MainBody">
            <section className="LeftSide">
              <CharSelector/>
            </section>
              <section className="RightSideMain">
                <Characters/>
              </section>
          </section>
      </div>
    );
  }
}

export default App;
