import React, { Component } from 'react';

class Recipes extends Component {
    constructor(props){
        super(props);
        this.state = {
            item: []
        }
        this.createRecipe = this.createRecipe.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    delete(key){
        this.props.delete(key);
    }
    createRecipe(item){
        /*return <li  onClick={() => this.delete(item.key)}
                    key={item.key}>{item.text}</li>*/
        return <div>
            <input  type="text" 
                    key={item.key} 
                    value={item.text}
                    id={item.key}
                    onChange={this.handleChange}/>
                    
            <br></br>
        </div>
    }
    handleChange(e){

        this.state.item[0].text = e.target.value;
        
        console.log(this.state.item[0].text)
    }
    render() { 
        var recipeEntries = this.props.entries;
        this.state.item = recipeEntries;
        //console.log(this.state.item);
        var listItems = this.state.item.map(this.createRecipe);
        return (
            <ul className="List">
                {listItems}
                
            </ul>
          );
    }
}
 
export default Recipes;