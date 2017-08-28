import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter =this.decrementCounter.bind(this);
  }
  
  incrementCounter () {
    this.setState({
      count: this.state.count + 1
    });
  }

  decrementCounter () {
    this.setState({
      count: this.state.count -1
    });
  }

  getInitial() {
    return {
      count: 0
    }
  }
  render() {
    const { getInitial, incrementCounter, decrementCounter} = this.props
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <h1>{this.state.count}</h1>
          <button name='counter' onClick={this.incrementCounter}>Up!</button>
          <button name='counter' onClick={this.decrementCounter}>Down!</button>
        </div>

      </div>
    );
  }
}

export default App;
