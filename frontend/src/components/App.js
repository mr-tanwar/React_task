import React, { Component } from "react";
import Footer from "./Footer";
import Landing from "./Landing";
import Nav from "./Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import { Provider } from "react-redux";
import store from "../store";
import PrivateRoute from "./private_routes/privateRoutes";
import jwt_decode from "jwt-decode";
import setAuthToken from "../util/setAuthToken";
import { setCurrentUser, logoutUser } from "../actions/authActions";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="grid_container">
            <header className="header">
              <Nav />
            </header>

            <main className="main">
              <Route path="/login" component={Landing} />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
            </main>
            <footer className="footer">
              <Footer />
            </footer>
          </div>
        </Router>
      </Provider>
    );
  }
}
