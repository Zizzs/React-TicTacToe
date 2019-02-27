import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Game from './Game';



class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>App Component</h1>
          <Header />
          <Game />
        </header>
      </div>
    );
  }
}

export default App;
