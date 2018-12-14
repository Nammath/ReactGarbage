import React, { Component } from 'react';

class Recipes extends Component {
    constructor(props){
        super(props);
        this.createRecipe = this.createRecipe.bind(this);
        this.createQuantity = this.createQuantity.bind(this);
    }
    delete(key){
        this.props.delete(key);
    }
    createRecipe(item){
        return <li  onClick={() => this.delete(item.key)}
                    key={item.key}>{item.text}</li>
    }
    createQuantity(item){
        return <li  onClick={() => this.delete(item.key)}
                    key={item.key}>{item.text}</li>
    }
    render() { 
        var recipeEntries = this.props.entries;
        var quantityEntries = this.props.entriesQ;
        var listItems = recipeEntries.map(this.createRecipe);
        var quantityItems = quantityEntries.map(this.createQuantity);
        return (
            <ul className="List">
                {listItems}
                {quantityItems}
            </ul>
          );
    }
}
 
export default Recipes;