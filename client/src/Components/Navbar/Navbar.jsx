import React from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBag,
  faCartArrowDown,
  faAtlas,
  faShoppingCart,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import Searchbar from "../Searchbar/Searchbar.js";
import { useSelector } from "react-redux";
import "./Navbar.css";

function BootstrapNavbar() {
  const { user } = useSelector((state) => state.auth)
  //console.log(user.isAdmin);  
  /* const isAdmin = true; */


if(user === undefined){
  return (
    <Container fluid>
      <Row >
        <Navbar collapseOnSelect expand="lg" className="p-2 nav">
          <Col xs={5}>
            <Navbar.Brand href="/" className="logo-div"></Navbar.Brand>
          </Col>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto infonav align">
              <Col xs={2} className="text-center">
                <Nav.Link href="/catalogue">
                  <FontAwesomeIcon icon={faShoppingBag} /> Catalogue
                  </Nav.Link>
              </Col>
              <Col xs={2} className="text-center">
                <Nav.Link href="/cart">
                  <FontAwesomeIcon icon={faShoppingCart} /> My Cart
                  </Nav.Link>
              </Col>
              <Col xs={2}>
                <Searchbar />
              </Col>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Row>
    </Container>
  );
}else {
  if (user.isAdmin) {
    return (
      <Container fluid>
        <Row>
          <Navbar collapseOnSelect expand="lg" className="p-2 nav">
            <Col xs={5}>
              <Navbar.Brand href="/" className="logo-div"></Navbar.Brand>
            </Col>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto infonav">
                <Col xs={2} className="text-center">
                  <Nav.Link href="/catalogue">
                    <FontAwesomeIcon icon={faShoppingBag} /> Catalogue
                </Nav.Link>
                </Col>
                <Col xs={2} className="text-center">
                  <Nav.Link href="/showProducts">
                    <FontAwesomeIcon icon={faCartArrowDown} /> My Products
                </Nav.Link>
                </Col>
                <Col xs={2} className="text-center">
                  <Nav.Link href="/showCategories">
                    <FontAwesomeIcon icon={faAtlas} /> My Categories
                </Nav.Link>
                </Col>
                <Col xs={2} className="text-center">
                  <Nav.Link href="/orders">
                    <FontAwesomeIcon icon={faTruck} /> All Orders
                </Nav.Link>
                </Col>
                <Col xs={2}>
                  <Searchbar />
                </Col>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Row>
      </Container>
    );
  } else {
      return (
        <Container fluid>
          <Row >
            <Navbar collapseOnSelect expand="lg" className="p-2 nav">
              <Col xs={5}>
                <Navbar.Brand href="/" className="logo-div"></Navbar.Brand>
              </Col>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto infonav align">
                  <div>
                    <ul class="dropdown">
                      <li><a href="#">Welcome {user.givenName}!</a>
                        <ul>
                          <li><a href="/me">My profile</a></li>
                          <li><a href="#">Log out</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <Col xs={2} className="text-center">
                    <Nav.Link href="/catalogue">
                      <FontAwesomeIcon icon={faShoppingBag} /> Catalogue
                      </Nav.Link>
                  </Col>
                  <Col xs={2} className="text-center">
                    <Nav.Link href="/cart">
                      <FontAwesomeIcon icon={faShoppingCart} /> My Cart
                      </Nav.Link>
                  </Col>
                  <Col xs={2}>
                    <Searchbar />
                  </Col>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Row>
        </Container>
      );
  }
}

}

export default BootstrapNavbar;
