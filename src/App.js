import React, { Component } from 'react';

import Calculator from './calculator/Calculator';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Calculator />
      </div>
    );
  }
}

export default App;
