import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonToolbar,
  ControlLabel,
  Form,
  FormControl,
  FormGroup,
  Panel,
} from "rsuite";
import {  useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import dotenv from "dotenv";
import actions from "../../store/Actions/authactions.js";
import jwt from "jsonwebtoken";

dotenv.config();


function SignIn() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const { replace, push } = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
  /*   user && replace("/"); */
  }, []);
  return (
    <div style={{ maxWidth: "30rem", margin: "auto", marginTop: "4rem" }}>
      <Panel bordered header="Iniciar sesión">
        <Form
          fluid
          onChange={(values) => setData(values)}
          onSubmit={async () => {
            setLoading(true);
            const { data: token } = await axios.post(
              `http://localhost:4000/auth/login`,
              data
            );
            window.localStorage.setItem("token", token);
            const user = jwt.decode(token);
            dispatch(actions.setUser(user));
            setLoading(false);
            replace("/");
          }}
        >
          <FormGroup>
            <ControlLabel>Email</ControlLabel>
            <FormControl name="email" type="email" />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Password</ControlLabel>
            <FormControl name="password" type="password" />
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
      </Panel>
    </div>
  );
}

export default SignIn;
