import React from "react";
import { Accounts } from "meteor/accounts-base";
const Link = () => {
  const onLogout = () => {
    Accounts.logout();
  };
  return (
    <div>
      <h1>your links </h1>
      <button onClick={onLogout}> Logout </button>
    </div>
  );
};

export default Link;
