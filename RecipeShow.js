import React, { Component } from 'react';
import axios from 'axios';

class RecipeShow extends Component {
    constructor(){
        super();
        this.state = {
            recipes: []
        }
        this.deleteRecipe = this.deleteRecipe.bind(this);
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
    deleteRecipe(e){
        var url = 'http://localhost:3001/recipes/'
        axios.delete(url + e)
        window.location.reload();
    }

    render() { 
        var recipes = this.state.recipes.map((item, i) => 
        <li>
            {item.newRecipe.name} 
            <button id={i} onClick={() => this.deleteRecipe(item.id)}>Delete</button>
        </li>)
        return (
            <div>
                <ul>
                    {recipes}
                    
                </ul>
            </div>
          );
    }
}

 
export default RecipeShow;