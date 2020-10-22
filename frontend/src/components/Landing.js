import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//import loginUser from "../actions/userAction";
import { loginUser } from "../actions/authActions";
class Landing extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      emailErr: "",
      passwordErr: "",
      formIsValid: "",
      errors: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  // changing local state of email  and password according to user input
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  validateUser(name) {
    if (!name) {
      this.isEmailValid();
      this.isPasswordValid();
      return;
    }
    switch (name) {
      case "email":
        this.isEmailValid();
        break;
      case "password":
        this.isPasswordValid();
        break;
    }
  }

  // Validating Email
  isEmailValid() {
    let emailError = "";
    let formValid = true;
    const { email } = this.state;
    if (email.length === 0) {
      emailError = "Email is required";
      formValid = false;
    } else {
      const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!emailRegex.test(email)) {
        emailError = "Please enter valid email";
        formValid = false;
      }
    }
    this.setState({
      emailErr: emailError,
      formIsValid: formValid,
    });
  }
  // validating password
  isPasswordValid() {
    let passwordErr = "";
    let formValid = true;
    const { password } = this.state;
    if (password.length === 0) {
      passwordErr = "Password is required";
      formValid = false;
    } else {
      const pwdRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/;
      if (!pwdRegex.test(password)) {
        passwordErr = "Password should be between 8-16 characters";
        formValid = false;
      }
    }
    this.setState({
      passwordErr: passwordErr,
      formIsValid: formValid,
    });
  }

  //Validating at input level
  handleBlur(e) {
    const { name, value } = e.target;
    this.validateUser(name);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password, formIsValid } = this.state;

    const userData = {
      email: email,
      password: password,
    };
    //Validating at Signin button level
    this.validateUser();
    if (formIsValid) {
      this.props.loginUser(userData);
    }
  }

  render() {
    const { emailErr, passwordErr, errors } = this.state;
    return (
      <div className="landing_container container ">
        <h3 className="">Member Log in</h3>

        <form
          className="landing_form  "
          onSubmit={this.handleSubmit.bind(this)}
          noValidate
        >
          <span
            className={
              errors.emailNotExist || errors.pwdIncorrect
                ? "text-danger"
                : "noErr"
            }
          >
            Incorrect Email or Password
          </span>
          <div className="landing_form-inputContainer">
            <div>
              <i className="fas fa-envelope" />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange.bind(this)}
                onBlur={this.handleBlur.bind(this)}
              />
            </div>
          </div>
          <span className={emailErr && "text-danger errorText"}>
            {emailErr}
          </span>
          <div className="landing_form-inputContainer">
            <div>
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange.bind(this)}
                onBlur={this.handleBlur.bind(this)}
              />
            </div>
          </div>
          <span className={passwordErr && "text-danger errorText"}>
            {passwordErr}
          </span>
          <div className="btn">
            <button type="submit">Sign in</button>
          </div>
        </form>
      </div>
    );
  }
}

Landing.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { loginUser })(Landing);
