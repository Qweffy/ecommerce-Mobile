import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./CreateUser.css";

export default function CreateUser() {
  const [user, setUser] = useState({
    givenName: "",
    familyName: "",
    email: "",
    password: "",
    googleId:"",
    photoURL:"",
  });

  const history = useHistory();

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function handlerSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:4000/user", user).then((res) => {
      history.push("/");
      // modificar despues, llevar al login
    });
  }

  // el prevent default sirve para q no recargue la pagina con el primer post
  return (
    <div className="add-product-container">
      <form onSubmit={handlerSubmit} className="mx-5 my-4">
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">First name</label>
          <div className="col-sm-10">
            <input
              className="form-control m-1"
              placeholder="Insert first name"
              onChange={(e) => {
                handleChange(e);
              }}
              name="givenName"
              value={user.givenName}
              type="text"
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">lastname</label>
          <div className="col-sm-10">
            <input
              className="form-control m-1"
              placeholder="Insert last name"
              onChange={(e) => {
                handleChange(e);
              }}
              name="familyName"
              type="text"
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">E-mail</label>
          <div className="col-sm-10">
            <input
              className="form-control m-1"
              placeholder="Insert your mail"
              onChange={(e) => {
                handleChange(e);
              }}
              name="email"
              value={user.email}
              type="text"
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input
              className="form-control m-1"
              placeholder="Insert your password"
              onChange={(e) => {
                handleChange(e);
              }}
              name="password"
              type="password"
              required
            />
          </div>
        </div>
        <button type="submit" className="add-product-btn btn btn-primary my-4">
          Create user
        </button>
      </form>
    </div>
  );
}
