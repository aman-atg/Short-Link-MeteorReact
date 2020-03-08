import React, { Fragment } from "react";
// import { Accounts } from "meteor/accounts-base"; don't know why it's working even without it.
import PropTypes from "prop-types";
const PrivateHeader = props => {
  return (
    <Fragment>
      <h1>{props.title}</h1>
      <button onClick={() => Accounts.logout()}> Logout </button>
    </Fragment>
  );
};
PrivateHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default PrivateHeader;
