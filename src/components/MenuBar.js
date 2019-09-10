import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import "@material/react-top-app-bar/dist/top-app-bar.css";
import "@material/react-material-icon/dist/material-icon.css";

import TopAppBar, {
  TopAppBarFixedAdjust,
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle
} from "@material/react-top-app-bar";
import MaterialIcon from "@material/react-material-icon";

import { logOut } from "../actions";

const MenuBar = (props) => {
  console.log('Menubar props:', props );
  
  return (
    <div>
      <TopAppBar>
        <TopAppBarRow>
          <TopAppBarSection align="start">
            <TopAppBarIcon navIcon tabIndex={0}>
              <MaterialIcon
                hasRipple
                icon="home"
                onClick={() => <Redirect to="/" />}
              />
            </TopAppBarIcon>
            <TopAppBarTitle>Simple Login Page</TopAppBarTitle>
          </TopAppBarSection>
          <TopAppBarSection align="end" role="toolbar">
            <TopAppBarIcon actionItem tabIndex={0}>
              <Link to="/login">Login</Link>
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

export default connect(
  mapStateToProps,
  { logOut }
)(MenuBar);
