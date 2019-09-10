import React from "react";
import { connect } from "react-redux";

class ProtectedPage extends React.Component {
  render() {
    return (
      <div>
        <h1>You are Logged In!!!</h1>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => {
  return { isLoggedIn: user.isLoggedIn };
};

export default connect(mapStateToProps)(ProtectedPage);
