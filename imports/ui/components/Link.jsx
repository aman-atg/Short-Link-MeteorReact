import React from "react";
import { Accounts } from "meteor/accounts-base";
import { Meteor } from "meteor/meteor";
import LinkList from "./LinkList";
const Link = () => {
  const onLogout = () => {
    Accounts.logout();
  };
  const onFormSubmit = e => {
    e.preventDefault();
    const url = e.target.url.value.trim();
    Meteor.call("links.insert", url);
    e.target.url.value = "";
  };
  return (
    <div>
      <h1>Your links </h1>
      <LinkList />
      <button onClick={onLogout}> Logout </button>
      <hr />
      <form onSubmit={onFormSubmit}>
        <input type="text" name="url" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Link;
