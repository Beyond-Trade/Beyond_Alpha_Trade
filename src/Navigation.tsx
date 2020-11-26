import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import AboutUs from "./screens/AboutUs";
import ContactUs from "./screens/ContactUs";
import Disclaimer from "./screens/Desclaimer";
import Footer from "./components/organisms/Footer";
import Loan from "./screens/Loan";
import Market from "./screens/Market";
import Navbar from "./components/organisms/Navbar";
import NewsAndBlog from "./screens/NewsAndBlog";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import React from "react";
import Stake from "./screens/Stake";
import Support from "./screens/Support";
import TermsAndConditions from "./screens/TermsAndConditions";
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
        <Route path="/privacy_policy">
          <PrivacyPolicy />
        </Route>
        <Route path="/terms_and_conditions">
          <TermsAndConditions />
        </Route>
        <Route path="/disclaimer">
          <Disclaimer />
        </Route>

        <Route path="/about_us">
          <AboutUs />
        </Route>
        <Route path="/contact_us">
          <ContactUs />
        </Route>
        <Route path="/support">
          <Support />
        </Route>
        <Route path="/news_blog">
          <NewsAndBlog />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default Navigation;
