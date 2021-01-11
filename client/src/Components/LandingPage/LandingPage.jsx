import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Background from "./Twirl__2.mp4";
import Iphone from "./iPhone.png";
import { Container, Row, Col } from "react-bootstrap";
import "./LandingPage.css";

const LandingPage = () => {
  const { user } = useSelector((state) => state.auth);
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
          <Col xs={6} className="Landing ">
            <h1>IPHONE 12 PRO MAX 5G LiDAR SCANNER </h1>
            {user === null || !user ? (
              <div className="butn">
                <Link to={"/login"}>
                  <button className="login-landing">LOGIN</button>
                </Link>
                <Link to={"/register"}>
                  <a href="# " class="blue-text ml-1 your-password-landing">
                    Don't have an account? Create one now.
                  </a>
                </Link>
              </div>
            ) : null}
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
