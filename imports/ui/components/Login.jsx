import React from "react";
import { Link } from "react-router";
import { Meteor } from "meteor/meteor";
class Login extends React.Component {
  state = {
    error: ""
  };

  onFormSubmit = e => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;

    Meteor.loginWithPassword({ email }, password, err => {
      console.log("Login callback ", err);
      if (err !== undefined) {
        this.setState({ error: err.reason });
      } else this.setState({ error: "" });
    });
  };
  render() {
    let { error } = this.state;
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1>Login </h1> {error ? <p>{error}</p> : undefined}
          <form
            className="boxed-view__form"
            noValidate
            onSubmit={this.onFormSubmit}
          >
            <input type="email" name="email" placeholder="abc@example.com" />
            <input
              type="password"
              name="password"
              placeholder="myStrongPassword"
            />
            <button className="button">Login</button>
            <Link to="/signup">Create an account</Link>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
