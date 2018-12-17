import React, { Component } from 'react';
import './App.css';
import Recipe from './Recipe'

class App extends Component {
  constructor(){
    super();
    this.state = {
      products: [],
      name: [],
      recipes: []
    }
  }
  render() {
    return (
      <div className="App">
        <Recipe/>
      </div>
    );
  }
}

export default App;
