import React from "react";
import { Route, Router, browserHistory } from "react-router";

//
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Link from "./components/Link";
import NotFound from "./components/NotFound";

const App = () => {
  const routes = (
    <Router history={browserHistory}>
      <Route path="/" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/links" component={Link} />
      <Route path="*" component={NotFound} />
    </Router>
  );
  return routes;
};
export default App;
