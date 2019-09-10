import React from "react";
import Button from '@material/react-button';
import '@material/react-button/dist/button.css';
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
    this.props.logIn({ username: this.props.username, password: this.state.password} );
  };

  render() {
    return (
      <div className="LoginScreen__div">
        <TextField label="Email Address" >
          <Input type='email' value={this.props.username} onChange={this.usernameHandler} id='email' />
        </TextField>
        <br/>
        <TextField label="Password" >
          <Input type='password' value={this.state.password} onChange={e => this.setState({ password: e.target.value})} id='password'  />
        </TextField>
        <br/>
        <Button onClick={this.submitHandler}>Submit</Button>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return {
    username: user.userEmail
  };
};

export default connect(
  mapStateToProps,
  { updateUsername, logIn }
)(LoginScreen);
