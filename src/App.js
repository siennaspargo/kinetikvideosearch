import React, { Component } from 'react';

import SearchBar from './components/searchbar';

class App extends React.Component {
  render() {
    return (
        <div className='ui container' style={{marginTop: '1em'}}>
            <SearchBar handleFormSubmit={this.handleSubmit}/>
        </div>
    )
}
}

export default App;
