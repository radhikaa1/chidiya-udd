import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import withMUI from "./hoc/withMUI";
import withUser from "./hoc/withUser";
import withAuthentication from "./hoc/withAuthentication";

import DisplayImage from "./components/DisplayImage";
import Home from "./components/Home";
import { DISPLAYIMAGE } from "./constants/routes";
const App = (props) => (
  <div>
    <Router>
      <Route path="/" exact render={(props) => <Home {...props} />} />
      <Route path={DISPLAYIMAGE} exact render={(props) => <DisplayImage {...props} />} />
    </Router>
  </div>
);

export default withAuthentication(withMUI(withUser(App)));
