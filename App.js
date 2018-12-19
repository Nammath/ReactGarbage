import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      name: [],
      recipes: []
    };
  }
  render() {
    return (
      <div className="App">
        <ul>
          <li>Home</li>
          <li>Recipe</li>
        </ul>
      </div>
    );
  }
}

export default App;
