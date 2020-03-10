import React from "react";
// import { Accounts } from "meteor/accounts-base"; don't know why it's working even without it.
import PropTypes from "prop-types";
const PrivateHeader = props => {
  return (
    <div className="header">
      <div className="header__content">
        <h1 className="header__title">{props.title}</h1>
        <button
          className="button button--link-text"
          onClick={() => Accounts.logout()}
        >
          Logout
        </button>
      </div>
    </div>
  );
};
PrivateHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default PrivateHeader;
