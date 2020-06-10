import React from "react";
import { connect } from "react-redux";

import "./Style.css";

import TableItem from "./TableItem";
import {GET_ORDERS} from "../../store/action_types";

class Table extends React.Component {
  render() {
    return (
      <div>
        <div className={"tables"}>
          {this.props.tables.map((item) => {
            return <TableItem key={item.id} item={item}/>;
          })}
        </div>
        <div>
          <button onClick={() => {
            this.props.getOrder();
          }} disabled={this.props.order_count > 0 ? false : true}>Check your orders {this.props.order_count}</button>
        </div>
      </div>
    );
  }
}

let ReduxTable = connect(state => {
  return {
    tables: state.tables,
    order_count: state.orders.length
  }
}, dispatch => {
  return {
    getOrder: () => { dispatch({type: GET_ORDERS}) }
  }
})(Table);

export default ReduxTable;
