import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import MenuBar from "./components/MenuBar";
import LoginScreen from "./pages/LoginScreen";
import HomeScreen from "./pages/HomeScreen";
import ProtectedPage from "./pages/ProtectedPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";




class App extends Component {
  
  PrivateRoute = ({ component: Component, isUserLoggedIn, ...rest } ) => {
    return (
      <Route
        {...rest}
        render={props => {
          return isUserLoggedIn ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }
        }
      />
    );
  }
 
  render() {
    return (
      <div>
        <BrowserRouter>
          <MenuBar />
          <div>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/login" exact component={LoginScreen} />
            <Route
              path="/ForgotPasswordPage"
              exact
              component={ForgotPasswordPage}
            />
            <this.PrivateRoute path="/ProtectedPage" component={ProtectedPage} isUserLoggedIn={this.props.isUserLoggedIn} />
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
