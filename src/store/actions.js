import axios from "axios";

import {
  GET_MENUS_FAILED,
  GET_MENUS_STARTED,
  GET_MENUS_SUCCESS,
  LOGIN_FAILED,
  LOGIN_STARTED,
  LOGIN_SUCCESS
} from "./action_types";
import {GET_MENUS_URL, LOGIN_URL} from "../constants/routes";

export const getMenus = () => {
  return dispath => {
    dispath({type: GET_MENUS_STARTED});
    axios.get(GET_MENUS_URL).then(res => {
      dispath({type: GET_MENUS_SUCCESS, menus: res.data});
    }).catch(err => {
      dispath({type: GET_MENUS_FAILED, msg: err.message});
    })
  }
}

export const login = (phone, password) => {
  return dispatch => {
    dispatch({type: LOGIN_STARTED});
    axios.get(LOGIN_URL).then(res => {
      console.log(res.data);
      dispatch({type: LOGIN_SUCCESS, payload: res.data});
    }).catch(err => {
      dispatch({type: LOGIN_FAILED, msg: err.message});
    })
  }
}
