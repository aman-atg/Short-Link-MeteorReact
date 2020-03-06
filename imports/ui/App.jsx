import React from "react";
import { Route, Router, Redirect, browserHistory } from "react-router";
import { Meteor } from "meteor/meteor";

//
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Link from "./components/Link";
import NotFound from "./components/NotFound";

const App = () => {
  const onEnterPublicPage = () => {
    if (!!Meteor.userId()) <Redirect to="/links" />;
  };
  const onEnterPrivatePage = () => {
    if (!Meteor.userId()) <Redirect to="/" />;
  };
  const routes = (
    <Router history={browserHistory}>
      <Route path="/" component={Login} onEnter={onEnterPublicPage} />
      <Route path="/signup" component={SignUp} onEnter={onEnterPublicPage} />
      <Route path="/links" component={Link} onEnter={onEnterPrivatePage} />
      <Route path="*" component={NotFound} />
    </Router>
  );
  return routes;
};
export default App;
