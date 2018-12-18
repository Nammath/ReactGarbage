import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter } from 'react-router-dom'
import RecipeTest from './Recipe'
import RecipeShowTest from './RecipeShow'

const Home = () => (
    <div>
        <Link to="/">Home</Link>
        <Link to="/recipe">Add Recipy</Link>
        <Link to="/show">Show Recipes</Link>
    </div>
)
const Recipe = () => (
    <div>
        <RecipeTest></RecipeTest>
    </div>
)
const RecipeShow =() => (
    <div>
        <RecipeShowTest></RecipeShowTest>
    </div>
)

ReactDOM.render((
    <BrowserRouter> 
        <div>
            <Route path='/' component = {Home}></Route>
            <Route path = '/recipe' component={Recipe}></Route>
            <Route path = '/show' component={RecipeShow}></Route>
        </div>
    </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
