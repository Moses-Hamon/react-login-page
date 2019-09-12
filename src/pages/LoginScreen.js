import React from "react";
import { Redirect, Link, withRouter } from "react-router-dom";
import Button from "@material/react-button";
import "@material/react-button/dist/button.css";
import "@material/react-text-field/dist/text-field.css";
import "./LoginScreen.css";
import TextField, { Input } from "@material/react-text-field";
import { connect } from "react-redux";

import { updateUsername } from "../actions";
import { logIn } from "../actions";

class LoginScreen extends React.Component {
  state = { password: ""};

  usernameHandler = event => {
    this.props.updateUsername(event.target.value);
  };

  submitHandler = () => {
    this.props.logIn({
      username: this.props.username,
      password: this.state.password
    });
    this.setState({ password: "" });
  };

  componentDidUpdate() {
    if (this.props.isUserLoggedIn === true) {
      this.props.history.push("/ProtectedPage");
    }
  }

  render() {
    return this.props.isUserLoggedIn ? (
      <div><h1>You Are already logged in!!</h1></div>
    ) : (
      <div className="LoginScreen__div">
        <TextField label="Email Address">
          <Input
            type="email"
            value={this.props.username}
            onChange={this.usernameHandler}
            id="email"
          />
        </TextField>
        <br />
        <TextField label="Password">
          <Input
            type="password"
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
            id="password"
          />
        </TextField>
        <Button onClick={this.submitHandler}>Submit</Button>
        <Button onClick={() => this.props.history.push("/ForgotPasswordPage")} children="Forgot Email" />
      </div>
    );
  }
}

const mapStateToProps = ({ user, auth }) => {
  return {
    username: user.userEmail,
    isUserLoggedIn: auth.isLoggedIn
  };
};

export default withRouter(connect(
  mapStateToProps,
  { updateUsername, logIn }
)(LoginScreen));
