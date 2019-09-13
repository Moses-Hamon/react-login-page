import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";


import "@material/react-top-app-bar/dist/top-app-bar.css";
import "@material/react-material-icon/dist/material-icon.css";
import Button from "@material/react-button";
import "@material/react-button/dist/button.css";
import TopAppBar, {
  TopAppBarFixedAdjust,
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle
} from "@material/react-top-app-bar";
import MaterialIcon from "@material/react-material-icon";

import { logOut } from "../actions";

const MenuBar = props => {
  return (
    <div>
      <TopAppBar>
        <TopAppBarRow>
          <TopAppBarSection align="start">
            <TopAppBarIcon navIcon tabIndex={0}>
              <MaterialIcon
                hasRipple
                icon="home"
                onClick={() => props.history.push("/login") }
              />
            </TopAppBarIcon>
            <TopAppBarTitle>Simple Login Page</TopAppBarTitle>
          </TopAppBarSection>
          <TopAppBarSection align='start' role='toolbar'>
            <Button className="MenuBar__Button" raised onClick={() => props.history.push("/")}>Home</Button>
            <Button raised onClick={() => props.history.push("/login")}>Login</Button>
            <Button raised onClick={() => props.history.push("/ProtectedPage")}>Protected</Button>
            <Button raised onClick={() => props.history.push("/ForgotPasswordPage")}>Forgot Pass</Button>
          </TopAppBarSection>
          <TopAppBarSection align="end" role="toolbar">
            <TopAppBarIcon actionItem tabIndex={0}>
              {props.isLoggedIn ? (
                <Button raised onClick={() => props.logOut()}>Logout</Button>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </TopAppBarIcon>
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
      <TopAppBarFixedAdjust />
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  return { isLoggedIn: auth.isLoggedIn };
};

export default withRouter(connect(
  mapStateToProps,
  { logOut }
)(MenuBar));
