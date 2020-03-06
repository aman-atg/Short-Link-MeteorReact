import { Meteor } from "meteor/meteor";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Tracker } from "meteor/tracker";
//
import App from "../imports/ui/App";
import { browserHistory } from "react-router";
const unauthPages = ["/", "/signup"],
  authPages = ["/links"];

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  //!! DEBUG
  //console.log("isAuthenticated :", isAuthenticated);
  const { pathname } = browserHistory.getCurrentLocation();
  const isAuthPage = authPages.includes(pathname);
  const isUnauthPage = unauthPages.includes(pathname);

  //if logged in && on unauthPages then redirect to links
  if (isAuthenticated && isUnauthPage) browserHistory.push("/links");
  //if not logged in && on authpage then redirect to login
  else if (!isAuthenticated && isAuthPage) browserHistory.push("/");
});

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById("app"));
});
