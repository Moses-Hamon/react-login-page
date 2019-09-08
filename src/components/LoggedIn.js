import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class LoggedIn extends React.Component {
  render() {
    if (!this.props.isLoggedIn) return <Redirect to="/" />;

    return (
      <div>
        <h1>You are Logged In!!!</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { isLoggedIn: state.user.isLoggedIn };
};

export default connect(mapStateToProps)(LoggedIn);
