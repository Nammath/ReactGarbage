import axios from "axios";
import React, { Component } from "react";
import { Button, ControlLabel, Form, FormControl, FormGroup, HelpBlock } from "react-bootstrap";
import Recipes from "./Recipes";
import RecipeShow from "./RecipeShow";

const initialState = {
  products: [],
  name: [],
  recipes: []
};
function FormInputItem({ id, label, validationState, help, ...props }) {
  return (
    <FormGroup controlId={id} validationState="validationState">
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      <FormControl.Feedback />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}
class Recipe extends Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.addRecipe = this.addRecipe.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

    this.state = initialState;
  }

  addItem(e) {
    if (this._inputElement.value !== "" && this._inputElementQ.value !== "") {
      var newProduct = {
        text: this._inputElement.value + " " + this._inputElementQ.value,
        key: Date.now()
      };
      this.setState(prevState => {
        return {
          products: prevState.products.concat(newProduct)
        };
      });
      this._inputElement.value = "";
      this._inputElementQ.value = "";
    }

    //console.log(this.state.products);
    e.preventDefault();
  }

  addRecipe(e) {
    if (this._recipeName.value !== "") {
      var newRecipe = {
        products: this.state.products,
        name: this._recipeName.value,
        key: Date.now()
      };
      this.setState(prevState => {
        return {
          recipes: prevState.recipes.concat(newRecipe),
          products: [],
          name: []
        };
      });
      var url = "http://localhost:3001/recipes";
      axios.post(url, { newRecipe });

      this._recipeName.value = "";
      console.log(this.state.recipes);
    }
  }
  deleteItem(key) {
    var filteredItems = this.state.products.filter(function(item) {
      return item.key !== key;
    });
    this.setState({
      products: filteredItems
    });
  }
  state = {};

  getValidationState() {
    const length = 1;
    return "error";
    // if (length > 10) return "success";
    // else if (length > 5) return "warning";
    // else if (length > 0) return "error";
    // return null;
  }

  render() {
    return (
      <div>
        <Form inline onSubmit={this.addItem}>
          <FormInputItem
            id="formControlsText"
            validationState={this.getValidationState()}
            type="text"
            label="New product: "
            placeholder="Enter product"
            inputRef={a => (this._inputElement = a)}
          />
          <FormInputItem
            id="formControlsText2"
            validationState={this.getValidationState()}
            type="text"
            placeholder="Enter quantity"
            inputRef={a => (this._inputElementQ = a)}
          />
          <Button type="submit">Add product</Button>
        </Form>

        <Recipes entries={this.state.products} delete={this.deleteItem} />

        <Form onSubmit={this.addRecipe}>
          <FormInputItem
            id="formControlsText3"
            validationState={this.getValidationState()}
            type="text"
            label="Text"
            placeholder="Enter recipe name"
            inputRef={a => (this._recipeName = a)}
          />
          <Button type="submit">Add Recipe</Button>
        </Form>

        <RecipeShow />
      </div>
    );
  }
}

export default Recipe;
