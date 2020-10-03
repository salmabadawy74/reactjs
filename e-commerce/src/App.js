import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../src/component/Navbar";
import ProductList from "../src/component/ProductList";
import { Switch, Route } from "react-router-dom";
import Modal from "../src/component/Modal";

import Detail from "../src/component/Detail";

import Cart from "../src/component/Cart/Cart";
import Default from "../src/component/Default";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/detail" component={Detail} />
        <Route path="/Cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
