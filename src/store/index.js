import {createStore} from "redux";

import TABLES from "../constants/tables";
import MENUS from "../constants/menus";
import {CLOSE_MODAL, GET_MENUS, GET_ORDERS, GET_TABLES, OPEN_MODAL, SET_TABLE, UPDATE_ORDER} from "./action_types";

let init_state = {
  orders: [],
  table: null,
  order_modal: false
};

let orders;

let store = createStore(function (state = init_state, action) {
  switch (action.type) {
    case GET_TABLES:
      return {...state, tables: TABLES};

    case GET_MENUS:
      return {...state, menus: MENUS};

    case UPDATE_ORDER:
      let payload = action.payload;
      orders = state.orders;

      let found = false;
      orders.map(item => {
        if(item.menu.id === payload.menu.id){
          item.count = payload.count;
          found = true;
        }
        return item;
      })
      if(!found){
        orders.push(payload);
      }

      orders = orders.filter(item => {
        return item.count > 0;
      });
      return {...state, orders};

    case GET_ORDERS:
      orders = state.orders;
      orders.map(order => {
        let menu = state.menus.find(item => {
          return item.id === order.id;
        });
        if(menu){
          order.total = parseInt(menu.price) * order.count;
        }
        return order;
      });
      return {...state, orders, order_modal: true};

    case SET_TABLE:
      return {...state, table: action.id};

    case OPEN_MODAL:
      return {...state, order_modal: true};

    case CLOSE_MODAL:
      return {...state, order_modal: false};

    default:
      return state;
  }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.dispatch({type: GET_MENUS});
store.dispatch({type: GET_TABLES});

export default store;
