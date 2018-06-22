import React, { Component } from 'react';
import logo from '../logo.png';
import '../App.css';

class Default extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <a href="https://lukecolcott.com">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Go-Go-Gadget React App!</h1>
        </a>
        </header>
       <p>
         
       </p>
      </div>
    );
  }
}

export default Default;