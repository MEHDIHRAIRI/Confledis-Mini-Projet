import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MaterialTable from "material-table";
import { FormControl, Button, Form, Nav, Navbar } from "react-bootstrap";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Confledis</Navbar.Brand>
        <Nav className="mr-auto" style={{ paddingLeft: "50px" }}>
          <Nav.Link href="/admin">Admin</Nav.Link>
          <Nav.Link href="/client">Client</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default NavBar;
