import React, { Component } from 'react';
import axios from 'axios';

class RecipeShow extends Component {
    constructor(){
        super();
        this.state = {
            recipes: []
        }
    }
    componentDidMount(){
        var url = 'http://localhost:3001/recipes'
        axios.get(url)
            .then(res => {
                const recipes = res.data;
                this.setState({recipes});
                console.log(this.state)
            })
    }

    render() { 
        var recipes = this.state.recipes.map((item, i) => <li>{item.newRecipe.name}</li>)
        return (
            <div>
                <ul>{recipes}</ul>
            </div>
          );
    }
}
 
export default RecipeShow;