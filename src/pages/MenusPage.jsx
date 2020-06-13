import React from "react";
import AppBar from "../components/appbar/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Menu from "../components/menu/Menu";
import OrderModal from "../components/modal/OrderModal";
import "../App.css";

class MenusPage extends React.Component{
  render() {
    return (
      <Container maxWidth={false} >
        <AppBar/>
        <Toolbar/>
        <Box mt={1}>
          <Menu/>
          <OrderModal/>
        </Box>
      </Container>
    );
  }
}

export default MenusPage;
