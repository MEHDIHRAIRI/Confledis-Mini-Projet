import React, { Fragment, useEffect } from "react";
import "./App.css";
import DataTable from "./components/Datatable";
import ProductForm from "./components/ProductForm";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Fragment>
          <Switch>
            <Route path="/admin" component={DataTable} />
            <Route path="/client" component={ProductForm} />
          </Switch>
        </Fragment>
      </Router>
    </>
  );
}

export default App;
