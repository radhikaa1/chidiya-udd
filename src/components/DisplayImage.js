import { Avatar } from "material-ui";
import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  large: {
    width: 500,
    height: 500,
    borderRadius: 5,
  },
});
class DisplayImage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1>Display image here</h1>
        <Avatar alt="R" src="/images/01.jpg" style={{ width: 200, height: 200 }} />
      </div>
    );
  }
}

export default withStyles(styles)(DisplayImage);
