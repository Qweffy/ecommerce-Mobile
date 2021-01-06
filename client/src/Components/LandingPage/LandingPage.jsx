import React, { useEffect, useState } from "react";
import axios from "axios";
import Background from "./Twirl__2.mp4";
import Iphone from "./iPhone.png";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./LandingPage.css";

const LandingPage = () => {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    let response = await axios.get("http://localhost:4000/products/");
    setProducts(response.data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <video
        autoPlay
        muted
        loop
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={Background} type="video/mp4" />
      </video>
      <Container className="container">
        <Row>
          <Col xs={6} className="Landing">
            <h1>ACÁ VA UN TITULO BIEN LLAMATIVO</h1>
            <Button>INGRESAR</Button>
          </Col>
          <Col xs={6} className="iphone">
            <img src={Iphone} type="image/png" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
