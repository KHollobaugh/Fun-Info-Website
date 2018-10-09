import React, { Component } from 'react';
// import logo from './logo.svg';
import NavBar from './Components/Navigation/NavBar';
import CardBox from './Components/Cards/CardBox'
import './App.css';
import RSCarousel from './Components/Header/RSCarousel';
import postData from './postData';

class App extends Component {
  constructor(){
    super();
    this.state= {
      posts: postData,
    };
  }



  render() {
    return (
      <div className="App">
      <NavBar />
        <header className="App-header">
      <RSCarousel />
        </header>

        <div className='card-container'>
          {this.state.posts.map((post, index) =>
          <CardBox
          key={index}
          post={post}
          />)}
      </div>

      </div>
    );
  }
}

export default App;
