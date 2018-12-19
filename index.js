import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Route, Link, BrowserRouter } from "react-router-dom";
import RecipeTest from "./Recipe";
import RecipeShowTest from "./RecipeShow";
import CurrentRecipe from './CurrentRecipe'
import {
  Nav,
  Navbar,
  NavDropdown,
  NavItem,
  MenuItem,
  Tabs,
  ButtonToolbar,
  Button,
  Table,
  ButtonGroup,
  Row,
  Col,
  Grid,
  Panel,
  FormGroup,
  FormControl
} from "react-bootstrap";

const Home = () => (
  <div>
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Home</Link>
        </Navbar.Brand>
      </Navbar.Header>
      {/* <Navbar.Collapse> */}
      <Nav>
        <NavItem eventKey={1}>
          <Link to="/recipe">Add Recipe</Link>
        </NavItem>
        <NavItem eventKey={2}>
          <Link to="/show">Show Recipes</Link>
        </NavItem>
      </Nav>
      {/* </Navbar.Collapse> */}
    </Navbar>
  </div>
);
const Recipe = () => (
  <div>
    <RecipeTest />
  </div>
);
const RecipeShow = () => (
  <div>
    <RecipeShowTest />
  </div>
);

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/" component={Home} />
      <Route path="/recipe" component={Recipe} />
      <Route path="/show" component={RecipeShow} />
      <Route path="/detail/:id" component={CurrentRecipe}/>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
