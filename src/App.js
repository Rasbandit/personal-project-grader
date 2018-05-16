import React, { Component } from 'react';
import Content from './components/Content'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Todd's Super Happy Project Grader</h1>
        </header>
        <Content />
      </div>
    );
  }
}

export default App;
