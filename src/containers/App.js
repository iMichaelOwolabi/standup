import React, { Component } from 'react';
import Standup from '../components/Standup/Standup';
import './App.css';
import NavBar from '../components/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar name="Standup" />
        {/* <Standup /> */}
      </div>
    );
  }
}

export default App;
