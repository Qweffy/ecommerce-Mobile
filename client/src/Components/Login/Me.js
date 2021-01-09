import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Avatar, Button, Message, Panel } from "rsuite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBasket,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import actions from "../../store/Actions/authactions.js";
import './Css/me.css'

function App() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { replace } = useHistory();
  return (
    <div className="count">
      <div className="bar-left">
        <span>Mi Cuenta</span>
        <div className='count-option'>
          <span className='option-hover'></span>
          <FontAwesomeIcon icon={faShoppingBasket } />
          <span>Compras</span>
          <div><FontAwesomeIcon icon={faChevronRight } /></div>
        </div>
      </div>
      <div className='user-me'>
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
                        replace("/");
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
    </div>
  );
}

export default App;
