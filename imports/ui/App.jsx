import React from "react";
import { Route, Router, browserHistory } from "react-router";

//
import SignUp from "./components/SignUp";
import Link from "./components/Link";

const App = () => {
  const routes = (
    <Router history={browserHistory}>
      <Route />
    </Router>
  );
  return <Link />;
};
export default App;
