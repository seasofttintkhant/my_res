import axios from "axios";

import {GET_MENUS_FAILED, GET_MENUS_STARTED, GET_MENUS_SUCCESS} from "./action_types";
import {GET_MENUS_URL} from "../constants/routes";

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
