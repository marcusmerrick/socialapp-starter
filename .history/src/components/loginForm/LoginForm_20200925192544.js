import React from "react";
import Spinner from "react-spinkit";
import ReCAPTCHA from "react-google-recaptcha";
import { withAsyncAction } from "../../redux/HOCs";
import "./LoginForm.css";


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleLogin = (e) => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <div className="LoginForm">
        <h3>Login</h3>

        <form id="login-form" onSubmit={this.handleLogin}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={this.handleChange}
          />
          <br />
          <button type="submit" disabled={loading}>
            Login
          </button>
        </form>
        <ReCAPTCHA 
          sitekey="6LcniNAZAAAAAFTxaLpKdtfKDA3wUiA1tDjXg1lB"
          size="invisible"
          ref={}
        />
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
}

export default withAsyncAction("auth", "login")(LoginForm);
