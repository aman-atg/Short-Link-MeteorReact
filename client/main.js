import { Meteor } from "meteor/meteor";
import React from "react";
import ReactDOM from "react-dom";
import { Tracker } from "meteor/tracker";
import { Session } from "meteor/session";

//
import App, { onAuthChange } from "../imports/ui/App";
import "../startup/simpl-schema-config";
Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
  //!! DEBUG
  //console.log("isAuthenticated :", isAuthenticated);
});

Meteor.startup(() => {
  Session.set("showVisible", true);
  ReactDOM.render(<App />, document.getElementById("app"));
});
