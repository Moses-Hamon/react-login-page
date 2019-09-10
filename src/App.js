import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import MenuBar from "./components/MenuBar";
import LoginScreen from "./pages/LoginScreen";
import HomeScreen from "./pages/HomeScreen";
import ProtectedPage from "./pages/ProtectedPage";

class App extends Component {
  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <MenuBar />
          <div>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/login" exact component={LoginScreen} />
            <Route path="/ProtectedPage" exact component={ProtectedPage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
const mapStateToProps = ({ auth }) => {
  return { isUserLoggedIn: auth.isLoggedIn };
};

export default connect(mapStateToProps)(App);
