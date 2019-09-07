import React from "react";
import { connect } from "react-redux";
import { logOut } from "../actions";

import { Link } from "react-router-dom";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/HomeRounded";

//STYLES
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    color: "Secondary"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

// Functional component
const MenuBar = props => {
  // Styles
  const classes = useStyles();

  const AdapterLink = React.forwardRef((props, ref) => (
    <Link innerRef={ref} {...props} />
  ));

  // Renders Login button
  const renderLoginButton = () => {
    if (!props.isLoggedIn) {
      return (
        <Button color="inherit" component={AdapterLink} to="/login">
          Login
        </Button>
      );
    } else {
      return (
        <Button color="inherit" onClick={logout}>
          Logout
        </Button>
      );
    }
  };

  // Logout Action
  const logout = () => {
    props.logOut();
  };

  // Render Content Function
  const renderMenuBar = () => {
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              component={AdapterLink}
              to="/"
            >
              <HomeIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Simple Login Page
            </Typography>
            {renderLoginButton()}
          </Toolbar>
        </AppBar>
      </div>
    );
  };

  return <div>{renderMenuBar()}</div>;
};

const mapStateToProps = state => {
  return { isLoggedIn: state.user.isLoggedIn };
};

export default connect(
  mapStateToProps,
  { logOut }
)(MenuBar);
