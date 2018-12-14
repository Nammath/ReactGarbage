import React, { Component } from 'react';
import './App.css';
import Recipe from './Recipe'

class App extends Component {
  constructor(){
    super();
    this.state = {
      products: [],
      currentProduct: {text:'', key:''},
    }
  }

  handleInput = e => {
    const itemText = e.target.value;
    const currentProduct = {text: itemText, key: itemText}
    this.setState({
      currentProduct,
    })
  }
  addItem = e => {
    e.preventDeafult()
    const newItem = this.state.currentProduct
    if(newItem.text !== ''){
      console.log(newItem)
      const products = [...this.state.products, newItem]
      this.setState({
        products: products,
        currentProduct: {text: '', key: ''}
      })
    }
  }
  render() {
    return (
      <div className="App">
        <Recipe addItem={this.addItem}
                currentProduct={this.state.currentProduct}
                handleInput={this.handleInput}
                inputElement={this.inputElement}/>
        
      </div>
    );
  }
}

export default App;
