import React, { useState, useRef } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faUserCog } from "@fortawesome/free-solid-svg-icons";
import Searchbar from "../Searchbar/Searchbar.js";


function BootstrapNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <img
          alt=""
          src="/logo.png"
          width="120"
          height="120"
          className="d-inline-block align-top"
        />{" "}

      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/catalogue">
            <FontAwesomeIcon icon={faShoppingBag} /> Catalogue
          </Nav.Link>
            <Nav.Link href="/showProducts">
                My Products
            </Nav.Link>
            <Nav.Link href="/showCategories">
              My Categories
            </Nav.Link>
          {/* <NavDropdown title="Panel Admin" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/showProducts">
              CRUD PRODUCTO
            </NavDropdown.Item>
            <NavDropdown.Item href="/showCategories">
              CRUD CATEGORIA
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
      <Searchbar />
    </Navbar>
  );
}

export default BootstrapNavbar;
