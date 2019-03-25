import React, { Component } from 'react';

import Characters from './components/Characters/Characters';
import CharSelector from './components/CharSelector/CharSelector';
import Header from './components/Header/Header';
import Search from './components/Search/Search';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="LayoutHeader">
          <Header/>
        </header>
          <section className="MainBody">
            <section className="LeftSideMain">
              <CharSelector/>
            </section>
           
              <section className="RightSideMain">
               <section className="Search">
            <Search/>
            </section>
                <Characters/>
              </section>
          </section>
      </div>
    );
  }
}

export default App;
