import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BigSquare from './containers/square';
class App extends Component {
  render() {
    return (
      <div id="A1" className="App">
      <BigSquare/>
      </div>
    );
  }
}

export default App;
