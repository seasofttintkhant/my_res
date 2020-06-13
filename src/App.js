import React from 'react';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import HomePage from "./pages/HomePage";
import MenusPage from "./pages/MenusPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <CssBaseline/>
      <Switch>
        <Route exact path={"/"}><HomePage/></Route>
        <Route exact path={"/menus"}><MenusPage/></Route>
        <Route exact path={"/login"}><LoginPage/></Route>
      </Switch>
    </Router>
  );
}

export default App;
