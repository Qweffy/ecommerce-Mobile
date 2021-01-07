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
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import dotenv from "dotenv";
import actions from "../../store/Actions/authactions.js";
import jwt from "jsonwebtoken";

dotenv.config();


function SignUp() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const { replace, push } = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
  /*   user && replace("/"); */
  }, []);
  return (
    <div style={{ maxWidth: "30rem", margin: "auto", marginTop: "4rem" }}>
      <Panel bordered header="Registrarse">
        <Form
          fluid
          onChange={(values) => setData(values)}
          onSubmit={async () => {
            setLoading(true);
            const { data: token } = await axios.post(
              `http://localhost:4000/auth/register`,
              data
            );
            window.localStorage.setItem("token", token);
            const user = jwt.decode(token);
            dispatch(actions.setUser(user));
            setLoading(false);
            replace("/me");
          }}
        >
          <FormGroup>
            <ControlLabel>Nombre</ControlLabel>
            <FormControl name="givenName" type="givenName" />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Apellido</ControlLabel>
            <FormControl name="familyName" type="givenName" />
          </FormGroup>
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
              <Button type="submit" appearance="primary" loading={loading}>
                Registrarse
              </Button>
              <Button type="button" onClick={() => push("login")}>
                Ya tengo cuenta
              </Button>
            </ButtonToolbar>
          </FormGroup>
        </Form>
      </Panel>
    </div>
  );
}

export default SignUp;
