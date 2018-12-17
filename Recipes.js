import React, { Component } from 'react';

class Recipes extends Component {
    constructor(props){
        super(props);
        this.createRecipe = this.createRecipe.bind(this);
    }
    delete(key){
        this.props.delete(key);
    }
    createRecipe(item){
        return <li  onClick={() => this.delete(item.key)}
                    key={item.key}>{item.text}</li>
    }
    render() { 
        var recipeEntries = this.props.entries;
        var listItems = recipeEntries.map(this.createRecipe);
        return (
            <ul className="List">
                {listItems}
            </ul>
          );
    }
}
 
export default Recipes;