import {createStore, compose, applyMiddleware} from "redux";
import thunk from 'redux-thunk';

import TABLES from "../constants/tables";
import {
  CHECK_LOGIN,
  CLOSE_MODAL,
  GET_MENUS_FAILED,
  GET_MENUS_STARTED, GET_MENUS_SUCCESS,
  GET_ORDERS,
  GET_TABLES, LOGIN_FAILED, LOGIN_STARTED, LOGIN_SUCCESS,
  OPEN_MODAL,
  SET_TABLE,
  UPDATE_ORDER
} from "./action_types";

const init_state = {
  menus: [],
  orders: [],
  table: null,
  order_modal: false,
  loading: {
    menus: false,
    login: false
  },
  login: false,
  token: null
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let orders;

let store = createStore(function (state = init_state, action) {
  switch (action.type) {
    case GET_TABLES:
      return {...state, tables: TABLES};

    case GET_MENUS_STARTED:
      return {...state, loading: {...state.loading, menus: true}};

    case GET_MENUS_SUCCESS:
      return {...state, menus: action.menus, loading: {...state.loading, menus: false}};

    case GET_MENUS_FAILED:
      return {...state, menus: [], loading: {...state.loading, menus: false}};

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

    case CHECK_LOGIN:
      if(localStorage.getItem("token")){
        return {...state, loading: {...state.loading, login: false}, login: true, token: localStorage.getItem("token")};
      }
      return {...state, loading: {...state.loading, login: false}, login: false, token: null};

    case LOGIN_STARTED:
      localStorage.removeItem('token');
      return {...state, loading: {...state.loading, login: true}, login: false, token: null}

    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {...state, loading: {...state.loading, login: false}, login: true, token: action.payload.token};

    case LOGIN_FAILED:
      localStorage.setItem('token', null);
      return {...state, loading: {...state.loading, login: false}, login: false, token: null};

    default:
      return state;
  }
}, composeEnhancer(applyMiddleware(thunk)));

store.dispatch({type: GET_TABLES});
store.dispatch({type: CHECK_LOGIN});
export default store;
