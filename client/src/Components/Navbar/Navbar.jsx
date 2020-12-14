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

function BootstrapNavbar({ onSearch }) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        SellPhones
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/catalogue">
            <FontAwesomeIcon icon={faShoppingBag} /> Catalogue
          </Nav.Link>
          <NavDropdown title="Panel Admin" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/showProducts">
              CRUD PRODUCTO
            </NavDropdown.Item>
            <NavDropdown.Item href="/showCategories">
              CRUD CATEGORIA
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <Searchbar onSearch={onSearch} />
    </Navbar>
  );
}

export default BootstrapNavbar;
