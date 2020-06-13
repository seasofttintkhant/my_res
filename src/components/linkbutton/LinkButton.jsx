import React from "react";

import { withRouter } from "react-router";
import Button from "@material-ui/core/Button";

function LinkButton(props) {
  let {history, staticContext, ...new_props} = props;
  let link_button = <Button {...new_props} onClick={() => history.push(props.path)}>{props.text}</Button>
  if(props.children){
    link_button = <Button {...new_props} onClick={() => history.push(props.path)}>{props.children}</Button>
  }
  return link_button;
}

export default withRouter(LinkButton);
