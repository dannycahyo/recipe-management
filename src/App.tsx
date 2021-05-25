import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

const LandingPage = lazy(() => import("./containers/LandingPage"));
const MyRecipe = lazy(() => import("../src/containers/MyRecipe"));

export default function App() {
  return (
    <div>
      <Suspense fallback={<h1>Loading, Please wait</h1>}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/myrecipes" component={MyRecipe} />
        </Switch>
      </Suspense>
    </div>
  );
}
