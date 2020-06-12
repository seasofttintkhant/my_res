import React from 'react';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "./components/appbar/AppBar";
import "./App.css";

import Menu from "./components/menu/Menu";
import OrderModal from "./components/modal/OrderModal";

function App() {
  return (
    <div>
      <CssBaseline/>
      <AppBar/>
      <Toolbar/>
      <Container className="App" maxWidth={false} >
        <Menu/>
        <OrderModal/>
      </Container>
    </div>
  );
}

export default App;
