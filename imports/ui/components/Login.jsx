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
      }
    });
  };
  render() {
    let { error } = this.state;
    return (
      <div>
        {error ? <p>{error}</p> : undefined}

        <form noValidate onSubmit={this.onFormSubmit}>
          <input type="email" name="email" placeholder="abc@example.com" />
          <input
            type="password"
            name="password"
            placeholder="myStrongPassword"
          />
          <button>Login</button>
        </form>

        <Link to="/signup">Create an account.</Link>
      </div>
    );
  }
}

export default Login;
