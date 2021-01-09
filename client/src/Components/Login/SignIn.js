import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import actions from "../../store/Actions/authactions.js";
import jwt from "jsonwebtoken";
import "./Css/signIn.css";

export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = "Username is required";
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = "Username is invalid";
  }
  if (!input.password) {
    errors.password = "Password is required";
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = "Password is invalid";
  }
  return errors;
}

function SignIn() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const { replace, push } = useHistory();
  const dispatch = useDispatch();
  const [input, setInput] = React.useState({
    username: "",
    password: "",
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
  const [errors, setErrors] = React.useState({});
  useEffect(() => {
    /*   user && replace("/"); */
  }, []);
  return (
    <form
      style={{ maxWidth: "30rem", margin: "auto", marginTop: "4rem" }}
      onSubmit={async (e) => {
        e.preventDefault();
        console.log(input);
        setLoading(true);
        const { data: token } = await axios.post(
          `http://localhost:4000/auth/login`,
          input
        );
        window.localStorage.setItem("token", token);
        const user = jwt.decode(token);
        dispatch(actions.setUser(user));
        setLoading(false);
        replace("/");
      }}
    >
      <div class="modal-dialog">
        <div class="modal-content login">
          <div class="modal-header text-center">
            <h3 class="modal-title w-100 dark-grey-text font-weight-bold">
              Sign In
            </h3>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-lable="close"
            >
              &times;
            </button>
          </div>

          <div class="modal-body mx-4">
            <div class="md-form">
              <input
                onChange={(e) => {
                  handleInputChange(e);
                }}
                type="email"
                name="email"
                className={` form-control validate ${
                  errors.username && "danger"
                }`}
              />
              {errors.username && <p className="danger">{errors.username}</p>}
              <label data-error="wrong" data-success="right">
                Your Email
              </label>
            </div>

            <div class="md-form">
              <input
                onChange={(e) => {
                  handleInputChange(e);
                }}
                type="password"
                name="password"
                className={`form-control validate ${
                  errors.password && "danger"
                }`}
              />
              {errors.password && <p className="danger">{errors.password}</p>}
              <label data-error="wrong" data-success="right">
                Your Password
              </label>
              <p class="font-small blue-text d-flex justify-content-end">
                Forgot
                <a href="#" class="blue-text ml-1">
                  Password?
                </a>
              </p>
            </div>

            <div class="text-center mb-3">
              <button
                type="submit"
                class="btn btn-primary btn-block z-depth-1a"
              >
                Sign in
              </button>
            </div>
            <p class="font-small dark-grey-text d-flex justify-content-center">
              or sign in with:
            </p>

            <div class="row my-3 justify-content-center">
              <button type="button" class="btn btn-primary z-depth-1a">
                <i class="fab fa-facebook-f text-center"></i>
              </button>
              <button type="button" class="btn btn-purple z-depth-1a">
                <i class="fab fa-twitter text-center"></i>
              </button>
              <button type="button" class="btn btn-red z-depth-1a">
                <i class="fab fa-google-plus-g text-center"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <Panel bordered header="Iniciar sesión">
          <FormGroup>
            <ControlLabel>Email</ControlLabel>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Password</ControlLabel>
          </FormGroup>
          <FormGroup>
            <ButtonToolbar>
              <Button type="submit" appearance="primary">
                Login
              </Button>
              <Button type="button" onClick={() => push("register")}>
                Crearme una cuenta
              </Button>
            </ButtonToolbar>
          </FormGroup>
        </Form>
      </Panel> */}
    </form>
  );
}

export default SignIn;
