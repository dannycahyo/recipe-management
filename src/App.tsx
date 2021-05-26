import React, { Suspense, lazy } from "react";
import { Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import { Switch, Route } from "react-router-dom";
import loadingImg from "./assets/undraw_season_change_f99v.svg";

const LandingPage = lazy(() => import("./containers/LandingPage"));
const MyRecipe = lazy(() => import("../src/containers/MyRecipe"));

export default function App() {
  return (
    <div>
      <Suspense
        fallback={
          <Grid justifyContent="center" alignItems="center">
            <GridItem colStart={2} colEnd={5} p="12">
              <Heading
                size="xl"
                textColor="pink.300"
                textAlign="center"
                mb="12"
              >
                Loading, Please Wait For A While
              </Heading>
              <Image alt="Not Found" src={loadingImg} h="370" w="475" />
            </GridItem>
          </Grid>
        }
      >
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/myrecipes" component={MyRecipe} />
        </Switch>
      </Suspense>
    </div>
  );
}
