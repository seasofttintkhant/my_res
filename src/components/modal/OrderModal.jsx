import React from "react";
import "./Style.css";
import {connect} from "react-redux";
import {CLOSE_MODAL} from "../../store/action_types";

class OrderModal extends React.Component{
  render() {
    let total = 0;
    return (
      <div className={this.props.open ? "modal" : "modal hide"}>
        <div className={"modal_box"}>
          <div className={"modal_content"}>
            <div className={"modal_header"}>
              <div>
                <h3>Your Orders</h3>
              </div>
              <div>
                <span className={"modal_close"} onClick={() => { this.props.closeModal() }}>&times;</span>
              </div>
            </div>
            <div className={"modal_body"}>
              <div className={"order_table"}>
                {
                  this.props.orders.length > 0 &&
                  this.props.orders.map(item => {
                    total += item.count * item.menu.price;
                    return (
                      <div key={item.menu.id} className={"order_row"}>
                        <div className={"order_cell"}>
                          {item.menu.name}
                        </div>
                        <div className={"order_cell"}>
                          <div className={"order_count"}>
                            {item.count}
                            &times;
                            {item.menu.price}
                          </div>
                          <div className={"order_price"}>
                            {item.count * item.menu.price}
                          </div>
                        </div>
                      </div>
                    );
                  })
                }
                <div className={"order_row"}>
                  <div className={"order_total"}>
                    {total}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

let ReduxOrderModal = connect(state => {
  return {
    orders: state.orders,
    open: state.order_modal
  }
}, dispatch => {
  return {
    closeModal: () => dispatch({type: CLOSE_MODAL})
  }
})(OrderModal);

export default ReduxOrderModal;
