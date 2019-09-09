import React from "react";
import { updateUsername } from "../actions";
import { logIn } from "../actions";

import { connect } from "react-redux";

import TextField, {Input} from "@material/react-text-field"
import '@material/react-text-field/dist/text-field.css';

class LoginScreen extends React.Component {

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

  
  render() {
    return (
      <div>
      <TextField label='Test' ><Input /></TextField>
      </div>
    );
  }
}
const mapStateToProps = ({ user }) => {
  return {
    username: user.username,
  };
};

export default connect(
  mapStateToProps,
  { updateUsername, logIn }
)(LoginScreen);
