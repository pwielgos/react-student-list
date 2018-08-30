import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // This function is called by the StudentForm when the submit button is pressed
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GitHub Student List</h1>
        </header>
        <br/>
        <p>Student form component goes here.</p>
        <hr/>
        <p>Student list goes here.</p>
      </div>
    );
  }
}

export default App;
