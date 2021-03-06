import React from "react";
import "./Style.css";
import {AppBar as MAppBar} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import {connect} from "react-redux";
import LinkButton from "../linkbutton/LinkButton";
import {GET_ORDERS} from "../../store/action_types";

class AppBar extends React.Component {
  render() {
    return (
      <div>
        <MAppBar position={"fixed"} color={"primary"}>
          <Toolbar>
            <Grid container direction="row" justify={"space-between"} alignItems="center">
              <Typography>
                HELLO
              </Typography>
              <Grid item>
                <LinkButton color={"inherit"} text={"MENUS"} path={"/menus"}/>
                {
                  this.props.login
                    ?
                    <IconButton onClick={() => {
                      this.props.getOrder();
                    }} disabled={!this.props.order_count}>
                      <Badge color="secondary" badgeContent={this.props.order_count}>
                        <ShoppingCartIcon color={"action"}/>
                      </Badge>
                    </IconButton>
                    :
                    <LinkButton color={"inherit"} text={"LOGIN"} path={"/login"}/>
                }
              </Grid>
            </Grid>
          </Toolbar>
        </MAppBar>
      </div>
    );
  }
}

let ReduxAppBar = connect(state => {
  return {
    order_count: state.orders.length,
    login: state.login
  }
}, dispatch => {
  return {
    getOrder: () => { dispatch({type: GET_ORDERS}) }
  };
})(AppBar);

export default ReduxAppBar;
