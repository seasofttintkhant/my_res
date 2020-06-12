import React from "react";
import {connect} from "react-redux";
import {UPDATE_ORDER} from "../../store/action_types";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CardActions from "@material-ui/core/CardActions";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

class MenuItem extends React.Component{
  state = {
    count: 0
  }

  change = (menu, type) => {
    if(type === "add"){
      this.setState({
        count: parseInt(this.state.count)+1
      }, () => {
        this.props.update_order(menu, parseInt(this.state.count));
      });
    }else{
      if(this.state.count > 0){
        this.setState({
          count: parseInt(this.state.count)-1
        }, () => {
          this.props.update_order(menu, parseInt(this.state.count));
        });
      }
    }
  }

  render() {
    return (
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <Card>
          <CardMedia component="img" image={"https://i.ibb.co/8cgjVX7/curry.png"} title={"CURRY"} height="160"/>
          <Box className={"background-theme-blue"}>
            <CardContent>
              <Grid container justify={"space-between"} alignItems={"center"}>
                <Typography variant="h5" component="h2">{this.props.item.name}</Typography>
                <Badge color="primary" badgeContent={this.state.count}>
                  <ShoppingCartIcon color={"action"}/>
                </Badge>
              </Grid>
            </CardContent>
            <Divider className={"background-theme-hr"}/>
            <CardActions>
              <Grid container justify={"space-between"} alignItems={"center"} wrap={"nowrap"}>
                <Grid item container alignItems={"center"} className={"width-auto"}>
                  <AttachMoneyIcon/>
                  <Typography variant={"h4"} component={"h5"}>{this.props.item.price}</Typography>
                </Grid>
                <Grid item container className={"width-auto"}>
                  <Box>
                    <Button variant="contained" size={"small"} color="primary" onClick={()=>{
                      this.change(this.props.item, "add");
                    }}>+</Button>
                  </Box>
                  <Box ml={1}>
                    <Button variant="contained" size={"small"} color="secondary" onClick={()=>{
                      this.change(this.props.item, "minus");
                    }}>-</Button>
                  </Box>
                </Grid>
              </Grid>
            </CardActions>
          </Box>
        </Card>
      </Grid>
      // <div className={"menu"}>
      //   <div>{this.props.item.name}</div>
      //   <div>{this.props.item.price}</div>
      //   <div><span>{this.state.count}</span></div>
      //   <div>
      //     <button onClick={()=>{
      //       this.change(this.props.item, "add");
      //     }}>+</button>
      //     <button onClick={()=>{
      //       this.change(this.props.item, "minus");
      //     }}>-</button>
      //   </div>
      // </div>
    );
  }
}

let ReduxMenuItem = connect(state => {
  return {};
}, dispatch => {
  return {
    update_order: (menu, count) => {
      dispatch({type: UPDATE_ORDER, payload: {menu, count}});
    }
  };
})(MenuItem);

export default ReduxMenuItem;
