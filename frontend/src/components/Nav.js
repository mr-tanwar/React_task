import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

class Nav extends React.Component {
  constructor() {
    super();
  }
  handleClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    return (
      <nav className="nav_container">
        <h4>Navigation Bar</h4>
        {this.props.auth.isAuthenticated && (
          <button
            className="btn-success"
            onClick={this.handleClick.bind(this)}
          >
            Logout
          </button>
        )}
      </nav>
    );
  }
}

Nav.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Nav);
