import React from "react";
import LandingPage from "./containers/LandingPage";
import MyRecipe from "../src/containers/MyRecipe";
import { Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/myrecipes" component={MyRecipe} />
      </Switch>
    </div>
  );
}
