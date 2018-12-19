import axios from "axios";
import React, { Component } from "react";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { Route, Link, BrowserRouter } from "react-router-dom";
import CurrentRecipe from "./CurrentRecipe";
class RecipeShow extends Component {
  constructor() {
    super();
    this.state = {
      recipes: []
    };
    this.deleteRecipe = this.deleteRecipe.bind(this);
    this.clickEvent = this.clickEvent.bind(this);
  }
  componentDidMount() {
    var url = "http://localhost:3001/recipes";
    axios.get(url).then(res => {
      const recipes = res.data;
      this.setState({ recipes });
      //console.log(this.state);
    });
  }
  deleteRecipe(e) {
    var url = "http://localhost:3001/recipes/";
    axios.delete(url + e);
    window.location.reload();
  }
  clickEvent(){
    window.location.reload();
  }
  render() {
    var recipes = this.state.recipes.map((item, i) => (
      <ListGroupItem>
        
        <Link to={"/detail/" + [item.id]} onClick={this.clickEvent}>{item.newRecipe.name}</Link>
        
        <Button
          bsStyle="danger"
          bsSize="small"
          id={i}
          onClick={() => this.deleteRecipe(item.id)}
        >
          Delete
        </Button>
      </ListGroupItem>
    ));
    return (
      <div>
        <ListGroup>{recipes}</ListGroup>
      </div>
    );
  }
}

export default RecipeShow;
