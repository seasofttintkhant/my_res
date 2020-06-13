import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

import "../App.css"
import {login} from "../store/actions";

class LoginPage extends React.Component{

  phone = null;
  password = null;

  inputChanged = (event, type) => {
    if(type ===  "phone"){
      this.phone = event.target.value;
    }else{
      this.password = event.target.value;
    }
  }

  render() {
    return(
      <Grid container justify={"center"} alignItems={"center"} style={{minHeight: "100vh"}}>
        <Grid item>
          <Card>
            <CardContent>
              <Box pl={5} pr={5} pt={2} pb={2}>
                <Grid container direction={"column"} spacing={2}>
                  <Grid item>
                    <TextField label="Phone number" variant="outlined" className={"auth-text-box"} onChange={
                      (event) => this.inputChanged(event, "phone")
                    }/>
                  </Grid>
                  <Grid item>
                    <TextField label="Password" variant="outlined" type={"password"} className={"auth-text-box"} onChange={
                      (event) => this.inputChanged(event, "password")
                    }/>
                  </Grid>
                  <Grid item>
                    <Button variant={"contained"} color={"primary"} fullWidth size={"large"} onClick={() => this.props.login(this.phone, this.password)}>Login</Button>
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
  }
}

let ReduxLoginPage = connect(state => {
  return {
}
}, dispatch => {
  return {
    login: (phone, password) => {
      dispatch(login(phone, password));
    }
  }
})(LoginPage);

export default ReduxLoginPage;
