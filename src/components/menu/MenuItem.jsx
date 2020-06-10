import React from "react";
import {connect} from "react-redux";
import {UPDATE_ORDER} from "../../store/action_types";

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
      <div className={"menu"}>
        <div>{this.props.item.name}</div>
        <div>{this.props.item.price}</div>
        <div><span>{this.state.count}</span></div>
        <div>
          <button onClick={()=>{
            this.change(this.props.item, "add");
          }}>+</button>
          <button onClick={()=>{
            this.change(this.props.item, "minus");
          }}>-</button>
        </div>
      </div>
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
