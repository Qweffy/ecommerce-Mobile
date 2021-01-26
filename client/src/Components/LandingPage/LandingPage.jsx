import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Background from "./Twirl__2.mp4";
import Iphone from "./iPhone.png";
import { Container, Row, Col } from "react-bootstrap";
import "./LandingPage.css";
import SignIn from "../Login/SignIn";
import SignUp from "../Login/SignUp";
import { Modal } from "@material-ui/core";

const LandingPage = () => {
  const { user } = useSelector((state) => state.auth);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [openUp, setOpenUp] = React.useState(false);

  const handleOpenUp = () => {
    setOpenUp(true);
  };

  const handleCloseUp = () => {
    setOpenUp(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <SignIn handleClose={handleClose} handleOpenUp={handleOpenUp} />
      </Modal>
      <Modal
        open={openUp}
        onClose={handleCloseUp}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <SignUp handleCloseUp={handleCloseUp} handleOpen={handleOpen} />
      </Modal>
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
                <button className="login-landing" onClick={handleOpen}>
                  LOGIN
                </button>
                <a
                  href="# "
                  class="blue-text ml-1 your-password-landing"
                  onClick={handleOpenUp}
                >
                  Don't have an account? Create one now.
                </a>
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
