import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Avatar, Button, Message, Panel } from "rsuite";
import actions from "../../store/Actions/authactions.js";

function App() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { replace } = useHistory();
  return (
    <div style={{ maxWidth: "30rem", margin: "auto", marginTop: "4rem" }}>
      {user && (
        <Panel bordered header={`Hola, ${user.givenName}`}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: "1rem",
            }}
          >
            <Avatar
              circle
              size="lg"
              src={user.photoURL || "https://hajiri.co/uploads/no_image.jpg"}
            />

            <Message
              type="info"
              title={`${user.givenName} ${user.familyName}`}
              description={
                <p>
                  {user.email}
                  <br />
                  <br />
                  <Button
                    appearance="primary"
                    onClick={() => {
                      dispatch(actions.setUser(null));
                      window.localStorage.removeItem("token");
                      replace("/signin");
                    }}
                  >
                    Salir
                  </Button>
                </p>
              }
            />
          </div>
        </Panel>
      )}
    </div>
  );
}

export default App;
