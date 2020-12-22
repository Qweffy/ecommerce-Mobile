import React from "react";
import {
  Navbar,
  Nav
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import Searchbar from "../Searchbar/Searchbar.js";
import "./Navbar.css";


function BootstrapNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='p-2 nav'>
      <Navbar.Brand href="/" className='logo-div'>
        <img
          alt=""
          src="/logo.png"
          className="logo"
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
          <Nav.Link href="/cart">
            My Cart
          </Nav.Link>
          <Nav.Link href="/orders">
            All Orders
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Searchbar />
    </Navbar>
  );
}

export default BootstrapNavbar;
