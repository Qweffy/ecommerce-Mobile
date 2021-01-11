import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Background from "./Twirl__2.mp4";
import Iphone from "./iPhone.png";
import { Container, Row, Col } from "react-bootstrap";
import "./LandingPage.css";

const LandingPage = () => {

  return (
    <div>
      {/* <video
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
      </video> */}
      <Container className="container">
        <Row>
          <Col xs={6} className="Landing ">
            <h1>IPHONE 12 PRO MAX 5G LiDAR SCANNER </h1>
            <div className="butn">
              <Link to={"/login"}>
                <button className="login-landing">LOGIN</button>
              </Link>
              <Link to={"/register"}>
<<<<<<< HEAD
                <a href="# " class="blue-text ml-1 your-password-landing">
                  Don't have an account? Create one now.
                </a>
=======
                <button className="login-landing">Register</button>
>>>>>>> 0161c621bae7865055d9b46a6b36145c0b4512a2
              </Link>
            </div>
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
