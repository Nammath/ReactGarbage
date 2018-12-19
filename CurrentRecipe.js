import axios from "axios";
import React, { Component } from "react";
import { Route, Link, BrowserRouter } from "react-router-dom";

const initState = {
    recipes: []
}

class CurrentRecipe extends Component {
    constructor(props){
        super(props)
        this.state = initState;
        
    }
    componentDidMount(){
        var url = "http://localhost:3001/recipes/" + this.props.match.params.id;
        axios.get(url).then(res => {
            //console.log(this.props.match.params.id);
            const recipes = res.data;
            this.state=initState;
            this.setState({recipes})
            
        })
    }
    
    render(){
        var product = this.state.recipes.newRecipe;
        
        return(
            <div>
                {this.state.recipes.newRecipe? <h1>{this.state.recipes.newRecipe.name}</h1>
                    : <p>Waiting for data...</p>}
                {this.state.recipes.newRecipe? this.state.recipes.newRecipe.products.map((item, i) =>{
                    return <p>{item.text}</p>})
                :<p>Waiting for data... </p>}  
            </div>
        )
    }
}

export default CurrentRecipe;