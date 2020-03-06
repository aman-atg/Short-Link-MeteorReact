import React from "react";
import { Link } from "react-router";
import { Accounts } from "meteor/accounts-base";

class SignUp extends React.Component {
  state = {
    error: ""
  };
  onFormSubmit = e => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;

    Accounts.createUser({ email, password }, err => {
      console.log("Signup callback ", err);
      if (err !== undefined) {
        this.setState({ error: err.reason });
      }
    });

    // this.setState({ error: "" });
  };
  render() {
    let { error } = this.state;
    return (
      <div>
        {error ? <p>{error}</p> : undefined}
        <h1>Join short Lnk</h1>
        <form onSubmit={this.onFormSubmit}>
          <input type="email" name="email" placeholder="abc@example.com" />
          <input
            type="password"
            name="password"
            placeholder="myStrongPassword"
          />
          <button>Create Account</button>
        </form>

        <Link to="/">Already have an account</Link>
      </div>
    );
  }
}

export default SignUp;
