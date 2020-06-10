import React from "react";
import {connect} from "react-redux";
import {SET_TABLE} from "../../store/action_types";

class TableItem extends React.Component{
  render() {
    return (
      <div className={this.props.table === this.props.item.id ? "table active" : "table"} onClick={() => { this.props.setTable(this.props.item.id) }}>{this.props.item.number}</div>
    );
  }
}

let ReduxTableItem = connect(state => {
  return {
    table: state.table
  }
}, dispatch => {
  return {
    setTable: (id) => { dispatch({type: SET_TABLE, id}) }
  }
})(TableItem);

export default ReduxTableItem;
