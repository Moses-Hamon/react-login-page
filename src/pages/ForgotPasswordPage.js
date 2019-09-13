import React from "react";
import Button from "@material/react-button";
import "@material/react-button/dist/button.css";
import TextField, { HelperText, Input } from "@material/react-text-field";
import "@material/react-text-field/dist/text-field.css";
import { connect } from "react-redux";

import { updateUsername } from "../actions";
import "./ForgotPasswordPage.css";

const ForgotPasswordPage = props => {
  return (
    <div className="ForgotPasswordPage__div">
      <br />
      <TextField
        label="Email Address"
        helperText={<HelperText>Please enter your email address</HelperText>}
      >
        <Input
          inputType="email"
          value={props.email}
          onChange={e => props.updateUsername(e.target.value)}
        />
      </TextField>
      <Button raised>Send recovery email</Button>
    </div>
  );
};

const mapStateToProps = ({ user }) => {
  return { email: user.userEmail };
};

export default connect(
  mapStateToProps,
  { updateUsername }
)(ForgotPasswordPage);
