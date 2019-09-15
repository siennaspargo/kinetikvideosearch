import React, { Component } from 'react';
import './App.css';
import Wrapper from './components/Wrapper/index';
import SearchBar from './components/searchbar/index';

class App extends Component {
  render = () => {
    return (
      <Wrapper>
      <div className="App">
        <header className="App-header">
  
        </header>
      </div>

      <SearchBar>Youtube Search engine coming soon!</SearchBar>
  
      </Wrapper>
    )
  }
}

export default App;
