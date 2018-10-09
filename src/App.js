import React, { Component } from 'react';
// import logo from './logo.svg';
import NavBar from './Components/Navigation/NavBar';
import CardBox from './Components/Cards/CardBox'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
        <header className="App-header">
      
        </header>
        <CardBox />
      </div>
    );
  }
}

export default App;
