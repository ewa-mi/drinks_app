import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home.js";
import Explore from "./Explore.js";
import NavBar from "./NavBar.js";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/explore" component={Explore} />
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
