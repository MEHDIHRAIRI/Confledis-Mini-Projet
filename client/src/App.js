import React, { Fragment, useEffect } from "react";
import "./App.css";
import DataTable from "./components/Datatable";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Fragment>
          <Switch>
            <Route path="/admin" component={DataTable} />
          </Switch>
        </Fragment>
      </Router>
    </>
  );
}

export default App;
