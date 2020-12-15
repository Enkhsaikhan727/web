import React from "react";
import { Grid, AppBar, Toolbar, Typography } from "@material-ui/core";
import "./TopBar.css";
import fetchModel from "../../lib/fetchModelData";

/**
 * Define TopBar, a React componment of CS142 project #5
 */
class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: this.props.view,
      version: ""
    };
  }
  render() {
    return (
      <AppBar className="cs142-topbar-appBar" position="absolute">
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Typography variant="h5" color="inherit">
              Enkhsaikhan
            </Typography>
            <Typography variant="body1">
            </Typography>
            <Typography variant="h5">{this.state.view}</Typography>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopBar;