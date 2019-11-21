import React, { Component } from 'react';
import Standup from '../components/Standup/Standup';
import './App.css';
import NavBar from '../components/NavBar/NavBar';
import backGroundImg from '../assets/images/background-img.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar name="Standup" />
        <img src={backGroundImg} alt="virtual meeting image" className="background-img" />
        <Standup />
      </div>
    );
  }
}

export default App;
