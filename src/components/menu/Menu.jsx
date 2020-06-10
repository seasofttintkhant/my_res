import React from "react";
import { connect } from "react-redux";

import "./Style.css";

import MenuItem from "./MenuItem";
import {getMenus} from "../../store/actions";

class Menu extends React.Component {
  render() {
    return (
      <div className={"menus"}>
        {
          this.props.loading &&
            <div>LOADING</div>
        }
        {this.props.menus.map((item) => {
          return <MenuItem key={item.id} item={item}/>;
        })}
      </div>
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

export default ReduxMenu;
