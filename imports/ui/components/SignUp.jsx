import React from "react";
import { Link } from "react-router";
class SignUp extends React.Component {
  state = {};
  onFormSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <h1>Join short Lnk</h1>
        <form onSubmit={this.onFormSubmit}>
          <input type="email" name="Email" id="" />
          <input type="password" name="Password" id="" />
          <button>Create Account</button>
        </form>

        <Link to="/">Already have an account</Link>
      </div>
    );
  }
}

export default SignUp;
