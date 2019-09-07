import React from "react";
import { updateUsername, updatePassword } from "../actions";
import { logIn } from "../actions";

import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

class LoginScreen extends React.Component {
  styles = makeStyles(theme => ({
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    button: {
      margin: theme.spacing(1)
    }
  }));

  usernameHandler = event => {
    this.props.updateUsername(event.target.value);
  };

  passwordHandler = event => {
    this.props.updatePassword(event.target.value);
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.logIn(this.props.username, this.props.password);
  };

  renderLogin() {
    console.log(this.props.isLoggedIn);

    if (!this.props.isLoggedIn) {
      return (
        <div>
          <form autoComplete="off" className={this.styles.container} noValidate>
            <TextField
              id="outlined-name"
              label="Name"
              className={this.styles.textField}
              value={this.props.username}
              onChange={this.usernameHandler}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              onChange={this.passwordHandler}
              className={this.styles.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
            />
            <br />
            {this.props.loginMSG !== null ? (
              <label className='secondary'>{this.props.loginMSG}</label>
            ) : (
              <div></div>
            )}
            <br />
            <Button
              variant="contained"
              onClick={this.submitHandler}
              className={this.styles.button}
              color="primary"
            >
              Login
            </Button>
          </form>
        </div>
      );
    }
    return <div>You Are Logged In</div>;
  }

  render() {
    return <div>{this.renderLogin()}</div>;
  }
}
const mapStateToProps = ({ user }) => {
  return {
    username: user.username,
    password: user.password,
    isLoggedIn: user.isLoggedIn,
    loginMSG: user.loginMSG
  };
};

export default connect(
  mapStateToProps,
  { updateUsername, updatePassword, logIn }
)(LoginScreen);
