import React from 'react';
import "./App.css";

import Menu from "./components/menu/Menu";
import Table from "./components/table/Table";
import OrderModal from "./components/modal/OrderModal";

function App() {
  return (
    <div className="App">
      <Menu/>
      <Table/>
      <OrderModal/>
    </div>
  );
}

export default App;
