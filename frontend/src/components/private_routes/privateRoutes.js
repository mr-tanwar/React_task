import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//Setting private route so that unauthorised user can't access Dashboard page
const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      auth.isAuthenticated === true ? ( // using isAuthenticated state to verify user
        <Component {...props} />
      ) : (
        <Redirect to="/login" /> // if user is not authorised it will be redirected to login page
      )
    }
  />
);
PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(PrivateRoute);
