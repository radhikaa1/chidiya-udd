import React from "react";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router";
import { DISPLAYIMAGE } from "../constants/routes";
class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>welcome to Chidiya udd</h1>
        <Button onClick={() => this.props.history.push(DISPLAYIMAGE)}>Next </Button>
      </div>
    );
  }
}

export default withRouter(Home);
