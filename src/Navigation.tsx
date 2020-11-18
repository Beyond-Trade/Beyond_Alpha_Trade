import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/organisms/Navbar";
import Loan from "./screens/Loan";
import Market from "./screens/Market";
import Stake from "./screens/Stake";
import Trade from "./screens/Trade";
import Wallet from "./screens/Wallet";

function Navigation() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Wallet />
        </Route>
        <Route path="/stake">
          <Stake />
        </Route>
        <Route path="/market">
          <Market />
        </Route>
        <Route path="/trade">
          <Trade />
        </Route>
        <Route path="/loan">
          <Loan />
        </Route>
      </Switch>
    </Router>
  );
}

export default Navigation;
