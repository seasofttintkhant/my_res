import React from "react";
import { connect } from "react-redux";
import { withStyles  } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import "./Style.css";
import "../../App.css";
import {getMenus} from "../../store/actions";
import MenuItem from "./MenuItem";

const useStyles = (theme) => ({
  width_auto: {
    width: "auto"
  }
});

class Menu extends React.Component {
  render() {
    return (
      <Box>
        {
          this.props.loading &&
            <div>LOADING</div>
        }
        <Grid container spacing={2}>
          {this.props.menus.map((item) => {
            return <MenuItem key={item.id} item={item}/>;
          })}
        </Grid>
      </Box>
    );
  }
}

let ReduxMenu = connect(state => {
  return {
    menus: state.menus,
    loading: state.loading.menus
  }
}, dispatch => {
  return {
    getMenus: dispatch(getMenus())
  };
})(Menu);

export default withStyles(useStyles)(ReduxMenu);
