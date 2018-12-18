import React, { Component } from 'react';
import Recipes from './Recipes';
import RecipeList from './RecipeList'
import RecipeShow from './RecipeShow'
import axios from 'axios';

const initialState = {
    products: [],
    name: [],
    recipes: []
};

class Recipe extends Component {
    constructor(props){
        super(props);
        this.addItem = this.addItem.bind(this);
        this.addRecipe = this.addRecipe.bind(this);

        this.state = initialState;
        
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e){
        if(this._inputElement.value !== '' && this._inputElementQ.value !== ''){
            var newProduct = {
                text: this._inputElement.value + " " + this._inputElementQ.value,
                key: Date.now()
            };
            this.setState((prevState) => {
                return{
                    products: prevState.products.concat(newProduct),
                };
            });
            this._inputElement.value = '';
            this._inputElementQ.value = '';
        }
        
        //console.log(this.state.products);
        e.preventDefault();

    }
    
    addRecipe(e){
        if(this._recipeName.value !== ''){
            var newRecipe = {
                products: this.state.products,
                name: this._recipeName.value,
                key: Date.now()
            }
            this.setState((prevState) =>{
                return{
                    recipes: prevState.recipes.concat(newRecipe),
                    products: [],
                    name: []
                };
            });
            var url = 'http://localhost:3001/recipes';
            axios.post(url, {newRecipe})
            
            this._recipeName.value = '';
            console.log(this.state.recipes);
        }
    }
    deleteItem(key){
        var filteredItems = this.state.products.filter(function (item){
            return (item.key !== key);
        })
        this.setState({
            products: filteredItems,
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
                        delete={this.deleteItem}/>

            <form onSubmit={this.addRecipe}>
                <input  type="text"
                        placeholder="Recipe name"
                        ref={(a) => this._recipeName = a}/>
                <button type="submit">Add Recipe</button>
            </form>
            <RecipeShow></RecipeShow>

            
        </div> 
        );
    }
}
 
export default Recipe;