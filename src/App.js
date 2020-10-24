import React from "react";
// import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import withMUI from "./hoc/withMUI";
import withUser from "./hoc/withUser";
import withAuthentication from "./hoc/withAuthentication";
// import Home from "./components/Home";
const App = (props) => (
  <div>
    <h1>welcome to pstore</h1>
  </div>
);

export default withAuthentication(withMUI(withUser(App)));
