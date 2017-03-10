import React, { Component } from 'react';
import './App.css';
import {startButton} from './funcs';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Slow To Speak</h2>
        </div>
        <div className="main-body">
            <button id="start_button" onClick={(event) => startButton(event)}>Start!</button>
            <div id="circle" display="none"></div>
          <div id="message"></div>
        </div>
      </div>
    );
  }
}

export default App;
