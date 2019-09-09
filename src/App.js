import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import MenuBar from "./components/MenuBar";
import LoginScreen from "./components/LoginScreen";
import HomeScreen from "./components/HomeScreen";
import ProtectedPage from "./components/ProtectedPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <MenuBar />
        <Route path="/" exact component={HomeScreen} />
        <Route path="/login" exact component={LoginScreen} />
      </BrowserRouter>
    </div>
  );
};

export default App;
