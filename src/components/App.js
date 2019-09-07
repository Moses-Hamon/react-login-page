import React from "react";

import MenuBar from "./MenuBar";
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <MenuBar />
      <Route exact path="/" component={HomeScreen} />
      <Route path="/login" component={LoginScreen} />
    </Router>
  );
};

export default App;
