import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import actions from "../../store/Actions/authactions.js";
import jwt from "jsonwebtoken";
import { Link } from "react-router-dom";
import Background from "../LandingPage/Twirl__2.mp4";
import { Modal, TextField, Button } from "@material-ui/core";

export function validate(input) {
  let errors = {};
  if (!input.email) {
    errors.email = "Mail is required";
  } else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(input.email)) {
    errors.email = "Mail is invalid";
  }
  if (!input.password) {
    errors.password = "Password is required";
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = "Password is invalid";
  }
  return errors;
}

function SignUp({ handleCloseUp, handleOpen }) {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const { replace, push } = useHistory();
  const dispatch = useDispatch();
  const [errors, setErrors] = React.useState({});
  const [input, setInput] = React.useState({
    email: "",
    password: "",
    givenName: "",
    familyName: "",
  });
  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };
  function responsive() {
    handleCloseUp();
    handleOpen();
  }
  return (
    <div class="background-login">
      <form
        class="all-login"
        style={{ maxWidth: "30rem", margin: "auto", marginTop: "4rem" }}
        onSubmit={async (e) => {
          e.preventDefault();
          setLoading(true);
          const { input: token } = await axios.post(
            `http://localhost:4000/auth/register`,
            input
          );
          window.localStorage.setItem("token", token);
          const user = jwt.decode(token);
          dispatch(actions.setUser(user));
          setLoading(false);
          replace("/me");
        }}
      >
        <div class=" login">
          <div class="modal-header text-center">
            <h3 class="modal-title w-100 dark-grey-text font-weight-bold">
              Sign Up
            </h3>
            <button type="button" class="close-login" onClick={handleCloseUp}>
              X
            </button>
          </div>

          <div class="modal-body mx-4">
            <div class=" login-user">
              <i class="fas fa-user fa-2x icon-email"></i>
              <input
                onChange={(e) => {
                  handleInputChange(e);
                }}
                type="text"
                name="givenName"
                placeholder="Name"
                className={` form-control validate border-login`}
              />
            </div>
            <div class=" login-user">
              <i class="fas fa-cat fa-2x icon-email"></i>
              <input
                onChange={(e) => {
                  handleInputChange(e);
                }}
                type="text"
                name="familyName"
                placeholder="Lastname"
                className={` form-control validate border-login`}
              />
            </div>
            <div class=" login-user">
              <i class="fas fa-envelope fa-2x icon-email"></i>
              <input
                onChange={(e) => {
                  handleInputChange(e);
                }}
                type="email"
                name="email"
                placeholder="Email"
                className={` form-control validate ${
                  errors.email && "danger"
                } border-login`}
              />
            </div>

            {errors.email && <p className="danger">{errors.email}</p>}

            <div class="login-user">
              <i class="fas fa-lock fa-2x icon-password"></i>
              <input
                onChange={(e) => {
                  handleInputChange(e);
                }}
                type="password"
                name="password"
                placeholder="Password"
                className={`form-control validate ${
                  errors.password && "danger"
                } border-login`}
              />
            </div>
            {errors.password && <p className="danger">{errors.password}</p>}
            <p class="font-small blue-text d-flex justify-content-end forgot">
              Forgot
              <a href="#" class="blue-text ml-1 your-password">
                Password?
              </a>
            </p>

            <div class="text-center mb-3">
              <button type="submit" class="btn btn-primary z-depth-1a sign-in">
                Register
              </button>
              <a
                href="# "
                class="blue-text ml-1 your-password"
                onClick={responsive}
              >
                Already have an account? Click here!
              </a>
            </div>
            <p class="font-small dark-grey-text d-flex justify-content-center">
              or sign in with:
            </p>

            <div class="text-center mb-3">
              {/* <button type="button" class="btn btn-primary z-depth-1a sign-fb">
                <i class="fab fa-facebook-f text-center"></i>
              </button> */}
              <button type="button" class="btn btn-danger z-depth-1a sign-go">
                <i class="fab fa-google-plus-g text-center"></i>
              </button>
              <button type="button" class="btn btn-dark z-depth-1a sign-git">
                <i class="fab fa-github text-center"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

// <Button type="button" onClick={() => push("login")}>
//   Ya tengo cuenta
// </Button>

export default SignUp;
