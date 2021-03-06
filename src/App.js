import React, { useState } from "react";
import * as style from "./style/appStyle";
import "./style/index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppContext } from "./context/AppContext";
import RecipeInformation from './components/RecipeInformation';
import Home from "./components/home/Home";
import Navigation from "./components/Navigation";
import SearchRecipe from "./components/SearchRecipe";
import FavouriteRecipe from './components/FavouriteRecipe'
const App = () => {
  const [topRecipe, setTopRecipe] = useState([]);
  const [recipeInfo,setRecipeInfo] = useState({});
  const[favouriteRecipe,setFavouriteRecipe] = useState([]);

  return (
    <Router>
      <AppContext.Provider
        value={{
          favouriteRecipe,
          setFavouriteRecipe,
          topRecipe,
          setTopRecipe,
          recipeInfo,
          setRecipeInfo,
        }}
      >
        <style.AppStyle>
          <Navigation />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/recipe/:id" component={RecipeInformation} />
            <Route path="/searchRecipe" component={SearchRecipe}/>
            <Route path="/favouriteRecipe" component={FavouriteRecipe}/>
          </Switch>
        </style.AppStyle>
      </AppContext.Provider>
    </Router>
  );
};

export default App;
