import React from "react";
import { connect } from "react-redux";

import "./Style.css";

import MenuItem from "./MenuItem";

class Menu extends React.Component {
  render() {
    return (
      <div className={"menus"}>
        {this.props.menus.map((item) => {
          return <MenuItem key={item.id} item={item}/>;
        })}
      </div>
    );
  }
}

let ReduxMenu = connect(state => {
  return {
    menus: state.menus
  }
}, dispatch => {
  return {

  };
})(Menu);

export default ReduxMenu;
