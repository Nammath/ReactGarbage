import React, { Component } from 'react';
import Recipes from './Recipes';

class Recipe extends Component {
    constructor(props){
        super(props);
        this.addItem = this.addItem.bind(this);

        this.state = {
            products: [],
            quantity: []
        }
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e){
        if(this._inputElement.value !== '' && this._inputElementQ.value !== ''){
            var newProduct = {
                text: this._inputElement.value,
                key: Date.now()
            };
            var newQuantity = {
                text: this._inputElementQ.value,
                key: Date.now()
            }
            this.setState((prevState) => {
                return{
                    products: prevState.products.concat(newProduct),
                    quantity: prevState.quantity.concat(newQuantity)
                };
            });
            this._inputElement.value = '';
            this._inputElementQ.value = '';
        }
        //console.log(this.state.products);
        e.preventDefault();

    }
    deleteItem(key){
        var filteredItems = this.state.products.filter(function (item){
            return (item.key !== key);
        })
        this.setState({
            products: filteredItems,
            quantity: filteredItems
        })
    }
    state = {  }
    render() { 
        return ( 
        <div>
            <div>
                <form onSubmit={this.addItem}>
                    <input  type="text" 
                            placeholder="Product name" 
                            ref={(a) => this._inputElement = a}/>
                    <input  type="text" placeholder="Quantity"
                            ref={(a) => this._inputElementQ = a}/>
                    <button type="submit">Add product</button>
                </form>
            </div>
            <Recipes    entries={this.state.products}
                        entriesQ={this.state.quantity}
                        delete={this.deleteItem}/>
        </div> 
        );
    }
}
 
export default Recipe;