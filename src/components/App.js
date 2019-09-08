import React from "react";

import MenuBar from "./MenuBar";
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import LoggedIn from './LoggedIn';

import { BrowserRouter as Router, Route } from 'react-router-dom';



const App = () => {
  return (
    <Router>
      <MenuBar />
      <Route exact path="/" component={HomeScreen} />
      <Route  path="/login" component={LoginScreen} />
      <Route  path='/loggedIn' component={LoggedIn} />
    </Router>
  );
};

export default App;
