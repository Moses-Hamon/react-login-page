import React from "react";

import MenuBar from "./MenuBar";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import LoggedIn from "./LoggedIn";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Grid from "@material-ui/core/Grid";

const App = () => {
  return (
    <Router>
      <MenuBar />
      <Grid container spacing={3}>
        <Grid item xs={4} />
        <Grid item xs={3}>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/loggedIn" component={LoggedIn} />
        </Grid>
        <Grid item xs={3} />
      </Grid>
    </Router>
  );
};

export default App;
